import React from 'react';
import './faq.scss';
import { Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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



  let faq = [
    {question: "How do I use the images on my own site?",
     answer: "Google Maps API allows simple, easy sharing. This is a great idea to do as it means that you are getting the maximum use out of your investment. Our team will be happy to show you how to do it if you have any questions."
    },
    {question: "If I change anything, can we re-shoot?",
     answer: "A change of style or seasonal adjustments to décor may mean that you want a re-shoot to show your business how it is at that moment. You can schedule a repeat shoot as many times as you like!"
    },
    {question: "Could Google remove my photos?",
     answer: "Only if they violate the existing policy of Google images, but you will be notified about this at the time if needed plus you will be given the standards that are expected, it is very rare that there are problems however."
    },
    {question: "How do I review the images?",
     answer: "Due to the fact that it takes a lot of time and processing to create the perfect “virtual tour” you can only review once it is live. We notify clients of the exact moment it goes online."
    },
    {question: "Who owns the images?",
     answer: "You own the images, and you licence them to Google to use on their walk through."
    },
    {question: "How do you ensure privacy?",
     answer: "People’s faces are blurred, and you can exclude whatever areas from the shoot that you need – this is your own photo shoot and you are in control of it."
    },
    {question: "How many people will be in the shoot?",
     answer: "We want the focus of the shoot to be your business so we aim to exclude people from the shots as much as possible."
    },
    {question: "Are there usually disruptions to the business?",
     answer: "Our project manager will sort with you the best time of day and the best way to complete the shoot with the minimum of disruption."
    },
    {question: "How long will it take?",
     answer: "Our team are efficient and organised and shoots are completed between 1 hour and 2 hours for small or medium businesses. For larger businesses it can take up to 5 hours to get the job done right."
    },
    {question: "What will I pay?",
     answer: "The cost comes down to size, amount of sites and the length of time that the project takes."
    }
];
