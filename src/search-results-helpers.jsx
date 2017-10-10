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
	const authorFreq = getAuthorFrequency(books)
	const arAuthorFreq = _.map(authorFreq, (frequency, author) => ({ frequency, author }))
	return _.maxBy(arAuthorFreq, item => {
		debug(item)
		return item.frequency
	})
}

export function getEarliestPubDate(books) {
	return _.minBy(books, book => Number(book.publishedDate)).publishedDate
}

export function getLatestPubDate(books) {
	return _.maxBy(books, book => Number(book.publishedDate)).publishedDate
}

export function getPropOrDefault(obj, prop, defaultValue) {
	return typeof obj[prop] !== 'undefined' ? obj[prop] : defaultValue
}

export function getBooksFromApiResponse(res) {
	return res.items
	.filter(item => item.kind === 'books#volume')
	.map(item => {
		const vinfo = item.volumeInfo
		const book = {
			selfLink: item.selfLink,
		}
		bookAttrs.forEach(attr => {
			book[attr] = getPropOrDefault(vinfo, attr, bookAttrDefaults[attr])
		})
		return book
	})
}
