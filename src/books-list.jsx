import React from 'react'
import PropTypes from 'prop-types'

function Authors({authors=['no author given']}) {
	return (
		<span className="authors">
			{authors.join(', ')}
		</span>
	)
}

export default function BooksList({books}) {
	let key=0
	const items = books.map(book => <li key={++key} >
		<Authors authors={book.authors} />
		&nbsp;- {book.title}
	</li>)
	return books.length > 0 ? (
		<div className="books-list">
			<h2>Books Found</h2>
			<ul>
				{items}
			</ul>
		</div>
	) : null
}
BooksList.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object).isRequired,
}
