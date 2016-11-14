'use strict'

import Promise from 'promise-polyfill'
import setAsap from 'setAsap'
Promise._immediateFn = setAsap

import 'whatwg-fetch'

// Settings configured here will be merged into the final config object.
export default {
	agent: {
		get(url) {
			return fetch(url).then(res => res.json())
		},
		post(url, body) {
			fetch(url, {
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(body)
			})
			.then(res => res.json())		
		}
	}
}
