import React from 'react';
import './about.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="layout_banner">
      <h1>about</h1>
      </div>
      <Grid className="about">
      <Row className="show-grid">

      <Col  md={3} className="about_image">
      <h2>About</h2>
      <p>Find out more about Jibble 360, the Google™ Trusted Photographer.</p>
      <a href="#">Terms and Conditions</a>
      <Image src="images/trusted-photos-large.png" responsive alt="trusted" className="trusted"  />
      </Col>


      <Col  md={9} className="about_intro">

      <p>Jibble 360 has many years of experience working in the photographic and design industry. We take advantage of the latest technology to create high definition photos which are then used to make the online tour that people are used to using on Google’s 3D Street view. All photos comply with the guidelines and practices of Google, maximising the appearance of your business.</p>

      <p>Most people have used Google’s street view along with Google places. Our <a href="#">360° virtual tours</a> are built into these pages and work to enhance your current web content. When you want ways to attract new customers and grow your business while building a great reputation – we are the people to speak to.</p>

      <p>Our specialisation is in project managing all aspects of the work scheduling, processing, arranging final products and we also integrate this into our client’s websites if required. We work in a huge variety of markets and industries so bring a lot of unique experiences to our work. By handling all associated project management, our clients can take care of their own day to day business needs while our team create your Virtual Tour, from first concepts to final upload. We aim to do everything possible to develop your business profile online.</p>

      <p>Make your first impression count and influence potential customers before they even visit your premises. Call us today with any questions, we are happy to answer all enquiries and look forward to hearing from you.</p>
      </Col>

      </Row>
      </Grid>
      </div>
    );
  }
};
