import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from './../../components/layout';
import { BlogPostPreview } from './../../components/blog-post-preview';

const BLOGS_QUERY = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          author
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;

const BlogsPage = ({ data }) => {
  const { nodes: blogs } = data.allMdx;

  return (
    <Layout heading="Blogs">
      {blogs.map((blog) => (
        <BlogPostPreview blog={blog} key={blog.id} />
      ))}
    </Layout>
  );
};

export { BLOGS_QUERY };

export default BlogsPage;
