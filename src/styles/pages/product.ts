import { styled } from "@stitches/react";

export const MainContainer = styled('main', {
    maxWidth: 1180,
    margin: '0 auto',
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
})

export const ProductContainer = styled('div', {
    background: 'linear-gradient(#1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    height: 'calc(656px - 0.5rem)',
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: 'xx-large',
        color: '$gray100'
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: 'x-large',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300'
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green300',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:hover': {
            backgroundColor: '$green500',
        }
    }
})