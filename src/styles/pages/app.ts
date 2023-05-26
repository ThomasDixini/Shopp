import { styled } from "..";

export const Container = styled('div', {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'flex-start',
     height: '100vh',

    /* 'div > div': {
        height: '100%',
        padding: '2rem',
        background: 'linear-gradient(90deg, transparent, #121214)',
        position: 'absolute',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        'z-index': '999'
    }*/
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

export const AsideContainer = styled('aside', {
    position: 'absolute',
    right: 0,
    'z-index': 999,
    minHeight: '100vh',
    width: 480,
    backgroundColor: '$gray800',

    display: 'flex',
    flexDirection: 'column',

    padding: '3rem',

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
            fontSize: '1.25rem'
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