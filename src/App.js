import React, { Component } from 'react';

import Header from './pages/header';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container-fluid">
          <div className="col-md-4">
            <h1>SideBar</h1>
          </div>
          <div className="col-md-8">
            <h1>Content</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
