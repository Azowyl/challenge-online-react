import React, {useCallback} from 'react';

const ProductListContext = React.createContext({
    productList: [],
    addProduct: () => {},
});

function ProductListProvider({ children }) {
    const [productList, setProductList] = React.useState([]);

    const addProduct = useCallback((product) => {
        setProductList((prevProductList) => {
            return [...prevProductList, product];
        });
    }, [setProductList]);

    return (
        <ProductListContext.Provider value={{ productList: productList, addProduct }}>
            {children}
        </ProductListContext.Provider>
    )
}

export const useProductContext = () => React.useContext(ProductListContext);

export default ProductListProvider;