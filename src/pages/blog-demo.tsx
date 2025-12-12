import React from 'react';
import PageLayout, { PageSection } from '@site/src/components/PageLayout';

export default function BlogDemoPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Blog Demo"
      description="Demo page showing the hero design from the design file"
      heroCategory="Insights & Ideas"
      heroTitle="Welcome to Our Blog"
      heroDescription="Discover stories, tips, and resources to inspire your next big idea."
      showGridBackground={true}
    >
      {/* Content Section */}
      <PageSection>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          color: 'var(--privexbot-white)'
        }}>
          <p>This demonstrates the exact hero design from the provided image.</p>
          <p>The hero section above should match the design with:</p>
          <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <li>Light gray/white background</li>
            <li>"Insights & Ideas" as the category label</li>
            <li>"Welcome to Our Blog" as the main title</li>
            <li>Descriptive text below</li>
            <li>Subtle grid background pattern</li>
          </ul>
        </div>
      </PageSection>
    </PageLayout>
  );
}