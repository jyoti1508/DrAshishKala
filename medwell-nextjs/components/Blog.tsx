'use client';

import React from 'react';
import Link from 'next/link';
import { theme } from '@/styles/theme';

const blogs = [
  { 
    date: 'Mar 20, 2021', 
    title: 'Get the Home care and nursing service', 
    desc: 'Debitis aut rerum nec sitatoe bus saerue eveniet...',
    imgClass: 'blog-first-img' 
  },
  { 
    date: 'Feb 14, 2022', 
    title: 'Effective Ways to Manage Hypertension', 
    desc: 'Debitis aut rerum nec sitatoe bus saerue eveniet...',
    imgClass: 'blog-second-img' 
  },
  { 
    date: 'Jun 07, 2022', 
    title: 'Dental or Implant. What is the Best?', 
    desc: 'Debitis aut rerum nec sitatoe bus saerue eveniet...',
    imgClass: 'blog-third-img' 
  }
];

export default function Blog() {
  return (
    <>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .blog-section {
          padding: 150px 0;
          background-color: #fff;
        }
        .blog-title {
          font-size: 52px;
          line-height: 1.2;
        }
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-section { padding: 100px 0; }
        }
        @media (max-width: 768px) {
+          .blog-title { font-size: 32px; }
           .blog-grid { grid-template-columns: 1fr; }
           .blog-section { padding: 60px 0; }
         }
      `}</style>
      <section className="blog-section">
      <div style={{ maxWidth: theme.wrappers.w1, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ display: 'block', textTransform: 'uppercase', color: theme.colors.secondary, marginBottom: '10px', letterSpacing: '1px' }}>ARTICLES & TIPS</span>
          <h2 className="blog-title" style={{ fontWeight: 600, color: theme.colors.primary }}>Latest News & Blogs</h2>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid #f0f0f0'
            }}>
              {/* Blog Image Placeholder - In real app use Image component */}
              <div style={{ 
                height: '250px', 
                backgroundColor: '#eee',
                backgroundImage: `url('/assets/images/blog-image${index + 1}.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              
              <div style={{ padding: '30px' }}>
                <span style={{ display: 'block', fontSize: '14px', color: theme.colors.text, marginBottom: '15px' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px', color: theme.colors.secondary }}></i>
                  {blog.date}
                </span>
                <h4 style={{ fontSize: '22px', fontWeight: 600, color: theme.colors.primary, marginBottom: '15px', lineHeight: '1.4' }}>
                  <Link href="/blog/single">{blog.title}</Link>
                </h4>
                <p style={{ color: theme.colors.text, marginBottom: '20px' }}>{blog.desc}</p>
                <Link href="/blog/single" style={{ fontSize: '15px', fontWeight: 600, color: theme.colors.secondary, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Read More <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
