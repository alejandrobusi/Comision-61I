import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { endPoints } from '../../utils/endPoints';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const DetailProd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const getGame = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${endPoints.products}/${id}`);
      console.log(data);
      setGame (data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(()=> {
    getGame();
  }, []);

  return (
    <Container>
      <Row>
        {isLoading
          ? <LoadingScreen />
          : game && (
              <>
                <h1 className='mt-3'>{game.name}</h1>
                <Col xs={12} lg={6} >
                <Carousel>
                  {game.images.map((imgGame, i) => {
                    if (i === 0) return;
                    return (
                      <Carousel.Item>
                        <img src={imgGame} alt={game.name} className='img-fluid' />
                      </Carousel.Item>
                    )
                  })}
                </Carousel>
                </Col>
                <Col xs={12} lg={6} className='mt-3'>
                  <h2>Descripción: {game.description}</h2>
                  <h3>Requerimientos minimos:</h3>
                  <ul>
                    <li>SO: {game.requirementsMin.so}</li>
                    <li>Procesador: {game.requirementsMin.processor}</li>
                    <li>Gracifa: {game.requirementsMin.graphics}</li>
                  </ul>
                  <Col className='d-flex justify-content-end'>
                    <Button onClick={() => navigate('/carrito')}>Comprar ${game.price}</Button>
                  </Col>
                </Col>
              </>
          )
        }
      </Row>
    </Container>
  )
}

export default DetailProd;
