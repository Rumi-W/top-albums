import React, { useRef, useEffect, memo } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import './styles.css'

const StyledH4 = styled.h4`
  font-size: 1em;
  font-weight: 800;
  letter-spacing: 1px;
  color: #eeeee;
`
const StyledSpan = styled.span`
  font-size: 1.2em;
  color: #eeeee;
`
const StyledSpanSm = styled.span`
  font-size: 1em;
  color: #eeeee;
`

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Album = ({ album, num, selected, selectMethod, handleCardClicked }) => {
  const cardRef = useRef(null)
  const cardStyle = {
    margin: '0.5rem',
    width: `${album['im:image'][2].attributes.height}px`,
    height: `${album['im:image'][2].attributes.height * 1.9}px`
  }

  const styleGlow = {
    border: '#89e8e3 1px solid',
    WebkitBoxShadow: '0px 2px 20px 0px rgba(72,194,252,1)',
    MozBoxShadow: '0px 2px 20px 0px rgba(72,194,252,1)',
    boxShadow: '0px 2px 20px 0px rgba(72,194,252,1)'
  }

  useEffect(() => {
    if (selected && selectMethod === 'menu') {
      scrollToRef(cardRef)
    }
  }, [selected, selectMethod])

  const handleClick = () => {
    const option = `${album['im:name'].label} --- ${album['im:artist'].label}`
    handleCardClicked(option)
  }

  return (
    <Card
      className="card-album"
      ref={cardRef}
      style={selected ? { ...cardStyle, ...styleGlow } : cardStyle}
      onClick={handleClick}>
      <Card.Img variant="top" alt="Cover Image" title="Cover Image" src={album['im:image'][2].label} />
      <Card.Body>
        <Card.Title>
          <StyledH4>{`${num}. ${album['im:name'].label}`}</StyledH4>
        </Card.Title>
        <Card.Text>
          <StyledSpan>{album['im:artist'].label}</StyledSpan>
        </Card.Text>
      </Card.Body>
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          fontSize: '1.4rem'
        }}>
        <Card.Text>
          <StyledSpanSm>{album['im:price'].label}</StyledSpanSm>
        </Card.Text>
        <Card.Link className="link-more" target="_blank" title="More Info" href={album.link.attributes.href}>
          More
        </Card.Link>
      </Card.Body>
    </Card>
  )
}
const propEqual = (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected
}

const MemorizedAlbum = memo(Album, propEqual)
export default MemorizedAlbum
