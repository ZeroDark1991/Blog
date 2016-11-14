require('normalize.css/normalize.css')
require('styles/App.css')
require('styles/common.css')

import React from 'react'
import { Link } from 'react-router'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ul>
        	<li><Link to='/about'>about</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent
