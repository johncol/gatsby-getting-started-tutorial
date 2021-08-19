import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { blogPost, heroFigure, heroCaption, blogTitle, blogMetadata } from './blog-post-article.module.css';

const BlogPostArticle = ({ blog }) => {
  const {
    frontmatter: { date, title, author, ...frontmatter },
    body,
    id,
  } = blog;
  const heroImage = {
    gatsbyImage: frontmatter.hero_image,
    alt: frontmatter.hero_image_alt,
    creditLink: frontmatter.hero_image_credit_link,
    creditText: frontmatter.hero_image_credit_text,
  };

  return (
    <article id={id} className={blogPost}>
      <figure className={heroFigure}>
        <GatsbyImage image={getImage(heroImage.gatsbyImage)} alt={heroImage.alt} />
        <figcaption className={heroCaption}>
          Image by{' '}
          <a target="_blank" rel="noopener noreferrer" href={heroImage.creditLink}>
            {heroImage.creditText}
          </a>
        </figcaption>
      </figure>
      <div>
        <h2 className={blogTitle}>{title}</h2>
        <i className={blogMetadata}>
          Written on {date} by <strong>{author}</strong>
        </i>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </article>
  );
};

export { BlogPostArticle };
