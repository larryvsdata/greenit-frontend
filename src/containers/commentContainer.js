import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getTopics , getOneTopic} from '../actions';
import CommentList from "../components/comment/commentList"
import CommentForm from "../components/comment/commentForm"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class CommentContainer extends Component {
  componentDidMount = () => {
    console.log('Mounted');
    this.props.getTopics();
    this.props.getOneTopic(this.props.match.params.id);
  }

  render() {

    const styles = {
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -18,
        marginRight: 10,
      },
    };
// key ={i} todo={todo} deleteTodo = {this.props.deleteTodo }
     // console.log(this.props.oneTopic.users);
    // console.log(this.props.match.params.id);
    // console.log(this.props.oneTopic.topic)
    return (




      <div className="Topics">

        {this.props.loading ? <li>Loading...</li> : null}
          <div>

            <CommentList   topic_id={this.props.match.params.id} topic={this.props.oneTopic} comments={this.props.commentsOfTopic} users={this.props.oneTopic.users}
            replies={this.props.oneTopic.replies} reply_users={this.props.oneTopic.reply_users}/>
          </div>
            <CommentForm   topic_id={this.props.match.params.id}/>
            
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    oneTopic: state.topics.oneTopic,
    commentsOfTopic: state.topics.oneTopic.comments,
    loading: state.topics.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(getTodos)
  return bindActionCreators({   getTopics , getOneTopic}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
