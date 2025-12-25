import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import PageLayout, { PageSection } from "@site/src/components/PageLayout";
import CTASection from "@site/src/components/CTASection";
import styles from "./harrison.module.css";

const authorData = {
  name: "Harrison Eze",
  title: "Software Engineer",
  image_url: "https://github.com/privexbot.png",
  bio: "Harrison is a software engineer specializing in privacy-first technologies and AI/ML development. He’s passionate about creating solutions that prioritize user privacy while delivering intelligent, powerful experiences. In his free time, Harrison enjoys writing, staying up-to-date with AI advancements, and contributing to open-source projects.",
  location: "Remote",
  company: "PrivexLabs",
  expertise: [
    "Smart Contract Development",
    "Chatbot Development",
    "AI/ML Integration",
    "Full-Stack Development",
  ],
  socials: {
    x: "https://x.com/Harystylesdev",
    linkedin: "https://www.linkedin.com/in/harrison-eze-dev",
    github: "https://github.com/harrisoneze",
    telegram: "https://t.me/DevHarystyles",
  },
  stats: {
    posts: 4,
    experience: "2+ years",
    projects: "5+",
  },
};

const socialIcons = {
  x: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  telegram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
};

export default function HarrisonAuthorPage(): React.JSX.Element {
  return (
    <PageLayout
      title={`${authorData.name} - Author`}
      description={`Learn more about ${authorData.name}, ${authorData.title} at Privexbot. ${authorData.bio}`}
      heroTitle={authorData.name}
      heroDescription={`${authorData.title} • ${authorData.company}`}
      showGridBackground={true}
    >
      {/* Author Profile Section */}
      <PageSection>
        <div className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={authorData.image_url} alt={authorData.name} />
            </div>

            <div className={styles.profileInfo}>
              <div className={styles.profileHeader}>
                <h1 className={styles.authorName}>{authorData.name}</h1>
                <p className={styles.authorTitle}>{authorData.title}</p>
                <p className={styles.authorLocation}>
                  📍 {authorData.location} • {authorData.company}
                </p>
              </div>

              <div className={styles.authorBio}>
                <p>{authorData.bio}</p>
              </div>

              <div className={styles.socialLinks}>
                {Object.entries(authorData.socials).map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    className={styles.socialLink}
                    aria-label={`${authorData.name} on ${platform}`}
                  >
                    {socialIcons[platform]}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  {authorData.stats.posts}
                </div>
                <div className={styles.statLabel}>Blog Posts</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  {authorData.stats.experience}
                </div>
                <div className={styles.statLabel}>Experience</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  {authorData.stats.projects}
                </div>
                <div className={styles.statLabel}>Projects</div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Expertise Section */}
      <PageSection>
        <div className={styles.expertiseSection}>
          <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
          <div className={styles.expertiseGrid}>
            {authorData.expertise.map((skill, index) => (
              <div key={index} className={styles.skillTag}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Recent Posts Section */}
      <PageSection>
        <div className={styles.postsSection}>
          <div className={styles.postsHeader}>
            <h2 className={styles.sectionTitle}>Recent Blog Posts</h2>
            <Link href="/blog" className={styles.viewAllLink}>
              View all posts →
            </Link>
          </div>

          <div className={styles.postsGrid}>
            {/* Recent posts will be populated here */}
            <div className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>Dec 25, 2025</span>
                <span className={styles.readTime}>• 8 min read</span>
              </div>
              <h3 className={styles.postTitle}>
                <Link href="/blog/building-your-first-ai-chatbot-complete-guide">
                  Building Your First AI Chatbot: A Complete Guide
                </Link>
              </h3>
              <p className={styles.postExcerpt}>
                From idea to deployment: everything you need to know to create
                your first AI chatbot using your own data, with complete privacy
                protection.
              </p>
            </div>

            <div className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>Dec 20, 2025</span>
                <span className={styles.readTime}>• 5 min read</span>
              </div>
              <h3 className={styles.postTitle}>
                <Link href="/blog/privexbot-superfast-workflow">
                  How Privexbot will make your chatbot workflow superfast
                </Link>
              </h3>
              <p className={styles.postExcerpt}>
                Building effective chatbots doesn't have to be complex or
                time-consuming. Privexbot streamlines the entire process from
                concept to deployment.
              </p>
            </div>

            <div className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>Dec 15, 2025</span>
                <span className={styles.readTime}>• 6 min read</span>
              </div>
              <h3 className={styles.postTitle}>
                <Link href="/blog/getting-started-guide">
                  Building Your First Privacy-First Chatbot in 10 Minutes
                </Link>
              </h3>
              <p className={styles.postExcerpt}>
                Ready to build your first privacy-preserving chatbot? This
                step-by-step guide will have you up and running with a
                functional AI assistant.
              </p>
            </div>

            <div className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>Dec 10, 2025</span>
                <span className={styles.readTime}>• 7 min read</span>
              </div>
              <h3 className={styles.postTitle}>
                <Link href="/blog/why-chatbot-privacy-matters-your-business">
                  Why Chatbot Privacy Matters for Your Business
                </Link>
              </h3>
              <p className={styles.postExcerpt}>
                Your customers share sensitive information with chatbots. Here's
                why protecting that data isn't just good practice—it's essential
                for business success.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
}
