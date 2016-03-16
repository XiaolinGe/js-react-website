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
      <Grid className="portfolioRow">
      <Row className="show-grid" >
      {portfolio.map((i,index) => (i.map( ({href, src, alt, id},index) =>
        (
          <Col md={3} key={index}>
          <a href={href}>
          <Image src={src} responsive alt={alt} id={id} className="portfolio_image" />
          </a>
          </Col>
        ))))
}

      </Row>
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
