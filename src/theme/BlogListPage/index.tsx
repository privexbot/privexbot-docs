import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import PageLayout from '@site/src/components/PageLayout';
import styles from './styles.module.css';

function BlogListPageMetadata(props: Props): React.JSX.Element {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): React.JSX.Element {
  const {metadata, items} = props;
  const isFirstPage = metadata.page === 1;

  // Get the latest post for featured section
  const latestPost = items[0];
  const otherPosts = items.slice(1);

  return (
    <PageLayout
      title="Blog"
      description="Discover stories, tips, and resources to inspire your next big idea"
      heroCategory="Insights & Ideas"
      heroTitle="Welcome to Our Blog"
      heroDescription="Discover stories, tips, and resources to inspire your next big idea."
      showGridBackground={true}
    >
      {/* Blog Content */}
      <div className={styles.blogContainer}>
        <div className={styles.blogLayout}>
          {/* Left Side - Latest Posts */}
          <div className={styles.leftSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionCategory}>Insights & Ideas</span>
              <h2 className={styles.sectionTitle}>Latest blog posts from our team</h2>
            </div>

            {/* Featured Post */}
            {latestPost && (
              <article className={styles.featuredPost}>
                <div className={styles.featuredImage}>
                  <div className={styles.placeholderImage}>
                    <div className={styles.logoPlaceholder}>
                      <svg viewBox="0 0 100 40" fill="currentColor">
                        <circle cx="15" cy="20" r="8" />
                        <path d="M35 12h20v6H35z" />
                        <path d="M35 22h15v6H35z" />
                        <circle cx="75" cy="20" r="8" />
                        <path d="M90 15h8v10h-8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.featuredContent}>
                  <span className={styles.postCategory}>Latest</span>
                  <h3 className={styles.featuredTitle}>
                    <a href={latestPost.content.metadata.permalink}>
                      {latestPost.content.metadata.title}
                    </a>
                  </h3>
                  <div className={styles.postMeta}>
                    <span className={styles.author}>
                      {latestPost.content.metadata.authors?.[0]?.name || 'Privexbot Team'}
                    </span>
                    <span className={styles.date}>
                      {new Date(latestPost.content.metadata.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className={styles.featuredExcerpt}>
                    {latestPost.content.metadata.description ||
                     'Create superior code, compose emails, boost any kind of work within a collaborative team.'}
                  </p>
                </div>
              </article>
            )}
          </div>

          {/* Right Side - Latest Single Post */}
          {items[1] && (
            <div className={styles.rightSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.rightSectionTitle}>Latest</h3>
              </div>
              <article className={styles.latestPost}>
                <h4 className={styles.latestPostTitle}>
                  <a href={items[1].content.metadata.permalink}>
                    {items[1].content.metadata.title}
                  </a>
                </h4>
                <div className={styles.postMeta}>
                  <span className={styles.author}>
                    {items[1].content.metadata.authors?.[0]?.name || 'Privexbot Team'}
                  </span>
                  <span className={styles.date}>
                    {new Date(items[1].content.metadata.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <p className={styles.latestPostExcerpt}>
                  {items[1].content.metadata.description ||
                   'Create superior code, compose emails, boost any kind of work within a collaborative team.'}
                </p>
              </article>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <p className={styles.newsletterText}>
              Get product updates, news straight to your inbox.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="you@company.com"
                className={styles.emailInput}
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className={styles.categoriesSection}>
          <div className={styles.categoryTags}>
            <span className={`${styles.categoryTag} ${styles.categoryDesign}`}>Design</span>
            <span className={`${styles.categoryTag} ${styles.categoryEngineering}`}>Engineering</span>
            <span className={`${styles.categoryTag} ${styles.categoryCompany}`}>Company</span>
            <span className={`${styles.categoryTag} ${styles.categoryNews}`}>News</span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className={styles.blogGrid}>
          {otherPosts.slice(0, 6).map(({content: BlogPostContent}, index) => {
            const {metadata} = BlogPostContent;
            return (
              <article key={metadata.permalink} className={styles.blogCard}>
                <div className={styles.blogCardImage}>
                  <div className={styles.placeholderImage}>
                    <div className={styles.logoPlaceholder}>
                      <svg viewBox="0 0 100 40" fill="currentColor">
                        <circle cx="15" cy="20" r="8" />
                        <path d="M35 12h20v6H35z" />
                        <path d="M35 22h15v6H35z" />
                        <circle cx="75" cy="20" r="8" />
                        <path d="M90 15h8v10h-8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.blogCardContent}>
                  <span className={`${styles.categoryTag} ${
                    metadata.tags?.[0]?.label === 'Engineering' ? styles.categoryEngineering :
                    metadata.tags?.[0]?.label === 'Design' ? styles.categoryDesign :
                    metadata.tags?.[0]?.label === 'Company' ? styles.categoryCompany :
                    styles.categoryNews
                  }`}>
                    {metadata.tags?.[0]?.label || 'News'}
                  </span>
                  <h3 className={styles.blogCardTitle}>
                    <a href={metadata.permalink}>{metadata.title}</a>
                  </h3>
                  <div className={styles.postMeta}>
                    <span className={styles.author}>
                      {metadata.authors?.[0]?.name || 'Privexbot Team'}
                    </span>
                    <span className={styles.date}>
                      {new Date(metadata.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className={styles.blogCardExcerpt}>
                    {metadata.description || 'Explore innovative solutions and insights from our team.'}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        <BlogListPaginator metadata={metadata} />
      </div>
    </PageLayout>
  );
}

export default function BlogListPage(props: Props): React.JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}