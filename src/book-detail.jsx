import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function bookDetail({book}) {
	return !!book ? (
		<div className="book-detail">
			<h2>Book Detail</h2>
			{JSON.stringify(book)}
		</div>
	) : null
}
export default connect(
	state => ({
		book: state.bookDetail,
	})
)(bookDetail)
