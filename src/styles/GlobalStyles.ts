import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Cormorant Garamond', 'Georgia', serif;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', 'Georgia', serif;
    font-weight: 400;
    line-height: 1.2;
    color: ${props => props.theme.colors.heading};
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: 0.02em;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 425px) {
      font-size: 2rem;
    }

    @media (max-width: 375px) {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.02em;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.75rem;
    }

    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 425px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.textLight};

    @media (max-width: 425px) {
      font-size: 0.95rem;
      line-height: 1.7;
    }

    @media (max-width: 375px) {
      font-size: 0.9rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    font-family: 'Cormorant Garamond', 'Georgia', serif;
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul {
    list-style: none;
  }
`;
