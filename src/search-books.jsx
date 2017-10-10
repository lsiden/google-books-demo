import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getBooksFromApiResponse } from './search-results-helpers'
import { queryPending, processQueryError, processQueryResponse } from './actions'
import apiKey from '../google-api-key'
import 'font-awesome/css/font-awesome.css'
import './search.css'

import responseFixture from '@fixture/query-response' // TODO replace this with API call

const debug = require('debug')('google-books-demo:search-books')
const ESC_KEY = 27
const ENTER_KEY = 13

class searchBooks extends React.Component {

	static propTypes = {
		submitQuery: PropTypes.func.isRequired,
		initQuery: PropTypes.string,
		limit: PropTypes.number,
		errorOccurred: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.string,
		]),
	};
	static defaultProps = {
		initQuery: '',
		errorOccurred: ''
	}

	constructor(props) {
		super(props)
		this.state = {
			query: props.initQuery,
			limit: props.limit,
		}
	}

	render() {
		// See https://codepen.io/huange/pen/rbqsD
		const { query,  } = this.state
		const { initQuery, limit, submitQuery, errorOccurred } = this.props
		let key=0
		return (
			<div className="search-books">
				<div className="search-wrap">
					<div className="search">
						<input
							type="text"
							name="query"
							className="searchTerm"
							value={initQuery}
							onChange={ev => this.onChange(ev)} value={query}
							placeholder="Title or Author"
						/>
						<button type="search" className="searchButton"
							onClick={ ev => submitQuery(query, limit) }
						>
							<span className="fa fa-search"></span>
						</button>
					</div>
					<div className="max-search-items">
						<label>Max Items&nbsp;
						<select name="limit" onChange={ev => submitQuery(query, ev.target.value)} value={limit}>
							{
								[10, 15, 20, 30, 40].map(limit => (
									<option key={++key} value={limit}>{limit}</option>
								))
							}
						</select>
						</label>
					</div>
				</div>
				{
					!!errorOccurred && <div className="error-message">{errorOccurred}</div>
				}
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

    componentDidMount() {
        document.addEventListener('keydown', ev => {
            if (ev.keyCode === ESC_KEY) {
                this.onCancel()
            } else if (ev.keyCode === ENTER_KEY) {
            	this.props.submitQuery(this.state.query)
            }
        })
    }
}

export default connect(
	state => ({
		limit: state.limit,
		errorOccurred: state.errorOccurred,
	}),
	dispatch => ({
		submitQuery: (query, limit=20) => {
			if (!query) {
				return
			}
		    const uri = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&q=intitle:${query}+inauthor:${query}&maxResults=${limit}`
		    const startTime = new Date()
		    fetch(uri).then(function(res) {
		    	const { status, type, statusText } = res
		    	if (res.status !== 200) {
		    		const errMsg = `An error occurred. status=${status}; type=${type}; statusText=${statusText}`
		    		const error = new Error(errMsg)
		    		error.response = res
		    		throw error
		    	}
		    	const endTime = new Date()
		    	res.json().then(function(json) {
			        const books = getBooksFromApiResponse(json)
			        dispatch(processQueryResponse(books, endTime - startTime))
		    	})
		    }).catch(function(err) {
		        debug(err)
		    	const endTime = new Date()
	    		dispatch(processQueryError(err.toString(), endTime - startTime))
		    })
			dispatch(queryPending())
		},
	})
)(searchBooks)
