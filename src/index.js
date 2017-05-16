import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import React from 'react';
import ReactDOM from 'react-dom';
import PicklistSidebar from './PicklistSidebar';
import CurrentPicklist from './CurrentPicklist';
import SampleTypeModal from './SampleTypeModal';
import './index.css';

$('.entry').draggable({revert: true});
$('#sidebar').droppable({
  drop: (event, ui) => {
    console.log('dropped');
  }
});

ReactDOM.render(
  <PicklistSidebar />,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <CurrentPicklist />,
  document.getElementById('current-picklist-container')
);

ReactDOM.render(
  <SampleTypeModal />,
  document.getElementById('modal')
);
