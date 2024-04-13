import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarText from 'react-bootstrap/esm/NavbarText';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  './Header.css'

function Navbars() {
  const cartproducts = useSelector(state => state.cart);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Brado</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link href="#footer">Contact Us</Nav.Link>
            <Nav.Link href="#footer">About Us</Nav.Link>
          </Nav>
          <NavbarToggle />
          <NavbarCollapse className="justify-content-end">
            <NavbarText className='cart'>
              <Nav.Link to="/cart" as={Link} className='cart'>
                <img 
                  src="https://th.bing.com/th/id/OIP.aJtKzKgJ2Y_OEMtUG9-gAAHaHa?rs=1&pid=ImgDetMain" 
                  alt="cart" 
                  style={{ 
                    height: '30px', 
                    marginRight: '10px',
                    cursor: 'pointer', /* Add this line to set cursor to pointer */
                  }} 
                />
                {cartproducts.length}
              </Nav.Link>
            </NavbarText>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;

