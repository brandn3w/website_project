import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header =()=>{

    <div>             
              <Navbar bg="light" variant="light">
              <Nav.Link href="#home"> Home</Nav.Link>
                < Nav.Link> Shop</Nav.Link>
                <Nav.Link href="#">Cart</Nav.Link>
                <Nav.Link href="#" >Login</Nav.Link>    
              </Navbar>
            
    </div>
}

export default Header;