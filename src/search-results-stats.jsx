import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import BookReference from 'book-reference'

const debug = require('debug')('google-books-demo:search-results-stats')

function searchResultsStats({books, millisec}) {
	if (!books) {
		return null
	}
	const authorAppeared = {}

	books.filter(book => !!book.authors).forEach(book => {
		book.authors.forEach(author => {
			if (!authorAppeared[author]) {
				authorAppeared[author] = 1
			} else {
				authorAppeared[author] += 1
			}
		})
	})
	const authorsSortedByFrequency = _.keys(authorAppeared).sort(
		(a, b) => authorAppeared[b] - authorAppeared[a]
	)
	const mostFrequentAuthor = _.first(authorsSortedByFrequency)
	const earliestPubDate = _.minBy(books, book => Number(book.publishedDate)).publishedDate
	const latestPubDate = _.maxBy(books, book => Number(book.publishedDate)).publishedDate
	return (
		<div className="search-results-stats">
			<h2>Search Results Statistics</h2>
			{
				books.length === 0 ? <ul>
					<li>No books found matching search.</li>
					<li>Response time: 0ms</li>
				</ul> : <ul>
					<li>Number of books found: {books.length}</li>
					<li>Most frequent author in results: {mostFrequentAuthor} appears {authorAppeared[mostFrequentAuthor]} out of {books.length} times</li>
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
