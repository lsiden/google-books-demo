import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import BooksList from '../books-list'
import { getBooksFromApiResponse, } from '../search-results-helpers'
import apiResponse from '@fixture/query-response'
import { Actions } from '../actions'

configure({ adapter: new Adapter() })

const debug = require('debug')('google-books-demo:search-results-stats')
const books = getBooksFromApiResponse(apiResponse)

describe('SearchResultsStats', function() {
	let wrapper, store

	beforeEach(function() {
		store = configureStore()({ books })
		wrapper = mount(
			<Provider store={store}>
				<BooksList />
			</Provider>
		)
	})

	it('dispatches Actions.SELECT_BOOK when book item is clicked', function() {
		const bookAt = 3
		const book = wrapper.find('ul').childAt(bookAt)
		book.find('a').simulate('click')
		const actions = store.getActions()
		expect(actions).toHaveLength(1)
		expect(actions[0].type).toBe(Actions.SELECT_BOOK)
		expect(actions[0].selectedBook).toBe(books[bookAt])
	})
	it('dispatches Actions.SELECT_BOOK with null value when book item is clicked again', function() {
		const bookAt = 3
		const book = wrapper.find('ul').childAt(bookAt)
		book.find('a').simulate('click')
		setTimeout(function() {
			book.find('a').simulate('click')
			const actions = store.getActions()
			expect(actions).toHaveLength(2)
			expect(actions[1].type).toBe(Actions.SELECT_BOOK)
			expect(actions[1].selectedBook).toBeFalsy()
		}, 0)
	})
})
