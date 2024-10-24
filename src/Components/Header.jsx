import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-book me-2"></i>
            Boot-Managemment
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
