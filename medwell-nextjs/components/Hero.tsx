'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

export default function Hero() {
  const containerStyle: React.CSSProperties = {
    paddingTop: '300px', // Replaced padding-top for fixed header
    paddingBottom: '100px',
    backgroundColor: theme.colors.secondary,
    backgroundImage: "url('/assets/images/graphic-img.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    position: 'relative'
  };

  const wrapperStyle: React.CSSProperties = {
    maxWidth: theme.wrappers.w2,
    margin: '0 auto',
    padding: '0 15px',
    display: 'flex',
    gap: '40px'
  };

  const titleBoxStyle: React.CSSProperties = {
    width: '40%',
    paddingTop: '110px'
  };

  const h1Style: React.CSSProperties = {
    fontSize: '96px',
    fontWeight: 700,
    lineHeight: '94px',
    color: theme.colors.white,
    marginBottom: '19px',
    fontFamily: theme.fonts.main,
  };

  const pStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#d4dffb',
    lineHeight: '35px',
    marginBottom: '34px',
    paddingRight: '100px'
  };

  const btnStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '17px',
    color: theme.colors.white,
    fontSize: '20px',
    fontWeight: 600,
    textDecoration: 'none'
  };

  const bannerDetailStyle: React.CSSProperties = {
    width: '60%',
    position: 'relative',
    display: 'flex'
  };

  const doctorImgWrapper: React.CSSProperties = {
    marginLeft: '-180px',
    zIndex: 1
  };

  const detailsTxtBox: React.CSSProperties = {
    position: 'absolute',
    top: '149px',
    right: 0,
    width: '55%',
  };

  const quoteStyle: React.CSSProperties = {
    fontSize: '20px',
    lineHeight: '31px',
    position: 'relative',
    marginBottom: '49px',
    color: theme.colors.white,
    marginLeft: '-28px',
    paddingLeft: '32px',
    borderLeft: '4px solid #fff'
  };

  const statsBoxStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px'
  };

  const statItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '60px',
    fontWeight: 700,
    lineHeight: '60px',
    marginBottom: '8px',
    color: theme.colors.white,
    fontFamily: theme.fonts.montserrat
  };

  const clientReviewBox: React.CSSProperties = {
    position: 'absolute',
    top: '56%',
    left: '31%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    padding: '14px 56px 14px 14px',
    borderRadius: '37px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '13px 13px 35px 9px rgba(0, 0, 0, 0.08)',
    zIndex: 2
  };

  return (
    <section style={containerStyle}>
      <div style={wrapperStyle}>
        {/* Banner Left Title */}
        <div style={titleBoxStyle}>
          <h1 style={h1Style}>Medical &<br />Health Care<br />Solutions.</h1>
          <p style={pStyle}>Caring is our calling. Changing Health Care for Good. We're here for life. Feel better.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
            <a href="#" style={btnStyle}>Book an Appointment</a>
            <div style={{
              width: '65px',
              height: '65px',
              borderRadius: '50%',
              border: '1px solid #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Image src="/assets/images/top-arrow.png" alt="arrow" width={24} height={24} />
            </div>
          </div>
        </div>

        {/* Banner Right Content */}
        <div style={bannerDetailStyle}>
          <div style={doctorImgWrapper}>
            <Image src="/assets/images/doctor-img.png" alt="Doctor" width={711} height={760} style={{ objectFit: 'contain' }} />
          </div>

          <div style={detailsTxtBox}>
            <p style={quoteStyle}>
              Our clinic provides world-class medical services with a focus on compassionate patient care and advanced healthcare technologies right here in Gurgaon.
            </p>

            <div style={statsBoxStyle}>
              <div style={statItemStyle}>
                <div style={{ width: '77px', height: '77px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/assets/images/thumb-icon.png" alt="Positive Reviews" width={41} height={39} />
                </div>
                <div>
                  <div style={statValueStyle}>98%</div>
                  <span style={{ fontSize: '18px', fontWeight: 600, color: theme.colors.white, display: 'block' }}>Positive Reviews</span>
                  <span style={{ fontSize: '16px', color: '#d4dffb', display: 'block' }}>From Our Clients</span>
                </div>
              </div>

              <div style={{...statItemStyle, justifyContent: 'flex-end', marginRight: '60px'}}>
                <div style={{ width: '77px', height: '77px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/assets/images/experienced-icon.png" alt="Experienced Doctors" width={38} height={40} />
                </div>
                <div>
                  <div style={statValueStyle}>38+</div>
                  <span style={{ fontSize: '18px', fontWeight: 600, color: theme.colors.white, display: 'block' }}>Experienced Doctors</span>
                  <span style={{ fontSize: '16px', color: '#d4dffb', display: 'block' }}>Our Treatment Office</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Review Floating Box */}
          <div style={clientReviewBox}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/assets/images/review-img1.jpg" alt="Review 1" width={45} height={45} style={{ borderRadius: '50%', border: '2px solid #fff' }} />
                <Image src="/assets/images/review-img2.jpg" alt="Review 2" width={45} height={45} style={{ borderRadius: '50%', border: '2px solid #fff', marginLeft: '-20px' }} />
                <Image src="/assets/images/review-img3.jpg" alt="Review 3" width={45} height={45} style={{ borderRadius: '50%', border: '2px solid #fff', marginLeft: '-20px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ color: theme.colors.star, fontWeight: 700, fontSize: '22px' }}>4.9</span>
                    <Image src="/assets/images/star-img.png" alt="Star" width={14} height={14} />
                </div>
                <span style={{ fontSize: '13px', color: theme.colors.secondary, lineHeight: '13px' }}>32k Total Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div style={{
          position: 'absolute',
          bottom: 0,
          right: '-50px',
          width: '216px',
          height: '254px',
          backgroundImage: "url('/assets/images/apple-shape-img.png')",
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none'
      }} />
      <div style={{
          position: 'absolute',
          bottom: 0,
          left: '-50px',
          width: '330px',
          height: '183px',
          backgroundImage: "url('/assets/images/box-shape-img1.png')",
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none'
      }} />
      <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '130px',
          height: '120px',
          backgroundImage: "url('/assets/images/double-shape-img2.png')",
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none'
      }} />
    </section>
  );
}
