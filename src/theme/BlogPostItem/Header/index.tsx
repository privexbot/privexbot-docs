import React from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';

export default function BlogPostItemHeader(): React.JSX.Element {
  const {metadata, isBlogPostPage} = useBlogPost();

  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      {metadata.authors && metadata.authors.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          {metadata.authors.map((author, idx) => (
            <BlogPostItemHeaderAuthor
              key={idx}
              author={{
                ...author,
                socials: (author as any).socials
              }}
            />
          ))}
        </div>
      )}
    </header>
  );
}