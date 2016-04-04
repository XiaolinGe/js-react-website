import React from 'react';
import { connect } from 'react-redux';
import { Link,IndexLink } from "react-router";
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
    return (<Image src={logo} className='logo' responsive />);
  }
};


class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    let {infos,languages,menus} = this.props;
    let {logo} = infos;
    let navLanguage =Object.keys(languages).length;
    let menu_element = $( ".menu_element");
    menu_element.click(function(){
      menu_element.removeClass('active');
      $(this).addClass('active');
    });
    
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
      {menus.map( ({url,display},index) =>
        (<NavItem key={index}  eventKey={index} ><Link  key={index} to={url} className="menu_element">{display}</Link></NavItem>)
      )}
      </Nav>
      <Nav pullRight>
      <NavDropdown eventKey={navLanguage} title="Language" id="basic-nav-dropdown">
      {languages.map( ({language},index) => (<MenuItem key={index} eventKey={2.+{index}} className="language_element">{language}</MenuItem>) )}
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
    let {infos,footerMenus} = this.props;
    let {logo,wechat} = infos;
    
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
      <Image src={wechat} alt="wechat" className='wechat' responsive />
      </Col>
      <Col  md={3} className="footer_info">
      <p>{infos.name}</p>
      <span>
      {infos.pobox}<br />
      {infos.district}<br />
      {infos.city}<br />
      {infos.country}<br /><br />

      Phone:  <a href={'tel:'+infos.phone}>  &nbsp;{infos.phone}</a><br />
      Email: <a href={'mailto:'+infos.email}> &nbsp;{infos.email}</a>
      </span>
      </Col>
      <Col  md={7} className="footer_menu">
      <ul>
      {footerMenus.map( ({url,display},index) =>
        (
          <li key={index}>                 
          <Link to={url}  id={'footer_'+display}>{display}</Link>
          </li>
        ) )}

      </ul>
      <p className="copyright">Copyright © 2015 LYNN. All Rights Reserved</p>
      </Col>
      </Row>

      </Grid>
    );
  }

}





export default class Layout extends React.Component {
  render() {
    let {menus,languages,infos,footerMenus} = this.props;
    return (
      <div>
      <Header menus={menus} languages={languages} infos={infos}/>
      {this.props.children}
      <Footer infos={infos} footerMenus={footerMenus} />
      </div>);
  }
};



function mapStateToProps(state) {
  console.log(state);
  let {infos,menus,languages,footerMenus,portfolios,services,faqs} = state.info;

  let layout = {
    infos: infos,
    menus: menus,
    languages: languages,
    footerMenus: footerMenus
  };
  return layout;
}

export default connect(mapStateToProps)(Layout);
