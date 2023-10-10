import React from "react";

import "./Product.scss";
import {TrashIcon} from "@tiendanube/icons";
import IconButton from "../Button/IconButton";

const Product = ({ name, count, price, promotionalPrice, onDelete }) => {
  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <span>{promotionalPrice}</span>
      <span>
          <IconButton
              icon={<TrashIcon />}
              onClick={onDelete}
              data-testid={`DeleteProduct-${name}`}
          />
      </span>
    </div>
  );
};

export default Product;
