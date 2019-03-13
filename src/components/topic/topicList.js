import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getTopics , deleteOneTopic } from '../../actions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import   '../../css_files/comments_replies.css';
import faker from 'faker';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
});

class TopicList extends Component {
  componentDidMount = () => {

    this.props.getTopics();

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

    let allTopics="";
      if (this.props.topics)
        {
         allTopics = this.props.topics.map((topic, i) =>
        (
          <div>
          <Paper >
              <Grid container wrap="nowrap" spacing={16}>
                  <Grid item>
                      <Avatar>Topic</Avatar>
                  </Grid>
            <Grid item xs>
                <Typography>
                <div>
                    <li><Link key={`mykey + ${i}`} to={`/topics/${topic.id}`} > {topic.title}</Link></li>
                
                </div>

                      <ol>{topic.description}</ol>

                    <div>
                      <a href="/" classname="photo">
                        <img alt="avatar" src={faker.image.avatar()}/>
                       </a>
                     </div>
                    <Button variant="contained" color="secondary"
                     key={`a${i}`} onClick={() => this.props.deleteOneTopic(topic.id)}>Delete Topic</Button>

                </Typography>
           </Grid>
          </Grid>
          </Paper>


          </div>
        )
      );}
    else
        {
        allTopics = ""
      }

    return (

      <div className="Topics">
        {this.props.loading ? <li>Loading...</li> : null}
          <div>

            {allTopics}
          </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    topics: state.topics.topics,
    loading: state.topics.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(getTodos)
  return bindActionCreators({   getTopics , deleteOneTopic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
