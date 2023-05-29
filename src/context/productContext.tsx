import { ReactNode, createContext } from "react";

import { useShoppingCart } from 'use-shopping-cart'

interface ProductContextProviderProps {
    children: ReactNode;
}

export const productContext = createContext({})

export function ProductContextProvider({children}: ProductContextProviderProps){
    try {
        const { redirectToCheckout } = useShoppingCart();
        console.log(useShoppingCart)
    } catch (e){
        console.log(e)
    }

    

    return(
        <productContext.Provider value={{}}>
            {children}
        </productContext.Provider>
    )
}