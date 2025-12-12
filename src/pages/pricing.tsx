import React from 'react';
import PageLayout, { PageSection } from '@site/src/components/PageLayout';
import styles from './pricing.module.css';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals and small projects getting started with privacy-first AI.',
    features: [
      { text: '1 chatbot', included: true },
      { text: '500 messages/month', included: true },
      { text: '5MB knowledge base storage', included: true },
      { text: 'Website widget deployment', included: true },
      { text: 'Community support', included: true },
      { text: 'Multi-channel deployment', included: false },
      { text: 'Advanced chatflows', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Get Started Free',
    ctaLink: 'https://privexbot.com/signup'
  },
  {
    name: 'Starter',
    price: '$9',
    period: 'per month',
    description: 'Great for small teams and growing projects that need more capacity.',
    features: [
      { text: 'Up to 3 chatbots', included: true },
      { text: '5,000 messages/month', included: true },
      { text: '50MB knowledge base storage', included: true },
      { text: 'Website widget deployment', included: true },
      { text: 'Discord & Telegram integration', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced chatflows', included: false },
    ],
    cta: 'Start Starter Plan',
    ctaLink: 'https://privexbot.com/signup?plan=starter'
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'Ideal for growing businesses that need powerful AI capabilities with privacy guarantees.',
    features: [
      { text: 'Up to 10 chatbots', included: true },
      { text: '50,000 messages/month', included: true },
      { text: '500MB knowledge base storage', included: true },
      { text: 'All deployment channels', included: true },
      { text: 'Advanced chatflows', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Advanced analytics dashboard', included: true },
    ],
    cta: 'Start Pro Trial',
    ctaLink: 'https://privexbot.com/signup?plan=pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations requiring maximum security, compliance, and custom solutions.',
    features: [
      { text: 'Unlimited chatbots', included: true },
      { text: 'Unlimited messages', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Dedicated infrastructure', included: true },
      { text: 'SSO integration', included: true },
      { text: 'SLA guarantees', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'Custom compliance', included: true },
    ],
    cta: 'Contact Sales',
    ctaLink: 'mailto:privexbot@gmail.com?subject=Enterprise Inquiry'
  }
];

export default function PricingPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Pricing"
      description="Choose the perfect plan for your privacy-first AI chatbot needs"
      heroTitle="Simple Pricing"
      heroSubtitle="No Hidden Fees."
      heroDescription="Start for free and scale as you grow. All plans include our privacy-first architecture."
      showGridBackground={true}
    >
      {/* Pricing Plans */}
      <PageSection>
        <div className={styles.pricingSection}>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.pricingCard} ${plan.popular ? styles.pricingCardPopular : ''}`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    Most Popular
                  </div>
                )}

                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>{plan.name}</h3>
                  <div className={styles.pricingPrice}>
                    <span className={styles.priceAmount}>{plan.price}</span>
                    <span className={styles.pricePeriod}>/{plan.period}</span>
                  </div>
                  <p className={styles.pricingDescription}>{plan.description}</p>
                </div>

                <div className={styles.pricingFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`${styles.pricingFeature} ${!feature.included ? styles.pricingFeatureDisabled : ''}`}
                    >
                      <div className={styles.featureIcon}>
                        {feature.included ? (
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                          </svg>
                        ) : (
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                          </svg>
                        )}
                      </div>
                      <span className={styles.featureText}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.pricingCta}>
                  <a
                    href={plan.ctaLink}
                    className={`${styles.ctaButton} ${plan.popular ? styles.ctaButtonPrimary : styles.ctaButtonSecondary}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Features Comparison */}
      <PageSection>
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>What's Included</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Privacy-First Architecture</h3>
              <p className={styles.featureCardDescription}>
                All plans include Secret Network's TEE technology for verifiable privacy and security.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Advanced Analytics</h3>
              <p className={styles.featureCardDescription}>
                Track performance, user engagement, and knowledge base effectiveness across all channels.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Multi-Channel Deployment</h3>
              <p className={styles.featureCardDescription}>
                Deploy to Discord, Telegram, WhatsApp, websites, and custom integrations seamlessly.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Premium Support</h3>
              <p className={styles.featureCardDescription}>
                Get expert help when you need it, from community support to dedicated assistance.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection>
        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Pricing FAQ</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I change plans anytime?</h3>
              <p className={styles.faqAnswer}>
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll only pay the prorated difference.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is there a free trial for Pro plans?</h3>
              <p className={styles.faqAnswer}>
                Yes, we offer a 14-day free trial for Professional plans. No credit card required to start.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What happens if I exceed my limits?</h3>
              <p className={styles.faqAnswer}>
                We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional capacity as needed.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you offer refunds?</h3>
              <p className={styles.faqAnswer}>
                Yes, we offer a 30-day money-back guarantee for all paid plans. Contact support if you're not satisfied.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of organizations building privacy-first AI experiences with Privexbot.
            </p>
            <div className={styles.ctaButtons}>
              <a href="https://privexbot.com/signup" className={styles.ctaButtonPrimary}>
                Start Free Trial
              </a>
              <a href="mailto:privexbot@gmail.com" className={styles.ctaButtonSecondary}>
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}