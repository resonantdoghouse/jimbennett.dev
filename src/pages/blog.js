import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id} className="article">
            <Link to={`/blog/${node.slug}`} className="link">
              <h2>{node.frontmatter.title}</h2>
              {node.frontmatter.featuredImage && (
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              )}
            </Link>
            <MDXProvider>{node.excerpt}</MDXProvider>
            <br />
            <Link className="link link--read-more" to={`/blog/${node.slug}`}>
              read more
            </Link>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
        id
        slug
        excerpt(pruneLength: 250)
        fileAbsolutePath
      }
    }
  }
`;

export default BlogPage;
