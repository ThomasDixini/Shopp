import Image from "next/image";

import camiseta1 from '../assets/camisetas/2_explorer-t-shirt 2.png'
import camiseta2 from '../assets/camisetas/Camisa-Maratona 2.png'
import camiseta3 from '../assets/camisetas/IgniteLab-T-shirt 2.png'
import { MainContainer, Product } from "@/styles/pages/home";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <MainContainer ref={slideRef} className='keen-slider'>
      <Product href="" className='keen-slider__slide'>
        <Image src={camiseta1} alt=""/>
        <footer>
          <span> Camiseta Beyhond</span>
          <strong> R$ 79,90 </strong>
        </footer>
      </Product>
      <Product href="" className='keen-slider__slide'>
        <Image src={camiseta2} alt=""/>
        <footer>
          <span> Camiseta Beyhond</span>
          <strong> R$ 79,90 </strong>
        </footer>
      </Product >
      <Product href="" className='keen-slider__slide'>
        <Image src={camiseta3} alt=""/>
        <footer>
          <span> Camiseta Beyhond</span>
          <strong> R$ 79,90 </strong>
        </footer>
      </Product>
      <Product href="" className='keen-slider__slide'>
        <Image src={camiseta3} alt=""/>
        <footer>
          <span> Camiseta Beyhond</span>
          <strong> R$ 79,90 </strong>
        </footer>
      </Product>
    </MainContainer>
  )
}
