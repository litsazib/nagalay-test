import {React,memo} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../Assets/img/avatar.jpg"
const AppNavBar = () => {
    return (
        <div>
            <Navbar  bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link to="/"><img className="navbar-logo" src={logo} alt="logo"/> </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><NavLink to="/">Employee List</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/create">Add Employee</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default memo(AppNavBar);