import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 4em;
  color: #eeeee;
  text-align: center;
  margin-top: 3rem;
`
const Title = () => {
  return (
    <Row>
      <Col style={{ padding: 0 }}>
        <StyledTitle>Top 100 Albums</StyledTitle>
      </Col>
    </Row>
  )
}

export default Title
