import React from 'react';
import './services.scss';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



export default class Services extends  React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {services} = this.props;

    return (
      <div>
      <div className="layout_banner">
      <h1>services</h1>
      </div>
      <Grid className="services">

      <Row className="show-grid" >
      <Col md={3}>
      </Col>
      {services.map( ({url, image, title},index) =>
          (
            <Col md={3} key={index} className="services_single">
            <a href={url}>
            <Image src={image} responsive alt={title} className="portfolio_image" />
            </a>
            </Col>
          ))}
      <Col md={3}>
      </Col>
        </Row>
      </Grid>
</div>
    );
  }
};


function mapStateToProps(state) {
  let {services} = state.info;


  return {services};
}

export default connect(mapStateToProps)(Services);
