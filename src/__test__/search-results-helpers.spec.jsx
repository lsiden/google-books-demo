import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import _ from 'lodash'

import {
	getAuthorFrequency,
	getMostFreqAuthor,
	getEarliestPubDate,
	getLatestPubDate,
	getBooksFromApiResponse,
	bookAttrs,
} from '../search-results-helpers'
import apiResponse from '@fixture/query-response'

const debug = require('debug')('google-books-demo:search-results-helpers')
const books = getBooksFromApiResponse(apiResponse)

describe('search-results-helpers', function() {
	describe('getBooksFromApiResponse', function() {
		it('returns only items of kind \'books#volume\'', function() {
			const expected = _.reduce(
				apiResponse.items,
				(sum, vol) => sum + (vol.kind === 'books#volume' ? 1 : 0),
				0)
			expect(books).toHaveLength(expected)
		})
		it('returns array of { ...bookAttrs } ', function() {
			books.forEach(book => {
				bookAttrs.forEach(attr => {
					expect(book).toHaveProperty(attr)
				})
			})
		})
	})
	describe('getAuthorFrequency', function() {
		it('returns a lookup of number of appearances by author', function() {
			const authorFreq = getAuthorFrequency(books)
			expect(_.toArray(authorFreq)).toHaveLength(2)
		})
	})
	describe('getMostFreqAuthor', function() {
		it('returns {author, freq} for author that appears most frequently in search result', function() {
			const expected = {
				author: 'Charles Dickens',
				frequency: 9,
			}
			expect(getMostFreqAuthor(books)).toEqual(expected)
		})
		// TODO
		it('returns an array when more than one author appears most frequently')
	})
	describe('getEarliestPubDate', function() {
		it('returns earliest publication date from search results', function() {
			expect(getEarliestPubDate(books)).toBe('1866')
		})
	})
	describe('getLatestPubDate', function() {
		it('returns earliest publication date from search results', function() {
			expect(getLatestPubDate(books)).toBe('2014')
		})
	})
})
