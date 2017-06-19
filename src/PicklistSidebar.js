import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class PicklistSidebar extends Component {
  render() {
    if (this.props.show) {
      $('#sidebar').show();
      $('#filter-form').toggle('slide', {direction: 'up', duration: 200});
      $('#main-content').toggleClass('col-12 col-8');
      $('#sidebar').toggleClass('col-0 col-4');
    } else {
      $('#sidebar').hide();
      $('#filter-form').toggle('slide', {direction: 'up', duration: 200});
      $('#main-content').toggleClass('col-12 col-8');
      $('#sidebar').toggleClass('col-0 col-4');
    }

    return (
      <div className="card">
        <div className="picklist-sidebar card-block">
          <div className="card-title">Picklist: Jones 2017-05</div>
          <div className="card-body">
            <ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    show: state.sidebar.show
  };
}

export default connect(mapStateToProperties)(PicklistSidebar);
