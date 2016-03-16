import React from 'react';
import './faq.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="faq">
      <Row className="show-grid">

      <Col  md={3} className="faq_image">
      <h2>FAQ</h2>
      <p>Find out more about Jibble 360, the Google™ Trusted Photographer.</p>
      <Image src="images/trusted-photos-large.png" responsive alt="Google Business Photos Trusted Photographer" className="trusted"  />
      </Col>



      <Col  md={9} className="faq_intro">
      <h3 style={{marginTop: '0', paddingTop: '0',}}>How do I use the images on my own site?</h3>
      <p>Google Maps API allows simple, easy sharing. This is a great idea to do as it means that you are getting the maximum use out of your investment. Our team will be happy to show you how to do it if you have any questions.</p>

      <h3>If I change anything, can we re-shoot?</h3>
      <p>A change of style or seasonal adjustments to décor may mean that you want a re-shoot to show your business how it is at that moment. You can schedule a repeat shoot as many times as you like!</p>

      <h3>Could Google remove my photos?</h3>
      <p>Only if they violate the existing policy of Google images, but you will be notified about this at the time if needed plus you will be given the standards that are expected, it is very rare that there are problems however.</p>

      <h3>How do I review the images?</h3>
      <p>Due to the fact that it takes a lot of time and processing to create the perfect “virtual tour” you can only review once it is live. We notify clients of the exact moment it goes online.</p>

      <h3>Who owns the images?</h3>
      <p>You own the images, and you licence them to Google to use on their walk through.</p>

      <h3>How do you ensure privacy?</h3>
      <p>People’s faces are blurred, and you can exclude whatever areas from the shoot that you need – this is your own photo shoot and you are in control of it.</p>

      <h3>How many people will be in the shoot?</h3>
      <p>We want the focus of the shoot to be your business so we aim to exclude people from the shots as much as possible.</p>

      <h3>Are there usually disruptions to the business?</h3>
      <p>Our project manager will sort with you the best time of day and the best way to complete the shoot with the minimum of disruption.</p>

      <h3>How long will it take?</h3>
      <p>Our team are efficient and organised and shoots are completed between 1 hour and 2 hours for small or medium businesses. For larger businesses it can take up to 5 hours to get the job done right.</p>

      <h3>What will I pay?</h3>
      <p>The cost comes down to size, amount of sites and the length of time that the project takes.</p>

      <h3>Which parts of my business will you shoot?</h3>
      <p>We concentrate on the main customer-facing parts of your business. Our photographers work closely with you to determine what parts you feel show the business the best and ensure that this is built into the photo-shoot; after all, you know your business the best!</p>

      <h3>What is a "Google Trusted Photographer"?</h3>
      <p>A photographer that is certified by Google will have passed all the exams and requirements to demonstrate that they can create shoots to enhance a business reputation through Google Street view technology.</p>

      <h3>Can I do this myself?</h3>
      <p>A photographer can become “Google Trusted” by having a set amount of experience and awareness of the techniques we use such as rotating turrets, fish eye lenses, specific tripods and cameras and knowledge of how the 360o image is built up.</p>

      <h3>How will this help my business?</h3>
      <p>Potential clients can see exactly how your business looks. This will also increase your exposure on Google and provide interest for potential clients. In turn, we see sales increase due to enhanced exposure for your company.</p>

      </Col>

      </Row>
      </Grid>
    );
  }
};
