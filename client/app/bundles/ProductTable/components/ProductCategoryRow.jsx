import React, { PropTypes } from 'react';
import './ProductCategoryRow.css'

class ProductCategoryRow extends React.Component {

  render() {

    let { category } = this.props

    return (
      <div className='categoryrow'>
        <p>{category} </p>
      </div>
    )
  }
}

export default ProductCategoryRow
