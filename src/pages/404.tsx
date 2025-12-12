import React from 'react';
import PageLayout, { PageSection } from '@site/src/components/PageLayout';
import styles from './404.module.css';

export default function NotFoundPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Page Not Found"
      description="The page you're looking for doesn't exist"
      heroTitle="404"
      heroSubtitle="Page Not Found."
      heroDescription="The page you're looking for seems to have vanished into the digital void."
      showGridBackground={true}
    >
      {/* Error Content */}
      <PageSection>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>
          <h2 className={styles.errorTitle}>Oops! Something went wrong</h2>
          <p className={styles.errorDescription}>
            The page you're looking for doesn't exist or may have been moved.
            Don't worry, even our privacy-first AI sometimes gets lost in the digital maze.
          </p>
        </div>
      </PageSection>

      {/* Quick Links */}
      <PageSection>
        <div className={styles.quickLinksSection}>
          <h3 className={styles.quickLinksTitle}>Where would you like to go?</h3>
          <div className={styles.quickLinksGrid}>
            <a href="/" className={styles.quickLinkCard}>
              <div className={styles.quickLinkIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h4 className={styles.quickLinkTitle}>Home</h4>
              <p className={styles.quickLinkDescription}>Return to the main page</p>
            </a>

            <a href="/docs/intro" className={styles.quickLinkCard}>
              <div className={styles.quickLinkIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4 className={styles.quickLinkTitle}>Documentation</h4>
              <p className={styles.quickLinkDescription}>Learn how to use Privexbot</p>
            </a>

            <a href="/about" className={styles.quickLinkCard}>
              <div className={styles.quickLinkIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className={styles.quickLinkTitle}>About</h4>
              <p className={styles.quickLinkDescription}>Discover our mission and values</p>
            </a>

            <a href="/help" className={styles.quickLinkCard}>
              <div className={styles.quickLinkIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <h4 className={styles.quickLinkTitle}>Help Center</h4>
              <p className={styles.quickLinkDescription}>Get support and find answers</p>
            </a>
          </div>
        </div>
      </PageSection>

      {/* Search Section */}
      <PageSection>
        <div className={styles.searchSection}>
          <h3 className={styles.searchTitle}>Still can't find what you're looking for?</h3>
          <p className={styles.searchDescription}>
            Try searching our documentation or get in touch with our support team.
          </p>
          <div className={styles.searchActions}>
            <a href="/docs" className={styles.searchButton}>
              Search Documentation
            </a>
            <a href="mailto:privexbot@gmail.com" className={styles.contactButton}>
              Contact Support
            </a>
          </div>
        </div>
      </PageSection>

      {/* Fun Facts */}
      <PageSection>
        <div className={styles.funFactsSection}>
          <div className={styles.funFactCard}>
            <div className={styles.funFactIcon}>
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h4 className={styles.funFactTitle}>Did you know?</h4>
            <p className={styles.funFactText}>
              Even when you encounter a 404 error, your privacy remains intact with Privexbot's
              Trusted Execution Environment. Your data is always secure, even in the digital unknown.
            </p>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}