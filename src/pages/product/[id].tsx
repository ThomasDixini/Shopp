import { ContentContainer, MainContainer, ProductContainer } from "@/styles/pages/product";
import Image from "next/image";

export default function Product() {
    return(
        <MainContainer>
            <ProductContainer>
                
            </ProductContainer>
            <ContentContainer>
                <h1> Camiseta X</h1>
                <span> R$ 79,90</span>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quasi atque voluptatum.
                     Modi dignissimos necessitatibus error quibusdam et praesentium, 
                     doloribus possimus ab atque est incidunt ratione maiores aliquam totam eos?
                </p>
                <button> Comprar agora</button>
            </ContentContainer>
        </MainContainer>
    );
}