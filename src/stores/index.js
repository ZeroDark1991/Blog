/*
  通过 reducer 创建Store
*/
import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

export default store