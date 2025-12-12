import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  showGrid?: boolean;
}

export default function Hero({
  title = "Insights & Ideas",
  subtitle = "Welcome to Our Blog",
  description = "Discover stories, tips, and resources to inspire your next big idea.",
  className,
  showGrid = true
}: HeroProps): React.JSX.Element {
  return (
    <section className={clsx(styles.hero, className)}>
      {showGrid && <div className={styles.gridBackground} />}
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <h1 className={styles.subtitle}>{subtitle}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}