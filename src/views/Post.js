import React from 'react'

import config from 'config'
const agent = config.agent

export default class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      post: {
        title: '',
        nickName: '',
        content: '',
        description: '',
        author: {
          meta: {
            createdAt: ''
          }
        }
      }
    }

    this.fetchPost()
  }

  fetchPost(){
    let self = this
    agent
      .get('/api/posts', { id: this.props.params.postId })
      .then(data => {
        if(data.success){
          console.log(data)
          self.setState({
            post: data.data[0]
          })
        }
      })
  }

  render() {
    let date, time, post = this.state.post
    if(post.author){
      date = new Date(post.author.meta.createdAt)
      time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    }

    return (
      <div className="content pure-u-1 pure-u-md-3-4">
        <header className="post-header">
          <h1 className="post-title">
            {post.title}
          </h1>
          <p className="post-meta">
              By <a className="post-author" href="#">{ post.author.nickName }</a>
              At {time}
          </p>          
        </header>
        <div dangerouslySetInnerHTML={{__html: post.content}}>
          
        </div>
      </div>
    )
  }
}