#!/usr/bin/env node

const path=require('path')
const fs=require('fs-extra')
const {exec} = require('child_process')
const ghPagesPath = './gh-pages'

function toPromise(func) {
    return function() {
        const args = [].slice.call(arguments)
        return new Promise(function(resolve, reject) {
            args.push(function(err) {
                err && reject() || resolve()
            })
            func.apply(null, args)
        })
    }
}

(function(dest) {
    fs.remove(dest)
    .then(function() {
        return fs.mkdir(dest)
    }).then(function() {
        return Promise.all([
            fs.copy('dist', path.join(dest, 'dist')),
            fs.copy('./index.html', path.join(dest, 'index.html')),
            fs.copy('./bookshelf.jpg', path.join(dest, 'bookshelf.jpg')),
            toPromise(exec)('yarn babel index.jsx -o ' + path.join(dest, 'index.js')),
        ])
    }).catch(function(err) {
        console.error(err)
    })
})(ghPagesPath)
