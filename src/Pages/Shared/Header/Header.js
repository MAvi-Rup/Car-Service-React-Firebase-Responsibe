
import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user]=useAuthState(auth)
    const handleSignOut =()=>{
        signOut(auth)
    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                
                <Container>
                    <Navbar.Brand as={Link} to='./' className='text-info'>GeniusCar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="home#services">Services</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="home#expert">Expert</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='ms-auto'>
                            <Nav.Link  as={Link} to='about'>About Us</Nav.Link>
                            {
                                user ?<Nav.Link as={Link} to='login' onClick={handleSignOut}>Sign Out</Nav.Link> :<Nav.Link  as={Link} to='login'>Login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;