import React from 'react';
import './portfolio.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



export default class Services extends  React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let portfolio = this.props.portfolio;
    console.log(portfolio);
    return (
      <Grid className="services">

        <Row className="show-grid" >
        {services.map( ({href, src, alt, id},index) =>
          (
            <Col md={3} key={index} className="services_single">
            <a href={href}>
            <Image src={src} responsive alt={alt} id={id} className="portfolio_image" />
            </a>
            </Col>
          ))}

        </Row>
      </Grid>

    );
  }
};




let services = [
    {},
  {href: "#", src: "workImages/dutchdelight.jpg", alt: "mekongBaby", id: "mekongBaby"},
  {href: "#", src: "workImages/jstea.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {}
  ]
