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
    //$('#modal').innerHTML(ui.innerHTML);
    //$('#modal > ul').append(ui.draggable[0].innerText);
    //console.log(ui.draggable[0].innerText);
    console.log(document.getElementById('modalInstance'));
    const textToAdd = ui.draggable[0].innerText.split('\t').slice(0,3).join(' ');
    $('.card-body > ul').append(`<li>${textToAdd}</li>`);
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
