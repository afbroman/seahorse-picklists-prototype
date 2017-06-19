import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { Button } from 'react-bootstrap';
import Actions from './Actions';

class CurrentPicklist extends Component {
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
