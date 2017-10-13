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
	const isPlural = authors.length > 1
	return [
		`Most frequent ${isPlural ? 'authors' : 'author'} in results:`,
		` ${authors.join('; ')} ${isPlural ? 'each appear' : 'appears'}`,
		` ${frequency} out of ${numBooks} times.`
		].join('')
}

class searchResultsStats extends React.Component {
	static propTypes = {
		books: PropTypes.arrayOf(PropTypes.object),
		responseTime: PropTypes.PropTypes.number,
	}
	render() {
		const {books, responseTime} = this.props

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

    componentDidCatch = (error, info) => {
    	debug(error)
    	debug(info)
    }
}
export default connect(
	state => ({
		books: state.books,
		responseTime: state.responseTime,
	})
)(searchResultsStats)
