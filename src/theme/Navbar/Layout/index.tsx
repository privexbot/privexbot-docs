/**
 * Enhanced Professional Navbar Layout Component
 * Matches Header.tsx design with rounded black navbar and centered navigation
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import type {Props} from '@theme/Navbar/Layout';
import styles from './styles.module.css';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

function NavbarItems({items, showSeparators = false}: {items: readonly any[]; showSeparators?: boolean}): React.JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {/* Add separator before item (except for first item) */}
          {showSeparators && i > 0 && (
            <span className={styles.navbarSeparator}>|</span>
          )}
          <ErrorCauseBoundary
            onError={(error) =>
              new Error(
                `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
                {cause: error},
              )
            }>
            <NavbarItem {...item} />
          </ErrorCauseBoundary>
        </React.Fragment>
      ))}
    </>
  );
}

function NavbarContentLayout({logo, centerNav, rightNav, mobileMenu}: {
  logo: React.JSX.Element;
  centerNav: React.JSX.Element;
  rightNav: React.JSX.Element;
  mobileMenu: React.JSX.Element;
}) {
  return (
    <div className={styles.navbarInner}>
      {/* Logo Section */}
      <div className={styles.navbarLeft}>{logo}</div>

      {/* Desktop Center Navigation - Hidden on Mobile */}
      <div className={styles.navbarCenter}>{centerNav}</div>

      {/* Desktop Right Navigation - Hidden on Mobile */}
      <div className={styles.navbarRight}>{rightNav}</div>

      {/* Mobile Menu Button */}
      {mobileMenu}
    </div>
  );
}

export default function NavbarLayout({children}: Props): React.JSX.Element {
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <nav className={clsx('navbar', styles.navbar)} aria-label="Main navigation">
            <NavbarContentLayout
              logo={
                <>
                  <NavbarLogo />
                  <span className={styles.navbarSeparator}>|</span>
                </>
              }
              centerNav={
                <div className={styles.centerNavigation}>
                  <div className={styles.centerNavItems}>
                    <NavbarItems items={leftItems} showSeparators={true} />
                  </div>
                </div>
              }
              rightNav={
                <>
                  <NavbarColorModeToggle className={styles.colorModeToggle} />
                  <span className={styles.navbarSeparator}>|</span>
                  <NavbarItems items={rightItems} showSeparators={false} />
                  {!searchBarItem && (
                    <NavbarSearch>
                      <SearchBar />
                    </NavbarSearch>
                  )}
                </>
              }
              mobileMenu={
                <button
                  className={styles.mobileMenuButton}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <svg className={styles.mobileMenuIcon} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg className={styles.mobileMenuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              }
            />

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className={styles.mobileMenu}>
                <div className={styles.mobileMenuContent}>
                  <div className={styles.mobileNavItems}>
                    <NavbarItems items={leftItems} showSeparators={false} />
                  </div>
                  <div className={styles.mobileMenuDivider} />
                  <div className={styles.mobileMenuActions}>
                    <NavbarColorModeToggle className={styles.mobileColorModeToggle} />
                    <NavbarItems items={rightItems} showSeparators={false} />
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
        {children}
      </header>
    </>
  );
}