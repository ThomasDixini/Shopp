import Image from "next/image";

import camiseta1 from '../assets/camisetas/2_explorer-t-shirt 2.png'
import camiseta2 from '../assets/camisetas/Camisa-Maratona 2.png'
import camiseta3 from '../assets/camisetas/IgniteLab-T-shirt 2.png'
import { MainContainer, Product } from "@/styles/pages/home";

export default function Home() {
  return (
    <MainContainer>
      <Product href="">
        <Image src={camiseta1} alt=""/>
        <footer>
          <span> Camiseta Beyhond</span>
          <strong> R$ 79,90 </strong>
        </footer>
      </Product>
      <Product href="">
        <Image src={camiseta2} alt=""/>
        <footer>
          <span> Camiseta Beyhond</span>
          <strong> R$ 79,90 </strong>
        </footer>
      </Product>
    </MainContainer>
  )
}
