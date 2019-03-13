import React, { Component } from 'react';
import SingleReply from './singleReply.js'
import ReplyForm from './replyForm.js'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { postOneReply , getOneTopic} from  '../../actions';
class ReplyList extends Component {
  componentDidMount = () => {

    this.props.getOneTopic(this.props.topic_id);

  }

  render() {
    // console.log(this.props.oneTopic.reply_users);
    // console.log(this.props.topic_id);
    // console.log(this.props.comment_id);
    let allReplies="";
      if (this.props.replies)
        {
         allReplies = this.props.replies.map((reply, i) =>
        (
          <div>

          <SingleReply reply={reply}  reply_user={this.props.reply_users[i]}/>
          </div>
        )
      );}
    else
        {
        allReplies = ""
      }

    return (
      <div>{allReplies}</div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    oneTopic: state.topics.oneTopic,
    loading: state.topics.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({  getOneTopic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyList);
