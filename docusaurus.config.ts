import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Privexbot",
  tagline: "Privacy-First AI Chatbot Builder run on Secret VM",
  favicon: "img/favicon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://privexbot.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "privexbot", // Usually your GitHub org/user name.
  projectName: "privexbot-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          // Remove edit links for now
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          routeBasePath: "blog",
          // Remove edit links for now
          editUrl: undefined,
          // Blog options
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Mermaid configuration
    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark",
      },
      options: {
        fontFamily: "Manrope, system-ui, -apple-system, sans-serif",
        fontSize: 14,
        fontWeight: 500,
        wrap: true,
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis",
          padding: 15,
          nodeSpacing: 50,
          rankSpacing: 50,
        },
        sequence: {
          useMaxWidth: true,
          diagramMarginX: 15,
          diagramMarginY: 15,
          actorMargin: 30,
          width: 150,
          height: 50,
          boxMargin: 8,
          boxTextMargin: 4,
          noteMargin: 8,
          messageMargin: 25,
        },
        gantt: {
          useMaxWidth: true,
          leftPadding: 50,
          gridLineStartPadding: 25,
          fontSize: 12,
          sectionFontSize: 14,
        },
        journey: {
          useMaxWidth: true,
          diagramMarginX: 25,
          diagramMarginY: 15,
        },
        timeline: {
          useMaxWidth: true,
          diagramMarginX: 25,
          diagramMarginY: 15,
        },
        mindmap: {
          useMaxWidth: true,
          padding: 15,
        },
        gitgraph: {
          useMaxWidth: true,
          diagramPadding: 15,
        },
      },
    },
    // Replace with your project's social card
    image: "img/privexbot-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Privexbot",
      logo: {
        alt: "Privexbot Logo",
        src: "img/privexbot-logo-icon.png",
        srcDark: "img/privexbot-logo-icon.png",
      },
      hideOnScroll: false,
      style: "dark",
      items: [
        {
          label: "privexbot",
          href: "https://privexbot.com",
          position: "left",
        },
        {
          label: "Pricing",
          to: "/pricing",
          position: "left",
        },
        {
          label: "FAQs",
          to: "/faqs",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          label: "Login",
          href: "https://privexbot.com/login",
          position: "right",
        },
        {
          label: "Start for free",
          href: "https://privexbot.com/signup",
          position: "right",
          className: "navbar__item--cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Privexbot.`,
    }, // Custom footer handled by theme component
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
