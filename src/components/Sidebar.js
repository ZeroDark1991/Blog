import React from 'react'
import { Link } from 'react-router'

export default class Sidebar extends React.Component {
  render(){
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4" style={{
        backgroundImage: 'url("http://ogqthszx1.bkt.clouddn.com/kids_blur.png")',
        backgroundPosition: 'center top'
      }}>
        <div className="header">
          <h1 className="brand-title">
            <Link to='/' style={{ color: '#fff' }}>Digital Unit</Link>
          </h1>
          <h2 className="brand-tagline">Keep Curious</h2>

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
    )
  }
}