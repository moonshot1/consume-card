import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cards from 'cards';
import data from './Data';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      card_data: data.card_data
    }
  }

  render() {
    return (
      <div className="App">
        <Cards parentObj={this.state.card_data}/>
      </div>
    );
  }
}

export default App;
