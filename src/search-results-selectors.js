import { createSelector } from 'reselect'

import {
	getMostFreqAuthors,
	getEarliestPubDate,
	getLatestPubDate,
} from 'search-results-helpers'

const debug = require('debug')('google-books-demo:search-results-selectors')

export function booksFound(state) {
	return state.books
}

export function responseTime(state) {
	return state.responseTime
}

export const mostFreqAuthors = createSelector(
	booksFound,
	getMostFreqAuthors
)

export const earliestPubDate = createSelector(
	booksFound,
	getEarliestPubDate
)

export const latestPubDate = createSelector(
	booksFound,
	getLatestPubDate
)
