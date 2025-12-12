import React from 'react';
import styles from './styles.module.css';

interface CTAFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features?: CTAFeature[];
  className?: string;
}

const defaultFeatures: CTAFeature[] = [
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Understand your use case",
    description: "Get personalized advice tailored to your product and team."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
    title: "See it in action",
    description: "Explore how our solution fits into your existing workflow."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2s-.9-2-2-2c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.1 0 2-.9 2-2s-.9-2-2-2z"/>
      </svg>
    ),
    title: "Get technical clarity",
    description: "Ask us anything about integrations, scaling, or compatibility with your stack."
  }
];

export default function CTASection({
  title = "Get Started with Privexbot",
  description = "Explore how Privexbot can transform your workflow and elevate your team's collaboration.",
  primaryButtonText = "Get in touch",
  primaryButtonLink = "mailto:privexbot@gmail.com",
  secondaryButtonText = "Send a mail",
  secondaryButtonLink = "mailto:privexbot@gmail.com",
  features = defaultFeatures,
  className
}: CTASectionProps): React.JSX.Element {
  return (
    <section className={`${styles.ctaSection} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaDescription}>{description}</p>

          <div className={styles.ctaButtons}>
            <a
              href={primaryButtonLink}
              className={styles.primaryButton}
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonLink}
              className={styles.secondaryButton}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {features.length > 0 && (
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}