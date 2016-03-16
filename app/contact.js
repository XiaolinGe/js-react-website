import React from 'react';
import './contact.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed, Input, ButtonInput,} from 'react-bootstrap';

import Map from './map';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="contact">
      <Row className="show-grid">

      <Col  md={3} className="contact_info">
      <Image src="images/logo.png" responsive alt="logo" className="contact_logo"  />
<br />
      <p>
      PO Box 36393,<br />
      Northcote 0748,<br />
      Auckland,<br />
      New Zealand<br /><br />

      Phone:  <a href="tel:022023352">  &nbsp;021 202 3352</a><br />
      Email: <a href="mailto:nzgezilin@gmail.com"> &nbsp;nzgezilin@gmail.com</a>
      </p>
      <a className="facebook" href="https://www.facebook.com/jibblenz" target="_blank">Facebook</a><br />
      <a href="#">Terms and Conditions</a>
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
    );
  }
};
