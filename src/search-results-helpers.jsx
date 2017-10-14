import _ from 'lodash'

const debug = require('debug')('google-books-demo:search-results-helpers')

const bookAttrDefaults = {
	volumeInfo: {
		title: 'no title given',
		authors: [],
		publishedDate: '',
		description: 'no description given',
	},
	selfLink: '',
}

export function getAuthorFrequency(books=[]) {
	return _.flatten(books.map(book => book.authors)).reduce((result, author) => {
		result[author] = (result[author] || 0) + 1
		return result
	}, {})
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

function getPubDate(book={}) {
	const match = /\d+/.exec((book.publishedDate || '').trim())
	return match && match.length > 0 ? match[0] : undefined
}

export function getEarliestPubDate(books=[]) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	const booksWithPubDate = books.filter(book => !!getPubDate(book)) || []
	const book = _.minBy(booksWithPubDate, book => getPubDate(book)) || {}
	return getPubDate(book) || 'not available'
}

export function getLatestPubDate(books=[]) {
	if (!books || books.length === 0) {
		return 'not available'
	}
	const booksWithPubDate = books.filter(book => !!getPubDate(book)) || []
	const book = _.maxBy(booksWithPubDate, book => getPubDate(book)) || {}
	return getPubDate(book) || 'not available'
}

function getBookFromVol({ volumeInfo={}, selfLink='' }) {
	return _.keys(bookAttrDefaults.volumeInfo).reduce((book, attr) => {
		book[attr] = volumeInfo[attr] || bookAttrDefaults.volumeInfo[attr]
		return book
	}, { selfLink })
}

export function getBooksFromApiResponse(res={}) {
	return res.items ? res.items
		.filter(item => item.kind === 'books#volume')
		.map(item => getBookFromVol(item))
	: []
}
