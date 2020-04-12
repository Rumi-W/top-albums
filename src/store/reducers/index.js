import { combineReducers } from 'redux'
import albums from './albums'
import selectedAlbum from './selectedAlbum'

const combinedReducers = combineReducers({
  albums,
  selectedAlbum
})

export default combinedReducers
