import React from 'react';
import PageLayout, { PageSection } from '@site/src/components/PageLayout';
import styles from './privacy.module.css';

export default function PrivacyPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Learn how Privexbot protects and handles your data with our comprehensive privacy policy"
      heroTitle="Privacy Policy"
      heroSubtitle="Your Privacy Matters."
      heroDescription="We're committed to protecting your privacy and being transparent about how we handle your data."
      showGridBackground={true}
    >
      {/* Last Updated */}
      <PageSection>
        <div className={styles.lastUpdated}>
          <p className={styles.lastUpdatedText}>
            Last updated: December 8, 2024
          </p>
        </div>
      </PageSection>

      {/* Introduction */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <div className={styles.contentCard}>
            <p className={styles.contentText}>
              At Privexbot, privacy isn't just a feature—it's our foundation. We've built our entire platform
              around the principle that your data should remain private and secure, even while enabling powerful
              AI interactions.
            </p>
            <p className={styles.contentText}>
              This Privacy Policy explains how we collect, use, and protect information when you use our
              privacy-first AI chatbot platform, including our website, services, and applications.
            </p>
            <p className={styles.contentText}>
              By using Privexbot, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Data Collection */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <div className={styles.subsectionGrid}>
            <div className={styles.subsectionCard}>
              <h3 className={styles.subsectionTitle}>Account Information</h3>
              <ul className={styles.contentList}>
                <li>Email address and username</li>
                <li>Organization details (for business accounts)</li>
                <li>Billing and payment information</li>
                <li>Profile settings and preferences</li>
              </ul>
            </div>

            <div className={styles.subsectionCard}>
              <h3 className={styles.subsectionTitle}>Usage Data</h3>
              <ul className={styles.contentList}>
                <li>Platform interaction analytics</li>
                <li>Feature usage patterns</li>
                <li>Performance and error logs</li>
                <li>API usage metrics</li>
              </ul>
            </div>

            <div className={styles.subsectionCard}>
              <h3 className={styles.subsectionTitle}>Chatbot Content</h3>
              <ul className={styles.contentList}>
                <li>Knowledge base documents and files</li>
                <li>Chatbot configurations and flows</li>
                <li>Training data and model customizations</li>
                <li>Integration settings and credentials</li>
              </ul>
            </div>

            <div className={styles.subsectionCard}>
              <h3 className={styles.subsectionTitle}>Conversation Data</h3>
              <ul className={styles.contentList}>
                <li>End-user conversations with your chatbots</li>
                <li>Message content and metadata</li>
                <li>Response analytics and performance</li>
                <li>User interaction patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* TEE Privacy */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Trusted Execution Environment (TEE)</h2>
          <div className={styles.teeSection}>
            <div className={styles.teeCard}>
              <div className={styles.teeIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className={styles.teeTitle}>Hardware-Level Protection</h3>
              <p className={styles.teeDescription}>
                All AI processing happens within Secret Network's Trusted Execution Environment,
                providing hardware-level encryption and isolation that even we cannot access.
              </p>
            </div>

            <div className={styles.teeFeatures}>
              <h4 className={styles.teeSubtitle}>What This Means for You:</h4>
              <ul className={styles.teeList}>
                <li>Your conversation data is encrypted during processing</li>
                <li>Knowledge base content remains private and inaccessible to us</li>
                <li>AI model training happens in isolated, secure environments</li>
                <li>Cryptographic proof ensures data integrity and privacy</li>
                <li>Zero-knowledge architecture prevents data leakage</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Data Usage */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <div className={styles.usageGrid}>
            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className={styles.usageTitle}>Service Provision</h3>
              <p className={styles.usageDescription}>
                To provide, maintain, and improve our chatbot platform and related services.
              </p>
            </div>

            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className={styles.usageTitle}>Analytics & Insights</h3>
              <p className={styles.usageDescription}>
                To generate aggregated, anonymized insights about platform usage and performance.
              </p>
            </div>

            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className={styles.usageTitle}>Communication</h3>
              <p className={styles.usageDescription}>
                To send important updates, security notifications, and respond to support requests.
              </p>
            </div>

            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className={styles.usageTitle}>Security & Compliance</h3>
              <p className={styles.usageDescription}>
                To protect against fraud, abuse, and ensure compliance with legal obligations.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Data Sharing */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Information Sharing</h2>
          <div className={styles.contentCard}>
            <p className={styles.contentText}>
              We do not sell, trade, or rent your personal information to third parties. We only share
              information in the following limited circumstances:
            </p>
            <ul className={styles.contentList}>
              <li><strong>With your consent:</strong> When you explicitly authorize us to share specific information</li>
              <li><strong>Service providers:</strong> Trusted partners who assist in providing our services under strict confidentiality agreements</li>
              <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Security purposes:</strong> To protect the rights, property, or safety of Privexbot, our users, or others</li>
              <li><strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales with equivalent privacy protections</li>
            </ul>
          </div>
        </div>
      </PageSection>

      {/* User Rights */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Your Rights and Choices</h2>
          <div className={styles.rightsGrid}>
            <div className={styles.rightsCard}>
              <h3 className={styles.rightsTitle}>Access & Portability</h3>
              <p className={styles.rightsDescription}>
                Request access to your personal data and receive a copy in a portable format.
              </p>
            </div>

            <div className={styles.rightsCard}>
              <h3 className={styles.rightsTitle}>Correction & Updates</h3>
              <p className={styles.rightsDescription}>
                Update or correct any inaccurate personal information in your account.
              </p>
            </div>

            <div className={styles.rightsCard}>
              <h3 className={styles.rightsTitle}>Deletion & Erasure</h3>
              <p className={styles.rightsDescription}>
                Request deletion of your personal data, subject to legal and operational requirements.
              </p>
            </div>

            <div className={styles.rightsCard}>
              <h3 className={styles.rightsTitle}>Processing Restrictions</h3>
              <p className={styles.rightsDescription}>
                Request limitations on how we process your personal information.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Data Security */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <div className={styles.securitySection}>
            <div className={styles.securityGrid}>
              <div className={styles.securityCard}>
                <div className={styles.securityIcon}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className={styles.securityTitle}>Encryption</h3>
                <p className={styles.securityDescription}>End-to-end encryption for all data in transit and at rest</p>
              </div>

              <div className={styles.securityCard}>
                <div className={styles.securityIcon}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className={styles.securityTitle}>Access Controls</h3>
                <p className={styles.securityDescription}>Strict access controls and authentication mechanisms</p>
              </div>

              <div className={styles.securityCard}>
                <div className={styles.securityIcon}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className={styles.securityTitle}>Monitoring</h3>
                <p className={styles.securityDescription}>Continuous security monitoring and threat detection</p>
              </div>

              <div className={styles.securityCard}>
                <div className={styles.securityIcon}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                </div>
                <h3 className={styles.securityTitle}>Compliance</h3>
                <p className={styles.securityDescription}>SOC 2, GDPR, HIPAA, and other security standards</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Contact */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactCard}>
            <p className={styles.contentText}>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Email:</strong> <a href="mailto:privacy@privexbot.com" className={styles.contactLink}>privacy@privexbot.com</a>
              </div>
              <div className={styles.contactItem}>
                <strong>General Support:</strong> <a href="mailto:privexbot@gmail.com" className={styles.contactLink}>privexbot@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <strong>Data Protection Officer:</strong> <a href="mailto:dpo@privexbot.com" className={styles.contactLink}>dpo@privexbot.com</a>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Updates */}
      <PageSection>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Policy Updates</h2>
          <div className={styles.contentCard}>
            <p className={styles.contentText}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className={styles.contentText}>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this
              Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}