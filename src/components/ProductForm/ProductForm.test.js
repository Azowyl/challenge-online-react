import React from 'react';
import ProductListProvider from "../Providers/ProductListProvider";
import {render, screen} from "@testing-library/react";
import ProductForm from "./ProductForm";
import userEvent from "@testing-library/user-event";

describe('ProductForm', () => {
    let renderComponent;

    beforeEach(() => {
        renderComponent = () => render(
            <ProductListProvider>
                <ProductForm />
            </ProductListProvider>
        );
    })

    it('renders form correctly', () => {
        expect(renderComponent().asFragment()).toMatchSnapshot();
    });

    describe('error validation', () => {
        beforeEach(async () => {
            renderComponent();

            await userEvent.type(screen.getByLabelText('Product name'), 'Test product');
            await userEvent.type(screen.getByLabelText('Items count'), '5');
            await userEvent.type(screen.getByLabelText('Price'), '21');
            await userEvent.type(screen.getByLabelText('Promotional Price'), '17');
        });

        it.each(['Product name', 'Items count', 'Price', 'Promotional Price'])
        ('when %s is empty, it shows an error message', async (field) => {
            await userEvent.clear(screen.getByLabelText(field));
            await userEvent.click(screen.getByRole('button', {name: 'Aceptar'}));

            expect(screen.getByText('This field is required')).toBeInTheDocument();
        })
    })
});