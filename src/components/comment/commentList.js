import React, { Component } from 'react';
import SingleComment from './singleComment.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import CommentForm from './commentForm';
import { getOneComment , getComments , getOneTopic , deleteOneComment} from '../../actions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

class CommentList extends Component {
  componentDidMount = () => {
    this.props.getOneTopic(this.props.topic_id);
     this.props.getComments();

  }



  render() {
    const styles = theme => ({
      button: {
        margin: theme.spacing.unit,
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 20,
      },
    });


    let allComments="";
      if (this.props.oneTopic.comments)
        {
         allComments = this.props.oneTopic.comments.map((comment, i) =>
        (
          <div>

          <SingleComment topic_id={this.props.topic_id} comment={comment} user={this.props.users[i]} replies={this.props.replies[i]}
          reply_users={this.props.reply_users[i]} />

            <Button variant="contained" color="secondary"
           key={`a${i}`} onClick={() => this.props.deleteOneComment(this.props.topic_id , comment.id)}>
           Delete Comment
           </Button>

          </div>
        )
      );}
    else
        {
        allComments = "";
      }
    return (

      <div>

      {allComments}

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
  return bindActionCreators({    getComments , getOneTopic , deleteOneComment}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
