import Image from "next/image";

import camiseta1 from '../assets/camisetas/2_explorer-t-shirt 2.png'
import camiseta2 from '../assets/camisetas/Camisa-Maratona 2.png'
import camiseta3 from '../assets/camisetas/IgniteLab-T-shirt 2.png'
import { MainContainer, Product } from "@/styles/pages/home";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps, GetStaticProps } from "next";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home(props: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <MainContainer ref={slideRef} className='keen-slider'>
      {props.products.map(product => {
        return(
          <Product key={product.id} href="" className='keen-slider__slide'>
            <Image src={product.imageUrl} alt="" width={520} height={520}/>
            <footer>
              <span> {product.name}</span>
              <strong> {product.price} </strong>
            </footer>
          </Product>
        );
      })}
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 Hours 
  }
}
