import React from 'react';
import './contact.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed, Input, ButtonInput,} from 'react-bootstrap';

import Map from './map';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="layout_banner">
      <h1>contact</h1>
      </div>
      <Grid className="contact">
      <Row className="show-grid">

      <Col  md={3} className="contact_info">
      <Image src={'images/'+images.logo} responsive alt="logo" className="contact_logo"  />
      <br />
      <p>
      {Info.pobox}<br />
      {Info.district}<br />
      {Info.city}<br />
      {Info.country}<br /><br />

      Phone:  <a href={'tel:'+Info.phone}>  &nbsp;{Info.phone}</a><br />
      Email: <a href={'mailto:'+Info.email}> &nbsp;{Info.email}</a>
      </p>
      <a className="facebook" href="https://www.facebook.com/jibblenz" target="_blank">Facebook</a><br />
      <Image src="images/trusted-photos-large.png" responsive alt="Google Business Photos Trusted Photographer" className="trusted"  />
      </Col>

      <Col  md={4} className="contact_form">
      <p>Fill Your Details</p>
      <form className="form-horizontal">
      <Input type="name"  placeholder="Enter Name"  />
      <Input type="phone" placeholder="Enter Phone" />
      <Input type="email"  placeholder="Enter Email" />
      <Input type="textarea"  placeholder="Enter Message" rows="7" cols="38" />
      <ButtonInput type="submit" value="Submit Button"  bsStyle="primary" />
      </form>
      </Col>

      <Col  md={5} className="contact_map">
      <Map />
      </Col>

      </Row>
      </Grid>
      </div>
    );
  }
};


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
