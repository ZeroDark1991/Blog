import { combineReducers } from 'redux'

import homeList from './homeList'
import postList from './postList'

// 合并 reducer
// reducer 中返回 state， 最终存入store中
const reducer = combineReducers({ homeList, postList })

export default reducer