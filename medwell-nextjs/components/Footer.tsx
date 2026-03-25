'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/styles/theme';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: theme.colors.white }}>
      <section style={{ padding: '100px 0', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {/* Logo Box */}
            <div>
              <figure style={{ marginBottom: '30px' }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: theme.colors.primary,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-hand-holding-medical" style={{ fontSize: '32px', color: theme.colors.secondary }}></i>
                  <span style={{ fontFamily: theme.fonts.accent }}>Dr. Ashish Kala</span>
                </div>
              </figure>
              <p style={{ color: theme.colors.text, marginBottom: '20px', lineHeight: '27px' }}>
                Quis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil moles illum rui dolorem eum fugiat...
              </p>
              <p style={{ color: theme.colors.text, marginBottom: '0', lineHeight: '27px' }}>
                Suscipit laboriosam, nisi ut aliruid commo nostrum veniam...
              </p>
            </div>

            {/* Links Box */}
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, marginBottom: '30px' }}>Our Services</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {['Cardiologist', 'Pulmonary', 'Gynecology', 'Opthalmology', 'Psychiatry'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-angle-right" style={{ color: theme.colors.secondary }}></i>
                    <Link href="/services" style={{ color: theme.colors.text, fontSize: '18px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, marginBottom: '30px' }}>Contact Us</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <i className="fas fa-map-marker-alt" style={{ color: theme.colors.secondary, marginTop: '5px' }}></i>
                  <span style={{ color: theme.colors.text, fontSize: '18px' }}>Gurgaon, Haryana, India</span>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <i className="fas fa-envelope" style={{ color: theme.colors.secondary }}></i>
                  <a href="mailto:info@drashishkala.com" style={{ color: theme.colors.text, fontSize: '18px' }}>info@drashishkala.com</a>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <i className="fas fa-headphones" style={{ color: theme.colors.secondary }}></i>
                  <a href="tel:+919999900000" style={{ color: theme.colors.text, fontSize: '18px' }}>+91 99999 00000</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Box */}
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, marginBottom: '30px' }}>Subscribe to Newsletter</h4>
              <div style={{ position: 'relative', marginBottom: '30px' }}>
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address:" 
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    borderRadius: '10px',
                    border: '1px solid #f0f0f0',
                    backgroundColor: '#f6f9ff',
                    outline: 'none',
                    fontSize: '16px'
                  }}
                />
                <button style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: theme.colors.secondary,
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: '#fff',
                  cursor: 'pointer'
                }}>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['facebook-f', 'twitter', 'linkedin-in'].map((icon, i) => (
                  <div key={i} style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    backgroundColor: theme.colors.secondary,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    <i className={`fab fa-${icon}`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Bar */}
      <div style={{ padding: '30px 0', borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
        <p style={{ color: theme.colors.text, fontSize: '16px' }}>
          Copyright © 2024 Dr. Ashish Kala All rights reserved.
        </p>
      </div>
    </footer>
  );
}
