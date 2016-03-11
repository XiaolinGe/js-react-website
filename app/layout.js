import React from 'react';
import "./layout.scss";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import { Image } from 'react-bootstrap';


class ImageResponsiveInstance extends React.Component {
  render() {
    return (<Image src="images/logo.png" className='logo' responsive />);

  }
};



export default class MyReactBootstrapNavbarInstance extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse className='header_nav'>

      <Navbar.Header>
      <Navbar.Brand>
      <ImageResponsiveInstance />
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>

      <Nav>
      <NavItem eventKey={1} href="#">HOME</NavItem>
      <NavItem eventKey={2} href="#">ABOUT</NavItem>
      <NavItem eventKey={3} href="#">PORTFOLIO</NavItem>
      <NavItem eventKey={4} href="#">SERVICES</NavItem>
      <NavItem eventKey={5} href="#">FAQ</NavItem>
      <NavItem eventKey={6} href="#">CONTACT</NavItem>
      </Nav>

      <Nav pullRight>
      <NavDropdown eventKey={2} title="Language" id="basic-nav-dropdown">
      <MenuItem eventKey={2.1}>English</MenuItem>
      <MenuItem eventKey={2.2}>Chinese</MenuItem>
      </NavDropdown>
      </Nav>

      </Navbar.Collapse>

      </Navbar>
      </div>);
  }
};
