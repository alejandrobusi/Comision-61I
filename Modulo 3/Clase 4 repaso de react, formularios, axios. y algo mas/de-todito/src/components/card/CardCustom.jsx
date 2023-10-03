import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardCustom = ({data}) => {
  const { name, image, gender } = data;
  return (
    <Card className='col-3 m-4'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Genero: {gender}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CardCustom
