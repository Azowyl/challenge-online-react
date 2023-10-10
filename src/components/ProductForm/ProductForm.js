import React, {useState} from "react";
import {useProductContext} from "../Providers/ProductListProvider";
import Input from "../Input/Input";

import "./productForm.scss";
import BottomSpacer from "../Spacing/BottomSpacer";

function ProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    count: "",
    price: "",
    promotionalPrice: "",
  });
  const [errors, setErrors] = useState({
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

    let errors = {};
    Object.entries(productData).forEach(([key, value]) => {
        if (!value) {
            errors[key] = "This field is required";
        }
    });

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        addProduct(productData);
    }
  }

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <Input
            name="name"
            type="text"
            value={productData.name}
            onChange={handleInputChange}
            label="Product name"
            error={errors.name}
        />
        <BottomSpacer />
        <Input
            name="count"
            type="text"
            value={productData.count}
            onChange={handleInputChange}
            label="Items count"
            error={errors.count}
        />
        <BottomSpacer />
        <Input
            name="price"
            type="text"
            value={productData.price}
            onChange={handleInputChange}
            label="Price"
            error={errors.price}
        />
        <BottomSpacer />
        <Input
            name="promotionalPrice"
            type="text"
            value={productData.promotionalPrice}
            onChange={handleInputChange}
            label="Promotional Price"
            error={errors.promotionalPrice}
        />
        <BottomSpacer />

        <input className="button" type="submit" value="Aceptar" />
      </form>
    </div>
  );
}

export default ProductForm;
