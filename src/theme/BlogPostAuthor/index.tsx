import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';

/**
 * Custom BlogPostAuthor component that displays author information with social links
 */
export default function BlogPostAuthor(): JSX.Element | null {
  const {metadata} = useBlogPost();
  const {authors} = metadata;

  if (authors.length === 0) {
    return null;
  }

  return (
    <div className="avatar margin-bottom--sm">
      {authors.map((author, idx) => (
        <BlogPostItemHeaderAuthor
          key={idx}
          author={{
            ...author,
            // Ensure social links are passed through
            socials: (author as any).socials
          }}
        />
      ))}
    </div>
  );
}