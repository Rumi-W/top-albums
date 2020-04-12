import { FETCH_ALBUMS_START, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILED } from '../actions/actionTypes'

const initState = {
  pending: false,
  success: false,
  items: []
}

export default (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_ALBUMS_START:
      return { ...state, pending: true }

    case FETCH_ALBUMS_SUCCESS:
      return { pending: false, success: true, items: action.albums }

    case FETCH_ALBUMS_FAILED:
      return { pending: false, success: false, items: [] }

    default:
      return state
  }
}
