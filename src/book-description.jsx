import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const debug = require('debug')('google-books-demo:book-description')

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
export default connect(
	state => ({
		selectedBook: state.selectedBook,
	})
)(bookDescription)
