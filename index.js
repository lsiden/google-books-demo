'use strict';

require('whatwg-fetch');

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _developmentOnly = require('redux-devtools-extension/developmentOnly');

var _bookBrowser = require('./src/book-browser');

var _bookBrowser2 = _interopRequireDefault(_bookBrowser);

var _actions = require('./src/actions');

require('./src/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This should come first.
// See https://github.com/github/fetch
(function mountDemo() {
    var el = document.getElementById('demo-mountpoint');

    if (el) {
        var store = (0, _redux.createStore)(_actions.reduce, {}, (0, _developmentOnly.devToolsEnhancer)());
        _reactDom2.default.render(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_bookBrowser2.default, null)
        ), el);
    }
})();
