import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App';
import NotFound from './views/NotFound'
import Home from './views/Home'
import About from './views/About'
import Post from './views/Post'

export default (
  	<Route path= '/' component= { App } >
  		<IndexRoute component= { Home } />
  		<Route path= 'about' component= { About } />
  		<Route path= 'post/:postId' component= { Post } />
      
      <Route component= { NotFound } path= '*' />
  	</Route>
)