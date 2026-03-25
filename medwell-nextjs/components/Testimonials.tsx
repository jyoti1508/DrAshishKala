'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

const reviews = [
  { img: '/assets/images/patient-img1.png', name: 'Kevin Andrew', role: 'Happy Client', text: 'Quisuam est rui dolorem ipsum rui dolor sit amet, consectetur, adipise velit sed quia non numquam eiusm tempora incidunt ut labore' },
  { img: '/assets/images/patient-img2.png', name: 'Peri James', role: 'Happy Client', text: 'Ruisuam est rui dolorem ipsum rui dolor sit amet, consectetur, adipise velit sed quia non numquam eiusm tempora incidunt ut labore' },
  { img: '/assets/images/patient-img3.png', name: 'Naurth Reough', role: 'Happy Client', text: 'Nuisuam est rui dolorem ipsum rui dolor sit amet, consectetur, adipise velit sed quia non numquam eiusm tempora incidunt ut labore' }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '150px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>OUR TESTIMONIALS</span>
          <h2 style={{ fontSize: '52px', fontWeight: 600, color: theme.colors.primary, lineHeight: '1.2' }}>What Patients are Saying!</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {reviews.map((rev, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '60px 40px',
              boxShadow: '0px 10px 40px rgba(0,0,0,0.05)',
              border: '1px solid #f0f0f0',
              position: 'relative',
              textAlign: 'center'
            }}>
              <figure style={{ marginBottom: '30px' }}>
                <Image src="/assets/images/quote-img.png" alt="quote" width={48} height={40} />
              </figure>
              <p style={{ color: theme.colors.text, fontSize: '18px', lineHeight: '28px', marginBottom: '40px' }}>{rev.text}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image src={rev.img} alt={rev.name} width={80} height={80} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', marginBottom: '5px' }}>
                         <Image src="/assets/images/rating-stars.png" alt="stars" width={100} height={18} />
                    </div>
                    <h5 style={{ fontSize: '20px', fontWeight: 600, color: theme.colors.primary, marginBottom: '2px' }}>{rev.name}</h5>
                    <span style={{ color: theme.colors.text, fontSize: '15px' }}>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
