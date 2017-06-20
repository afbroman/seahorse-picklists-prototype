import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui-bundle';
import Actions from './Actions';

class PicklistSidebar extends Component {
  componentDidMount() {
    this.$node = $(this.refs.droppable);

    this.$node.droppable({
      drop: (event, ui) => {
        const textToAdd = ui.draggable[0].innerText.split('\t').slice(0,3).join(' ');
        $('.card-body > ul').append(`<li>${textToAdd}</li>`);
        this.props.visitDropped();
      }
    });
  }

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
      <div className="card" ref="droppable">
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

export const actionCreators = {
  visitDropped: () => {
    return {
      type: Actions.visitDropped
    };
  }
};

export default connect(mapStateToProperties, actionCreators)(PicklistSidebar);
