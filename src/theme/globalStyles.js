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

  .social-links {
    display: flex;
    justify-content: center;
    padding: 0.625rem;
    margin: 0.625rem auto;
    border-radius: 0.625rem;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.26);
  }

  .social-links__link {
    margin: 0 0.625rem;
  }

  .logo {
    color: white;
    text-decoration: none;
    padding: 0.625rem;
    display: inline-flex;
    align-items: center;
  }

  .link {
    color: dark-magenta;
    text-decoration: none;
  }

  .article {
    padding: 0.625rem;
    margin: 0 0 2.5rem;
    border-radius: 0.625rem;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.26);
  }
`;

export default GlobalStyle;
