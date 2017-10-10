import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BookReference from 'book-reference'
import {
	getMostFreqAuthor,
	getEarliestPubDate,
	getLatestPubDate,
} from 'search-results-helpers'

const debug = require('debug')('google-books-demo:search-results-stats')

function searchResultsStats({books, millisec}) {
	if (!books) {
		return null
	}
	const mostFrequentAuthor = getMostFreqAuthor(books)
	const earliestPubDate = getEarliestPubDate(books)
	const latestPubDate = getLatestPubDate(books)
	return (
		<div className="search-results-stats">
			<h2>Search Results Statistics</h2>
			{
				books.length === 0 ? <ul>
					<li>No books found matching search.</li>
					<li>Response time: 0ms</li>
				</ul> : <ul>
					<li>Number of books found: {books.length}</li>
					<li>Most frequent author in results: {mostFrequentAuthor.author} appears {mostFrequentAuthor.frequency} out of {books.length} times</li>
					<li>Earliest publication date: {earliestPubDate}</li>
					<li>Latest publication date: {latestPubDate}</li>
					<li>Response time: 0ms</li>
				</ul>
			}
		</div>
	)
}
export default connect(
	state => ({
		books: state.books,
	})
)(searchResultsStats)
