import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
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
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className="SiteHeader">
          <Link to={'/'} className="logo">
            {data.site.siteMetadata.title}{' '}
          </Link>
        </header>
        <nav className="Nav">
          <ul className="NavLinks">
            <li className="NavLink__Item">
              <Link to="/" className="NavLink__Link">
                Home
              </Link>
            </li>
            <li className="NavLink__Item">
              <Link to="/about" className="NavLink__Link">
                About
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
      <main className="Container">{children}</main>
    </div>
  );
}
