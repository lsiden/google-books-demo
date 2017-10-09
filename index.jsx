// This should come first.
// See https://github.com/github/fetch
import 'whatwg-fetch'

import React from 'react'
import ReactDom from 'react-dom'

import BookBrowser from './src'

(function mountDemo() {
    const el = document.getElementById('demo-mountpoint')

    if (el) {
        ReactDom.render(<div><BookBrowser /></div>, el)
    }
})()
