import { styled } from "..";

export const Container = styled('div', {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'flex-start',
     height: '100vh',

     div: {
        height: '100%',
        padding: '2rem',
        background: 'linear-gradient(90deg, transparent, #121214)',
        position: 'absolute',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        'z-index': '999'
    }
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',
})