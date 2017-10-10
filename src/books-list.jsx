import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BookReference from 'book-reference'
import BookDescription from 'book-description'
import { selectBook } from 'actions'

const debug = require('debug')('google-books-demo:books-list')

function listItem({book, selectedBook, onSelectBook}) {
	const onSelectArg = book !== selectedBook ? book : null
	return (
		<div>
			<a href="javascript: void(0)" onClick={ev => onSelectBook(onSelectArg) }>
				<BookReference book={book} />
			</a>
			<BookDescription book={book} />
		</div>
	)
}
const ListItem = connect(
	state => ({
		selectedBook: state.selectedBook,
	}),
	dispatch => ({
		onSelectBook: book => dispatch(selectBook(book))
	})
)(listItem)

function booksList({books}) {
	let key=0
	const items = books.map(book => <li key={++key} ><ListItem book={book} /></li>)
	return !!books && books.length > 0 ? (
		<div className="books-list">
			<h2>Books Found</h2>
			<ul>{items}</ul>
		</div>
	) : null
}
booksList.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
}
booksList.defaultProps = {
	books: []
}
export default connect(
	state => ({
		books: state.books,
	})
)(booksList)
