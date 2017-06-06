import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import React from 'react';
import ReactDOM from 'react-dom';
import PicklistSidebar from './PicklistSidebar';
import CurrentPicklist from './CurrentPicklist';
import SampleTypeModal from './SampleTypeModal';
import FilterForm from './FilterForm';
import ResultsList from './ResultsList';
import './index.css';

let modalInstance = ReactDOM.render(
  <SampleTypeModal />,
  document.getElementById('modal-container')
);

ReactDOM.render(
  <PicklistSidebar />,
  document.getElementById('sidebar')
);

$('#sidebar').droppable({
  drop: (event, ui) => {
    const textToAdd = ui.draggable[0].innerText.split('\t').slice(0,3).join(' ');
    $('.card-body > ul').append(`<li>${textToAdd}</li>`);
  }
});


ReactDOM.render(
  <CurrentPicklist />,
  document.getElementById('current-picklist-container')
);

ReactDOM.render(
  <FilterForm />,
  document.getElementById('filter-form-container')
);

ReactDOM.render(
  <ResultsList />,
  document.getElementById('results')
);

$('.entry').draggable({
  helper: 'clone',
  zIndex: 100
});
