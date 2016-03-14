import React from 'react';
import './home.scss';
import { Grid, Row, Col, Image} from 'react-bootstrap';



class Banner extends React.Component {
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


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid id="index_button">
      <Row className="show-grid">

      <Col  md={3}>
      <a href="#googleVideo" className="index_button" id="green_button" style={{textDecoration: 'none',}}>
      <span>What are Google Business Photos?</span>
      </a>
      </Col>

      <Col  md={3}>
      <a href="#googleVideo" className="index_button" id="blue_button" style={{textDecoration: 'none',}}>
      <span>Benefits of Google Business Photos?</span>
      </a>
      </Col>

      <Col  md={3}>
      <a href="#googleVideo" className="index_button" id="red_button" style={{textDecoration: 'none',}}>
      <span>Take a Look at Our Portfolio</span>
      </a>
      </Col>

      <Col  md={3}>
      <a href="#googleVideo" className="index_button" id="orange_button" style={{textDecoration: 'none',}}>
      <span>Please contact us</span>
      </a>
      </Col>

      </Row>
      </Grid>
    );
  }
};


class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid id="index_work">
      <Row className="show-grid">

      <Col  md={3} id="work_intro">
      <h2>Our Work</h2>
      <p>Here’s a selection of our recent work, click the links to take a look.</p>
      <a  href="portfolio_en.html">View our portfolio »</a>
      </Col>


      <Col  md={9} id="work_images">
      <Row className="show-grid">

      <Col  md={4} >
      <a href="#">
      <Image src="workImages/mekongBaby.jpg" responsive alt="mekongBaby" id="mekongBaby" className="fadeInUp" />
      </a>
      </Col>

      <Col  md={4} >
      <a href="#">
      <Image src="workImages/mekongBaby.jpg" responsive alt="mekongBaby" id="mekongBaby" className="fadeInUp" />
      </a>
      </Col>

      <Col  md={4} >
      <a href="#">
      <Image src="workImages/mekongBaby.jpg" responsive alt="mekongBaby" id="mekongBaby" className="fadeInUp" />
      </a>
      </Col>

      </Row>
      </Col>

      </Row>
      </Grid>

    );
  }
};















export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Banner />
      <Button />
      <Work />
      </div>
    );
  }
};
