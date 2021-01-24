export const WIDTH = {
    DESKTOP_LARGE: 1440,
    DESKTOP_MIN: 992
}

const default_style = {
    colors: {
        primary: '#007F00',
        primaryHover: '#339933',
        black: '#252530',
        greyDark: '#666666',
        greyDarkMid: '#676767',
    },
    icon: {
        sizes: {
            smaller: '0.55rem',
            small: '0.75rem',
            mediumSmall: '0.95rem',
            medium: '1.125rem',
            large: '1.5rem',
            super: '2.5rem',
            extraLarge: '3.5rem'
        },
        borderRadius: {
            circle : { medium: '1.5rem'}
        }
    },
    fonts: {
        primary: 'Universe, sans-serif',
        secondary: 'Universe-light, sans-serif',
        icomoon: 'icomoon',
        sizes: {
            h32: '2rem',
            h24: '1.5rem',
            h19: '1.2rem',
            h21: '1.3125rem',
            h20: '1.25rem',
            body16: '1rem',
            body14: '0.875rem',
            body12: '0.75rem',
            body10: '0.675rem',
            body8: '0.535rem'
        }
    },
    media: {
        desktop: `min-width: ${WIDTH.DESKTOP_MIN}px`,
        desktopMax: `max-width: ${WIDTH.DESKTOP_MIN}px`,
        desktopLarge: `min-width: ${WIDTH.DESKTOP_LARGE}PX`
    }
}

const theme = default_style;

export default theme;