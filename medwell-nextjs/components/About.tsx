'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/styles/theme';

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding-top: ${theme.spacing.paddingTop};
          padding-bottom: ${theme.spacing.paddingBottom};
          background-color: #f6f9ff;
          position: relative;
          overflow: hidden;
        }
        .about-title {
          font-size: 52px;
          line-height: 1.2;
          margin-bottom: 26px;
        }
        .about-decor-left, .about-decor-right {
          position: absolute;
          background-repeat: no-repeat;
          pointer-events: none;
        }
        .about-decor-left {
          left: -363px;
          bottom: -161px;
          width: 770px;
          height: 848px;
          background-image: url('/assets/images/design-lft-img.png');
        }
        .about-decor-right {
          right: -297px;
          top: -53px;
          width: 577px;
          height: 635px;
          background-image: url('/assets/images/design-rt-img.png');
        }
        @media (max-width: 1300px) {
          .about-decor-left, .about-decor-right { display: none; }
        }
        .about-grid {
          display: grid;
          grid-template-columns: 53% 44%;
          gap: 60px;
          align-items: center;
        }
        .about-images-wrapper {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        .about-img-1, .about-img-2, .about-img-3 {
          border-radius: 10px;
          object-fit: cover;
          max-width: 100%;
        }
        .about-img-2 {
          margin-top: 60px;
        }
        .about-img-3 {
          margin-top: -249px;
        }
        .about-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 32px;
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-images-wrapper {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .about-title { font-size: 32px; }
          .about-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .about-list-grid {
            grid-template-columns: 1fr;
          }
          .about-img-2 {
            margin-top: 20px;
          }
          .about-img-3 {
            margin-top: 20px;
          }
        }
      `}</style>
      <section className="about-section">
      {/* Decorative background images */}
      <div className="about-decor-left" />
      <div className="about-decor-right" />

      <div style={{ maxWidth: theme.wrappers.w3, margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 1 }}>
        <div className="about-grid">
          {/* About Image Section */}
          <div style={{ position: 'relative' }}>
            <div className="about-images-wrapper">
              <Image src="/assets/images/about-img1.jpg" alt="About 1" width={296} height={266} className="about-img-1" />
              <Image src="/assets/images/about-img2.jpg" alt="About 2" width={295} height={455} className="about-img-2" />
              <Image src="/assets/images/about-img3.jpg" alt="About 3" width={296} height={266} className="about-img-3" />
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
            <h2 className="about-title" style={{ fontWeight: 600, color: theme.colors.primary }}>
              Welcome to Dr. Ashish Kala Clinic & Healthcare
            </h2>
            <p style={{ color: theme.colors.text, marginBottom: '28px', fontSize: '18px' }}>
              Dr. Ashish Kala is a dedicated healthcare professional in Gurgaon, committed to providing comprehensive medical services. Our clinic combines experienced expertise with modern care to ensure your well-being.
            </p>
            
            <div className="about-list-grid">
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
    </>
  );
}
