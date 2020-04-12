import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { fetchTop100 } from '../../store/actions'
import Album from '../Album'

const Albums = () => {
  const pending = useSelector((state) => state.albums.pending)
  const success = useSelector((state) => state.albums.success)
  const albums = useSelector((state) => state.albums.items)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTop100())
  }, [dispatch])

  let contents
  if (pending) {
    contents = (
      <Spinner animation="border" role="status" style={{ marginTop: '2rem' }}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  } else if (!success || albums.length === 0) {
    contents = <h3 style={{ marginTop: '2rem' }}> Something went wrong.... Please try it later.</h3>
  } else {
    contents = albums.map((album, i) => <Album key={album.id.attributes['im:id']} num={i + 1} album={album} />)
  }

  console.log('rendering albums', albums)

  const renderAlbum = () => {}
  return <Row className="justify-content-center">{contents}</Row>
}

const propEqual = (prevProps, nextProps) => {
  return prevProps.albums === nextProps.albums
}

const MemorizedAlbums = memo(Albums, propEqual)
export default MemorizedAlbums
