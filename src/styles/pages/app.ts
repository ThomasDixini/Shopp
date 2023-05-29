import { keyframes, styled } from "..";

export const Container = styled('div', {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'flex-start',
     height: '100vh',
     position: 'relative',

     transition: 'all 1s ease-in-out',
     overflowX: 'hidden',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',

    button: {
        padding: '0.825rem',
        borderRadius: 6,
        border: 0,
        backgroundColor: '$gray800',
        color: '$white',
        '&:hover': {
            filter: 'brightness(0.8)',
        }
    }
})

const moveAside = keyframes({
    'from': {transform: 'translateX(110%)'},
    'to': {transform: 'translateX(0%)'}
})

export const AsideContainer = styled('aside', {
    animation: `${moveAside} 0.5s ease-in-out`, 

    position: 'absolute',
    right: 0,
    'z-index': 999,
    minHeight: '100vh',
    width: 480,
    backgroundColor: '$gray800',
    'box-shadow': '-4px 0px 30px rgba(0,0,0,0.8)',

    display: 'flex',
    flexDirection: 'column',

    padding: '3rem',

    svg: {
        position: 'absolute',
        right: '1.5rem',
        top: '1.5rem',
        cursor: 'pointer',

        '&:hover': {
            color: '$white',
            border: '1px solid $white'
        }
    },

    span: {
        fontSize: '$md',
        color: '$gray300',
    },

    'article + div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',

        div: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '1.15rem',
            '& > span:last-child, & > strong:last-child': {
                fontSize: '1.5rem',
            }
        }
    },

    button: {
        padding: '1rem',
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '$white',
        backgroundColor: '$green300',
        border: 0,
        borderRadius: 6,
        marginTop: '2rem',

        '&:hover': {
            backgroundColor: '$green500'
        }
    }
})
export const ProductContainer = styled('article', {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: 'auto',

    'div:first-child': {
        background: 'linear-gradient(#1EA483 0%, #7465D4 100%)',
        borderRadius: 6,
    },
    'div:last-child': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'flex-start'
    },

    a: {
        display: 'block',
        background: 'transparent',
        border: 0,
        fontWeight: 'bold',
        color: '$green500',
        cursor: 'pointer',
    }
})

export const Overlay = styled('div', {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0,0,0,0.4)',
    'z-index': 1,
})