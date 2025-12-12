import React from 'react';
import PageLayout, { PageSection, FeatureCard } from '@site/src/components/PageLayout';
import styles from './help.module.css';

export default function HelpPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Help Center"
      description="Find help, documentation, and support for Privexbot"
      heroTitle="Help Center"
      heroSubtitle="Get Support."
      heroDescription="Everything you need to know about using Privexbot effectively."
      showGridBackground={true}
    >
      {/* Quick Start Section */}
      <PageSection>
        <div className={styles.quickStartSection}>
          <h2 className={styles.sectionTitle}>Quick Start</h2>
          <div className={styles.quickStartGrid}>
            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              title="Getting Started"
              description="Learn the basics of creating your first chatbot with Privexbot's intuitive interface."
            />

            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              }
              title="Knowledge Bases"
              description="Understand how to create and manage knowledge bases from various sources like PDFs, websites, and documents."
            />

            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                </svg>
              }
              title="Deployment"
              description="Deploy your chatbots to Discord, Telegram, WhatsApp, websites, and other platforms."
            />

            <FeatureCard
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              }
              title="Privacy & Security"
              description="Learn how Privexbot's TEE technology keeps your data secure and private."
            />
          </div>
        </div>
      </PageSection>

      {/* Documentation Section */}
      <PageSection>
        <div className={styles.documentationSection}>
          <h2 className={styles.sectionTitle}>Documentation</h2>
          <div className={styles.docGrid}>
            <div className={styles.docCategory}>
              <h3 className={styles.docCategoryTitle}>Guides</h3>
              <ul className={styles.docList}>
                <li><a href="/docs/intro" className={styles.docLink}>Introduction to Privexbot</a></li>
                <li><a href="/docs/category/getting-started" className={styles.docLink}>Getting Started Guide</a></li>
                <li><a href="/docs/category/knowledge-bases" className={styles.docLink}>Creating Knowledge Bases</a></li>
                <li><a href="/docs/category/chatflows" className={styles.docLink}>Building Chatflows</a></li>
                <li><a href="/docs/category/deployment" className={styles.docLink}>Deployment Options</a></li>
              </ul>
            </div>

            <div className={styles.docCategory}>
              <h3 className={styles.docCategoryTitle}>API Reference</h3>
              <ul className={styles.docList}>
                <li><a href="/docs/api/rest-api" className={styles.docLink}>REST API Documentation</a></li>
                <li><a href="/docs/api/webhooks" className={styles.docLink}>Webhook Integration</a></li>
                <li><a href="/docs/api/sdk" className={styles.docLink}>JavaScript SDK</a></li>
                <li><a href="/docs/api/authentication" className={styles.docLink}>Authentication</a></li>
              </ul>
            </div>

            <div className={styles.docCategory}>
              <h3 className={styles.docCategoryTitle}>Integrations</h3>
              <ul className={styles.docList}>
                <li><a href="/docs/integrations/discord" className={styles.docLink}>Discord Integration</a></li>
                <li><a href="/docs/integrations/telegram" className={styles.docLink}>Telegram Integration</a></li>
                <li><a href="/docs/integrations/whatsapp" className={styles.docLink}>WhatsApp Business</a></li>
                <li><a href="/docs/integrations/zapier" className={styles.docLink}>Zapier Webhooks</a></li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Support Section */}
      <PageSection>
        <div className={styles.supportSection}>
          <h2 className={styles.sectionTitle}>Support Options</h2>
          <div className={styles.supportGrid}>
            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                </svg>
              </div>
              <h3 className={styles.supportTitle}>Community Forum</h3>
              <p className={styles.supportDescription}>
                Connect with other developers, share ideas, and get help from the Privexbot community.
              </p>
              <a href="https://discord.gg/privexbot" className={styles.supportLink}>Join Discord</a>
            </div>

            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className={styles.supportTitle}>Email Support</h3>
              <p className={styles.supportDescription}>
                Get direct help from our support team. We typically respond within 24 hours.
              </p>
              <a href="mailto:privexbot@gmail.com" className={styles.supportLink}>Send Email</a>
            </div>

            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                </svg>
              </div>
              <h3 className={styles.supportTitle}>Knowledge Base</h3>
              <p className={styles.supportDescription}>
                Browse our comprehensive documentation and frequently asked questions.
              </p>
              <a href="/faqs" className={styles.supportLink}>View FAQs</a>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Troubleshooting Section */}
      <PageSection>
        <div className={styles.troubleshootingSection}>
          <h2 className={styles.sectionTitle}>Common Issues</h2>
          <div className={styles.troubleshootingContent}>
            <div className={styles.troubleshootingItem}>
              <h3 className={styles.troubleshootingTitle}>Chatbot not responding</h3>
              <p className={styles.troubleshootingText}>
                Ensure your knowledge base is properly uploaded and indexed. Check the deployment status in your dashboard.
              </p>
            </div>

            <div className={styles.troubleshootingItem}>
              <h3 className={styles.troubleshootingTitle}>Integration setup issues</h3>
              <p className={styles.troubleshootingText}>
                Verify that you have the correct permissions and API tokens for the platform you're integrating with.
              </p>
            </div>

            <div className={styles.troubleshootingItem}>
              <h3 className={styles.troubleshootingTitle}>File upload problems</h3>
              <p className={styles.troubleshootingText}>
                Supported formats include PDF, DOCX, TXT, CSV, and JSON. Files should be under 50MB each.
              </p>
            </div>

            <div className={styles.troubleshootingItem}>
              <h3 className={styles.troubleshootingTitle}>Billing and subscription</h3>
              <p className={styles.troubleshootingText}>
                Check your account dashboard for billing details. Contact support for subscription changes or refunds.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Status Section */}
      <PageSection>
        <div className={styles.statusSection}>
          <div className={styles.statusCard}>
            <h2 className={styles.statusTitle}>System Status</h2>
            <p className={styles.statusDescription}>
              Check the current status of Privexbot services and report any issues.
            </p>
            <div className={styles.statusButtons}>
              <a href="https://status.privexbot.com" className={styles.statusButtonPrimary}>
                View Status Page
              </a>
              <a href="https://github.com/privexbot/issues" className={styles.statusButtonSecondary}>
                Report Issue
              </a>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}