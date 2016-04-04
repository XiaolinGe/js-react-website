import React from 'react';
import './portfolio.scss';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



export default class Portfolio extends  React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {portfolios} = this.props;
    return (
      <div>
      <div className="layout_banner">
      <h1>portfolio</h1>
      </div>
      <Grid className="portfolio">
      <Row className="show-grid portfolio_row">
      {portfolios.map( ({url, image, title},index) =>
          (
            <Col md={3} key={index} className="portfolio_single">
            <a href={url}>
            <Image src={image} responsive alt={title}  className="portfolio_image" />
            </a>
            </Col>
            ) ) }
        </Row>
     </Grid>
</div>
    );
  }
};


function mapStateToProps(state) {

  let {portfolios} = state.info;

  return {portfolios};
}

export default connect(mapStateToProps)(Portfolio);
