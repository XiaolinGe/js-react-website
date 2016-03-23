import React from 'react';
import './portfolio.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';



export default class Portfolio extends  React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <div className="layout_banner">
      <h1>portfolio</h1>
      </div>
      <Grid className="portfolio">
      <Row className="show-grid portfolio_row">
        {portfolio.map( ({href, src, alt, id},index) =>
          (
            <Col md={3} key={index} className="portfolio_single">
            <a href={href}>
            <Image src={src} responsive alt={alt} id={id} className="portfolio_image" />
            </a>
            </Col>
            ) ) }
        </Row>
     </Grid>
</div>
    );
  }
};



let portfolio =[
    {href: "#", src: "workImages/mekongBaby.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workImages/coffeeLab.jpg", alt: "coffeeLab", id: "coffeeLab"},
    {href: "#", src: "workImages/burgerfuel.jpg", alt: "burgerfuel", id: "burgerfuel"},
    {href: "#", src: "workImages/dutchdelight.jpg", alt: "dutchdelight", id: "dutchdelight"},

    {href: "#", src: "workimages/mimosa.jpg", alt: "mekongBaby", id: "mekongBaby"},
    {href: "#", src: "workimages/alfornoitalian.jpg", alt: "alfornoitalian", id: "alfornoitalian"},
    {href: "#", src: "workimages/vmaxcafe.jpg", alt: "vmaxcafe", id: "vmaxcafe"},
    {href: "#", src: "workimages/glapogenuine.jpg", alt: "glapogenuine", id: "glapogenuine"},

    {href: "#", src: "workimages/vmaxcafe.jpg", alt: "vmaxcafe", id: "vmaxcafe"},
    {href: "#", src: "workimages/vmaxcafe.jpg", alt: "vmaxcafe", id: "vmaxcafe"},
    {href: "#", src: "workimages/glapogenuine.jpg", alt: "glapogenuine", id: "glapogenuine"}
  ];
