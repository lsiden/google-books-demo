import _ from 'lodash'

export const bookAttrDefaults = {
	title: '',
	authors: [],
	publishedDate: '',
	description: '',
}

const debug = require('debug')('google-books-demo:search-results-helpers')

export const bookAttrs = _.keys(bookAttrDefaults)

export function getAuthorFrequency(books) {
	if (!books || books.length === 0) {
		return {}
	}
	const result = {}
	_.flatten(books.map(book => book.authors || []))
	.forEach(author => {
		if (!result[author]) {
			result[author] = 0
		}
		result[author] += 1
	})
	return result
}

export function getMostFreqAuthor(books) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	const authorFreq = getAuthorFrequency(books)
	const arAuthorFreq = _.map(authorFreq, (frequency, author) => ({ frequency, author }))
	return _.maxBy(arAuthorFreq, item => {
		return item.frequency
	})
}

export function getEarliestPubDate(books) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	return _.minBy(books, book => Number(book.publishedDate)).publishedDate || 'not available'
}

export function getLatestPubDate(books) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	return _.maxBy(books, book => Number(book.publishedDate)).publishedDate || 'not available'
}

export function getPropOrDefault(obj, prop, defaultValue) {
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
