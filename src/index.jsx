import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import SearchBooks from './search-books'
import BooksList from './books-list'
import SearchResultsStats from './search-results-stats'
import { listBooks } from './actions'

const debug = require('debug')('google-books-demo:book-browser')
const initValue = window.localStorage.getItem('initValue') || ''

class bookBrowser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
		}
	}

	render() {
		return (
			<div className="books-browser">
				<SearchBooks initValue={initValue} limit={20} onResponse={this.onResponse} />
				<BooksList />
				<SearchResultsStats />
			</div>
		)
	}

	onResponse = (res) => {
		debug(res)
		const bookAttrs = ['title', 'authors', 'publishedDate', 'description' ]
		const books = res.items
			.filter(item => item.kind === 'books#volume')
			.map(item => ({
				..._.pick(item.volumeInfo, bookAttrs),
				selfLink: item.selfLink,
			}))
		this.setState({ books })
		this.props.listBooks(books)
	}

    componentDidCatch = (error, info) => {
    	debug(error)
    	debug(info)
    }
}
bookBrowser.propTypes = {
	listBooks: PropTypes.func.isRequired,
}
export default connect(
	null,
	dispatch => ({
		listBooks: books => dispatch(listBooks(books))
	})
)(bookBrowser)
