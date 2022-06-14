// library
import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';



// komponen
import Jam from './Jam';

const NavBar = () =>{
    const [show, setShow] = useState(false)
    return(
        <div >
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Navigation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setShow(true)} />

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Algorithm</Nav.Link>
                        <Nav.Link as={Link} to={"/faq"}>FAQ</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <NavDropdown title="Select Language" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#english">English</NavDropdown.Item>
                            <NavDropdown.Item href="#bahasa">Bahasa</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    
                    {/* <Jam /> */}
                </Container>
                
            </Navbar>
            <br></br>
        </div>
    );
};

export default NavBar;