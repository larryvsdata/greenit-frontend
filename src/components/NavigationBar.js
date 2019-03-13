import React, { Component } from 'react';
import "../css_files/navigation.css";
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {

    return (
      <div class="One">
        <ul >
          <li class="Three Two"><Link  to={`/topics/`} > Home</Link> </li>
          <li class="Three Two">  <Link  to={`/About`} > About</Link> </li>
          <li class="Three Two">  <Link  to={`/Contact`} > Contact</Link> </li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;
