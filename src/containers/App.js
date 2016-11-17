/*
 全局容器 通过connect将注入 dispatch 和 state 到其默认的 connect(select)(App) 中
 bindActionCreators 将actions解构到props中，
 并移除props中的dispatch

 任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容。
 connect() 的唯一参数是 selector。此方法可以从 Redux store 接收到全局的 state，然后返回组件中需要的 props。
 最简单的情况下，可以返回一个初始的 state （例如，返回认证方法），但最好先将其进行转化。
 转换： mapStateToProps
*/

import React from 'react'
import { bindActionCreators }from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Main from '../components/Main'

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。

const mapStateToProps = (state) => {
  return {
    homeList: state.homeList,
    postList: state.postList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App