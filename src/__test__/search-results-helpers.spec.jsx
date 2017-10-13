import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import _ from 'lodash'

import {
	getAuthorFrequency,
	getMostFreqAuthors,
	getEarliestPubDate,
	getLatestPubDate,
	getBooksFromApiResponse,
	bookAttrs,
} from '../search-results-helpers'
import apiResponseDickens from '@fixture/query-response-dickens'
import apiResponseGino from '@fixture/query-response-geno'
import apiResponseNoPubDate from '@fixture/query-response-noPubDate'
import apiResponseOnePubDate from '@fixture/query-response-onePubDate'
import apiResponseSmith from '@fixture/query-response-smith'

const debug = require('debug')('google-books-demo:search-results-helpers')
const booksDickens = getBooksFromApiResponse(apiResponseDickens)
const booksGino = getBooksFromApiResponse(apiResponseGino)
const booksNoPubDate = getBooksFromApiResponse(apiResponseNoPubDate)
const booksOnePubDate = getBooksFromApiResponse(apiResponseOnePubDate)
const booksSmith = getBooksFromApiResponse(apiResponseSmith)

describe('search-results-helpers', function() {
	describe('getBooksFromApiResponse', function() {
		it('returns only items of kind \'books#volume\'', function() {
			const expected = _.reduce(
				apiResponseDickens.items,
				(sum, vol) => sum + (vol.kind === 'books#volume' ? 1 : 0),
				0)
			expect(booksDickens).toHaveLength(expected)
		})
		it('returns array of { ...bookAttrs } ', function() {
			booksDickens.forEach(book => {
				bookAttrs.forEach(attr => {
					expect(book).toHaveProperty(attr)
				})
			})
		})
	})
	describe('getAuthorFrequency', function() {
		it('returns a lookup of number of appearances by author', function() {
			const authorFreq = getAuthorFrequency(booksDickens)
			expect(_.toArray(authorFreq)).toHaveLength(2)
		})
	})
	describe('getMostFreqAuthors', function() {
		it('returns {authors: [], frequency } for author that appears most frequently in search result', function() {
			const expected = {
				authors: ['Charles Dickens'],
				frequency: 9,
			}
			expect(getMostFreqAuthors(booksDickens)).toEqual(expected)
		})
		it('returns an array when more than one author appears most frequently', function() {
			const mostFreqAuthors = getMostFreqAuthors(booksSmith)
			expect(mostFreqAuthors.authors.length).toBeGreaterThan(1)
			expect(mostFreqAuthors.frequency).toBe(1)
		})
	})
	describe('getEarliestPubDate', function() {
		it('returns earliest publication date from search results', function() {
			expect(getEarliestPubDate(booksDickens)).toBe('1866')
		})
	})
	describe('getLatestPubDate', function() {
		it('returns earliest publication date from search results', function() {
			expect(getLatestPubDate(booksDickens)).toBe('2014')
		})
	})
	describe('handles unconventional or missing published dates', function() {
		it ('returns earliest published date', function() {
			expect(getEarliestPubDate(booksGino)).toBe('1946')
		})

		it ('returns latest published date', function() {
			expect(getLatestPubDate(booksGino)).toBe('2008')
		})
		it ('returns \'not available\' when there are no published dates', function() {
			expect(getEarliestPubDate(booksNoPubDate)).toBe('not available')
			expect(getLatestPubDate(booksNoPubDate)).toBe('not available')
		})
		it ('returns publishedDate when only one is valid', function() {
			expect(getLatestPubDate(booksOnePubDate)).toBe('2008')
		})
	})
})
