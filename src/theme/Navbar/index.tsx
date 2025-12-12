/**
 * Enhanced Professional Navbar Component
 * Swizzled from @docusaurus/theme-classic for custom styling
 */

import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';

interface Props {
  children: React.ReactNode;
}

export default function Navbar(props: Props): React.JSX.Element {
  return <NavbarLayout {...props} />;
}