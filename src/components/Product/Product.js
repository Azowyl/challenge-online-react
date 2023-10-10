import React from "react";

import "./Product.scss";
import {PencilIcon, TrashIcon} from "@tiendanube/icons";
import IconButton from "../Button/IconButton";

const Product = ({ name, count, price, promotionalPrice, onDelete, onEdit }) => {
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
          <IconButton
              icon={<PencilIcon />}
              onClick={onEdit}
              data-testid={`EditProduct-${name}`}
          />
      </span>
    </div>
  );
};

export default Product;
