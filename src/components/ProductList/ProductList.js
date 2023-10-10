import React from "react";
import Product from "../Product/Product";
import "./_product-list.scss";
import {useProductContext} from "../Providers/ProductListProvider";

const ProductList = () => {
    const { productList } = useProductContext();

  return (
    <section>
      <h2>Product list</h2>
      <div className="header-table">
        <ul>
          <li>Product</li>
          <li>Count</li>
          <li>Price</li>
          <li>Promotional Price</li>
        </ul>
      </div>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.name}>
            <Product
              name={product.name}
              count={product.count}
              price={product.price}
              promotionalPrice={product.promotionalPrice}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
