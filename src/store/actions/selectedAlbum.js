import { SELECT_ALBUM, CLEAR_ALBUM_SELECTION } from './actionTypes'

const selectAlbum = (album, selected, method) => ({
  type: SELECT_ALBUM,
  album,
  selected,
  method
})

export const clearAlbumSelection = () => ({
  type: CLEAR_ALBUM_SELECTION
})

export const findAlbum = (title, albums, method) => (dispatch) => {
  const noResult = {}
  let results = []
  results = albums.filter((item) => title === item['im:name'].label)

  if (results.length === 1) {
    dispatch(selectAlbum(results[0], true, method))
  } else {
    dispatch(selectAlbum(noResult, false))
  }
}
