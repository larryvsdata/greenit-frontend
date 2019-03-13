import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {  getOneUser} from '../../actions';


class UserComponent extends Component {
  componentDidMount = () => {


    this.props.getOneUser(this.props.id);
  }

  render() {
     console.log(this.props.oneUser);
    // console.log(this.props.match.params.id);
    let allReplies="";
      if (this.props.oneUser.replies)
        {
         allReplies = this.props.oneUser.replies.map((reply, i) =>
        (
          <div>
          {reply.entry}
          </div>
        )
      );}
    else
        {
        allReplies = ""
      }

      let allComments="";
        if (this.props.oneUser.comments)
          {
           allComments = this.props.oneUser.comments.map((comment, i) =>
          (
            <div>
            {comment.entry}
            </div>

          )
        );}
      else
          {
          allComments = ""
        }

    return (

      <div className="Topics">
        {this.props.loading ? <li>Loading...</li> : null}
          <div>

          <h1>{this.props.oneUser.username}</h1>

          </div>

          <div>
          <h2>Comments:</h2>
          {allComments}
          </div>

          <div>
          <h2>Replies:</h2>
          {allReplies}
          </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    oneUser: state.users.oneUser,
    loading: state.users.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(getTodos)
  return bindActionCreators({   getOneUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
