import React from 'react'
import { Container } from 'react-bootstrap'
import Albums from '../Albums'
import Title from '../Title'

const Wrapper = () => {
  return (
    <Container className="fade-in">
      <Title />
      <Albums />
    </Container>
  )
}

export default Wrapper
