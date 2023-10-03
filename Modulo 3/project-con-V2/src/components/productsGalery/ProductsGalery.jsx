import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import axios from 'axios';
import { endPoints } from '../../utils/endPoints';
import ProductCard from '../productCard/ProductCard';


const ProductsGalery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(endPoints.products);
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='d-flex flex-wrap justify-content-center my-4'>
          {isLoading 
            ? <LoadingScreen/>
            : <>
                {
                  products.map((product, i) => {
                    return (
                      <ProductCard key={i} data={product}/>
                    )
                  })
                }
              </>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default ProductsGalery
