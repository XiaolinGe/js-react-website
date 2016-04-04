import React from 'react';
import './faq.scss';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {faq} = this.props;
    return (
      <div>
      <div className="layout_banner">
      <h1>faq</h1>
      </div>
      <Grid className="faq">
      <Row className="show-grid">

      <Col  md={3} className="faq_image">
      <h2>FAQ</h2>
      <p>Find out more about Jibble 360, the Google™ Trusted Photographer.</p>
      <Image src="images/trusted-photos-large.png" responsive alt="Google Business Photos Trusted Photographer" className="trusted"  />
      </Col>

      <Col  md={9} className="faq_intro">

      {faq.map( ({question,answer},index) =>
        (
          <div key={index} >
          <h3>{question}</h3>
          <p>{answer}</p>
          </div>
        )
      )}
      </Col>

      </Row>
      </Grid>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log(state);
  let {faq} = state.info;

  return {faq};
}

export default connect(mapStateToProps)(Faq);
