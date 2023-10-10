import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Product from "./Product";

const data = { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 };

describe("Render Product", () => {
  let renderComponent;

  beforeEach(() =>
    renderComponent = () => render(
      <Product
        name={data.name}
        count={data.count}
        price={data.price}
        promotionalPrice={data.promotionalPrice}
      />
    )
  );

  it('renders Product correctly', () => {
    expect(renderComponent().asFragment()).toMatchSnapshot();
  })
});
