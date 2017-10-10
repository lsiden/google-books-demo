import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectBookDetail } from 'actions'

const debug = require('debug')('google-books-demo:books-list')

function Authors({authors=['no author given']}) {
	return (
		<span className="authors">
			{authors.join(', ')}
		</span>
	)
}

function listItem({book, onSelectBook}) {
	return (
		<a href="javascript: void(0)" onClick={ev => onSelectBook(book) }>
			<Authors authors={book.authors} />
			<span className="title">&nbsp;- {book.title}</span>
		</a>
	)
}
const ListItem = connect(
	null,
	dispatch => ({
		onSelectBook: book => dispatch(selectBookDetail(book))
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
