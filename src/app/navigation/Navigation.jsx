import React  from 'react';
import { Navbar, Form, FormControl, Dropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserImage from './../../images/Rectangle.png';

export const Navigation = (props) => {
    return (
        <>
            <Navbar>
                <Navbar.Brand className="font-medium" href="/">join.tsh.io</Navbar.Brand>
                <Form inline>
                    <label className="search-label" htmlFor="search">
                        <FormControl id="search" type="text" placeholder="Search" className="search-box" onChange={props.onSearchChange} onKeyPress={props.handleKeyPress} value={props.searchValue}/>
                    </label>
                    <Form.Check inline label="Active" aria-label="Active" onChange={props.onChangeActive} checked={props.checkedActive}/>
                    <Form.Check inline label="Promo" aria-label="Promo" onChange={props.onChangePromo} checked={props.checkedPromo}/>
                </Form>
                {props.isLoggedIn === false ? 
                    <Link to={{pathname: '/login', state: { isLoggedIn: true }}} className="outline-button font-smallest navigation-login" >Log in</Link>
                    : 
                    <Dropdown>
                        <Dropdown.Toggle className="font-smallest dropdown-button" id="dropdown-basic">
                                <img src={UserImage} alt="UserImage"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={props.handleLogin}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                }
            </Navbar>
        </>
    )
}