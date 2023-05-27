import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import igShop from '../assets/igShop.svg'
import Image from 'next/image';
import camiseta from '../assets/camisetas/2_explorer-t-shirt 2.png'
import { AsideContainer, Container, Header, Overlay, ProductContainer } from '@/styles/pages/app';
import { useState } from 'react';
import { Handbag, X } from 'phosphor-react';

globalStyle()

export default function App({ Component, pageProps }: AppProps) {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  function handleCloseSideBar(){
    setSideBarOpen(false);
  }

  return (
    <Container>
      <Header>
        <Image src={igShop} alt="Logo" />
        <button type="button" onClick={() => setSideBarOpen(true)}>
          <Handbag size={24} weight='bold'/>
        </button>
      </Header>
      {/*<div>
        <ArrowRight size={32} color="white"/>
  </div>*/}
      {
        sideBarOpen && 
          <>
            <Overlay onClick={handleCloseSideBar}></Overlay>
            <AsideContainer>
              <X size={24} onClick={handleCloseSideBar}/>
              <h1>Sacola de compras</h1>

              <ProductContainer>
                <div>
                  <Image src={camiseta} width={94} height={82} alt=""/>
                </div>

                <div>
                  <span>Camiseta Beyond the Limits</span>
                  <strong>R$ 79,90</strong>
                  <a> Remover </a>
                </div>
              </ProductContainer>

              <div>
                <div>
                  <span>Quantidade</span>
                  <span>3 items</span>
                </div>
                <div>
                  <strong>Valor total</strong>
                  <strong>R$ 278,00</strong>
                </div>
              </div>

              <button type="submit">Finalizar compra</button>
            </AsideContainer>
          </>
      }
      <Component {...pageProps} />
    </Container>
  );
}
