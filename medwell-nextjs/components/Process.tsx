'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

const processes = [
  {
    icon: '/assets/images/process-img1.png',
    title: 'Seeing Patients',
    desc: 'Rure dolor aen voluta zesse cillum...',
    num: '01'
  },
  {
    icon: '/assets/images/process-img2.png',
    title: 'Making a Diagnosis',
    desc: 'Gure dolor aen voluta zesse cillum...',
    num: '02'
  },
  {
    icon: '/assets/images/process-img3.png',
    title: 'Developing a Treatment',
    desc: 'Hure dolor aen voluta zesse cillum...',
    num: '03'
  },
  {
    icon: '/assets/images/process-img4.png',
    title: 'Documenting Patient',
    desc: 'Zure dolor aen voluta zesse cillum...',
    num: '04'
  }
];

export default function Process() {
  return (
    <section style={{ padding: '150px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>WORK PROCESS</span>
          <h2 style={{ fontSize: '52px', fontWeight: 600, color: theme.colors.primary, lineHeight: '1.2' }}>Let’s See How We Work</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {processes.map((proc, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                width: '183px',
                height: '183px',
                margin: '0 auto 30px',
                backgroundColor: '#f6f9ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #f0f0f0'
              }}>
                <figure style={{ margin: 0 }}>
                  <Image src={proc.icon} alt={proc.title} width={80} height={80} style={{ objectFit: 'contain' }} />
                </figure>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: theme.colors.secondary,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: 600
                }}>
                  {proc.num}
                </div>
              </div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, marginBottom: '10px' }}>{proc.title}</h4>
              <p style={{ color: theme.colors.text }}>{proc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
