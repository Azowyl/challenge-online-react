import React, {useCallback} from 'react';
import usePersistedState from "../../hooks/usePersistedState";

const ProductListContext = React.createContext({
    productList: [],
    addProduct: () => {},
});

function ProductListProvider({ children }) {
    const [productList, setProductList] = usePersistedState("productList", []);

    const addProduct = useCallback((product) => {
        setProductList([...productList, product]);
    }, [setProductList]);

    return (
        <ProductListContext.Provider value={{ productList: productList, addProduct }}>
            {children}
        </ProductListContext.Provider>
    )
}

export const useProductContext = () => React.useContext(ProductListContext);

export default ProductListProvider;