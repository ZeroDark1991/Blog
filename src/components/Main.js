require('styles/common.css')
require('styles/App.css')

/*
*  { cloneElement({ ...this.props }.children, { ...this.props }) }
*   替代 { this.props.children } 以传递props中的state 和 actions
*/

import React, { cloneElement }from 'react'
import Sidebar from 'components/Sidebar'

class AppComponent extends React.Component {
  render () {
    return (
      <div id="layout" className="pure-g">
				<Sidebar />
        { cloneElement({ ...this.props }.children, { ...this.props }) }
      </div>
    )
  }
}

export default AppComponent
