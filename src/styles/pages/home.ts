import Link from "next/link";
import { styled } from "..";

export const MainContainer = styled('main', {
    display: 'flex',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    width: '100%',
    marginLeft: 'auto',
    minHeight: 620,
    padding: '2.5rem',

    '& > div:first-child': {
        height: '100%',
        padding: '2rem',
        background: 'linear-gradient(90deg, transparent, #121214)',
        position: 'absolute',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        'z-index': '2',
        cursor:'pointer'
    },
})

export const Product = styled(Link , {
    background: 'linear-gradient(#1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    padding: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    
    img: {
        objectFit: 'contain',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        borderRadius: 6,

        padding: '1rem',
        backgroundColor: 'rgba(0,0,0,0.6)',

        color: '$white',

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',

            strong: {
                fontSize: '$2xl',
                color: '$green500'
            },
        },
        button: {
            padding: '0.825rem',
            borderRadius: 6,
            border: 0,
            backgroundColor: '$green300',
            color: '$white',
            '&:hover': {
                filter: 'brightness(0.8)',
            }
        }
    },

    '&:hover': {
        footer: {
            opacity: 1,
            transform: 'translateY(0%)',
        }
    },
})