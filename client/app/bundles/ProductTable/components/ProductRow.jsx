import React, { PropTypes } from 'react';

class ProductRow extends React.Component {

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render() {

    let { product } = this.props

    return (
      <li>
        <div>{ product.name }   { product.price }</div>
      </li>
    )
  }
}

export default ProductRow
