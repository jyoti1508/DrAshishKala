'use client';

import React from 'react';
import Link from 'next/link';
import { theme } from '@/styles/theme';

interface SubBannerProps {
  title: string;
  description: string;
}

export default function SubBanner({ title, description }: SubBannerProps) {
  return (
    <>
      <style>{`
        .sub-banner-section {
          padding: 200px 0 100px;
        }
        .sub-banner-title {
          font-size: 72px;
        }
        .sub-banner-desc {
          font-size: 20px;
          color: #d4dffb;
          margin-bottom: 30px;
        }
        @media (max-width: 768px) {
          .sub-banner-section { padding: 150px 0 60px; }
          .sub-banner-title { font-size: 38px; }
          .sub-banner-desc { font-size: 16px; }
        }
      `}</style>
      <section className="sub-banner-section" style={{
        width: '100%',
        backgroundColor: theme.colors.secondary,
        backgroundImage: "url('/assets/images/sub-banner-bg-img.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
      }}>
      <div style={{ maxWidth: theme.wrappers.w2, margin: '0 auto', padding: '0 15px', textAlign: 'center' }}>
        <h1 className="sub-banner-title" style={{ color: '#fff', fontWeight: 700, marginBottom: '20px' }}>{title}</h1>
        <p className="sub-banner-desc">{description}</p>
        
        <nav className="sub-banner-nav" style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 30px', borderRadius: '30px' }}>
          <ol className="sub-banner-breadcrumb" style={{ display: 'flex', gap: '10px', color: '#fff', fontSize: '18px' }}>
            <li><Link href="/">Home</Link></li>
            <li>/</li>
            <li className="sub-banner-breadcrumb-current" style={{ color: '#d4dffb' }}>{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  </>
  );
}
