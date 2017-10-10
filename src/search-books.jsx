import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getBooksFromApiResponse } from './search-results-helpers'
import { listBooks } from './actions'
import 'font-awesome/css/font-awesome.css'
import './search.css'

import responseFixture from '@fixture/query-response' // TODO replace this with API call

const debug = require('debug')('google-books-demo:search-books')
const ESC_KEY = 27
const ENTER_KEY = 13

class searchBooks extends React.Component {

	static propTypes = {
		onApiResponse: PropTypes.func.isRequired,
		initVal: PropTypes.string,
		limit: PropTypes.number,
	};
	static defaultProps = {
		initVal: '',
		limit: 20,
	}

	constructor(props) {
		super(props)
		this.state = {
			query: '',
		}
	}

	render() {
		// See https://codepen.io/huange/pen/rbqsD
		return (
			<div className="search-wrap">
				<div className="search">
					<input type="text" name="query" className="searchTerm" onChange={ev => this.onChange(ev)} value={this.state.query} placeholder="Title or Author" />
					<button type="search" className="searchButton" onClick={ev => this.onSubmitSearch()} >
						<span className="fa fa-search"></span>
					</button>
				</div>
			</div>
		)
	}

	onCancel() {
		this.setState({ query: '' })
	}

	onChange(ev) {
		debug(ev)
		const { name, value } = ev.target
		this.setState({ [name]: value })
	}

	onSubmitSearch() {
		debug(this.state.query)
		this.props.onApiResponse(responseFixture)
	}

    componentDidMount() {
        document.addEventListener('keydown', ev => {
            if (ev.keyCode === ESC_KEY) {
                this.onCancel()
            } else if (ev.keyCode === ENTER_KEY) {
            	this.onSubmitSearch()
            }
        })
    }
}

export default connect(
	null,
	dispatch => ({
		onApiResponse: res => {
			debug(res)
			const books = getBooksFromApiResponse(res)
			dispatch(listBooks(books))
		}
	})
)(searchBooks)
