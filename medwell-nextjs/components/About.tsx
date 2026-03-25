'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/styles/theme';

export default function About() {
  return (
    <section style={{
      paddingTop: theme.spacing.paddingTop,
      paddingBottom: theme.spacing.paddingBottom,
      backgroundColor: '#f6f9ff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background images */}
      <div style={{
        position: 'absolute',
        left: '-363px',
        bottom: '-161px',
        width: '770px',
        height: '848px',
        backgroundImage: "url('/assets/images/design-lft-img.png')",
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        right: '-297px',
        top: '-53px',
        width: '577px',
        height: '635px',
        backgroundImage: "url('/assets/images/design-rt-img.png')",
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: theme.wrappers.w3, margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '53% 44%',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* About Image Section */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <Image src="/assets/images/about-img1.jpg" alt="About 1" width={296} height={266} style={{ borderRadius: '10px', objectFit: 'cover' }} />
              <Image src="/assets/images/about-img2.jpg" alt="About 2" width={295} height={455} style={{ borderRadius: '10px', objectFit: 'cover', marginTop: '60px' }} />
              <Image src="/assets/images/about-img3.jpg" alt="About 3" width={296} height={266} style={{ borderRadius: '10px', objectFit: 'cover', marginTop: '-249px' }} />
            </div>
            
            {/* Play Button */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '168px',
              height: '168px',
              backgroundColor: theme.colors.accent,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <Image src="/assets/images/play-icon.png" alt="Play" width={18} height={20} />
              </div>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: "url('/assets/images/rotate-txt.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }} />
            </div>
          </div>

          {/* About Text Content */}
          <div>
            <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>About us</span>
            <h2 style={{ fontSize: '52px', fontWeight: 600, color: theme.colors.primary, marginBottom: '26px', lineHeight: '1.2' }}>
              Welcome to Dr. Ashish Kala Clinic & Healthcare
            </h2>
            <p style={{ color: theme.colors.text, marginBottom: '28px', fontSize: '18px' }}>
              Dr. Ashish Kala is a dedicated healthcare professional in Gurgaon, committed to providing comprehensive medical services. Our clinic combines experienced expertise with modern care to ensure your well-being.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '32px' }}>
              {[
                'Monthly Checkups', 'Caring Medical Team', 'Proactive and Fast Results',
                'Cosmetic Filling', 'Dental X-Ray', 'Complete Crown'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: theme.colors.primary, fontWeight: 500 }}>
                  <i className="fas fa-check-circle" style={{ color: theme.colors.secondary }}></i>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '19px' }}>
              <Link href="/doctors" style={{ fontSize: '20px', fontWeight: 600, color: theme.colors.primary }}>
                Read More
              </Link>
              <div style={{
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                border: `1px solid ${theme.colors.primary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Image src="/assets/images/long-arrow.png" alt="arrow" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
