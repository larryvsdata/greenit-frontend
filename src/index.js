import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import TopicContainer from './containers/topicContainer'
import CommentContainer from './containers/commentContainer';
import UserContainer from './containers/userContainer';
import UserComponent from './components/user/userComponent';
import About from './components/About';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
// import {Router , Route , hashHistory } from 'react-router';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>


    <Router >
    <div>
      <Route    path="/" component={NavigationBar} />
      <Route   exact path="/topics" component={TopicContainer} />
      <Route  exact path="/topics/:id" component={CommentContainer}/>
      <Route  exact path="/users/:id" component={UserContainer}/>
      <Route  exact path="/about" component={About}/>
      <Route  exact path="/contact" component={Contact}/>
      
    </div>
    </Router>

  </Provider>)
  ,document.getElementById('root'));

  serviceWorker.unregister();
