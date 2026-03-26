'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/styles/theme';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-container {
          padding-top: 300px;
          padding-bottom: 100px;
          background-color: ${theme.colors.secondary};
          background-image: url('/assets/images/graphic-img.png');
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          position: relative;
        }
        .hero-wrapper {
          max-width: ${theme.wrappers.w2};
          margin: 0 auto;
          padding: 0 15px;
          display: flex;
          gap: 40px;
        }
        .hero-title-box {
          width: 40%;
          padding-top: 110px;
        }
        .hero-h1 {
          font-size: 96px;
          font-weight: 700;
          line-height: 94px;
          color: ${theme.colors.white};
          margin-bottom: 19px;
          font-family: ${theme.fonts.main};
        }
        .hero-p {
          font-size: 20px;
          color: #d4dffb;
          line-height: 35px;
          margin-bottom: 34px;
          padding-right: 100px;
        }
        .hero-btn {
          display: flex;
          align-items: center;
          gap: 17px;
          color: ${theme.colors.white};
          font-size: 20px;
          font-weight: 600;
          text-decoration: none;
        }
        .hero-banner-detail {
          width: 60%;
          position: relative;
          display: flex;
        }
        .doctor-img-wrapper {
          margin-left: -180px;
          z-index: 1;
        }
        .details-txt-box {
          position: absolute;
          top: 149px;
          right: 0;
          width: 55%;
        }
        .hero-quote {
          font-size: 20px;
          line-height: 31px;
          position: relative;
          margin-bottom: 49px;
          color: ${theme.colors.white};
          margin-left: -28px;
          padding-left: 32px;
          border-left: 4px solid #fff;
        }
        .hero-stats-box {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .stat-item.right {
          justify-content: flex-end;
          margin-right: 60px;
        }
        .stat-value {
          font-size: 60px;
          font-weight: 700;
          line-height: 60px;
          margin-bottom: 8px;
          color: ${theme.colors.white};
          font-family: ${theme.fonts.montserrat};
        }
        .client-review-box {
          position: absolute;
          top: 56%;
          left: 31%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.92);
          padding: 14px 56px 14px 14px;
          border-radius: 37px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 13px 13px 35px 9px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }
        .decorative-shape {
          display: block;
        }

        @media (max-width: 1200px) {
          .hero-wrapper {
            flex-direction: column;
            gap: 60px;
          }
          .hero-title-box, .hero-banner-detail {
            width: 100%;
          }
          .doctor-img-wrapper {
            margin-left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .details-txt-box {
            position: relative;
            top: 0;
            width: 100%;
            margin-top: 30px;
          }
          .hero-p {
            padding-right: 0;
          }
          .client-review-box {
            left: 50%;
            transform: translate(-50%, -50%);
            top: auto;
            bottom: -50px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding-top: 150px;
            padding-bottom: 60px;
          }
          .hero-h1 {
            font-size: 48px;
            line-height: 52px;
          }
          .hero-quote {
            margin-left: 0;
          }
          .stat-item.right {
            justify-content: flex-start;
            margin-right: 0;
          }
          .client-review-box {
            position: relative;
            transform: none;
            left: 0;
            bottom: 0;
            margin-top: 30px;
            padding: 14px 20px;
            display: inline-flex;
          }
          .decorative-shape {
            display: none;
          }
        }
      `}</style>

      <section className="hero-container">
        <div className="hero-wrapper">
          {/* Banner Left Title */}
          <div className="hero-title-box">
            <h1 className="hero-h1">Medical &<br />Health Care<br />Solutions.</h1>
            <p className="hero-p">Caring is our calling. Changing Health Care for Good. We're here for life. Feel better.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px', flexWrap: 'wrap' }}>
              <a href="#" className="hero-btn">Book an Appointment</a>
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
          <div className="hero-banner-detail">
            <div className="doctor-img-wrapper">
              <Image src="/assets/images/doctor-img.png" alt="Doctor" width={711} height={760} style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} />
            </div>

            <div className="details-txt-box">
              <p className="hero-quote">
                Our clinic provides world-class medical services with a focus on compassionate patient care and advanced healthcare technologies right here in Gurgaon.
              </p>

              <div className="hero-stats-box">
                <div className="stat-item">
                  <div style={{ width: '77px', height: '77px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Image src="/assets/images/thumb-icon.png" alt="Positive Reviews" width={41} height={39} />
                  </div>
                  <div>
                    <div className="stat-value">98%</div>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: theme.colors.white, display: 'block' }}>Positive Reviews</span>
                    <span style={{ fontSize: '16px', color: '#d4dffb', display: 'block' }}>From Our Clients</span>
                  </div>
                </div>

                <div className="stat-item right">
                  <div style={{ width: '77px', height: '77px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0  }}>
                    <Image src="/assets/images/experienced-icon.png" alt="Experienced Doctors" width={38} height={40} />
                  </div>
                  <div>
                    <div className="stat-value">38+</div>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: theme.colors.white, display: 'block' }}>Experienced Doctors</span>
                    <span style={{ fontSize: '16px', color: '#d4dffb', display: 'block' }}>Our Treatment Office</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Review Floating Box */}
            <div className="client-review-box">
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
                  <span style={{ fontSize: '13px', color: theme.colors.secondary, lineHeight: '13px', whiteSpace: 'nowrap' }}>32k Total Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="decorative-shape" style={{
            position: 'absolute',
            bottom: 0,
            right: '-50px',
            width: '216px',
            height: '254px',
            backgroundImage: "url('/assets/images/apple-shape-img.png')",
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none'
        }} />
        <div className="decorative-shape" style={{
            position: 'absolute',
            bottom: 0,
            left: '-50px',
            width: '330px',
            height: '183px',
            backgroundImage: "url('/assets/images/box-shape-img1.png')",
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none'
        }} />
      </section>
    </>
  );
}
