import styled from 'styled-components';
import Layout from './layout';

export default styled(Layout)`
  display: flex;
  flex-direction: column;

  .Container {
    margin: auto;
    width: 100%;
    max-width: 720px;
    font-family: sans-serif;
  }

  .SiteHeader {
    background: rebeccapurple;
    width: 100%;
    color: white;
  }

  .SiteHeader__wrapper {
    padding: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
  }

  .Nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .NavLinks {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  .NavLink__Item {
    padding-right: 2rem;
  }

  .NavLink__Link {
    padding: 0.625rem;
    display: inline-flex;
    text-decoration: none;
    color: white;
  }

  .SiteTitle {
    font-size: 3rem;
    color: gray;
    font-weight: 700;
    margin: 3rem 0;
  }
`;
