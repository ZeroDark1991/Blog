import React from 'react'
import config from 'config'
const agent = config.agent

let yeomanImage = require('../images/yeoman.png')

class Home extends React.Component {
  constructor(props) {
    super(props)

    agent
    .get('/api/posts')
    .then(data => {
      console.log(data)
    })
    .catch(e => {
      console.log(data)
    })
  }

  render(){
    return (
        <div>
            <img src={yeomanImage} alt="Yeoman Generator" />
            <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
            <div>FOR TEST</div>
        </div>
    )
  }
}

export default Home