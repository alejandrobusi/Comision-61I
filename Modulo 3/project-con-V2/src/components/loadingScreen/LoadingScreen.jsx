import React from 'react';
import spinnerLogo from '../../assets/spinnerLogo.png';
import { spinnerContainer, spinner } from './loadingScreen.module.css';
import { Col } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <Col className={spinnerContainer}>
      <img src={spinnerLogo} className={spinner} alt="spinner" />
    </Col>
  )
}

export default LoadingScreen
