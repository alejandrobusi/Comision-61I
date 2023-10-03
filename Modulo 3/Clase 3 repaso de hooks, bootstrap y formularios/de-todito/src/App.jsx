import { useState } from 'react';
import CardCharacter from './components/card/CardCharacter';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0)

  var personas = [
    {
      nombre: "Persona 1",
      edad: 25,
      genero: "Masculino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 2",
      edad: 30,
      genero: "Femenino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 3",
      edad: 22,
      genero: "Masculino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 4",
      edad: 28,
      genero: "Femenino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 5",
      edad: 35,
      genero: "Masculino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 6",
      edad: 29,
      genero: "Femenino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 7",
      edad: 23,
      genero: "Masculino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 8",
      edad: 27,
      genero: "Femenino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 9",
      edad: 31,
      genero: "Masculino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
    {
      nombre: "Persona 10",
      edad: 26,
      genero: "Femenino",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'
    },
  ];
  
  return (
    <Container fluid>
      <Row>
        <Col xs={3} md={6} lg={12} >
          {personas.map((persona, i) => <CardCharacter data={persona} key={i} />)} 
        </Col>
      </Row>
    </Container>
  )
}

export default App
