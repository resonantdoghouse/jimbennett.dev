const indexName = `blog`;

const blogQuery = `{
  blog: allMdx(
    filter: { fileAbsolutePath: { regex: "/blog/" }  }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        slug
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.blog.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
