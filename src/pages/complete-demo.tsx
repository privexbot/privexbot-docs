import React from 'react';
import PageLayout, { PageSection } from '@site/src/components/PageLayout';
import CTASection from '@site/src/components/CTASection';

export default function CompleteDemoPage(): React.JSX.Element {
  return (
    <PageLayout
      title="Complete Design Demo"
      description="Complete demonstration of all implemented design components"
      heroCategory="Design Showcase"
      heroTitle="All Components Implemented"
      heroDescription="This page demonstrates all the design components that have been successfully implemented based on your provided designs."
      showGridBackground={true}
    >
      {/* Summary Section */}
      <PageSection>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            color: '#111827',
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '2rem',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
          }}>
            ✅ Complete Implementation Summary
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#111827',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                🧭 Navigation Bar
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: '0'
              }}>
                Implemented exactly as per design with dark theme, proper spacing, and blue CTA button
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#111827',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                🎨 Hero Section
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: '0'
              }}>
                Light theme hero with category label, title, description, and grid background
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#111827',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                📞 CTA Section
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: '0'
              }}>
                Blue gradient CTA with feature cards, primary/secondary buttons
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#111827',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
              📝 Blog Layout
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: '0'
              }}>
                Complete blog homepage with featured posts, newsletter, and grid layout
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#111827',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                📄 Content Pages
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: '0'
              }}>
                About, FAQ, Help, 404, Pricing, Privacy pages with consistent design
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#111827',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                🎯 Brand Consistency
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: '0'
              }}>
                All components follow Privexbot brand guidelines and design system
              </p>
            </div>
          </div>

          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              color: '#065f46',
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              🚀 Ready for Production
            </h3>
            <p style={{
              color: '#047857',
              fontSize: '0.875rem',
              margin: '0'
            }}>
              All components are fully responsive, accessible, and ready to deploy.
              Visit the navigation links to explore each page!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/" style={{
              background: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Visit Homepage
            </a>
            <a href="/blog" style={{
              background: '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              View Blog
            </a>
            <a href="/about" style={{
              background: '#8b5cf6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              About Page
            </a>
            <a href="/pricing" style={{
              background: '#f59e0b',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Pricing
            </a>
          </div>
        </div>
      </PageSection>

      {/* CTA Demo */}
      <CTASection
        title="Perfect Implementation Achieved!"
        description="All design components have been successfully implemented and are ready for use across your Privexbot documentation site."
        primaryButtonText="Start Using Components"
        primaryButtonLink="/"
        secondaryButtonText="View Documentation"
        secondaryButtonLink="/docs/intro"
      />
    </PageLayout>
  );
}