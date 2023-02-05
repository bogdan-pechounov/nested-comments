'use client'

import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import SignInButton from './SignInButton'

export default function MyNavbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Readit</Navbar.Brand>
        <Nav>
          <SignInButton />
        </Nav>
      </Container>
    </Navbar>
  )
}
