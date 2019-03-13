import topicsReducer from './topicsReducer';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

export default combineReducers( {topics: topicsReducer , comments: commentsReducer , users: usersReducer});
