import { styled } from "@/styles/index";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    height: 656,
    margin: '0 auto',
    padding: '5rem',

    h1: {
        fontSize: 'xx-large',
        color: '$gray100',

        "@media667": {
            fontSize: 'x-large'
        },
        "@media474": {
            fontSize: 'large'
        },
    },

    div: {
        display: 'flex',
        justifyContent: 'center',
    },

    p: {
        maxWidth: 560,
        fontSize: 'x-large',
        lineHeight: 1.4,
        color: '$gray300',
        textAlign: 'center',
        marginTop: '2rem',

        "@media667": {
            fontSize: 'medium'
        },
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
        },

        "@media474": {
            fontSize: 'large'
        },
    }
})
export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& + &': {
        marginLeft: '-3rem',
        boxShadow: '-2px 2px 60px rgba(0,0,0,0.8)'
    },


    marginTop: '5rem',
    width: '100%',
    maxWidth: 150,
    height: 140,
    borderRadius: '50%',

    background: 'linear-gradient(#1EA483 0%, #7465D4 100%)',

    img: {
        objectFit: 'cover',
    },
})