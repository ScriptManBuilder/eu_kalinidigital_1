export const theme = {
  colors: {
    primary: '#1a4d2e',
    secondary: '#2d6a4f',
    accent: '#52b788',
    dark: '#1a1a1a',
    darkGray: '#2b2b2b',
    gray: '#666666',
    lightGray: '#e5e5e5',
    beige: '#f5f0e8',
    background: '#ffffff',
    text: '#333333',
    textLight: '#666666',
    heading: '#1a1a1a',
    border: '#e0e0e0',
    success: '#52b788',
    error: '#d62828',
    warning: '#f77f00',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
    xxxl: '6rem',
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
};

export type Theme = typeof theme;
