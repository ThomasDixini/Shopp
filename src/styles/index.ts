import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    getCssText,
    theme,
    createTheme,
    config,
    keyframes,
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green500: '#00875f',
            green300: '#00b37e'
        },
        fonts: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    },
    media: {
        media1024: '(max-width: 1024px)',
        media768: '(max-width: 768px)',
        media667: '(max-width: 667px)',
        media474: '(max-width: 474px)',
        media375: '(max-width: 375px)',
    }
})