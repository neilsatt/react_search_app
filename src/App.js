import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Products from './Products';


class App extends Component {
  render() {
    const isValid = true;

    return (
      <div>
          <h1>First App</h1>
          <Products />
          <Button bsStyle="primary" disabled={!isValid}>default</Button>
      </div>
    );
  }
}

export default App;
