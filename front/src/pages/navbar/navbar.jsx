import React, { useState } from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function navbar(){
    return(
        <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="light" variant="light"> {/* Use o 'bg' e 'variant' para definir o estilo */}
      <Container fluid className="nav-container"> {/* Use 'fluid' para ocupar toda a largura */}
        <Navbar.Brand href="/home">Clean Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4 ">
            <Nav.Link href="/agendar">Agendar</Nav.Link>
            <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#darkMode">Dark Mode</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default navbar