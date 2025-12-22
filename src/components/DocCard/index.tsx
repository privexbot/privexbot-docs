import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type DocCardProps = {
  title: string;
  description: ReactNode;
  href: string;
  icon?: ReactNode;
  tags?: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
};

export default function DocCard({
  title,
  description,
  href,
  icon,
  tags = [],
  difficulty
}: DocCardProps): ReactNode {
  return (
    <Link
      to={href}
      className={clsx(styles.docCard)}
    >
      <div className={styles.docCardInner}>
        {icon && (
          <div className={styles.iconContainer}>
            {icon}
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            {difficulty && (
              <span className={clsx(styles.difficultyBadge, styles[`difficulty-${difficulty.toLowerCase()}`])}>
                {difficulty}
              </span>
            )}
          </div>

          <p className={styles.description}>{description}</p>

          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.arrow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
}