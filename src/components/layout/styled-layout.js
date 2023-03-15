import styled from 'styled-components';
import Layout from './layout';

export default styled(Layout)`
  display: flex;
  flex-direction: column;

  .Container {
    margin: auto;
    width: 100%;
    max-width: 980px;
    padding: 0.625rem;
    font-family: sans-serif;
  }

  .SiteHeader {
    background: #344e41;
    width: 100%;
    color: white;
    margin-bottom: 0.625rem;
  }

  .SiteHeader__wrapper {
    padding: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 980px;
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
