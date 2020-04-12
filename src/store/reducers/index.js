import { combineReducers } from 'redux'
import albums from './albums'

const combinedReducers = combineReducers({
  albums
})

export default combinedReducers
