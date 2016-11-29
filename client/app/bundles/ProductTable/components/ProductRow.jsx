import React, { PropTypes } from 'react';

class ProductRow extends React.Component {

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render() {

    let { name, price } = this.props

    return (
      <li>
        <div>{ name }</div>
        <div>{ price }</div>
      </li>
    )
  }
}

export default ProductRow
