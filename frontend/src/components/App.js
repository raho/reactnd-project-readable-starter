import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions'
import {Link} from 'react-router-dom';

class App extends Component {
  // TODO: categories listing should be a separate component? => Navigation?
  // TODO: implement and style the categories, just like in medium
  // TODO: class 'active' for selected category
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-black">
          <Link className="navbar-brand" to="/">Readable</Link>
          <div className="navbar-nav">
            {categories.map(category => (
              <Link key={category.path} className="nav-item nav-link" to={category.path}>{category.name}</Link>
            ))} 
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
