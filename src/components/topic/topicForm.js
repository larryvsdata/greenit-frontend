import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postOneTopic } from  '../../actions';
import   '../../css_files/form.css';
import   '../../css_files/topic_form.css';
class TopicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    }
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postOneTopic(this.state);
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {
    return (
      <div >
      <h2 >Post a Topic: </h2>
      <form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <input type="text" onChange={this.handleChangeTitle} value={this.state.title} name="title" /><br/>
        <label >Description: </label>
        <input type="text" onChange={this.handleChangeDescription} value={this.state.description} name="description" /><br/>
        <input type="submit" value="Post Topic" />
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postOneTopic }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopicForm)
