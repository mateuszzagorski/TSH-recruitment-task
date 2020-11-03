import React from 'react';
import { LoginForm } from '../loginForm/LoginForm';
import { Row, Col, Container } from 'react-bootstrap';

export const Login = (props) => {
  console.log(props.location.state.isLoggedIn)
  return (
    <>
      <Container fluid className="login-page-container">
        <Row>
          <Col md={5} sm={12} className="img-cover"></Col>
          <Col md={7} sm={12} className="login-container">
            <Row className="logo-container">
              <Col md={12} sm={12}>
                <p className="font-medium">join.tsh.io</p>
              </Col>
            </Row>
            <Row className="form-container">
              <LoginForm isLoggedIn={props.location.state.isLoggedIn}/>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
