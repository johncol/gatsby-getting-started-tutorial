import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

const BLOGS_QUERY = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

const BlogsVersion1Page = ({ data }) => {
  const blogs = data.allFile.nodes;
  return (
    <Layout heading="Blogs">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Check your posts shere!</p>
      <ul>
        {blogs.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export { BLOGS_QUERY };

export default BlogsVersion1Page;
