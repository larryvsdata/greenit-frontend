import React, { Component } from 'react';

import TopicList from '../components/topic/topicList'
import TopicForm from '../components/topic/topicForm'

class TopicContainer extends Component {
  render() {
    return (
      <div className="App">

          <TopicList/>
          <TopicForm/>
          
      </div>
    );
  }
}

export default TopicContainer;
