import React, { Component } from 'react';

class SingleReply extends Component {
  render() {

    // console.log(this.props.reply_user)
    return (<div>
    <ul>  {this.props.reply_user.username} replied: {this.props.reply.entry} </ul>
      </div>
    );
  }
}

export default SingleReply;
