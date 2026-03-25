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
    <section style={{
      width: '100%',
      backgroundColor: theme.colors.secondary,
      backgroundImage: "url('/assets/images/sub-banner-bg-img.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      padding: '200px 0 100px'
    }}>
      <div style={{ maxWidth: theme.wrappers.w2, margin: '0 auto', padding: '0 15px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '72px', color: '#fff', fontWeight: 700, marginBottom: '20px' }}>{title}</h1>
        <p style={{ color: '#d4dffb', fontSize: '20px', marginBottom: '30px' }}>{description}</p>
        
        <nav style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 30px', borderRadius: '30px' }}>
          <ol style={{ display: 'flex', gap: '10px', color: '#fff', fontSize: '18px' }}>
            <li><Link href="/">Home</Link></li>
            <li>/</li>
            <li style={{ color: '#d4dffb' }}>{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
