import React, { PropTypes } from 'react';
import './ProductRow.css'

class ProductRow extends React.Component {

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  availableProductCheck(product) {
    const redStyle = {
      color: 'red',
    }
    if (product.stocked == true ) {
      return (<span>{product.name}</span>)
    }
    return (<span style={redStyle}>{product.name}</span>)
  }

  render() {

    let { product } = this.props

    return (
      <li>
        <div className='product'>{ this.availableProductCheck(product) }</div>
        <div className='price'>{ product.price }</div>
      </li>
    )
  }
}

export default ProductRow
