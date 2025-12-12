import React, { useState } from "react";
import PageLayout, { PageSection } from "@site/src/components/PageLayout";
import styles from "./faqs.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Privexbot?",
    answer: `Privexbot is a privacy-first, multi-tenant SaaS platform for building AI chatbots with RAG-powered knowledge bases. It features dual creation modes: simple form-based setup and visual workflow builder for complex chatflows.

Our platform runs AI workloads in Secret Network's Trusted Execution Environment (TEE) to ensure complete data privacy. You can create knowledge bases from multiple sources (Notion, Google Docs, PDFs, websites) and deploy chatbots across multiple channels including web widgets, Discord, Telegram, and WhatsApp.`,
  },
  {
    id: 2,
    question: "How does the privacy-first architecture work?",
    answer: `Privexbot uses Secret Network's Trusted Execution Environment (TEE) for verifiable execution and confidential AI processing. This means your data and conversations runs in a secure, isolated environment.

Your knowledge base content, user conversations, and AI processing all happen in SecretVM, ensuring complete privacy and data sovereignty. This is especially important for businesses handling sensitive information or operating in regulated industries.`,
  },
  {
    id: 3,
    question: "What sources can I use to create knowledge bases?",
    answer: `Privexbot supports multiple knowledge base sources:

• File uploads: PDF, Word, CSV, JSON, and 15+ other formats
• Website scraping: Automatic content extraction from any URL
• Google Docs/Sheets: Direct integration with OAuth authentication
• Notion: API integration for seamless content sync
• Direct text input: Manual content creation and editing

All content goes through our intelligent chunking and embedding pipeline for optimal RAG performance.`,
  },
  {
    id: 4,
    question: "What's the difference between Chatbots and Chatflows?",
    answer: `Privexbot offers two creation modes:

**Chatbots**: Simple, form-based creation for straightforward Q&A bots. Perfect for basic customer support or FAQ automation.

**Chatflows**: Advanced visual workflow builder with drag-and-drop nodes, conditional logic, and complex branching. Ideal for sophisticated automation, lead qualification, or multi-step processes.

Both share the same deployment API and can be deployed to the same channels, but chatflows offer much more flexibility for complex use cases.`,
  },
  {
    id: 5,
    question: "Which platforms can I deploy my chatbots to?",
    answer: `Privexbot supports multi-channel deployment:

• **Website embed**: JavaScript widget or iframe integration
• **Discord**: Automatic bot registration and webhook setup
• **Telegram**: Direct bot creation and management
• **WhatsApp Business API**: For business communication
• **Zapier webhook**: Custom integrations with 5,000+ apps
• **REST API**: Direct API access for custom implementations

All channels use the same underlying bot logic and knowledge base, so you create once and deploy everywhere.`,
  },
  {
    id: 6,
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 30 days of your purchase for a full refund. No questions asked.",
  },
  {
    id: 7,
    question: "Is my data secure with Privexbot?",
    answer: `Absolutely. Data security and privacy are our top priorities. All data processing happens within Secret Network's Trusted Execution Environment (TEE), which provides:

• Hardware-level encryption during processing
• Cryptographic attestation of code integrity
• Zero data leakage guarantees
• HIPAA, GDPR, and SOC 2 compliance

Your data remains encrypted and private throughout the entire AI processing pipeline.`,
  },
  {
    id: 8,
    question: "Can I use Privexbot for enterprise applications?",
    answer: `Yes! Privexbot is designed for enterprise use with features including:

• Multi-tenant architecture for organizations
• Role-based access control
• Single sign-on (SSO) integration
• Custom deployment options
• SLA guarantees
• Dedicated support

Contact our sales team to discuss enterprise requirements and custom pricing.`,
  },
];

export default function FAQPage(): React.JSX.Element {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about Privexbot"
      heroTitle="FAQs"
      heroSubtitle="Your Questions."
      heroDescription="Answered. Contact us if you have any other questions."
      showGridBackground={true}
    >
      {/* FAQ Content Section */}
      <PageSection>
        <div className={styles.faqContent}>
          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <div key={item.id} className={styles.faqItem}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className={styles.faqButton}
                  aria-expanded={openItems.has(item.id)}
                >
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <div
                    className={`${styles.faqIcon} ${
                      openItems.has(item.id) ? styles.faqIconOpen : ""
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>

                {openItems.has(item.id) && (
                  <div className={styles.faqAnswer}>
                    <div className={styles.faqAnswerContent}>{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Contact CTA */}
      <PageSection>
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaDescription}>
              Can't find the answer you're looking for? Our support team is here
              to help.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/help" className={styles.ctaButtonPrimary}>
                Visit Help Center
              </a>
              <a
                href="mailto:privexbot@gmail.com"
                className={styles.ctaButtonSecondary}
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
