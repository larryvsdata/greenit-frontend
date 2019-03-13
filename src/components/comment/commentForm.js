import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postOneComment ,getComments ,getOneTopic} from  '../../actions';

class TopicForm extends Component {
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
    this.props.postOneComment(this.props.topic_id , this.state);
    // this.props.getOneTopic(this.props.topic_id);
    this.setState({
      entry: ''
    })
  }

  render() {
    // console.log("Refresh:");
    // console.log(this.props.refresh );
    return (
      <div>
      <h2>Post a Comment: </h2>
      <form onSubmit={this.handleSubmit}>

        <input type="text" onChange={this.handleChangeEntry} value={this.state.entry} name="title" /><br/>
        <input type="submit" value="Post" />
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postOneComment , getComments }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopicForm)
