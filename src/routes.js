import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './Main';
import NotFound from './views/NotFound'
import Home from './views/Home'
import About from './views/About'

export default (
  	<Route path= '/' component= { App } >
  		<IndexRoute component= { Home } />
  		<Route path= 'about' component= { About } />
      
      <Route component= { NotFound } path= '*' />
  	</Route>
)