import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { blogPost } from './blog-post.module.css';

const BlogPost = ({ blog }) => {
  const {
    frontmatter: { date, title, author },
    body,
    id,
  } = blog;

  return (
    <article id={id} className={blogPost}>
      <h2>{title}</h2>
      <i>
        Written on {date} by <strong>{author}</strong>
      </i>
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </article>
  );
};

export { BlogPost };
