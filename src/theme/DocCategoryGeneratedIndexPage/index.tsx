import React from 'react';
import clsx from 'clsx';
import DocCategoryGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';
import styles from './styles.module.css';

// Enhanced wrapper component that applies custom styling
export default function DocCategoryGeneratedIndexPageWrapper(props: any) {
  return (
    <div className={styles.categoryPageWrapper}>
      <DocCategoryGeneratedIndexPage {...props} />
    </div>
  );
}