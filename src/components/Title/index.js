import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 4em;
  color: #eeeee;
  text-align: center;
  margin-top: 3rem;
`

const StyledH4 = styled.h4`
  font-size: 2em;
  color: #eeeee;
  text-align: center;
  margin-top: 5rem;
`
const Title = () => {
  return (
    <Row>
      <Col sm={2}>
        <Link to="/">
          <StyledH4>Home</StyledH4>
        </Link>
      </Col>
      <Col style={{ padding: 0 }}>
        <StyledTitle>Top 100 Albums</StyledTitle>
      </Col>
      <Col sm={2} />
    </Row>
  )
}

export default Title
