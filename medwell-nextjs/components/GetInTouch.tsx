'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/styles/theme';

export default function GetInTouch() {
  return (
    <>
      <style>{`
        .get-in-touch-section { padding: 100px 0; background-color: #fff; }
        .get-in-touch-box {
          background-color: #f6f9ff;
          border-radius: 20px;
          display: flex;
          align-items: center;
          overflow: hidden;
          box-shadow: 0px 10px 40px rgba(0,0,0,0.05);
        }
        .get-in-touch-img {
          width: 40%;
          height: 400px;
          background-image: url('/assets/images/about-doctor-img2.jpg');
          background-size: cover;
          background-position: center;
          background-color: #ddd;
        }
        .get-in-touch-content { padding: 60px 80px; flex: 1; }
        .get-in-touch-title { font-size: 52px; line-height: 1.2; margin-bottom: 40px; }
        @media (max-width: 1024px) {
          .get-in-touch-content { padding: 40px; }
          .get-in-touch-title { font-size: 42px; }
        }
        @media (max-width: 768px) {
          .get-in-touch-box { flex-direction: column; }
          .get-in-touch-img { width: 100%; height: 300px; }
          .get-in-touch-content { padding: 30px; text-align: center; }
          .get-in-touch-title { font-size: 32px; margin-bottom: 30px; }
          .get-in-touch-section { padding: 60px 0; }
          .get-in-touch-btn-box { justify-content: center; }
        }
      `}</style>
      <section className="get-in-touch-section">
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div className="get-in-touch-box">
          {/* Doctor Image Area */}
          <div className="get-in-touch-img" />

          {/* Text Area */}
          <div className="get-in-touch-content">
            <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>GET IN TOUCH</span>
            <h2 className="get-in-touch-title" style={{ fontWeight: 600, color: theme.colors.primary }}>Provide The Best Medical Service for You!</h2>
            
            <div className="get-in-touch-btn-box" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link href="/contact" style={{
                fontSize: '20px',
                fontWeight: 600,
                color: theme.colors.primary
              }}>
                Book an Appointment
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
                <Image src="/assets/images/top-arrow.png" alt="arrow" width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(10%) sepia(87%) saturate(3475%) hue-rotate(233deg) brightness(89%) contrast(108%)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
