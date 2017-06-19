import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import React from 'react';
import ReactDOM from 'react-dom';
import CurrentPicklist from './CurrentPicklist';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducer';


const initialState = {
  sidebar: { show: false }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}><CurrentPicklist /></Provider>,
  document.getElementById('current-picklist-container')
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

$('#sidebar').hide();

$('#sidebar').droppable({
  drop: (event, ui) => {
    const textToAdd = ui.draggable[0].innerText.split('\t').slice(0,3).join(' ');
    $('.card-body > ul').append(`<li>${textToAdd}</li>`);
  }
});

$('.entry').draggable({
  helper: 'clone',
  zIndex: 100
});
