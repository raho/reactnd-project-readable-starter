import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddPost from './AddPost';

const BlackNav = styled.nav`
  background-color: #222;
`;

const Navigation = ({categories}) => (
  <BlackNav className="navbar navbar-expand navbar-dark justify-content-between">
    <div className="navbar-nav">
    <Link className="navbar-brand" to="/">Readable</Link>
      {categories.all.map(category => (
        <Link 
          key={category.path} 
          className={'nav-item nav-link ' + (categories.current === category.name ? 'active' : '')} 
          to={`/${category.path}`}>{category.name}</Link>
      ))} 
    </div>
    <AddPost/>
  </BlackNav>
);

const mapStateToProps = ({categories}) => {
  return {
    categories
  }
};

export default connect(mapStateToProps)(Navigation);
