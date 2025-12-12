import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FooterProps {
  className?: string;
}

export default function PrivexbotFooter({ className }: FooterProps): React.JSX.Element {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter signup');
  };

  return (
    <footer className={clsx(styles.footer, className)}>
      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.container}>
          {/* Desktop: 4 columns, Mobile: Single column */}
          <div className={styles.grid}>
            {/* Company Section */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="/about" className={styles.link}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/faqs" className={styles.link}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/blog" className={styles.link}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Product Section */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Product</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="/#features" className={styles.link}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className={styles.link}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/docs/intro" className={styles.link}>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Support</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="/help" className={styles.link}>
                    Help Center
                  </a>
                </li>
                <li>
                  <span className={styles.supportText}>0700-Call-Hoppr</span>
                </li>
                <li>
                  <span className={styles.supportText}>0700-2255-46777</span>
                </li>
              </ul>
            </div>

            {/* Subscribe Section - Desktop */}
            <div className={clsx(styles.column, styles.subscribeDesktop)}>
              <h3 className={styles.subscribeTitle}>Subscribe to stay in the loop.</h3>
              <form onSubmit={handleNewsletterSubmit} className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </form>

              {/* Social Icons - Desktop */}
              <div className={styles.socialIcons}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Facebook"
                >
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <svg className={styles.icon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Twitter"
                >
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Subscribe Section */}
          <div className={styles.subscribeMobile}>
            <h3 className={styles.subscribeTitleMobile}>Subscribe to stay in the loop.</h3>
            <form onSubmit={handleNewsletterSubmit} className={styles.subscribeFormMobile}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={styles.emailInputMobile}
                required
              />
              <button type="submit" className={styles.subscribeButtonMobile}>
                Subscribe
              </button>
            </form>

            {/* Social Icons - Mobile */}
            <div className={styles.socialIconsMobile}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconMobile}
                aria-label="Facebook"
              >
                <svg className={styles.iconMobile} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconMobile}
                aria-label="Instagram"
              >
                <svg className={styles.iconMobile} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconMobile}
                aria-label="Twitter"
              >
                <svg className={styles.iconMobile} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Bar */}
        <div className={styles.container}>
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>©All right reserved • Privexbot</p>
            <div className={styles.termsLinks}>
              <span className={styles.termsText}>2025 Terms and condition</span>
              <span className={styles.dividerText}>|</span>
              <a href="/privacy" className={styles.privacyLink}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Watermark */}
      <div className={styles.watermark}>
        <div className={styles.watermarkText}>Privexbot</div>
      </div>
    </footer>
  );
}