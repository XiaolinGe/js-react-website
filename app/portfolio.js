import React from 'react';
import './portfolio.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



class PortfolioRow extends  React.Component {
  constructor(props) {
    super(props);

  }

  render() {
   let portfolio = this.props.portfolio;
    console.log(portfolio);
    return (
      <Grid className="portfolio_grid">
      {portfolio.map((e,index) => (
      <Row className="show-grid portfolio_row" key={index} >
       {e.map( ({href, src, alt, id},index) =>
        (
          <Col md={3} key={index} className="portfolio_single">
          <a href={href}>
          <Image src={src} responsive alt={alt} id={id} className="portfolio_image" />
          </a>
          </Col>
        ))}

        </Row>
      ) ) }
      </Grid>

    );
  }
};


export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
    <PortfolioRow  portfolio={portfolio} />
      </div>
    );
  }
};




let portfolio = [
  [
    {href: "#", src: "workImages/mekongBaby.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workImages/mekongBaby.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workImages/mekongBaby.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workImages/mekongBaby.jpg", alt: "mekongBaby", id: "mekongBaby"}
  ],
  [
    {href: "#", src: "workimages/mimosa.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workimages/mimosa.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workimages/mimosa.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workimages/mimosa.jpg", alt: "mekongBaby", id: "mekongBaby"}
  ]
]
