import React from 'react'
import PropTypes from 'prop-types'

function Authors({authors=['no author given']}) {
	return (
		<span className="authors">
			{authors.join(', ')}
		</span>
	)
}

export default function BookReference({book}) {
	return (
		<span className="book-reference">
			<Authors authors={book.authors} />
			&nbsp;- <span className="title">{book.title}</span>
			&nbsp;- <span className="pubDate">pub. {book.publishedDate || 'date unknown'}</span>
		</span>
	)
}
BookReference.propTypes = {
	book: PropTypes.object.isRequired,
}
