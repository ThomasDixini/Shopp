import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'

import { Container } from '@/styles/pages/app';
import { useState } from 'react';
import { CartProvider } from 'use-shopping-cart';

import { SideBar } from '@/components/SideBar';
import { ProductsContextProvider } from '@/context/ProductsContext';
import {HeaderComponent} from '@/components/Header';

globalStyle()

export default function App({ Component, pageProps }: AppProps) {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  function handleCloseSideBar(){
    setSideBarOpen(false);
  }

  function handleOpenSideBar(){
    setSideBarOpen(true);
  }

  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={`${process.env.STRIPE_PUBLIC_KEY}`}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_UTL}/`}
      currency='BRL'
      shouldPersist
    >
      <ProductsContextProvider>
        <Container>
          <HeaderComponent openSideBar={handleOpenSideBar}/>
          {
            sideBarOpen && <SideBar closeSideBar={handleCloseSideBar}/>
          }
          <Component {...pageProps} />
        </Container>
      </ProductsContextProvider>
    </CartProvider>
  );
}
