import React, {Component, useState} from "react";

import "./components.scss";

function ProductForm() {
  const [productData, setProductData] = useState({
    product: "",
    count: "",
    price: "",
    promotionalPrice: "",
  });

  const handleInputChange = (event) => {
    return setProductData({[event.target.id]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <div>
        <label className="label" htmlFor="product">Product name</label>
        <input id="product" name="product" type="text" value={ productData.product } onChange={handleInputChange}/>
        <label className="label" htmlFor="count">Items count</label>
        <input id="count" name="count" type="text" value={ productData.count } onChange={handleInputChange}/>
        <label className="label" htmlFor="price">Price</label>
        <input id="price" name="price" type="text" value={ productData.price } onChange={handleInputChange}/>
        <label className="label" htmlFor="name">Promotional Price</label>
        <input id="name" name="promotionalPrice" type="text" value={ productData.promotionalPrice } onChange={handleInputChange}/>
        <input className="button" type="submit" value="Aceptar" />
      </div>
    </div>
  );
}

export default ProductForm;
