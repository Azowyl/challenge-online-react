import React, {useCallback} from 'react';
import usePersistedState from "../../hooks/usePersistedState";

const ProductListContext = React.createContext({
    products: {},
    addProduct: () => {},
    removeProduct: () => {},
});

function ProductListProvider({ children }) {
    const [products, setProducts] = usePersistedState("productList", {});

    const addProduct = useCallback((product) => {
        product.id = product.id ? product.id : Date.now().toString();
        setProducts(prevProducts => ({
            ...prevProducts,
            [product.id]: product,
        }));
    }, [setProducts]);

    const removeProduct = useCallback((productId) => {
        setProducts(prevProducts => {
            const newProducts = {...prevProducts};
            delete newProducts[productId];
            return newProducts;
        });
    }, [setProducts, products]);

    return (
        <ProductListContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductListContext.Provider>
    )
}

export const useProductContext = () => React.useContext(ProductListContext);

export default ProductListProvider;