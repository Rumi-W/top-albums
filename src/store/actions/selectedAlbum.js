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

export const findAlbum = (option, albums, method) => (dispatch) => {
  const noResult = {}
  let results = []

  const options = option.split('---')
  const title = options[0].trim()
  const artist = options[1].trim()

  results = albums.filter((item) => title === item['im:name'].label && artist === item['im:artist'].label)

  if (results.length === 1) {
    dispatch(selectAlbum(results[0], true, method))
  } else {
    dispatch(selectAlbum(noResult, false))
  }
}
