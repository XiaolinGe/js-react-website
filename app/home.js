import React from 'react';
import './home.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid id="index_banner">
      <Row className="show-grid banner_images">

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

      <Row className="show-grid banner_text">
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

class WhyUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid id="index_whyUs">
      <Row className="show-grid">

      <Col  md={3} id="whyUs_intro">
      <h2>Why Us?</h2>
      <p>We’ve been recognised by Google™ as a trusted photographer, so you can be sure we’re qualified to provide
      a quality service.</p>
      <a href="about_en.html">Read more about Jibble »</a>
      </Col>

      <Col  md={2}  id="whyUs_image">
      <Image src="images/trusted-photos-large.png" responsive alt="trusted" id="trusted"  />
      </Col>

      <Col  md={7}  id="whyUs_explain">
      <h4>Google Trusted Photographer</h4>
      <p>Jibble 360 is a “Google Trusted Photographer” based in Auckland, New Zealand. We take pride in exceeding all expectations and deliver results that continue to surprise.</p>

      <p>Our team specialise in creating stunning 360° virtual tours for business owners. These allow customers to browse your premises through Google’s Street View interface and find out more about your business.</p>
      </Col>

      </Row>
      </Grid>
    );
  }
};



class OurVideos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid id="index_ourVideos">
      <Row className="show-grid">

      <Col  md={9} id="ourVideos_intro">
      <h2 id="googleVideo">Our Videos</h2>
      <p>If you’re having trouble understanding what we do, take a look at the videos from Google™ below.</p>
      </Col>

      <Col  md={3}  id="ourVideos_button">
      <a href="portfolio_en.html" className="index_button" id="red_button" style={{textDecoration: 'none',}}>
      <span>View Our Portfolio</span>
      </a>
      </Col>

      </Row>
      </Grid>
    );
  }
};





class Videos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid id="index_videos">
      <Row className="show-grid">

      <Col  md={6} id="videos_1" className="videos">
      <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="//www.youtube.com/embed/Lw9KchtyqFI" />
      </ResponsiveEmbed>
      </Col>

      <Col  md={6}  id="videos_2" className="videos">
      <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="//www.youtube.com/embed/kMWxBpM-MSA" />
      </ResponsiveEmbed>
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
      <WhyUs />
      <OurVideos />
      <Videos />
      </div>
    );
  }
};
