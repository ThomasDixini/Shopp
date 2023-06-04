import  { HeaderContainer } from '@/styles/pages/app'
import Image from 'next/image'
import igShop from '../assets/igShop.svg'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

interface HeaderProps {
    openSideBar: () => void
}

export function HeaderComponent({openSideBar}: HeaderProps) {
    const { cartCount, clearCart } = useShoppingCart()

    return(
        <>
            <HeaderContainer>
                <Image src={igShop} alt="Logo" />
                <button type="button" onClick={openSideBar}>
                    {cartCount != null && <div> { cartCount }</div>}
                    <Handbag size={24} weight='bold'/>
                </button>
            </HeaderContainer>
        </>
    )
}
