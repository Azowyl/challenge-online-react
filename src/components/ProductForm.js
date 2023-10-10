import React, {Component, useState} from "react";

import "./components.scss";
import {useProductContext} from "../ProductListProvider";

function ProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    count: "",
    price: "",
    promotionalPrice: "",
  });
  const { addProduct } = useProductContext();

  const handleInputChange = (event) => {
    return setProductData({...productData, [event.target.id]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct(productData);
  }

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">Product name</label>
        <input id="name" name="product" type="text" value={ productData.product } onChange={handleInputChange}/>
        <label className="label" htmlFor="count">Items count</label>
        <input id="count" name="count" type="text" value={ productData.count } onChange={handleInputChange}/>
        <label className="label" htmlFor="price">Price</label>
        <input id="price" name="price" type="text" value={ productData.price } onChange={handleInputChange}/>
        <label className="label" htmlFor="promotionalPrice">Promotional Price</label>
        <input id="promotionalPrice" name="promotionalPrice" type="text" value={ productData.promotionalPrice } onChange={handleInputChange}/>
        <input className="button" type="submit" value="Aceptar" />
      </form>
    </div>
  );
}

export default ProductForm;
