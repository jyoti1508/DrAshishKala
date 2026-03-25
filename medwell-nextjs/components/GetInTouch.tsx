'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/styles/theme';

export default function GetInTouch() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{
          backgroundColor: '#f6f9ff',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          boxShadow: '0px 10px 40px rgba(0,0,0,0.05)'
        }}>
          {/* Doctor Image Area */}
          <div style={{
            width: '40%',
            height: '400px',
            backgroundImage: "url('/assets/images/about-doctor-img2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#ddd'
          }} />

          {/* Text Area */}
          <div style={{ padding: '60px 80px', flex: 1 }}>
            <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>GET IN TOUCH</span>
            <h2 style={{ fontSize: '52px', fontWeight: 600, color: theme.colors.primary, marginBottom: '40px', lineHeight: '1.2' }}>Provide The Best Medical Service for You!</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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
  );
}
