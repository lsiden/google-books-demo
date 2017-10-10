import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import SearchBooks from './search-books'
import BooksList from './books-list'
import BookDetail from './book-detail'

const debug = require('debug')('google-books-demo:book-browser')
const initValue = window.localStorage.getItem('initValue') || ''

export default class BookBrowser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
		}
	}

	render() {
		return (
			<div className="books-browser">
				<SearchBooks initValue={initValue} limit={20} onResponse={this.onResponse} />
				<BooksList books={this.state.books} />
				<BookDetail />
			</div>
		)
	}

	onResponse = (res) => {
		debug(res)
		const bookAttrs = ['title', 'authors', 'publishedDate', ]
		const books = res.items
			.filter(item => item.kind === 'books#volume')
			.map(item => ({
				..._.pick(item.volumeInfo, bookAttrs),
				selfLink: item.selfLink,
			}))
		this.setState({ books })
	}

    componentDidCatch = (error, info) => {
    	debug(error)
    	debug(info)
    }
}
