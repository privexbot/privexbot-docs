import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  heroCategory?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  showGridBackground?: boolean;
  className?: string;
}

export default function PageLayout({
  title,
  description,
  children,
  heroCategory,
  heroTitle,
  heroSubtitle,
  heroDescription,
  showGridBackground = true,
  className
}: PageLayoutProps): React.JSX.Element {
  return (
    <Layout
      title={title}
      description={description}
    >
      {/* Hero Section */}
      {(heroTitle || heroSubtitle) && (
        <section className={clsx(styles.heroSection, showGridBackground && styles.withGrid)}>
          {showGridBackground && <div className={styles.gridBackground} />}
          <div className={styles.container}>
            <div className={styles.heroContent}>
              {heroCategory && (
                <div className={styles.heroCategory}>{heroCategory}</div>
              )}
              {heroTitle && (
                <h1 className={styles.heroTitle}>{heroTitle}</h1>
              )}
              {heroSubtitle && (
                <h2 className={styles.heroSubtitle}>{heroSubtitle}</h2>
              )}
              {heroDescription && (
                <p className={styles.heroDescription}>{heroDescription}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className={clsx(styles.mainContent, className)}>
        {children}
      </main>

    </Layout>
  );
}

export function PageSection({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <section className={clsx(styles.pageSection, className)} {...props}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div className={clsx(styles.featureCard, className)} {...props}>
      {icon && <div className={styles.featureIcon}>{icon}</div>}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}