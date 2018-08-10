import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./components/Form"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="">FoodMN</h1>
          <h3>Choose a restaurant for me!</h3>
        </header>
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
