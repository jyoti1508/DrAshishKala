'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

const stats = [
  { icon: '/assets/images/counter-img1.png', value: '3859+', label: 'Professional Doctors' },
  { icon: '/assets/images/counter-img2.png', value: '8596', label: 'Globally Hospitals' },
  { icon: '/assets/images/counter-img3.png', value: '42+', label: 'Years of Experience' }
];

export default function Stats() {
  return (
    <>
      <style>{`
        .stats-section { padding: 100px 0; background-color: ${theme.colors.primary}; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .stat-val { font-size: 60px; line-height: 1.2; }
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr; }
          .stat-val { font-size: 40px; }
          .stats-section { padding: 60px 0; }
        }
      `}</style>
      <section className="stats-section">
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: '#fff'
            }}>
              <figure style={{ width: '100px', height: '100px', marginBottom: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={stat.icon} alt={stat.label} width={45} height={45} style={{ objectFit: 'contain' }} />
              </figure>
              <div className="stat-val" style={{ fontWeight: 700, fontFamily: theme.fonts.montserrat, marginBottom: '10px' }}>
                {stat.value}
              </div>
              <span className="stat-label" style={{ fontSize: '18px', color: '#d4dffb', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
