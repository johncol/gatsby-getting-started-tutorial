import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from './../../components/layout';
import { BlogPost as BlogPostComponent } from './../../components/blog-post';

const BLOG_BY_ID_QUERY = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogPostComponent blog={data.mdx} />
    </Layout>
  );
};

export { BLOG_BY_ID_QUERY };

export default BlogPost;
