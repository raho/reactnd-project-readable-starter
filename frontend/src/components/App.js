import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions'

class App extends Component {
  // TODO: categories listing should be a separate component?
  // TODO: implement and style the categories, just like in medium
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
          <ul>
            {categories.map(category => (
              <li key={category.name}>
                {category.name}
              </li>
            ))} 
          </ul>
        </header>
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
