import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogTagsListPage';
import PageLayout from '@site/src/components/PageLayout';
import styles from './styles.module.css';

function BlogTagsListPageMetadata(): React.JSX.Element {
  return (
    <>
      <PageMetadata title="Blog Tags" description="Browse all blog tags and discover content by topic" />
      <SearchMetadata tag="blog_tags_list" />
    </>
  );
}

function BlogTagsListPageContent(props: Props): React.JSX.Element {
  const {tags} = props;

  return (
    <PageLayout
      title="Blog Tags"
      description="Browse all blog tags and discover content by topic"
      heroCategory="Browse Topics"
      heroTitle="All Blog Tags"
      heroDescription="Explore content by topic and find posts that match your interests"
      showGridBackground={true}
    >
      {/* Blog Content */}
      <div className={styles.blogContainer}>
        <div className={styles.tagInfo}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionCategory}>Browse Topics</span>
            <h2 className={styles.sectionTitle}>
              Discover {tags.length} topic{tags.length !== 1 ? 's' : ''} on our blog
            </h2>
          </div>
        </div>

        {/* Tags Grid */}
        <div className={styles.tagsGrid}>
          {tags.map((tag) => (
            <article key={tag.permalink} className={styles.tagCard}>
              <div className={styles.tagCardContent}>
                <span className={`${styles.categoryTag} ${
                  ['architecture', 'tee', 'security'].includes(tag.label.toLowerCase()) ? styles.categoryEngineering :
                  ['product', 'workflow'].includes(tag.label.toLowerCase()) ? styles.categoryDesign :
                  ['privacy', 'tutorial'].includes(tag.label.toLowerCase()) ? styles.categoryCompany :
                  styles.categoryNews
                }`}>
                  {['architecture', 'tee', 'security'].includes(tag.label.toLowerCase()) ? 'Engineering' :
                   ['product', 'workflow'].includes(tag.label.toLowerCase()) ? 'Design' :
                   ['privacy', 'tutorial'].includes(tag.label.toLowerCase()) ? 'Company' :
                   'News'}
                </span>
                <h3 className={styles.tagCardTitle}>
                  <a href={tag.permalink}>{tag.label}</a>
                </h3>
                <p className={styles.tagCardCount}>
                  {tag.count} post{tag.count !== 1 ? 's' : ''}
                </p>
                {tag.description && (
                  <p className={styles.tagCardDescription}>
                    {tag.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Back to all posts link */}
        <div className={styles.backToAllPosts}>
          <a href="/blog" className={styles.backLink}>
            ← Back to all posts
          </a>
        </div>
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
      <BlogTagsListPageMetadata />
      <BlogTagsListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}