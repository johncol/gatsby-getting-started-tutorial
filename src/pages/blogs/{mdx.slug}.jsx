import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from './../../components/layout';
import { BlogPostArticle } from '../../components/blog-post-article';

const BLOG_BY_ID_QUERY = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogPostArticle blog={data.mdx} />
    </Layout>
  );
};

export { BLOG_BY_ID_QUERY };

export default BlogPost;
