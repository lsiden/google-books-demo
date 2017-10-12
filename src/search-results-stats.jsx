import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BookReference from 'book-reference'
import {
	getMostFreqAuthors,
	getEarliestPubDate,
	getLatestPubDate,
} from 'search-results-helpers'

const debug = require('debug')('google-books-demo:search-results-stats')

function mostFreqAuthorsText(freqAuthors, numBooks) {
	const { authors, frequency } = freqAuthors
	const authorsText = authors.join(', ')
	const isPlural = authors.length > 1
	const author_s = isPlural ? 'authors' : 'author'
	const appear_s = isPlural ? 'each appears' : 'appears'
	return `Most frequent ${author_s} in results: ${authorsText} ${appear_s} ${frequency} out of ${numBooks} times.`
}

function searchResultsStats({books, responseTime}) {
	if (!books) {
		return null
	}
	const freqAuthors = getMostFreqAuthors(books)
	const earliestPubDate = getEarliestPubDate(books)
	const latestPubDate = getLatestPubDate(books)
	return (
		<div className="search-results-stats">
			<h2>Search Results Statistics</h2>
			{
				books.length === 0 ? <ul>
					<li>No books found matching search.</li>
					<li>Response time: {responseTime}ms</li>
				</ul> : <ul>
					<li>Number of books found: {books.length}</li>
					<li>{mostFreqAuthorsText(freqAuthors, books.length)}</li>
					<li>Earliest publication date: {earliestPubDate}</li>
					<li>Latest publication date: {latestPubDate}</li>
					<li>Response time: {responseTime}ms</li>
				</ul>
			}
		</div>
	)
}
export default connect(
	state => ({
		books: state.books,
		responseTime: state.responseTime,
	})
)(searchResultsStats)
