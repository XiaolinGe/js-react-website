import React from 'react';
import './portfolio.scss';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



export default class Portfolio extends  React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {portfolio} = this.props;
    return (
      <div>
      <div className="layout_banner">
      <h1>portfolio</h1>
      </div>
      <Grid className="portfolio">
      <Row className="show-grid portfolio_row">
      {portfolio.map( ({href, src, alt, portfolio_id},index) =>
          (
            <Col md={3} key={index} className="portfolio_single">
            <a href={href}>
            <Image src={src} responsive alt={alt} id={portfolio_id} className="portfolio_image" />
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

  let {portfolio} = state.info;

  return {portfolio};
}

export default connect(mapStateToProps)(Portfolio);
