
import React from 'react';
//import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Aboutme from '../../views/Aboutme/Aboutme';
import Shop from '../../views/Shop/Shop'

function Header() {
  return (

    <div>
      <Navbar className={styles.navbar}>
        <Nav.Link className={styles.topLink} href="/home"> Home</Nav.Link>
        <Nav.Link className={styles.topLink} href="/shop"> Shop</Nav.Link>
        <Nav.Link className={styles.topLink} href="/cart">Cart</Nav.Link>
        <Nav.Link className={styles.topLink} href="/login">Login</Nav.Link>
        <Nav.Link className={styles.topLink} href="/aboutme">About me</Nav.Link>
      </Navbar>
    
    <Switch>
      <Route exact path='/aboutme' component={Aboutme}/>
      <Route exact path='/shop' component={Shop}/>
      
    </Switch>
    </div>
  );
}

export default Header;