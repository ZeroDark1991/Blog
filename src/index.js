import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from 'stores'
import routes from './routes'

// Render the main component into the dom
ReactDOM.render((
  <Provider store={store}>
    <Router routes= { routes } history= { browserHistory } />
  </Provider>
), document.getElementById('app'))