import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { Button } from 'react-bootstrap';
import Actions from './Actions';

class CurrentPicklist extends Component {
  toggleSidebar() {
    $('#filter-form').toggle('slide', {direction: 'up', duration: 200});
    $('#main-content').toggleClass('col-12 col-8');
    $('#sidebar').toggleClass('col-0 col-4');
    $('#sidebar').toggle();
  }

  render() {
    return (
      <Button id="current-picklist" onClick={this.props.toggleSidebarState}>Current Picklist: Jones 2017-05</Button>
    );
  }
}

function mapStateToProperties(state) {
}

export const actionCreators = {
  toggleSidebarState: () => {
    return {
      type: Actions.sidebarStateToggled
    }
  }
};

export default connect(mapStateToProperties, actionCreators)(CurrentPicklist);
