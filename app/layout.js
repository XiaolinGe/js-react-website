import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';


export default class MyReactBootstrapButton extends React.Component {
  render() {
    return  (<div>
      <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
      </ButtonGroup>
      </div>);
  }
};
