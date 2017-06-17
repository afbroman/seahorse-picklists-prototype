import React, { Component } from 'react';
import logo from './logo.svg';
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
          <div id="main-content" class="col-12">
            <FilterForm />
            <ResultsList />
          </div>
          <PicklistSidebar />
        </div>
        <SampleTypeModal />
      </div>
    );
  }
}

export default App;
