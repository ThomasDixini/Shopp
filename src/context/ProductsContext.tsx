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
    loadListOfProducts: (data: Product) => void;
    handleRemoveItem: (item: Product) => void
}

export const ProductsContext = createContext({} as ProductsContextData)

export function ProductsContextProvider({children}: ProductsProviderProps) {
    const [listOfProducts, setListOfProducts] = useState<Product[]>([])
    const { cartDetails, decrementItem, clearCart} = useShoppingCart()
    
    function loadListOfProducts(data: Product) {
        setListOfProducts([...listOfProducts, data])
    }

    function handleRemoveItem(item: Product){
        const itemFiltred = listOfProducts.filter(product => product.id != item.id)
        setListOfProducts(itemFiltred)
        decrementItem(item.id)
    }

    useEffect(() =>{
        for(const id in cartDetails) {
            const x = cartDetails[id] as unknown
            const product = x as Product
            loadListOfProducts(product)
        } 
    },[cartDetails])

    return (
        <ProductsContext.Provider value={{listOfProducts, loadListOfProducts, handleRemoveItem}}>
            {children}
        </ProductsContext.Provider>
    )
}
