import React, {Component, useState} from "react";

import "./components.scss";

function ProductForm() {
  const [productData, setProductData] = useState({
    product: "",
    count: "",
    price: "",
    promotionalPrice: "",
  });

  const handleInputChange = (field, event) => {
    return setProductData({[field]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <div>
        <label className="label" htmlFor="">Product name</label>
        <input name="product" type="text" value={ productData.product } onChange={handleInputChange}/>
        <label className="label" htmlFor="">Items count</label>
        <input name="count" type="text" value={ productData.count } onChange={handleInputChange}/>
        <label className="label" htmlFor="">Price</label>
        <input name="price" type="text" value={ productData.price } onChange={handleInputChange}/>
        <label className="label" htmlFor="">Promotional Price</label>
        <input name="promotionalPrice" type="text" value={ productData.promotionalPrice } onChange={handleInputChange}/>
        <input className="button" type="submit" value="Aceptar" />
      </div>
    </div>
  );
}

export default ProductForm;
