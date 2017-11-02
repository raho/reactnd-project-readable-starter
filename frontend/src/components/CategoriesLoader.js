import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, setCurrentCategory } from '../actions/CategoriesActions';

class CategoriesLoader extends Component {

  componentDidMount() {
    this.props.fetchCategories()
    .then(() => this.props.setCurrentCategory(this.props.currentCategoryPath));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currentCategoryPath !== nextProps.currentCategoryPath) {
      this.props.setCurrentCategory(nextProps.currentCategoryPath);
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = ({categories}, ownProps) => {
  return {
    currentCategoryPath: ownProps.match.params.category,
    categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  setCurrentCategory: (categoryPath) => dispatch(setCurrentCategory(categoryPath))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesLoader);
