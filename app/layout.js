import React from 'react';
import { connect } from 'react-redux';
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
    let {logo} = this.props;
        return (<Image src={'images/'+logo} className='logo' responsive />);
    }
};


class Header extends React.Component {
  render() {
    let {info,language,menu} = this.props;
    let {logo} = info;
     let navLanguage =Object.keys(language).length;

        return (
            <div>
            <Navbar inverse className='header_nav'>
            <Navbar.Header>
            <Navbar.Brand>
            <Logo logo={logo}/>
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
    let {info,footerMenu} = this.props;
    let {logo,wechat} = info;
    
        return (
            <Grid className="footer" >

            <Row className="show-grid" className="footer_top">
            <Col  md={3} className="footer_logo">
            <a href="index_cn.html">
            <Logo logo={logo}/>
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
          <Image src={'images/'+wechat} alt="wechat" className='wechat' responsive />
          </Col>
          <Col  md={3} className="footer_info">
          <p>{info.name}</p>
          <span>
          {info.pobox}<br />
          {info.district}<br />
          {info.city}<br />
          {info.country}<br /><br />

          Phone:  <a href={'tel:'+info.phone}>  &nbsp;{info.phone}</a><br />
          Email: <a href={'mailto:'+info.email}> &nbsp;{info.email}</a>
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
          <p className="copyright">{info.copyright}</p>
            </Col>
            </Row>

            </Grid>
        );
    }

}





export default class Layout extends React.Component {
  render() {
    let {menu,language,info,footerMenu} = this.props;
        return (
          <div>
          <Header menu={menu} language={language} info={info}/>
          <Home />

          <Footer info={info} footerMenu={footerMenu} />
          </div>);
    }
};



function mapStateToProps(state) {
    console.log(state);
    let {info,menu,language,footerMenu,portfolio,services,faq,work} = state.info;

    let layout = {
        info: info,
        menu: menu,
        language: language,
        footerMenu: footerMenu
    };
    return layout;
}

export default connect(mapStateToProps)(Layout);
