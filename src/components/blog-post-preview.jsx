import React from 'react';
import { Link } from 'gatsby';
import { preview, previewHeading, previewLink } from './blog-post-preview.module.css';

const BlogPostPreview = ({ blog }) => {
  const {
    frontmatter: { date, title, author },
    id,
    slug,
  } = blog;

  return (
    <Link to={`/blogs/${slug}`} className={previewLink}>
      <article id={id} className={preview}>
        <h2 className={previewHeading}>{title}</h2>
        <i>
          Written on {date} by <strong>{author}</strong>
        </i>
      </article>
    </Link>
  );
};

export { BlogPostPreview };
