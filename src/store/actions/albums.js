import axios from 'axios'
import { FETCH_ALBUMS_START, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILED } from './actionTypes'
import { top100URL } from './config'

const setAlbums = (albums) => ({
  type: FETCH_ALBUMS_SUCCESS,
  albums
})

const fetchFailed = () => ({
  type: FETCH_ALBUMS_FAILED
})

const fetchStarted = () => ({
  type: FETCH_ALBUMS_START
})

export const fetchTop100 = () => async (dispatch) => {
  console.log('fetching')
  dispatch(fetchStarted())
  try {
    const response = await axios.get(top100URL)
    if (response.status === 200) {
      console.log('response', response)
      dispatch(setAlbums(response.data.feed.entry))
    }
  } catch (error) {
    console.log('Error', Error)
    dispatch(fetchFailed())
  }
}
