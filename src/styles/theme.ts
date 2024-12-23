export const theme = {
    colors: {
        primary: {
            main: '#3498db',
            light: '#5dade2',
            lighter: '#85c1e9',
            dark: '#2980b9',
            darker: '#1f618d'
        },
        secondary: {
            main: '#e74c3c',
            light: '#ec7063',
            lighter: '#f1948a',
            dark: '#c0392b',
            darker: '#922b21'
        },
        background: '#ffffff',
        border: '#c2c0c0',
        disabled: '#ccc',
        text: '#ffffff',
        constrastText: '#555',
        error: '#e74c3c',
        success: '#2ecc71',
        warning: '#f39c12'
    },
    fontSizes: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem'
    },
    spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '1.5rem'
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px'
    }
};

export type ThemeType = typeof theme;
