import React from 'react';
import './contact.scss';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, ResponsiveEmbed, Input, ButtonInput,} from 'react-bootstrap';

import Map from './map';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {infos} = this.props;
    return (
      <div>
      <div className="layout_banner">
      <h1>contact</h1>
      </div>
      <Grid className="contact">
      <Row className="show-grid">

      <Col  md={3} className="contact_info">
      <Image src={infos.logo} responsive alt="logo" className="contact_logo"  />
      <br />
      <p>
      {infos.pobox}<br />
      {infos.district}<br />
      {infos.city}<br />
      {infos.country}<br /><br />

      Phone:  <a href={'tel:'+infos.phone}>  &nbsp;{infos.phone}</a><br />
      Email: <a href={'mailto:'+infos.email}> &nbsp;{infos.email}</a>
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



function mapStateToProps(state) {
  let {infos} = state.info;

  return  {infos};
}

export default connect(mapStateToProps)(Contact);
