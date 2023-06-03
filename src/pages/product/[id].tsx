import { stripe } from "@/lib/stripe";
import { ContentContainer, MainContainer, ProductContainer } from "@/styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
    product: {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        price: number;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {
    const [isCretingSessionCheckout, setIsCreatingSessionCheckout] = useState(false);
    const { addItem } = useShoppingCart()

    async function handleAddProductOnCart() {
        const newItem = {
            ...product,
            sku: product.name,
            currency: 'BRL'
        }
        addItem(newItem, {
            count: 1
        })
    }

    return(
        <>
            <Head>
                <title>{product.name}| Ignite Shop </title>
            </Head>
        
            <MainContainer>
                <ProductContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt=""/>
                </ProductContainer>
                <ContentContainer>
                    <h1> {product.name} </h1>
                    <span> {product.price} </span>
                    <p> {product.description} </p>
                    <button disabled={isCretingSessionCheckout} onClick={handleAddProductOnCart}> Comprar agora</button>
                </ContentContainer>
            </MainContainer>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> =  async ({ params }) => {
    const productId = params?.id
    const product = await stripe.products.retrieve(productId as string, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount as number / 100 ),
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1 // 1 hour
    }
}