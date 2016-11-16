require('styles/common.css')
require('styles/App.css')


import React from 'react'
import Sidebar from 'components/Sidebar'

class AppComponent extends React.Component {
  render () {
    return (
      <div id="layout" className="pure-g">
				<Sidebar />
        { this.props.children }
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent
