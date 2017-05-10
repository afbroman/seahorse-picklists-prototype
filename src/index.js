import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PicklistSidebar from './PicklistSidebar';
import CurrentPicklist from './CurrentPicklist';
import './index.css';

ReactDOM.render(
  <PicklistSidebar />,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <CurrentPicklist />,
  document.getElementById('current-picklist-container')
);
