import React, { PropTypes } from 'react';
import './ProductTable.css'
import SearchBar from './SearchBar'
import AddBar from './AddBar'
import Overview from './Overview'

// Simple example of a React "smart" component
export default class ProductTable extends React.Component {
  static propTypes = {
    products: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { products: JSON.parse(this.props.products), filterText: '', inStockOnly: false };
  }


  updateSearch = (filterText) => { this.setState({ filterText }); };

  refreshProducts() {
    var that = this;
    $.getJSON('/products').success(function(data) {
      console.log('We are refreshing after AJAX...');
      that.setState({ products: data});
    } );
  }

  render() {
    const { products, filterText, inStockOnly } = this.state

    return (
      <div className='container'>
        <AddBar refreshProducts = { this.refreshProducts.bind(this) } />
        <SearchBar filterText = { filterText } inStockOnly = { inStockOnly } updateSearch = {this.updateSearch} />
        <Overview products = { products } filterText = { filterText } inStockOnly = { inStockOnly } />
      </div>
    );
  }
}
