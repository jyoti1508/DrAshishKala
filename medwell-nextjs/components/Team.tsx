'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

const team = [
  { img: '/assets/images/team-img1.jpg', name: 'Dr. Ashish Kala', role: 'Head Doctor' },
  { img: '/assets/images/team-img2.jpg', name: 'Dr. Priya Sharma', role: 'Osteopaths' },
  { img: '/assets/images/team-img3.jpg', name: 'Dr. Vikram Singh', role: 'Gynecologist' },
  { img: '/assets/images/team-img4.jpg', name: 'Dr. Ananya Kapoor', role: 'Surgeon' }
];

export default function Team() {
  return (
    <>
      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .team-section {
          padding: 150px 0;
          background-color: #f6f9ff;
        }
        .team-title {
          font-size: 52px;
          line-height: 1.2;
        }
        @media (max-width: 1200px) {
          .team-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .team-section { padding: 100px 0; }
        }
        @media (max-width: 768px) {
+          .team-title { font-size: 32px; }
           .team-grid { grid-template-columns: 1fr; }
           .team-section { padding: 60px 0; }
         }
      `}</style>
      <section className="team-section">
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>OUR TEAM</span>
          <h2 className="team-title" style={{ fontWeight: 600, color: theme.colors.primary }}>Meet Our Professional Team</h2>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              textAlign: 'center',
              paddingBottom: '30px',
              boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}>
              <figure style={{ margin: 0, overflow: 'hidden', height: '350px' }}>
                <Image src={member.img} alt={member.name} width={400} height={450} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </figure>
              <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, margin: '20px 0 5px' }}>{member.name}</h4>
              <span style={{ color: theme.colors.text, fontSize: '16px' }}>{member.role}</span>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
                {['facebook-f', 'twitter', 'linkedin-in'].map((icon, i) => (
                  <div key={i} style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    border: `1px solid ${theme.colors.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.colors.primary,
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                    <i className={`fab fa-${icon}`}></i>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
}
