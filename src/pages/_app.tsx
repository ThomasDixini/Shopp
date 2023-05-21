import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import igShop from '../assets/igShop.svg'
import Image from 'next/image';
import { Container, Header } from '@/styles/pages/app';

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={igShop} alt="Logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
