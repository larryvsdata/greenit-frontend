import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopicContainer from './containers/topicContainer'

class App extends Component {
  render() {
    return (
      <div >
        <header >
          <TopicContainer/>
        </header>
      </div>
    );
  }
}

export default App;
