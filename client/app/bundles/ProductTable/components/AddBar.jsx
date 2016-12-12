import React, { PropTypes } from 'react';

class AddBar extends React.Component {

  addProduct(e) {
    const { refreshProducts } = this.props
    e.preventDefault();
    var productname=document.getElementById('addProduct').value;
    var category=document.getElementById('addCat').value;
    var price=document.getElementById('addPrice').value;
    var product = { "product": {"name": productname, "category": category, "price": price, "stocked": true} }
    $.ajax({
      type: "POST",
      url: "/products",
      dataType: "json",
      data: product,
      success: function(data) {
        console.log("successfull AJAX post: " + productname );
        refreshProducts();
      },
      error: function(data) {
        console.log("failed AJAX pots: " + productname );
      },
    });
    var form = document.getElementById("addProductForm");
    form.reset();
  }

  render() {
    return (
      <div>
        <form id='addProductForm'>
          <label>Product name:</label>
          <input className='inputfield'
            type='text' id='addProduct'
          ></input>
          <label>Category:</label>
          <input className='inputfield'
            type='text' id='addCat'
          ></input>
          <label>Price:</label>
          <input className='inputfield'
            type='text' id='addPrice'
          ></input>
          <button onClick={ this.addProduct.bind(this) }>Add to list</button>
        </form>
      </div>
    )
  }
}

export default AddBar
