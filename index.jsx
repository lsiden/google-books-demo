// This should come first.
// See https://github.com/github/fetch
import 'whatwg-fetch'

import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'

import BookBrowser from './src'
import { reduce } from './src/actions'

(function mountDemo() {
    const el = document.getElementById('demo-mountpoint')

    if (el) {
    	const store = createStore(reduce, {
    		bookDetail: null,
    	}, devToolsEnhancer())
        ReactDom.render(<Provider store={store}>
        	<BookBrowser />
        </Provider>, el)
    }
})()
