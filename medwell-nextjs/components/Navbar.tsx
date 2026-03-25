'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from '@/styles/theme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemStyle: React.CSSProperties = {
    position: 'relative',
    transition: '0.4s ease-in-out',
    color: theme.colors.white,
    fontSize: '18px',
    fontWeight: 400,
  };

  return (
    <header style={{
      width: '100%',
      position: 'absolute',
      top: isScrolled ? '0' : '30px',
      left: 0,
      zIndex: 99,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? theme.colors.primary : 'transparent',
      padding: isScrolled ? '15px 0' : '0',
      
    }}>
      <div style={{
        maxWidth: theme.wrappers.w1,
        margin: '0 auto',
        padding: '0 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: theme.colors.white,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <i className="fas fa-hand-holding-medical" style={{ fontSize: '36px', color: theme.colors.accent }}></i>
            <span style={{ fontFamily: theme.fonts.accent }}>Dr. Ashish Kala</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '48px', margin: 0 }}>
            <li><Link href="/" style={navItemStyle}>Home</Link></li>
            <li><Link href="/about" style={navItemStyle}>About</Link></li>
            <li><Link href="/services" style={navItemStyle}>Services</Link></li>
            <li><Link href="/doctors" style={navItemStyle}>Doctors</Link></li>
            <li><Link href="/blog" style={navItemStyle}>Blogs</Link></li>
            <li><Link href="/contact" style={navItemStyle}>Contact Us</Link></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div style={{ 
              borderRight: `1px solid ${theme.colors.border}`, 
              paddingRight: '42px',
              height: '38px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Image src="/assets/images/search-icon.png" alt="search" width={20} height={20} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <Image src="/assets/images/headphone-icon.png" alt="phone" width={34} height={34} />
              <div>
                <span style={{ display: 'block', fontSize: '18px', color: theme.colors.white, marginBottom: '5px' }}>Call us at:</span>
                <a href="tel:+919999900000" style={{ 
                  fontSize: '22px', 
                  fontWeight: 700, 
                  color: theme.colors.white,
                  lineHeight: '22px'
                }}>+91 99999 00000</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
