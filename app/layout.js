import React from 'react';
import "./layout.scss";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Image, ResponsiveEmbed, } from 'react-bootstrap';

import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Services from './services';
import Faq from './faq';
import Contact from './contact';

class Logo extends React.Component {
    render() {
        return (<Image src={'images/'+images.logo} className='logo' responsive />);
    }
};


class Header extends React.Component {
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




class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className="footer" >

            <Row className="show-grid" className="footer_top">
            <Col  md={3} className="footer_logo">
            <a href="index_cn.html">
            <Logo />
            </a>
            </Col>
            <Col  md={6} className="footer_span">
            </Col>
            <Col  md={3} className="footer_button">
            <a href="#"  style={{textDecoration: 'none',}}>
          <span>Please contact us</span>
            </a>
            </Col>
            </Row>

            <Row className="show-grid" className="footer_bottom">
            <Col  md={2} className="footer_wechat">
            <Image src={'images/'+images.wechat} alt="wechat" className='wechat' responsive />
            </Col>
            <Col  md={3} className="footer_info">
          <p>{Info.name}</p>
          <span>
          {Info.pobox}<br />
          {Info.district}<br />
          {Info.city}<br />
          {Info.country}<br /><br />

          Phone:  <a href={'tel:'+Info.phone}>  &nbsp;{Info.phone}</a><br />
          Email: <a href={'mailto:'+Info.email}> &nbsp;{Info.email}</a>
            </span>
            </Col>
            <Col  md={7} className="footer_menu">
            <ul>
            {footerMenu.map( ({link,display},index) =>
                (
                    <li key={index}>
                    <a href={link}  id={'footer_'+display}>
                    {display}</a>
                    </li>
                ) )}

            </ul>
            <p className="copyright">{Info.copyright}</p>
            </Col>
            </Row>

            </Grid>
        );
    }

}





export default class Layout extends React.Component {
    render() {
        let {menus} = this.props;
        let navLanguage =Object.keys(language).length;
        return (
            <div>
            <Header />
            <About />

            <Footer />
            </div>);
    }
};



let menu = [
    {link: "#", display: "HOME"},
    {link: "#", display: "ABOUT"},
    {link: "#", display: "PORTFOLIO"},
    {link: "#", display: "SERVICES"},
    {link: "#", display: "FAQ"},
    {link: "#", display: "CONTACT"}
];


let language = [
    {language: "English"},
    {language: "Chinese"},
    {language: "Japnese"}
];

let footerMenu = [
    {link: "#", display: "home"},
    {link: "#", display: "about"},
    {link: "#", display: "portfolio"},
    {link: "#", display: "services"},
    {link: "#", display: "faq"},
    {link: "#", display: "contact"},
    {link: "#", display: "facebook"},
];

let images = {
    logo: "logo.png",
    wechat: "weixin.jpg"
};

let Info = {
    name: "Lynn",
    pobox: "PO Box 36393,",
    district: "Northcote 0748,",
    city: "Auckland,",
    country: "New Zealand",
    phone: "021 202 335",
    email: "nzgezilin@gmail.com",
    copyright: "Copyright © 2015 LYNN. All Rights Reserved."
};
