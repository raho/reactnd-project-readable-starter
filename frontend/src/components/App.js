import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Navigation}/>
        <Route path="/:category" component={Navigation}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default withRouter(connect(null, mapDispatchToProps)(App));
