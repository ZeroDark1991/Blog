import React from 'react'
import { Link } from 'react-router'

import config from 'config'
const agent = config.agent

import HomePost from 'components/HomePost'

class Home extends React.Component {
  constructor(props) {
    super(props)
    if(this.props.homeList.length == 0){
      this.fetchBlogList()
    }
  }

  fetchBlogList() {
    let self = this
    console.info('  💻 💻 💻 💻    💻 💻 💻 💻\n        💻      💻\n      💻        💻 💻 💻 💻\n    💻          💻\n  💻            💻\n💻 💻 💻 💻      💻 💻 💻 💻')    
    agent
      .get('/api/posts')
      .then(data => {
        if(data.success){
          self.props.pushHomeList(data.data)
          console.log(data.data)
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  renderPosts(item, i) {
    let date = new Date(item.author.meta.createdAt)
    let time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    return <HomePost post={item} time={time} key={i} />
  }

  render() {
    return (
      <div className="content pure-u-1 pure-u-md-3-4">
        <div className="posts">
          <h1 className="content-subhead">Recent Posts</h1>
            { this.props.homeList.map(this.renderPosts) }
        </div>

        <div className="footer">
          <div className="pure-menu pure-menu-horizontal">
            <ul>
              <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">About</a></li>
              <li className="pure-menu-item"><a href="http://github.com/yahoo/pure/" className="pure-menu-link">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home