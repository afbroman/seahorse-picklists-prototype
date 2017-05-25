import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { Button } from 'react-bootstrap';

class CurrentPicklist extends Component {
  toggleSidebar() {
    $('#filter-form').toggle('slide', {direction: 'up', duration: 200});
    $('#main-content').toggleClass('col-12 col-8');
    $('#sidebar').toggleClass('col-0 col-4');
    $('#sidebar').show();
  }

  render() {
    return (
      <Button id="current-picklist" onClick={this.toggleSidebar}>Current Picklist: Jones 2017-05</Button>
    );
  }
}

export default CurrentPicklist;
