import React from 'react';
import clsx from 'clsx';
import PageLayout, { PageSection, FeatureCard } from '@site/src/components/PageLayout';
import CTASection from '@site/src/components/CTASection';
import styles from './about.module.css';

export default function AboutPage(): React.JSX.Element {
  return (
    <PageLayout
      title="About Privexbot"
      description="Building the future of privacy-first AI chatbots using Secret Network's Trusted Execution Environment technology"
      heroTitle="About Privexbot"
      heroDescription="Building the future of privacy-first AI chatbots using Secret Network's Trusted Execution Environment technology."
      showGridBackground={true}
    >
      {/* Mission Section */}
      <PageSection>
        <div className={styles.missionSection}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.missionCard}>
            <p className={styles.missionText}>
              At Privexbot, we believe that privacy and AI should go hand in hand. Traditional
              AI platforms require you to sacrifice your sensitive data to gain intelligence.
              We're changing that.
            </p>
            <p className={styles.missionText}>
              Our platform leverages Secret Network's cutting-edge Trusted Execution Environment
              to ensure your data remains completely private while still enabling powerful AI
              interactions. Your conversations, documents, and insights stay yours.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Technology Section */}
      <PageSection>
        <div className={styles.technologySection}>
          <h2 className={styles.sectionTitle}>Technology</h2>
          <div className={styles.techGrid}>
            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              }
              title="Trusted Execution Environment"
              description="All AI processing happens inside secure enclaves that are cryptographically verified, ensuring your data never leaves the protected environment."
            />

            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              }
              title="Verifiable Computing"
              description="Every computation can be cryptographically verified, providing mathematical proof that your data was processed correctly and privately."
            />

            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6H5V5h14v4z"/>
                  <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4z"/>
                </svg>
              }
              title="Multi-Modal AI"
              description="Support for text, voice, images, and documents with advanced RAG capabilities for intelligent knowledge retrieval."
            />

            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              }
              title="Enterprise Ready"
              description="Multi-tenant architecture with organization and workspace management, perfect for teams and enterprises."
            />
          </div>
        </div>
      </PageSection>

      {/* Values Section */}
      <PageSection>
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Privacy First</h3>
              <p className={styles.valueDescription}>
                Privacy isn't an afterthought—it's our foundation. Every feature is designed
                with privacy as the core principle.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 014 21h16a8.014 8.014 0 01-.244-5.428z"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>User Empowerment</h3>
              <p className={styles.valueDescription}>
                We build tools that put users in control of their data and AI interactions,
                not the other way around.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                We're pushing the boundaries of what's possible with private AI, creating
                solutions that don't exist anywhere else.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience Privacy-First AI?"
        description="Join thousands of organizations that trust Privexbot to keep their data secure while building powerful AI-driven experiences."
        primaryButtonText="Start Building for Free"
        primaryButtonLink="https://privexbot.com/signup"
        secondaryButtonText="Read Documentation"
        secondaryButtonLink="/docs/intro"
      />
    </PageLayout>
  );
}