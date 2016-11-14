import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './Main';
import NotFound from './views/NotFound'
import Home from './views/Home'
import About from './views/About'

// Render the main component into the dom
ReactDOM.render((
  <Router history= { browserHistory } >
  	<Route path= '/' component= { App } >
  		<IndexRoute component= { Home } />
  		<Route path= 'about' component= { About } />
  	</Route>

    <Route component= { NotFound } path= '*' />
  </Router>
), document.getElementById('app'));