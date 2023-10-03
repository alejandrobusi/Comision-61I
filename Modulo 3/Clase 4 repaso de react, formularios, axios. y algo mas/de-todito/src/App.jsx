import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarCustom from "./components/navbar/NavbarCustom";
import { test } from './App.module.css';
import CardCustom from "./components/card/CardCustom";
import axios from "axios";


function App() {
  const [characters, setCharacters] = useState([]);
/*
  const getAllCharacters = async() => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await response.json()
      setCharacters(results);
    } catch (error) {
      console.log(error.message);
    }
  };
*/

  const getAllCharacters = async() => {
    try {
      const { data: {results} } = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(results);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllCharacters();
  }, []);
  
  const buttonText = 'El texto';
  return (
    <>
      <NavbarCustom infoButton={buttonText}/>
      <main className="mt-3">
        <Container>
          <Row className={`${test} rounded`}>
            <Col xs={12} className='d-flex flex-wrap justify-content-center'>
              {characters.map((char, i) => <CardCustom key={i} data={char} />)}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default App
