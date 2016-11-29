import React, { PropTypes } from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class Overview extends React.Component {

  renderProducts(product, index) {
    return <ProductRow key={ index } { ...product } />
  }

  render() {

    const { products, filterText, inStockOnly } = this.props

    function checkName(product) {
      return product.name.startsWith(filterText) ;
    }

    var filteredProducts = products.filter(checkName)

    return (
      <div>
        <p>Name / Price</p>
        <ProductCategoryRow />
        <ul>
          { filteredProducts.map(this.renderProducts.bind(this)) }
        </ul>
      </div>
    )
  }
}

export default Overview
