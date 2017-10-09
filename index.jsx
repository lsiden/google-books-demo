import React from 'react'
import ReactDom from 'react-dom'

function GoogleBookDemo() {
	return (
		<div>
			Stuff goes here
		</div>
	)
}

(function mountDemo() {
    const el = document.getElementById('demo-mountpoint')

    if (el) {
        ReactDOM.render(<GoogleBookDemo />, el)
    }
})()
