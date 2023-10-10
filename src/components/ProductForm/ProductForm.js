import React, {useState} from "react";
import {useProductContext} from "../Providers/ProductListProvider";
import Input from "../Input/Input";

import "./productForm.scss";
import BottomSpacer from "../Spacing/BottomSpacer";
import SubmitButton from "../Button/SubmitButton";
import {CopyIcon, MoneyIcon, TagIcon, VolumeIcon} from "@tiendanube/icons";

function ProductForm({location}) {
  const [productData, setProductData] = useState(location.state || {
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

    const errors = getFormErrors();
    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        addProduct(productData);
    }
  }

  const getFormErrors = () => {
    let errors = {};
    Object.entries(productData).forEach(([key, value]) => {
      if (!value) {
        errors[key] = "This field is required";
      }
    });

    return errors;
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
            icon={<TagIcon />}
        />
        <BottomSpacer />
        <Input
            name="count"
            type="number"
            value={productData.count}
            onChange={handleInputChange}
            label="Items count"
            error={errors.count}
            icon={<CopyIcon />}
            min={0}
        />
        <BottomSpacer />

        <Input
            name="price"
            type="number"
            value={productData.price}
            onChange={handleInputChange}
            label="Price"
            error={errors.price}
            icon={<MoneyIcon />}
            min={0}
        />
        <BottomSpacer />
        <Input
            name="promotionalPrice"
            type="number"
            value={productData.promotionalPrice}
            onChange={handleInputChange}
            label="Promotional Price"
            error={errors.promotionalPrice}
            icon={<VolumeIcon />}
            min={0}
        />
        <BottomSpacer />

        <SubmitButton label="Aceptar" />
      </form>
    </div>
  );
}

export default ProductForm;
