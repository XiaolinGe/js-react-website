import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import "./layout.scss";


export default class MyReactBootstrapButton extends React.Component {
  render() {
    return  (<div className='sass_test'>
      <p>this is sass test</p>
      <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
      </ButtonGroup>
      </div>);
  }
};
