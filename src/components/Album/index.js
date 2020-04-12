import React from 'react'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

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

const Album = ({ album, num }) => {
  return (
    <Card style={{ margin: '0.5rem', width: `${album['im:image'][2].attributes.height}px` }}>
      <Card.Img variant="top" src={album['im:image'][2].label} />
      <Card.Body>
        <Card.Title>
          <StyledH4>{`${num}. ${album['im:name'].label}`}</StyledH4>
        </Card.Title>
        <Card.Text>
          <StyledSpan>{album['im:artist'].label}</StyledSpan>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Album
