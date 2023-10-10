import React, {useCallback} from 'react';
import usePersistedState from "../../hooks/usePersistedState";

const ProductListContext = React.createContext({
    productList: [],
    addProduct: () => {},
    removeProduct: () => {},
});

function ProductListProvider({ children }) {
    const [productList, setProductList] = usePersistedState("productList", []);

    const addProduct = useCallback((product) => {
        setProductList(prevList => [...prevList, product]);
    }, [setProductList]);

    const removeProduct = useCallback((productName) => {
        setProductList(productList.filter((p) => p.name !== productName));
    }, [setProductList, productList]);

    return (
        <ProductListContext.Provider value={{ productList: productList, addProduct, removeProduct }}>
            {children}
        </ProductListContext.Provider>
    )
}

export const useProductContext = () => React.useContext(ProductListContext);

export default ProductListProvider;