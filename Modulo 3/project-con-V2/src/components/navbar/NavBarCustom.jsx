import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBarCustom = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to='/login'>Ir al login</Link>
          </Navbar.Text>
          <Link className='btn btn-success mx-2' to='/login'>Ir al login</Link>
          <Link className='btn btn-success mx-2' to='/register'>Ir al registro</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarCustom
