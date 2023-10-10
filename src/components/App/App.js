import React from 'react';
import ProductListProvider from "../Providers/ProductListProvider";
import './app.scss';
import NavBar from "./NavBar";
import PageTitle from "./PageTitle";
import Routes from "./Routes";

function App() {
  return (
    <div className="app layout">
      <NavBar />
      <ProductListProvider>
        <main>
          <PageTitle />
          <Routes />
        </main>
      </ProductListProvider>
    </div>
  );
}

export default React.memo(App);
