import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({data}) => {
  const { name, images, id } = data;
  const navigate = useNavigate();
  return (
    <Card className='col-12 col-lg-3 my-3 m-lg-3'>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" onClick={() => navigate(`/detailgame/${id}`)}>Ver más...</Button>
      </Card.Body>
    </Card>
  )
};

export default ProductCard;
