import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {
  Route,
  Link,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

import { Navbar, NavItem, MenuItem, Nav, NavDropdown, PageHeader } from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (<div className = "navbar">
  <Navbar inverse collapseOnSelect>

    <Navbar.Header> 
    <Navbar.Brand >
      <p id ="brand" >Revent Music</p>
    </Navbar.Brand> 
      <Navbar.Toggle />
    </Navbar.Header>
  <Navbar.Collapse>
    <Nav className = "centerNavs">
        <NavItem componentClass={Link} href="/" to="/" active={location.pathname === '/'} style={{ textDecoration: 'none' }} className = "navItems" >
          Home
        </NavItem>
        <NavItem componentClass={Link} href="/about" to="/about" active={location.pathname === '/about'} style={{ textDecoration: 'none' }} className = "navItems"  >
          About
        </NavItem>
        <NavItem componentClass={Link} href="/artistlist" to="/artistlist" active={location.pathname === '/signup'} style={{ textDecoration: 'none' }} className = "navItems" >
          Artist List
        </NavItem>
        <NavItem componentClass={Link} href="/bookevent" to="/bookevent" active={location.pathname === '/bookevent'} style={{ textDecoration: 'none' }} className = "navItems"  >
          Book Event
        </NavItem>
        <NavItem componentClass={Link} href="/addartist" to="/addartist" active={location.pathname === '/addartist'} style={{ textDecoration: 'none' }} className = "navItems"  >
          Add Artist
        </NavItem>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>)
  }
}

export default Navigation;
  //   <h1 class="site-heading text-center text-white d-none d-lg-block">
  //   <span class="site-heading-upper text-primary mb-3">A Free Bootstrap 4 Business Theme</span>
  //   <span class="site-heading-lower">Business Casual</span>
  // </h1>


