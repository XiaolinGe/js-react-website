import React from 'react';
import './home.scss';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Grid id="index_banner">
      <Row className="show-grid">

      <Col xs={3} md={2}>
      <Image  src="images/trusted-photos-large.png" alt="trusted" id="trusted" responsive />
      </Col>

      <Col xs={15} md={10}>
      <Image src="images/macbook.png" responsive alt="macbook" id="macbook" className="fadeInUp" style={{animationDelay:'1s', animationDuration: '3s', zIndex: '1',}}/>
      <Image src="images/ipad.png" responsive alt="ipad" id="ipad" className="fadeInUp" style={{animationDelay:'0.3s', animationDuration: '3s', zIndex: '2',}}/>
      <Image src="images/iphone.png" responsive alt="iphone" id="iphone" className="fadeInUp" style={{animationDelay:'0.7s', animationDuration: '3s', zIndex: '3',}}/>
      <Image src="images/popup.png" responsive alt="popup" id="popup" className="fadeInUp" style={{animationDelay:'1.3s', animationDuration: '3s', zIndex: '4',}}/>
      </Col>

      </Row>

      <Row className="show-grid">
      <Col>
      <p id="professional_text"  className="fadeInUp" style={{animationDelay:'1.3s', animationDuration: '3s', zIndex: '5',}}>
      Professional 360&#176; tours . Attract more customers with Google TM Business Photos!
      </p>
      </Col>
      </Row>

      </Grid>
    );
  }
};
