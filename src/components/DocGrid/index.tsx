import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type DocGridProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
};

export default function DocGrid({
  title,
  subtitle,
  children,
  columns = 3,
  className
}: DocGridProps): ReactNode {
  return (
    <section className={clsx(styles.docGrid, className)}>
      <div className={clsx('container', styles.docGridContainer)}>
        {(title || subtitle) && (
          <div className={styles.docGridHeader}>
            {title && (
              <Heading as="h2" className={styles.docGridTitle}>
                {title}
              </Heading>
            )}
            {subtitle && (
              <p className={styles.docGridSubtitle}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={clsx(styles.docGridCards, styles[`columns-${columns}`])}>
          {children}
        </div>
      </div>
    </section>
  );
}