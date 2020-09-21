import React from 'react';
//import PropTypes from 'prop-types';
import { Navbar, Nav} from 'react-bootstrap';

import styles from './Header.module.scss';

function Header() {
  return (

    <div>
      <Navbar className={styles.navbar}>
        <Nav.Link className={styles.topLink} href="#home"> Home</Nav.Link>
        <Nav.Link className={styles.topLink} href="#shop"> Shop</Nav.Link>
        <Nav.Link className={styles.topLink} href="#cart">Cart</Nav.Link>
        <Nav.Link className={styles.topLink} href="#login">Login</Nav.Link>
        <Nav.Link className={styles.topLink} href="#aboutme">About Me</Nav.Link>
      </Navbar>

    </div>
  );
}

export default Header;