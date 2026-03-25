'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

const services = [
  {
    icon: '/assets/images/cardiologist-icon.png',
    title: 'Cardiologist',
    desc: 'Duis aute irure dolor in reprehenderit in voluta zesse cillum...'
  },
  {
    icon: '/assets/images/pulmonary-icon.png',
    title: 'Pulmonary',
    desc: 'Guis aute irure dolor in reprehenderit in voluta zesse cillum...'
  },
  {
    icon: '/assets/images/gynecology-icon.png',
    title: 'Gynecology',
    desc: 'Nuis aute irure dolor in reprehenderit in voluta zesse cillum...'
  },
  {
    icon: '/assets/images/pphthalmology-icon.png',
    title: 'Ophthalmology',
    desc: 'Euis aute irure dolor in reprehenderit in voluta zesse cillum...'
  },
  {
    icon: '/assets/images/psychiatry-icon.png',
    title: 'Psychiatry',
    desc: 'Quis aute irure dolor in reprehenderit in voluta zesse cillum...'
  }
];

export default function Services() {
  return (
    <section style={{ 
      paddingTop: theme.spacing.paddingTop, 
      paddingBottom: theme.spacing.paddingBottom,
      backgroundColor: theme.colors.white
    }}>
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '30px' 
        }}>
          {/* Service Title Box */}
          <div style={{ padding: '20px 0' }}>
            <span style={{ display: 'block', fontSize: '16px', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>What We Provide</span>
            <h2 style={{ fontSize: '52px', fontWeight: 600, color: theme.colors.primary, marginBottom: '17px', lineHeight: '1.1' }}>Our Medical Services</h2>
            <p style={{ color: theme.colors.text }}>Molestiae non recusandae earum rerum hic tenetur asa piente delectus.</p>
          </div>

          {/* Service Items */}
          {services.map((service, index) => (
            <div key={index} style={{
              borderRadius: '10px',
              padding: '44px 32px 26px 36px',
              backgroundColor: theme.colors.white,
              boxShadow: '2px 2px 52px 6px rgba(36, 63, 250, 0.04)',
              transition: 'all 0.4s ease-in-out',
              border: '1px solid transparent'
            }}>
              <figure style={{ height: '73px', marginBottom: '21px' }}>
                <Image src={service.icon} alt={service.title} width={64} height={64} style={{ objectFit: 'contain' }} />
              </figure>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, marginBottom: '10px' }}>{service.title}</h4>
              <p style={{ fontSize: '18px', color: theme.colors.text, marginBottom: '15px' }}>{service.desc}</p>
              <a href="#" style={{ fontSize: '15px', fontWeight: 500, color: theme.colors.accent, display: 'inline-block' }}>
                Read More <i className="fas fa-angle-right" style={{ marginLeft: '5px' }}></i>
              </a>
            </div>
          ))}

          {/* Special Treatment Box spanning 2 columns */}
          <div style={{
            gridColumn: 'span 2',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#0f2349',
            borderRadius: '10px',
            overflow: 'hidden',
            paddingLeft: '37px',
            gap: '15px'
          }}>
            <div style={{ width: '40%' }}>
              <h3 style={{ fontSize: '28px', color: theme.colors.white, marginBottom: '5px' }}>We Provide Best Medical Treatment.</h3>
              <p style={{ color: '#c5ccd8', marginBottom: '17px' }}>Reprehenderit in voluta zesse.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <a href="#" style={{ color: theme.colors.white, fontWeight: 600 }}>Book Appointment</a>
                <div style={{ width: '30px', height: '30px', backgroundColor: theme.colors.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/assets/images/samll-arrow.png" alt="arrow" width={14} height={14} />
                </div>
              </div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Image src="/assets/images/treatment-img.jpg" alt="Treatment" width={332} height={332} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
