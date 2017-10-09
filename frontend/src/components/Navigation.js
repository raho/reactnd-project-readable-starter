import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions'
import { Link } from 'react-router-dom';

class Navigation extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const currentCategoryPath = this.props.match.params.cat;
    const { categories } = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-black">
        <Link className="navbar-brand" to="/">Readable</Link>
        <div className="navbar-nav">
          {categories.map(category => (
            <Link 
              key={category.path} className={'nav-item nav-link ' + (currentCategoryPath === category.path ? 'active' : '')} 
              to={`/cat/${category.path}`}>{category.name}</Link>
          ))} 
        </div>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
