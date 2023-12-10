import { ProductsContext } from "@/context/ProductsContext";
import { stripe } from "@/lib/stripe";
import { ContentContainer, MainContainer, ProductContainer } from "@/styles/pages/product";
import axios from "axios";
import { randomUUID } from "crypto";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
    product: {
        id: string;
        id_product: string;
        name: string;
        quantity: number;
        description: string;
        imageUrl: string;
        price: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {
    const { loadListOfProducts } = useContext(ProductsContext)
    const { addItem } = useShoppingCart()

    async function handleAddProductOnCart() {
        const newItem = {
            ...product,
            id_product: Math.random(),
            sku: product.name,
            currency: 'BRL',
            price: Number(product.price)
        }
        addItem(newItem, {
            count: 1
        })
        if(product.id != null){
            loadListOfProducts({...product, quantity: product.quantity += 1})
        }
    }

    return(
        <>
            <Head>
                <title>{product.name}| Ignite Shop </title>
            </Head>
        
            <MainContainer>
                <ProductContainer>
                    <Image src={product.imageUrl} alt="" fill/>
                </ProductContainer>
                <ContentContainer>
                    <div>
                        <h1> {product.name} </h1>
                        <span> {product.price} </span>
                        <p> {product.description} </p>
                    </div>
                    <button onClick={handleAddProductOnCart}> Colocar na sacola </button>
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