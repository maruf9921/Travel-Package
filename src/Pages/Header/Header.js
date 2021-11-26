import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container>
            
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link className="fw-bold text-white" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="fw-bold text-white" as={Link} to="/services">Services</Nav.Link>
                    {user.email ? <Nav.Link className="fw-bold text-white" as={Link} to="/addservice">Add Service</Nav.Link> : ''}
                    {/* <Nav.Link className="fw-bold text-white" as={Link} to="/addservice">Add Service</Nav.Link> */}
                    <Nav.Link className="fw-bold text-white" as={Link} to="/contactus">Contact Us</Nav.Link>
                    <span className="text-white">{user.displayName}</span>
                    {user.email ? <button onClick={logout} type="button" className="btn btn-warning ms-4 text-white fw-bold fs-5">Log Out</button> : <Nav.Link className="fw-bold text-white" as={Link} to="/login">Log In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="300"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                {/* <h1>Bangladesh Travel Agency</h1> */}
                    </Navbar.Brand>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;