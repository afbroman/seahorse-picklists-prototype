import React, { Component } from 'react';
import PicklistSidebar from './PicklistSidebar';
import SampleTypeModal from './SampleTypeModal';
import FilterForm from './FilterForm';
import ResultsList from './ResultsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div id="main-content" className="col-12">
            <FilterForm />
            <ResultsList />
          </div>
          <div id="sidebar" className="col-0">
            <PicklistSidebar />
          </div>
        </div>
        <SampleTypeModal />
      </div>
    );
  }
}

export default App;
