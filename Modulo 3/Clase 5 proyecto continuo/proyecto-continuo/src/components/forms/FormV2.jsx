import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const FormV2 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checked: null,
  });

  const handleChange = (e) => {
    console.log(e)
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name='email' onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" name='checked' onChange={handleChange} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormV2;
