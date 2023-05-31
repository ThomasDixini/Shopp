import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import igShop from '../assets/igShop.svg'
import Image from 'next/image';
import { Container, Header, } from '@/styles/pages/app';
import { useState } from 'react';
import { Handbag } from 'phosphor-react';
import { CartProvider } from 'use-shopping-cart';

import { SideBar } from '@/components/SideBar';

globalStyle()

export default function App({ Component, pageProps }: AppProps) {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  function handleCloseSideBar(){
    setSideBarOpen(false);
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
      <Container>
        <Header>
          <Image src={igShop} alt="Logo" />
          <button type="button" onClick={() => setSideBarOpen(true)}>
            <Handbag size={24} weight='bold'/>
          </button>
        </Header>
        {
          sideBarOpen && <SideBar closeSideBar={handleCloseSideBar}/>
        }
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
