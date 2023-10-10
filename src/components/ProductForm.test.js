import React from 'react';
import {render} from "@testing-library/react";
import ProductForm from "./ProductForm";

describe('ProductForm', () => {
    let renderComponent;

    beforeEach(() => {
        renderComponent = () => render(<ProductForm />);
    })

    it('renders ProductForm correctly', () => {
        expect(renderComponent().asFragment()).toMatchSnapshot();
    });
})