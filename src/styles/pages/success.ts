import { styled } from "@stitches/react";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    height: 656,
    margin: '0 auto',

    h1: {
        fontSize: 'xx-large',
        color: '$gray100',
    },

    p: {
        maxWidth: 560,
        fontSize: 'x-large',
        lineHeight: 1.4,
        color: '$gray300',
        textAlign: 'center',
        marginTop: '2rem',
    },
    a: {
        display: 'block',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '1.5rem',
        marginTop: '5rem',
        color: '$green300',
        transition: 'color 0.2s',

        '&:hover': {
            color: '$green500'
        }
    }
})
export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: '5rem',
    width: '100%',
    maxWidth: 130,
    height: 140,
    borderRadius: 8,

    background: 'linear-gradient(#1EA483 0%, #7465D4 100%)',

    img: {
        objectFit: 'cover'
    },
})