import React from 'react';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type {Props} from '@theme/BlogPostPaginator';
import styles from './styles.module.css';

export default function BlogPostPaginator(props: Props): React.JSX.Element {
  const {nextItem, prevItem} = props;

  return (
    <div className={styles.paginatorContainer}>
      <nav
        className={styles.pagination}
        aria-label="Blog post page navigation">
        {prevItem && (
          <div className={styles.paginationItem}>
            <PaginatorNavLink
              {...prevItem}
              subLabel="Previous post"
            />
          </div>
        )}
        {nextItem && (
          <div className={styles.paginationItem}>
            <PaginatorNavLink
              {...nextItem}
              subLabel="Next post"
              isNext
            />
          </div>
        )}
      </nav>
    </div>
  );
}