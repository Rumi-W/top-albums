import React, { useEffect, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { fetchTop100, findAlbum, clearAlbumSelection } from '../../store/actions'
import Album from '../Album'
import DropdownMenu from '../DropdownMenu'

const Albums = () => {
  const albums = useSelector((state) => state.albums)
  const selectedAlbum = useSelector((state) => state.selectedAlbum)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTop100())
  }, [dispatch])

  const handleOptionSelected = (option) => {
    const method = 'menu'
    dispatch(findAlbum(option, albums.items, method))
  }

  const handleCardClicked = (option) => {
    const method = 'click'
    dispatch(findAlbum(option, albums.items, method))
  }

  const handleClearSelection = useCallback(() => {
    dispatch(clearAlbumSelection())
  }, [dispatch])

  let contents
  if (!albums || !albums.success || albums.items.length === 0) {
    contents = <h3 style={{ marginTop: '2rem' }}> Something went wrong.... Please try it later.</h3>
  } else if (albums.pending) {
    contents = (
      <Spinner animation="border" role="status" style={{ marginTop: '2rem' }}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  } else {
    contents = (
      <Container>
        <Row className="mb-4">
          <Col lg={{ span: 5, offset: 7 }} md={{ span: 6, offset: 6 }} sm={12}>
            <DropdownMenu
              options={albums.titleList}
              handleOptionSelected={handleOptionSelected}
              handleClearSelection={handleClearSelection}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-wrap justify-content-center">
            {albums.items.map((album, i) => (
              <Album
                key={album.id.attributes['im:id']}
                num={i + 1}
                album={album}
                handleCardClicked={handleCardClicked}
                selected={
                  selectedAlbum.selected &&
                  album['im:name'].label === selectedAlbum.item['im:name'].label &&
                  album['im:artist'].label === selectedAlbum.item['im:artist'].label
                }
                selectMethod={selectedAlbum.method}
              />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }

  return <Row className="justify-content-center">{contents}</Row>
}

const propEqual = (prevProps, nextProps) => {
  return prevProps.albums === nextProps.albums && prevProps.selectedAlbum === nextProps.selectedAlbum
}

const MemorizedAlbums = memo(Albums, propEqual)
export default MemorizedAlbums
