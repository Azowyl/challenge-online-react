import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import './styles.scss';
import {ReactComponent as TnLogo} from './img/tn.svg';
import ProductList from "./components/ProductList/ProductList";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="app layout">
      <aside>
        <header> <TnLogo className="svg"/> </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact data-testId="ProductListLink">
                Product List
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active" data-testId="ProductsLink">
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Products</h1>
        </header>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/products" component={ProductForm} />
        </Switch>
      </main>
    </div>
  );
}

export default React.memo(App);
