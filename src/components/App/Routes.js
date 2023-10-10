import React from 'react';
import {Route, Switch} from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import ProductForm from "../ProductForm/ProductForm";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductForm} />
        </Switch>
    )
}

export default Routes;