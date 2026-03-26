'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

export default function Appointment() {
  return (
    <>
      <style>{`
        .appointment-section {
          width: 100%;
          position: relative;
          background-image: url('/assets/images/form-bg-img2.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 600px;
          display: flex;
          align-items: center;
        }
        .appointment-bg-right { width: 54.66%; }
        .appointment-box { width: 59%; padding: 75px 63px; }
        .appointment-form { display: grid; grid-template-columns: repeat(2, 1fr); gap: 23px 20px; }
        @media (max-width: 1024px) {
          .appointment-bg-right { width: 100%; opacity: 0.3; }
          .appointment-box { width: 80%; padding: 50px; }
        }
        @media (max-width: 768px) {
          .appointment-box { width: 100%; padding: 30px; }
          .appointment-form { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="appointment-section">
      {/* Dark overlay wrapper */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15, 35, 73, 0.95)',
          zIndex: 1
      }} />

      {/* Decorative side image for desktop */}
      <div className="appointment-bg-right" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          backgroundImage: "url('/assets/images/form-bg-img.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 0
      }} />

      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '150px 15px', position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="appointment-box" style={{
          backgroundColor: '#243ffa',
          borderRadius: '10px'
        }}>
          <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.white, marginBottom: '10px', letterSpacing: '1px', fontSize: '16px' }}>Request a consultation</span>
          <h2 style={{ fontSize: '52px', fontWeight: 600, color: theme.colors.white, marginBottom: '45px', lineHeight: '1.2' }}>Make an Appointment with Dr. Ashish Kala</h2>
          
          <form className="appointment-form">
            <input type="text" placeholder="Your Name:" style={inputStyle} />
            <input type="tel" placeholder="Phone No:" style={inputStyle} />
            <input type="email" placeholder="Your Email:" style={inputStyle} />
            <input type="text" placeholder="Date:" style={inputStyle} onFocus={(e) => e.target.type = 'date'} />
            <textarea placeholder="Message:" style={{ ...inputStyle, gridColumn: '1 / -1', height: '75px', resize: 'none' }} />
            
            <div style={{ gridColumn: '1 / -1', marginTop: '17px' }}>
                <button type="submit" style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    color: theme.colors.white,
                    fontSize: '20px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0
                }}>
                    Book an Appointment
                    <div style={{
                        width: '65px',
                        height: '65px',
                        borderRadius: '50%',
                        border: '1px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image src="/assets/images/top-arrow.png" alt="arrow" width={24} height={24} />
                    </div>
                </button>
            </div>
          </form>
        </div>
      </div>
      </section>
    </>
  );
}

const inputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    paddingBottom: '10px',
    fontSize: '16px',
    color: '#d4dffb',
    width: '100%',
    outline: 'none',
};
