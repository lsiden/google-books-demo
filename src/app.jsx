import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getBooksFromApiResponse } from './search-results-helpers'
import SearchBooks from 'search-books'
import BooksList from './books-list'
import SearchResultsStats from './search-results-stats'
import { listBooks } from './actions'

const debug = require('debug')('google-books-demo:book-browser')
const initSearchTerm = window.localStorage.getItem('initSearchTerm') || ''

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
				<SearchBooks initValue={initSearchTerm} limit={20} onResponse={this.onResponse} />
				<BooksList />
				<SearchResultsStats />
			</div>
		)
	}

	onResponse = (res) => {
		debug(res)
		const books = getBooksFromApiResponse(res)
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
