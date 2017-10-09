import React from 'react'
import PropTypes from 'prop-types'

import SearchBooks from './search-books'

const debug = require('debug')('google-books-demo:book-browser')
const initValue = window.localStorage.getItem('initValue') || ''

export default class BookBrowser extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<SearchBooks initValue={initValue} limit={20} onResponse={this.onResponse} />
			</div>
		)
	}

	onResponse = (res) => {
		debug(res)
	}

    componentDidCatch = (error, info) => {
    	debug(error)
    	debug(info)
    }
}
