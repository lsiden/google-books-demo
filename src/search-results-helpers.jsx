import _ from 'lodash'

export const bookAttrDefaults = {
	title: '',
	authors: [],
	publishedDate: '',
	description: '',
}

const debug = require('debug')('google-books-demo:search-results-helpers')

export const bookAttrs = _.keys(bookAttrDefaults)

export function getAuthorFrequency(books=[]) {
	return _.flatten(books.map(book => book.authors)).reduce((result, author) => {
		result[author] = (result[author] || 0) + 1
		return result
	}, {})
}
export function selectAuthorFrequency(state={}) {
	return getAuthorFrequency(state.books)
}

// Returns [ { author, frequency }, ... ]
export function getMostFreqAuthors(books=[]) {
	if (books.length === 0) {
		return 'not available'
	}
	const authorFreq = getAuthorFrequency(books)
	const arAuthorFreq = _.map(authorFreq, (frequency, author) => ({ frequency, author }))
	const aMostFrequentAuthor = _.maxBy(arAuthorFreq, item => {
		return item.frequency
	})
	return {
		frequency: aMostFrequentAuthor.frequency,
		authors: arAuthorFreq.filter(item => item.frequency === aMostFrequentAuthor.frequency).map(item => item.author),
	}
}
export function selectMostFreqAuthors(state={}) {
	return getMostFreqAuthors(state.books)
}

function getPubDate(book={}) {
	const match = /\d+/.exec((book.publishedDate || '').trim())
	return match && match.length > 0 ? match[0] : undefined
}

export function getEarliestPubDate(books=[]) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	const booksWithPubDate = books.filter(book => !!getPubDate(book))
	const book = _.minBy(booksWithPubDate, book => getPubDate(book)) || {}
	return getPubDate(book) || 'not available'
}
export function selectEarliestPubDate(state={}) {
	return getEarliestPubDate(state.books)
}

export function getLatestPubDate(books=[]) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	const booksWithPubDate = books.filter(book => !!getPubDate(book))
	const book = _.maxBy(booksWithPubDate, book => getPubDate(book)) || {}
	return getPubDate(book) || 'not available'
}
export function selectLatestPubDate(state={}) {
	return getLatestPubDate(state.books)
}

export function getPropOrDefault(obj={}, prop, defaultValue=undefined) {
	return typeof obj !== 'undefined' && typeof obj[prop] !== 'undefined' ? obj[prop] : defaultValue
}

export function getBooksFromApiResponse(res) {
	return res.items ? res.items.filter(item => item.kind === 'books#volume')
	.map(item => {
		const vinfo = item.volumeInfo
		const book = {
			selfLink: item.selfLink,
		}
		bookAttrs.forEach(attr => {
			book[attr] = getPropOrDefault(vinfo, attr, bookAttrDefaults[attr])
		})
		return book
	}) : []
}
