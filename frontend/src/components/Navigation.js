import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  render() {
    const currentCategoryPath = this.props.match.params.category;
    const { categories } = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-black">
        <Link className="navbar-brand" to="/">Readable</Link>
        <div className="navbar-nav">
          {categories.map(category => (
            <Link 
              key={category.path} className={'nav-item nav-link ' + (currentCategoryPath === category.path ? 'active' : '')} 
              to={`/${category.path}`}>{category.name}</Link>
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

export default connect(mapStateToProps)(Navigation);
