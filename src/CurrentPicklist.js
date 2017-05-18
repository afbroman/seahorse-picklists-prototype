import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { Button } from 'react-bootstrap';

class CurrentPicklist extends Component {
  toggleSidebar() {
    $('#filter-form').toggle('slide', {direction: 'up', duration: 200});
    $('#sidebar').toggle('slide', {direction: 'right', duration: 200});
  }

  render() {
    return (
      <Button id="current-picklist" onClick={this.toggleSidebar}>Current Picklist: Jones 2017-05</Button>
    );
  }
}

export default CurrentPicklist;
