import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const CardCharacter = ({data}) => {
  const { nombre, edad, genero, img } = data;
  const [componentStyle, setComponentStyle] = useState({
    cardDark: edad > 30 ? 'bg-danger' : '',
  });

  const changeStyle = () => {
    setComponentStyle({cardDark: 'bg-dark text-white'})
  }

  useEffect(() => {
    console.log('Se ejecuto el useEffect');
  }, [componentStyle])

  return (
    <Card className={`${componentStyle.cardDark} m-5`} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Genero: {genero}
          Edad: {edad}
        </Card.Text>
        <Button variant="primary" onClick={() => changeStyle()}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CardCharacter
