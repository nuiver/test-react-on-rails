import React, { PropTypes } from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class Overview extends React.Component {

  renderProducts(product, index) {
    return <ProductRow key={ index } { ...product } />
  }

  render() {

    const { products } = this.props

    return (
      <div>
        <p>Name / Price</p>
        <ProductCategoryRow />
        <ul>
          { products.map(this.renderProducts.bind(this)) }
        </ul>
      </div>
    )
  }
}

export default Overview
