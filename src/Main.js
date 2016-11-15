require('styles/common.css')
require('styles/App.css')


import React from 'react'
import { Link } from 'react-router'

class AppComponent extends React.Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <h1 className="brand-title"><Link to='/' style={{ color: '#fff' }}>A Sample Blog</Link></h1>
                <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="pure-button" href="http://purecss.io">Pure</a>
                        </li>
                        <li className="nav-item">
                            <a className="pure-button" href="http://yuilibrary.com">YUI Library</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent
