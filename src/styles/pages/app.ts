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

export const HeaderContainer = styled('header', {
    padding: '2rem',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',
    marginTop: '5rem',

    display: 'flex',
    justifyContent: 'space-between',

    button: {
        position: 'relative',
        padding: '0.825rem',
        borderRadius: 6,
        border: 0,
        backgroundColor: '$gray800',
        color: '$white',
        '&:hover': {
            filter: 'brightness(0.8)',
        },

        div: {
            position: 'absolute',
            background: '$green300',
            color: '$white',
            fontWeight: 'bold',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            top: '-8px',
            right: '-8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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

    "@media667": {
        width: '100%',
    },
    "@media474": {
        width: '100%',
        fontSize: '0.8rem'
    },

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

        marginTop: 'auto',

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
    alignItems: 'flex-start',
    marginTop: '2rem',

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