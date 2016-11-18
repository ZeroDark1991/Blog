import React from 'react'
import { Link } from 'react-router'

export default class Sidebar extends React.Component {
  render(){
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4" style={{
        backgroundImage: 'url("http://ogqthszx1.bkt.clouddn.com/blog/assets/kids.png")',
        backgroundPosition: 'center top',
        backgroundSize: 'cover'
      }}>
        <div className="header">
          <h1 className="brand-title">
            <Link to='/'>Digital Unit</Link>
          </h1>
          <h2 className="brand-tagline">Keep Curious</h2>
        </div>
      </div>      
    )
  }
}