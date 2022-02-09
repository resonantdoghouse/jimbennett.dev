import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.42;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .logo {
    color: white;
    text-decoration: none;
    padding: 0.625rem;
    display: inline-flex;
    align-items: center;
  }
`;

export default GlobalStyle;
