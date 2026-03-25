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
    <section style={{ backgroundColor: theme.colors.primary, padding: '100px 0' }}>
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
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
              <div style={{ fontSize: '60px', fontWeight: 700, fontFamily: theme.fonts.montserrat, marginBottom: '10px' }}>
                {stat.value}
              </div>
              <span style={{ fontSize: '18px', color: '#d4dffb', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
