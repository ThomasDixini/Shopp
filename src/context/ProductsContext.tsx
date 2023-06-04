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
    const { cartDetails, clearCart } = useShoppingCart()

    useEffect(() =>{
        for(const id in cartDetails) {
            const x = cartDetails[id] as unknown
            const product = x as Product
            loadListOfProducts(product)
        } 
    },[])

    function loadListOfProducts(data: Product) {
        setListOfProducts([...listOfProducts, data])
    }

    return (
        <ProductsContext.Provider value={{listOfProducts, loadListOfProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}