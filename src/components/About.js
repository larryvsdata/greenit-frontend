import React, { Component } from 'react';
import '../css_files/static_pages.css'

class About extends Component {
  render() {

    return (
      <div classname="Static_Page">
        <h1>About</h1>

        <p>
        Thanks for using GreenIt. GreenIt aims to be a simpler duplicate of Reddit. GreenIt comes with absolutely
        no warranty. </p>

        <p>Happy commenting!</p>
      </div>
    );
  }
}

export default About;
