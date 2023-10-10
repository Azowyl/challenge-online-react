import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import App from "./App";

describe('App', () => {
    let renderComponent;

    beforeEach(() => {
        renderComponent = () => render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    })

    describe('when adding a new product', () => {
        beforeEach(async () => {
            renderComponent();

            await userEvent.click(screen.getByTestId('ProductsLink'));

            await userEvent.type(screen.getByLabelText('Product name'), 'Test product');
            await userEvent.type(screen.getByLabelText('Items count'), '5');
            await userEvent.type(screen.getByLabelText('Price'), '21');
            await userEvent.type(screen.getByLabelText('Promotional Price'), '17');
            await userEvent.click(screen.getByRole('button', {name: 'Aceptar'}));
        })

        it('adds new product to the list', async () => {
            await userEvent.click(screen.getByTestId('ProductListLink'));

            expect(screen.getByText('Test product')).toBeInTheDocument();
            expect(screen.getByText('5')).toBeInTheDocument();
            expect(screen.getByText('21')).toBeInTheDocument();
            expect(screen.getByText('17')).toBeInTheDocument();
        })
    })

    describe('when trying to add an invalid product', () => {
        beforeEach(async () => {
            renderComponent();

            await userEvent.click(screen.getByTestId('ProductsLink'));

            await userEvent.type(screen.getByLabelText('Product name'), 'Test product');
            await userEvent.click(screen.getByRole('button', {name: 'Aceptar'}));
        })

        it('does not add it to the list', async () => {
            await userEvent.click(screen.getByTestId('ProductListLink'));

            expect(screen.queryByText('Test product')).not.toBeInTheDocument();
        })
    })
})