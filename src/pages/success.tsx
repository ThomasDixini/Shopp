import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
    return(
        <SuccessContainer>
            <h1>
                Compra Efetuada!
            </h1>
            <ImageContainer>
                
            </ImageContainer>
            <p>
                Uhuul Diego Fernandes, sua Camiseta Beyond the Limits já está a caminho da sua casa. 
            </p>
            <Link href="http://localhost:3000/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    );
}