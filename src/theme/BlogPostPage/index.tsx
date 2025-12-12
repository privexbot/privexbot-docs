import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import TOC from '@theme/TOC';
import type {Props} from '@theme/BlogPostPage';
import styles from './styles.module.css';

function BlogPostPageContent({sidebar, children}: {sidebar: any; children?: React.ReactNode}): React.JSX.Element {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <div className={styles.blogPostContainer}>
        {/* Blog Post Header */}
        <header className={styles.blogPostHeader}>
          <div className={styles.headerMeta}>
            <time className={styles.blogPostDate}>
              {new Date(metadata.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              }).toUpperCase()}
            </time>
          </div>

          <h1 className={styles.blogPostTitle}>{metadata.title}</h1>

          {metadata.description && (
            <p className={styles.blogPostSubtitle}>{metadata.description}</p>
          )}

          {metadata.authors && metadata.authors.length > 0 && (
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                {metadata.authors[0].imageURL ? (
                  <img src={metadata.authors[0].imageURL} alt={metadata.authors[0].name} />
                ) : (
                  <div className={styles.defaultAvatar}>
                    {metadata.authors[0].name?.charAt(0) || 'A'}
                  </div>
                )}
              </div>
              <span className={styles.authorName}>{metadata.authors[0].name}</span>
            </div>
          )}
        </header>

        {/* Hero Image */}
        <div className={styles.heroImage}>
          <div className={styles.placeholderImage}>
            <div className={styles.logoPlaceholder}>
              <svg viewBox="0 0 120 48" fill="currentColor">
                <circle cx="18" cy="24" r="10" />
                <path d="M40 14l12 20h-24z" />
                <rect x="70" y="14" width="20" height="20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className={styles.contentLayout}>
          {/* Main Article Content */}
          <article className={styles.mainContent}>
            <BlogPostItem>{children}</BlogPostItem>

            {/* Pagination */}
            {(nextItem || prevItem) && (
              <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
            )}
          </article>

          {/* Newsletter Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.newsletterWidget}>
              <h3 className={styles.newsletterTitle}>Subscribe to our newsletter</h3>
              <p className={styles.newsletterDescription}>
                Our bi-weekly newsletter full of inspiration, podcasts, trends and news.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): React.JSX.Element {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar as any}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}