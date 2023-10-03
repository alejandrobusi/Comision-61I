import React, { useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

const NavbarCustom = (props) => {
  const { infoButton } = props;
  const [textNav, setTextNav] = useState('Rick And Morty');

  // useEffect(() => {
  //   setTextNav('tge');
  // }, [])

  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">{textNav}</Navbar.Brand>
          <Button variant='warning' onClick={() => {         
            setTextNav('Ale Busi')
          }}>{infoButton}</Button>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavbarCustom;
