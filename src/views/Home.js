import React from 'react'
import { Link } from 'react-router'

import config from 'config'
const agent = config.agent

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { blogList: [] }
    this.fetchBlogList()
    console.info('  💻 💻 💻 💻    💻 💻 💻 💻\n        💻      💻\n      💻        💻 💻 💻 💻\n    💻          💻\n  💻            💻\n💻 💻 💻 💻      💻 💻 💻 💻')
  }

  fetchBlogList(){
    let self = this
    agent
      .get('/api/posts')
      .then(data => {
        if(data.success){
          self.setState({
            blogList: data.data
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  render(){
    return (
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Recent Posts</h1>
              {
                this.state.blogList.map(item => {
                  let date = new Date(item.author.meta.createdAt)
                  let time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

                  return(
                    <section className="post" key={ item.title }>
                      <header className="post-header">
                        <h2 className="post-title"><Link to={'/post/'+item.id} style={{color: '#222'}}>{ item.title }</Link></h2>
                        <p className="post-meta">
                            By <a className="post-author" href="#">{ item.author.nickName } </a>
                            At {time}
                            {
                              item.tag
                              ? <span>under <a className="post-category post-category-js" href="#">{ item.tag }</a></span>
                              : null
                            }
                        </p>
                      </header>
                      <div className="post-description">
                        <p>{ item.description }</p>
                      </div>
                    </section>         
                  )
                })
              }

            <section className="post">
                <header className="post-header">
                    <h2 className="post-title">Everything You Need to Know About Grunt</h2>
                    <p className="post-meta">
                        By <a className="post-author" href="#">Eric Ferraiuolo</a> under <a className="post-category post-category-js" href="#">JavaScript</a>
                    </p>
                </header>
                <div className="post-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </section>

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
      </div>
    )
  }
}

export default Home