import React, { PropTypes } from 'react';
// import './ProductTable.css'
import SearchBar from './SearchBar'
import Overview from './Overview'

// Simple example of a React "smart" component
export default class ProductTable extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(React.PropTypes.object).isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { products: JSON.parse(this.props.products) };
  }

  render() {
    const { products } = this.state

    return (
      <div className='container'>
        <SearchBar />
        <Overview products = { products } />
      </div>
    );
  }
}
