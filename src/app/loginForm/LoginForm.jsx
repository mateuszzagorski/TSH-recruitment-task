import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute.enum';
import { Col, Form, Button } from 'react-bootstrap';

export const LoginForm = () => {
    return (
        <>
            <Col md={12} sm={12}>
                <p className="login-header font-big">Login</p>
            </Col>
            <Col md={12} sm={12}>
                <Form className="login-form">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label className="font-smallest">Username</Form.Label>
                        <Form.Control className="font-smallest" type="username" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="font-smallest">Password</Form.Label>
                        <Form.Control className="font-smallest" type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Link to={{pathname: AppRoute.home, state: { isLoggedIn: true }}}>
                        <Button variant="primary" type="submit">Log in</Button>
                    </Link>
                </Form>
            </Col>
            <Col md={12} sm={12}>
                <a href="" className="password-recovery font-smallest">Forgot password?</a>
            </Col>
        </>
    );
};