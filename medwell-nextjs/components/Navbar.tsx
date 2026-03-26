'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from '@/styles/theme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <style>{`
        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 48px;
          margin: 0;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 100;
        }
        .mobile-menu {
          position: fixed;
          top: 0; right: -400px;
          width: 300px; height: 100vh;
          background: ${theme.colors.primary};
          z-index: 101;
          transition: all 0.3s ease;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-menu.open {
          right: 0;
        }
        .mobile-menu.open ~ .mobile-menu-overlay {
          display: block;
        }
        .close-menu {
          align-self: flex-end;
          background: none;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }
        .mobile-menu-overlay.open {
          display: block;
        }
        .logo-text {
          font-size: 32px;
        }
        .logo-icon {
          font-size: 36px;
          color: ${theme.colors.accent};
        }
        @media (max-width: 1200px) {
          .navbar-nav {
            gap: 24px;
          }
          .navbar-actions {
            gap: 24px;
          }
        }
        @media (max-width: 1024px) {
          .desktop-menu-wrapper {
            display: none !important;
          }
          .hamburger {
            display: block;
          }
        }
        @media (max-width: 480px) {
          .logo-text {
            font-size: 24px;
          }
          .logo-icon {
            font-size: 28px;
          }
          .mobile-menu {
            width: 260px;
          }
        }
      `}</style>
      <header style={{
        width: '100%',
        position: isScrolled ? 'fixed' : 'absolute',
        top: isScrolled ? '0' : '30px',
        left: 0,
        zIndex: 99,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? theme.colors.primary : 'transparent',
        padding: isScrolled ? '15px 0' : '15px 0',
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
              fontWeight: 700,
              color: theme.colors.white,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-hand-holding-medical logo-icon"></i>
              <span className="logo-text" style={{ fontFamily: theme.fonts.accent }}>Dr. Ashish Kala</span>
            </div>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center' }}>
            <div className="desktop-menu-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
              <ul className="navbar-nav">
                <li><Link href="/" style={navItemStyle}>Home</Link></li>
                <li><Link href="/about" style={navItemStyle}>About</Link></li>
                <li><Link href="/services" style={navItemStyle}>Services</Link></li>
                <li><Link href="/doctors" style={navItemStyle}>Doctors</Link></li>
                <li><Link href="/blog" style={navItemStyle}>Blogs</Link></li>
                <li><Link href="/contact" style={navItemStyle}>Contact Us</Link></li>
              </ul>

              <div className="navbar-actions">
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
            </div>

            <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: 0 }}>
          <li><Link href="/" style={navItemStyle} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" style={navItemStyle} onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="/services" style={navItemStyle} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link href="/doctors" style={navItemStyle} onClick={() => setIsMenuOpen(false)}>Doctors</Link></li>
          <li><Link href="/blog" style={navItemStyle} onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
          <li><Link href="/contact" style={navItemStyle} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <div style={{ marginTop: '20px', borderTop: `1px solid ${theme.colors.border}`, paddingTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Image src="/assets/images/headphone-icon.png" alt="phone" width={34} height={34} />
            <div>
              <span style={{ display: 'block', fontSize: '16px', color: theme.colors.white, marginBottom: '5px' }}>Call us at:</span>
              <a href="tel:+919999900000" style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                color: theme.colors.white,
              }}>+91 99999 00000</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
    </>
  );
}
