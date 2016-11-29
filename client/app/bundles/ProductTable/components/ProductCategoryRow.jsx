import React, { PropTypes } from 'react';

class ProductCategoryRow extends React.Component {

  render() {

    let { category } = this.props

    return (
      <div>
        <p>Category name: {category} </p>
      </div>
    )
  }
}

export default ProductCategoryRow
