import React, { Component } from 'react';

import UserComponent from '../components/user/userComponent'

class UserContainer extends Component {
  render() {
    return (
      <div >

          <UserComponent id={this.props.match.params.id}/>

      </div>
    );
  }
}

export default UserContainer;
