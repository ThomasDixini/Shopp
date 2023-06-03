import { ReactNode, createContext, useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface ProductsProviderProps {
    children: ReactNode;
}

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
}

interface ProductsContextData {
    listOfProducts: Product[],
    loadListOfProducts: (data: Product) => void
}

export const ProductsContext = createContext({} as ProductsContextData)

export function ProductsContextProvider({children}: ProductsProviderProps) {
    const [listOfProducts, setListOfProducts] = useState<Product[]>([])
    

    function loadListOfProducts(data: Product) {
        setListOfProducts(state => [...state, data])
    }

    return (
        <ProductsContext.Provider value={{listOfProducts, loadListOfProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}