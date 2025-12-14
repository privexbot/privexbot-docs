import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogTagsListPage';
import PageLayout from '@site/src/components/PageLayout';
import styles from './styles.module.css';

function BlogTagsListPageMetadata({tag}: Props): React.JSX.Element {
  const title = translateTagsPageTitle({
    tagName: tag.label,
    count: tag.count,
  });
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function BlogTagsListPageContent(props: Props): React.JSX.Element {
  const {tag, items, sidebar, listMetadata} = props;

  return (
    <PageLayout
      title={`${tag.label} Posts`}
      description={tag.description || `All posts tagged with "${tag.label}"`}
      heroCategory="Tagged Posts"
      heroTitle={`Posts tagged "${tag.label}"`}
      heroDescription={tag.description || `Discover all posts about ${tag.label.toLowerCase()}`}
      showGridBackground={true}
    >
      {/* Blog Content */}
      <div className={styles.blogContainer}>
        <div className={styles.tagInfo}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionCategory}>Tagged Posts</span>
            <h2 className={styles.sectionTitle}>
              {tag.count} post{tag.count !== 1 ? 's' : ''} tagged with "{tag.label}"
            </h2>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className={styles.blogGrid}>
          {items.map(({content: BlogPostContent}, index) => {
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
                    ['Architecture', 'TEE', 'Security'].includes(tag.label) ? styles.categoryEngineering :
                    ['Product', 'Workflow'].includes(tag.label) ? styles.categoryDesign :
                    ['Privacy', 'Tutorial'].includes(tag.label) ? styles.categoryCompany :
                    styles.categoryNews
                  }`}>
                    {['Architecture', 'TEE', 'Security'].includes(tag.label) ? 'Engineering' :
                     ['Product', 'Workflow'].includes(tag.label) ? 'Design' :
                     ['Privacy', 'Tutorial'].includes(tag.label) ? 'Company' :
                     'News'}
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

        {/* Back to all posts link */}
        <div className={styles.backToAllPosts}>
          <a href="/blog" className={styles.backLink}>
            ← Back to all posts
          </a>
        </div>

        {/* Pagination */}
        {listMetadata && <BlogListPaginator metadata={listMetadata} />}
      </div>
    </PageLayout>
  );
}

export default function BlogTagsListPage(props: Props): React.JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <BlogTagsListPageMetadata {...props} />
      <BlogTagsListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}