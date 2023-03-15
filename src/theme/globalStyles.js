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
    color: #fff;
    text-decoration: none;
    padding: 0.625rem;
    display: inline-flex;
    align-items: center;
  }

  .link {
    color: #3a5a40;
    text-decoration: none;
  }

  .link:hover {
    color: #344e41;
  }

  .link:visited {
    color: #3a5a40;
  }

  .link h2 {
    color: inherit;
  }

  .link:hover h2 {
     color: inherit;
  }

  .link--read-more {
    background: #3a5a40;
    color: #fff;
    padding: 0.625rem;
    display: inline-flex;
  }

  .link--read-more:hover {
    background: #344e41;
    color: #fff;
  }

  .link--read-more:visited {
    color: #fff;
  }

  .article {
    padding: 0.625rem;
    margin: 0 0 2.5rem;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.26);
  }

  .iframe {
    width: 100%;
    min-height: 500px;
    margin: auto;
  }

`;

export default GlobalStyle;
