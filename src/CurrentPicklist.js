import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';

class CurrentPicklist extends Component {
  displaySidebar() {
    $('#sidebar').switchClass('col-0', 'col-6');
    $('#results').switchClass('col', 'col-6');
  }

  render() {
    return (
      <button id="current-picklist" onClick={this.displaySidebar}>Current Picklist: Jones 2017-05</button>
    );
  }
}

export default CurrentPicklist;
