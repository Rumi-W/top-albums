import { SELECT_ALBUM, CLEAR_ALBUM_SELECTION } from '../actions/actionTypes'

const initState = {
  item: {},
  selected: false,
  method: null
}

export default (state = initState, action = {}) => {
  switch (action.type) {
    case SELECT_ALBUM:
      return { item: action.album, selected: action.selected, method: action.method }

    case CLEAR_ALBUM_SELECTION:
      return { ...initState }

    default:
      return state
  }
}
