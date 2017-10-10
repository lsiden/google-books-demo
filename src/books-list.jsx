import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectBook } from 'actions'

const debug = require('debug')('google-books-demo:books-list')

function Authors({authors=['no author given']}) {
	return (
		<span className="authors">
			{authors.join(', ')}
		</span>
	)
}

function bookDescription({book, selectedBook}) {
	return !!selectedBook && book === selectedBook ? (
		<div className="book-description">
			{book.description || 'No description given.'}
		</div>
	) : null
}
bookDescription.propTypes = {
	book: PropTypes.object.isRequired,
	selectedBook: PropTypes.object,
}
const BookDescription = connect(
	state => ({
		selectedBook: state.selectedBook,
	})
)(bookDescription)

function listItem({book, onSelectBook}) {
	return (
		<div>
			<a href="javascript: void(0)" onClick={ev => onSelectBook(book) }>
				<Authors authors={book.authors} />
				&nbsp;- <span className="title">{book.title}</span>
				&nbsp;- <span className="pubDate">pub. {book.publishedDate || 'date unknown'}</span>
			</a>
			<BookDescription book={book} />
		</div>
	)
}
const ListItem = connect(
	null,
	dispatch => ({
		onSelectBook: book => dispatch(selectBook(book))
	})
)(listItem)

export default function BooksList({books}) {
	let key=0
	const items = books.map(book => <li key={++key} ><ListItem book={book} /></li>)
	return books.length > 0 ? (
		<div className="books-list">
			<h2>Books Found</h2>
			<ul>{items}</ul>
		</div>
	) : null
}
BooksList.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object).isRequired,
}
