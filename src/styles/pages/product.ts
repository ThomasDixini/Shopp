import { styled } from "@/styles/index";

export const MainContainer = styled('main', {
    maxWidth: 1180,
    margin: '1rem auto',
    padding: '0 5rem',
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',

    "@media1024": {
        gridTemplateColumns: '1fr',
    }
})

export const ProductContainer = styled('div', {
    background: 'linear-gradient(#1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    width: '520px',
    height: 'calc(656px - 0.5rem)',
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative",

    img: {
        objectFit: 'contain',
    },

    "@media1024": {
        height: 'calc(456px - 0.5rem)',
    },
    "@media667": {
        width: '400px',
        height: 'calc(356px - 0.5rem)',
    },
    "@media474": {
        width: '250px',
        height: 'calc(206px - 0.5rem)',
    },
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    div: {
        h1: {
            fontSize: 'xx-large',
            color: '$gray100',

            "@media474": {
                fontSize: 'x-large'
            },
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
    },

    button: {
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
        },

        '@media1024': {
            margin: '2rem 0',
            width: '100%',
        }
    }
})