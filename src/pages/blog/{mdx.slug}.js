import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { CodePen, Gist } from 'mdx-embed';
import Layout from '../../components/layout';
import CodeBlock from '../../components/code-block.jsx';
import Btn from '../../components/Btn'; // test import, delete later!

const components = {
  CodePen,
  Gist,
  Btn,
  pre: CodeBlock,
};

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="blog">
      <MDXProvider components={components}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default BlogPost;
