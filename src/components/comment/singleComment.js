import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getOneComment , getComments, getOneTopic} from '../../actions';
import ReplyList from "../reply/replyList";
import ReplyForm from "../reply/replyForm";


class SingleComment extends Component {
  componentDidMount = () => {
      this.props.getOneTopic(this.props.topic_id);

  }

  render() {
    // console.log(this.props.comment.id);
    let allReplies="";
      if (this.props.replies)
        {

      allReplies=<ReplyList topic_id={this.props.topic_id} comment_id={this.props.comment.id}
      replies={this.props.replies} reply_users={this.props.reply_users} /> ;
    }
    else
        {
        allReplies = ""
      }
    return (
      <div >
    <li>    {this.props.user.username} commented:   {this.props.comment.entry} </li>

      <div >
      {allReplies}
      <ReplyForm topic_id={this.props.topic_id} comment_id={this.props.comment.id}/>
      </div>

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
  return bindActionCreators({    getComments, getOneTopic}, dispatch);
}


export default connect(null, mapDispatchToProps)(SingleComment);
