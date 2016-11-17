import { combineReducers } from 'redux'

import homeList from './homeList'
import postList from './postList'

const reducer = combineReducers({ homeList, postList })

export default reducer