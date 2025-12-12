/**
 * Theme Mode Toggle Component with Custom Icons
 */

import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/Navbar/ColorModeToggle';

import styles from './styles.module.css';

// Sun icon component for light mode
function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  );
}

// Moon icon component for dark mode
function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NavbarColorModeToggle({
  className,
}: Props): React.JSX.Element {
  const {colorMode, setColorMode} = useColorMode();

  return (
    <button
      className={clsx('clean-btn', styles.toggle, className)}
      type="button"
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
      aria-label={translate(
        {
          message: 'Switch between dark and light mode (currently {mode})',
          id: 'theme.colorToggle.ariaLabel',
          description: 'The ARIA label for the navbar color mode toggle',
        },
        {
          mode:
            colorMode === 'dark'
              ? translate({
                  message: 'dark mode',
                  id: 'theme.colorToggle.ariaLabel.mode.dark',
                  description: 'The name for the dark color mode',
                })
              : translate({
                  message: 'light mode',
                  id: 'theme.colorToggle.ariaLabel.mode.light',
                  description: 'The name for the light color mode',
                }),
        },
      )}
      title={translate({
        message: 'Switch color mode',
        id: 'theme.colorToggle.title',
        description: 'The title for the navbar color mode toggle',
      })}>
      <div className={styles.iconContainer}>
        <div className={clsx(styles.icon, {
          [styles.iconVisible]: colorMode === 'light',
          [styles.iconHidden]: colorMode === 'dark',
        })}>
          <SunIcon />
        </div>
        <div className={clsx(styles.icon, {
          [styles.iconVisible]: colorMode === 'dark',
          [styles.iconHidden]: colorMode === 'light',
        })}>
          <MoonIcon />
        </div>
      </div>
    </button>
  );
}