import React, { PropTypes } from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import './Overview.css'
class Overview extends React.Component {

  renderProducts(products) {
    var list = [];
    var actualCategory = null;
    products.forEach((product) => {
      if (product.category !== actualCategory) {
        list.push(<ProductCategoryRow category={product.category} />);
      }
      list.push(<ProductRow product={product} />);
      actualCategory = product.category;
    });
    return list;
  }

  render() {

    const { products, filterText, inStockOnly } = this.props

    var orderedProducts = products.sort(function(a, b){
      var categoryA=a.category.toLowerCase(), categoryB=b.category.toLowerCase()
      if (categoryA < categoryB) //sort string ascending
          return -1
      if (categoryA > categoryB)
          return 1
      return 0 //default return value (no sorting)
    })

    function checkName(product) {
      return product.name.toLowerCase().includes(filterText.toLowerCase()) ;
    }

    var filteredProducts = orderedProducts.filter(checkName)

    return (
      <div>
        <ul className='productlist'>
          { this.renderProducts(filteredProducts) }
        </ul>
      </div>
    )
  }
}

export default Overview
