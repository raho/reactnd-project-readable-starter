import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = ({categories}) => (
  <nav className="navbar navbar-expand navbar-dark bg-black">
    <Link className="navbar-brand" to="/">Readable</Link>
    <div className="navbar-nav">
      {categories.all.map(category => (
        <Link 
          key={category.path} 
          className={'nav-item nav-link ' + (categories.current === category.name ? 'active' : '')} 
          to={`/${category.path}`}>{category.name}</Link>
      ))} 
    </div>
  </nav>
);

const mapStateToProps = ({categories}) => {
  return {
    categories
  }
};

export default connect(mapStateToProps)(Navigation);
