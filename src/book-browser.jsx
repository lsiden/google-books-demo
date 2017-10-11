import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import SearchBooks from 'search-books'
import BooksList from './books-list'
import SearchResultsStats from './search-results-stats'

const debug = require('debug')('google-books-demo:book-browser')
const initialQuery = window.localStorage.getItem('initialQuery') || ''
const limit = Number(window.localStorage.getItem('limit')) || 20

class bookBrowser extends React.Component {
	static propTypes = {
		books: PropTypes.arrayOf(PropTypes.object),
	}
	constructor(props) {
		super(props)
		this.state = {
			books: [],
		}
	}

	render() {
		return (
			<div className="books-browser">
				<SearchBooks initQuery={initialQuery} limit={limit} />
				<BooksList />
				<SearchResultsStats />
			</div>
		)
	}

    componentDidCatch = (error, info) => {
    	debug(error)
    	debug(info)
    }
}
export default connect(
	state => ({
		books: state.books,
	}),
)(bookBrowser)
