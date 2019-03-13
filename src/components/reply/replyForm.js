import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postOneReply , getOneTopic} from  '../../actions';

class ReplyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ''

    }
  }

  handleChangeEntry = (e) => {
    this.setState({
      entry: e.target.value
    })
  }



  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postOneReply(this.props.topic_id , this.props.comment_id ,this.state);
    // this.props. getOneTopic(this.props.topic_id);
    this.setState({
      entry: ''
    })
  }

  render() {
    // console.log("Refresh:");
    // console.log(this.props.refresh );
    // console.log(this.props.topic_id , this.props.comment_id);
    return (
      <div>
      <h2>Post a Reply: </h2>
      <form onSubmit={this.handleSubmit}>

        <input type="text" onChange={this.handleChangeEntry} value={this.state.entry} name="reply" /><br/>
        <input type="submit" value="REPLY" />
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    oneTopic: state.topics.oneTopic,
    loading: state.topics.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postOneReply, getOneTopic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm)
