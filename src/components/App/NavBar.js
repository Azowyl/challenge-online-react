import React from 'react';
import {NavLink} from "react-router-dom";
import {ReactComponent as TnLogo} from '../../img/tn.svg';

function NavBar() {
    return (
        <aside>
            <header> <TnLogo className="svg"/> </header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active" exact data-testid="ProductListLink">
                            Product List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active" data-testid="ProductsLink">
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default NavBar;