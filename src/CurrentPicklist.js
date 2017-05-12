import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';

class CurrentPicklist extends Component {
  toggleSidebar() {
    $('#sidebar').toggle('slide', {direction: 'right', duration: 200});
  }

  render() {
    return (
      <button id="current-picklist" onClick={this.toggleSidebar}>Current Picklist: Jones 2017-05</button>
    );
  }
}

export default CurrentPicklist;
