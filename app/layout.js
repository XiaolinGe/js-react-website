import React from 'react';
import "./layout.scss";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

class Logo extends React.Component {
  render() {
    return (<Image src="images/logo.png" className='logo' responsive />);

  }
};


export default class Layout extends React.Component {
  render() {
    let navLanguage =Object.keys(language).length;
    return (
      <div>
      <Navbar inverse className='header_nav'>

      <Navbar.Header>
      <Navbar.Brand>
      <Logo />
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>

      <Nav>
      {menu.map( ({link,display},index) => (<NavItem key={index}  eventKey={index} href={link}>{display}</NavItem>) )}
      </Nav>

      <Nav pullRight>
      <NavDropdown eventKey={navLanguage} title="Language" id="basic-nav-dropdown">
      {language.map( ({language},index) => (<MenuItem key={index} eventKey={2.+{index}}>{language}</MenuItem>) )}
      </NavDropdown>
      </Nav>

      </Navbar.Collapse>

      </Navbar>
      </div>);
  }
};


let menu = [
  {link: "#", display: "HOME"},
  {link: "#", display: "ABOUT"},
  {link: "#", display: "PORTFOLIO"},
  {link: "#", display: "SERVICES"},
  {link: "#", display: "HOFAQME"},
  {link: "#", display: "CONTACT"}
];


let language = [
  {language: "English"},
  {language: "Chinese"},
  {language: "Japnese"}
];
