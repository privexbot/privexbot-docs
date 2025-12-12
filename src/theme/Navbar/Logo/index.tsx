/**
 * Enhanced Professional Navbar Logo Component
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';
import type {Props} from '@theme/Logo';
import styles from './styles.module.css';

export default function Logo(props: Props): React.JSX.Element {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? '' : title;

  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && {target: logo.target})}
      className={clsx(styles.logoLink, props.className)}>
      {logo?.src && (
        <div className={styles.logoContainer}>
          <ThemedImage
            className={clsx('navbar__logo', styles.logoImage, imageClassName)}
            sources={{
              light: useBaseUrl(logo.src),
              dark: useBaseUrl(logo.srcDark || logo.src),
            }}
            alt={alt}
            {...(logo?.style && {style: logo.style})}
          />
          {navbarTitle && (
            <b className={clsx('navbar__title', styles.logoTitle, titleClassName)}>
              {navbarTitle}
            </b>
          )}
        </div>
      )}
    </Link>
  );
}