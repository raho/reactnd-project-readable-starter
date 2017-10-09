import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Navigation}/>
        <Route path="/cat/:cat" component={Navigation}/>
      </div>
    );
  }
}

export default App;
