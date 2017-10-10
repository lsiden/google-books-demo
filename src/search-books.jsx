import React from 'react'
import PropTypes from 'prop-types'

import responseFixture from '@fixture/query-response'

const debug = require('debug')('google-books-demo:book-browser')

export default class SearchBooks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			query: '',
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmitSearch = this.onSubmitSearch.bind(this)
	}
	static propTypes = {
		onResponse: PropTypes.func.isRequired,
		initVal: PropTypes.string,
		limit: PropTypes.number,
	};
	static defaultProps = {
		initVal: '',
		limit: 20,
	}

	render() {
		return (
			<form className="search-books" onSubmit={ev => { ev.preventDefault(); this.onSubmitSearch() }} >
				<label>
					Search
					&nbsp;<input type="text" name="query" onChange={this.onChange} value={this.state.query} placeholder="Title or Author" />
					<button type="submit">Submit</button>
				</label>
			</form>
		)
	}

	onChange = (ev) => {
		debug(ev)
		const { name, value } = ev.target
		this.setState({ [name]: value })
	}

	onSubmitSearch = (ev) => {
		debug(this.state.query)
		this.props.onResponse(responseFixture)
	}
}
