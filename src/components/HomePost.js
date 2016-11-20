import React from 'react'
import { Link } from 'react-router'

export default class HomeList extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    let item = this.props.post
    let time = this.props.time
    return (
      <section className="post">
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
  }
}