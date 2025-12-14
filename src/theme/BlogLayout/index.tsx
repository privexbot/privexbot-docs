import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import type {Props} from '@theme/BlogLayout';
import styles from './styles.module.css';

export default function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props;

  return (
    <Layout {...layoutProps}>
      <div className={styles.blogLayout}>
        <main className={styles.mainContainer}>
          {/* Main Content */}
          <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
              {children}
            </div>
          </div>

          {/* Right Sidebar (TOC + Widgets) */}
          {toc && (
            <aside className={styles.rightSidebar}>
              <div className={styles.sidebarContent}>
                {toc}
              </div>
            </aside>
          )}
        </main>
      </div>
      <BackToTopButton />
    </Layout>
  );
}