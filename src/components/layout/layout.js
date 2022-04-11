import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Search from '../search';
import GlobalStyle from '../../theme/globalStyles';
const searchIndices = [{ name: `blog`, title: `blog` }];

export default function Layout({ pageTitle, children, className }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={className}>
      <GlobalStyle />
      <div>
        <Helmet>
          <title>
            {pageTitle} | {data.site.siteMetadata.title}
          </title>
        </Helmet>
        <header className="SiteHeader">
          <div className="SiteHeader__wrapper">
            <Link to={'/'} className="logo">
              {data.site.siteMetadata.title}{' '}
            </Link>
            <nav className="Nav">
              <ul className="NavLinks">
                <li className="NavLink__Item">
                  <Link to="/" className="NavLink__Link">
                    Home
                  </Link>
                </li>
                <li className="NavLink__Item">
                  <Link to="/blog" className="NavLink__Link">
                    Blog
                  </Link>
                </li>
              </ul>
              <Search indices={searchIndices} />
            </nav>
          </div>
        </header>
      </div>
      <main className="Container">{children}</main>
    </div>
  );
}
