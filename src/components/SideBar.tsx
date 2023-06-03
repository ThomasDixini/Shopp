import { AsideContainer, Overlay, ProductContainer } from '@/styles/pages/app';
import camiseta from '../assets/camisetas/2_explorer-t-shirt 2.png'
import Image from 'next/image';
import { X } from 'phosphor-react';
import { useShoppingCart,  } from 'use-shopping-cart'
import { CartEntry } from 'use-shopping-cart/core'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductsContext } from '@/context/ProductsContext';

interface SideBarProps {
    closeSideBar: () => void
}

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
}

export function SideBar({ closeSideBar }: SideBarProps) {
    const { listOfProducts, loadListOfProducts } = useContext(ProductsContext)
    const { cartDetails } = useShoppingCart()

    useEffect(() =>{
        for(const id in cartDetails) {
            const x = cartDetails[id] as unknown
            const product = x as Product
            loadListOfProducts(product)
        }
    },[cartDetails])

    const total = listOfProducts.reduce((acc, product) => {
        acc += 79.9
        return acc
    }, 0)

    const priceIDs = listOfProducts.reduce((acc, product) => {
        acc.push(product.defaultPriceId)
        return acc
    }, [] as Array<string>)

    async function handleBuyProducts(priceIDs: string[]) {
        try {
            //setIsCreatingSessionCheckout(true)
            const response = await axios.post('/api/checkout', {
                priceIDs: priceIDs.map(id => {
                    return id
                })
            })

            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl;
        } catch(err) {
            //setIsCreatingSessionCheckout(false)
            alert('Falha ao redirecionar para checkout')
        }
    }

    return(
        <>
            <Overlay onClick={closeSideBar}></Overlay>
            <AsideContainer>
                <X size={24} onClick={closeSideBar}/>
                <h1>Sacola de compras</h1>

                {
                    listOfProducts.map(item => {
                        return(
                            <ProductContainer key={item.id}>
                                <div>
                                    <Image src={item.imageUrl} width={94} height={82} alt=""/>
                                </div>

                                <div>
                                    <span>{item.name}</span>
                                    <strong>{item.price}</strong>
                                    <a> Remover </a>
                                </div>
                            </ProductContainer>
                        );
                    })
                }

                <div>
                    <div>
                        <span>Quantidade</span>
                        <span>{listOfProducts.length} items</span>
                    </div>
                    <div>
                        <strong>Valor total</strong>
                        <strong>R$ {total.toFixed(2)}</strong>
                    </div>
                </div>

                <button type="submit" onClick={() => handleBuyProducts(priceIDs)}>Finalizar compra</button>
            </AsideContainer>
        </>
    );
}