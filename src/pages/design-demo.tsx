import React from "react";
import PageLayout, { PageSection } from "@site/src/components/PageLayout";
import CTASection from "@site/src/components/CTASection";
import styles from "./design-demo.module.css";

export default function DesignDemoPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Design Demo"
      description="Demonstration of navbar and CTA components matching the provided designs"
      heroTitle="Design Components Demo"
      heroDescription="This page demonstrates the navbar and CTA section designs exactly as provided in the design files."
      showGridBackground={false}
    >
      {/* Content explaining the components */}
      <PageSection>
        <div className={styles.demoContent}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Navigation Bar</h2>
            <p className={styles.sectionDescription}>
              The navigation bar above matches the provided design with:
            </p>
            <ul className={styles.featureList}>
              <li>Dark black background (#000000)</li>
              <li>Privexbot logo and brand name on the left</li>
              <li>Navigation items: Privexbot, Pricing, FAQs, Blog</li>
              <li>Login link on the right side</li>
              <li>Blue "Start for free" CTA button with rounded corners</li>
              <li>Proper spacing and typography matching the design</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>CTA Section Preview</h2>
            <p className={styles.sectionDescription}>
              Below is the CTA section component that matches the provided
              design:
            </p>
          </div>
        </div>
      </PageSection>

      {/* CTA Section Demo */}
      <CTASection
        title="Get Started with Privexbot"
        description="Explore how Privexbot can transform your workflow and elevate your team's collaboration."
        primaryButtonText="Get in touch"
        primaryButtonLink="mailto:privexbot@gmail.com"
        secondaryButtonText="Send a mail"
        secondaryButtonLink="mailto:privexbot@gmail.com"
        features={[
          {
            icon: (
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: "Understand your use case",
            description:
              "Get personalized advice tailored to your product and team.",
          },
          {
            icon: (
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            ),
            title: "See it in action",
            description:
              "Explore how our solution fits into your existing workflow.",
          },
          {
            icon: (
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2s-.9-2-2-2c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.1 0 2-.9 2-2s-.9-2-2-2z" />
              </svg>
            ),
            title: "Get technical clarity",
            description:
              "Ask us anything about integrations, scaling, or compatibility with your stack.",
          },
        ]}
      />

      {/* Component details */}
      <PageSection>
        <div className={styles.demoContent}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>CTA Component Features</h2>
            <p className={styles.sectionDescription}>
              The CTA section above includes:
            </p>
            <ul className={styles.featureList}>
              <li>Blue gradient background matching the design</li>
              <li>Main CTA card with rounded corners and backdrop blur</li>
              <li>White primary button and outlined secondary button</li>
              <li>Three feature cards with icons and descriptions</li>
              <li>Fully responsive design for mobile and desktop</li>
              <li>Hover effects and smooth animations</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Implementation</h2>
            <p className={styles.sectionDescription}>
              Both components are now ready to use across the site:
            </p>
            <ul className={styles.featureList}>
              <li>Navigation bar is configured in docusaurus.config.ts</li>
              <li>CTA component can be imported and used on any page</li>
              <li>Fully customizable with props for different content</li>
              <li>Consistent with Privexbot brand guidelines</li>
            </ul>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
