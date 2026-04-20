import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CanPic1 from '../assets/can-pic1.webp';
import CanPic2 from '../assets/can-pic2.webp';
import CanPic3 from '../assets/can-pic3.webp';

import EnquiryModal from "../components/EnquiryModal";

const UniversityProfile = () => {
  // Add this CSS to your global styles or a separate CSS file:
  // @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  const styles = `
    :root {
      --primary: #B3261E;
      --primary-container: #F9DEDC;
      --on-primary: #FFFFFF;
      --secondary: #625B71;
      --secondary-container: #E8DEF8;
      --on-secondary-container: #1D192B;
      --tertiary: #7D5260;
      --tertiary-container: #FFD8E4;
      --tertiary-fixed-dim: #7D5260;
      --surface: #FFFBFE;
      --surface-container: #F3EEF5;
      --surface-container-low: #F7F2FA;
      --surface-container-lowest: #FFFFFF;
      --on-surface: #1C1B1F;
      --on-surface-variant: #49454F;
      --outline-variant: #CAC7D0;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--surface);
      color: var(--on-surface);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
    }

    button {
      cursor: pointer;
      border: none;
      font-family: inherit;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `;


  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>

    <Header />
    <div style={{ background: 'var(--surface)', color: 'var(--on-surface)' }}>
      <style>{styles}</style>

      

      <main style={{ paddingTop: '60px', paddingBottom: '48px' }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          padding: '32px 24px 48px 24px'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                background: 'rgba(125, 82, 96, 0.1)',
                color: '#7D5260',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '9999px',
                border: '1px solid rgba(125, 82, 96, 0.2)',
                backdropFilter: 'blur(12px)',
                width: 'fit-content'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified</span>
                Since 1966
              </div>
              <h2 style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '40px',
                fontWeight: 800,
                color: 'var(--on-surface)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Can Tho <span style={{ color: '#B3261E' }}>University</span>
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#49454F',
                maxWidth: '600px',
                lineHeight: 1.5
              }}>
                The leading public multidisciplinary university in the heart of Vietnam&apos;s Mekong Delta, fostering innovation and global medical excellence.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
                <button type="button" onClick={() => setIsModalOpen(true)} style={{
                  background: '#B3261E',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 24px rgba(179, 38, 30, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}>
                  Apply Now <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </button>
                <button type="button" onClick={() => setIsModalOpen(true)} style={{
                  background: '#E8DEF8',
                  color: '#1D192B',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}>
                  Get Free Counseling
                </button>
              </div>
            </div>
            <div style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
              aspectRatio: '5/5'
            }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2sNm36f_wAu1y2a9dONyfP9BLeIj3dnRdi18lLg4J9p-iqCGpsLOa2RdICG6QOK9PN561fQJRtx6rYt4YsHKoG--Yp_NCA-cEMSwZDk4RQJL4kfkdLDDivD8kQVyYOOwraFMtuH91JUQgHkIYMRMToIn5tr39UkKRRID0cdev6_OCFQrcGLwACgV7jYyfW7XPTsbc4AN-TCoVqR2d7yJOzuH_kGiFH-GHIZj5Jl_jCTnM4SNm7B-P-zbwJeYjAlAntJsqyY7re4"
                alt="university building"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '32px',
                left: '32px',
                right: '32px',
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                color: 'var(--on-surface)',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '18px'
              }}>
                "A key pillar of Vietnam's higher education ecosystem."
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bento Grid 
        <section style={{
          padding: '64px 24px',
          background: '#F7F2FA'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              gridColumn: 'span 2',
              background: '#F5F4F9',
              padding: '32px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '256px',
              border: '1px solid rgba(202, 199, 208, 0.1)'
            }}>
              <span className="material-symbols-outlined" style={{ color: '#B3261E', fontSize: '32px' }}>
                groups
              </span>
              <div>
                <h3 style={{
                  fontSize: '32px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 800,
                  color: 'var(--on-surface)'
                }}>
                  50,000+
                </h3>
                <p style={{
                  color: '#49454F',
                  fontWeight: 500
                }}>
                  Students currently enrolled
                </p>
              </div>
            </div>
            <div style={{
              background: '#B3261E',
              padding: '32px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '256px',
              color: '#FFFFFF'
            }}>
              <span className="material-symbols-outlined" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '32px' }}>
                school
              </span>
              <div>
                <h3 style={{
                  fontSize: '32px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 800
                }}>
                  2,000+
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 500
                }}>
                  Expert Faculty Members
                </p>
              </div>
            </div>
            <div style={{
              background: '#E8DEF8',
              padding: '32px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '256px',
              color: '#1D192B'
            }}>
              <span className="material-symbols-outlined" style={{ color: 'rgba(29,25,43,0.8)', fontSize: '32px' }}>
                public
              </span>
              <div>
                <h3 style={{
                  fontSize: '32px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 800
                }}>
                  Global
                </h3>
                <p style={{
                  color: 'rgba(29,25,43,0.8)',
                  fontWeight: 500
                }}>
                  Collaborations Worldwide
                </p>
              </div>
            </div>
          </div>
        </section> */}




        {/* Stats Bento Grid - IMPROVED */}
<section style={{
  padding: '48px 24px',
  background: 'linear-gradient(135deg, #FFFBFE 0%, #F7F2FA 100%)'
}}>
  <div style={{
    maxWidth: '1280px',
    margin: '0 auto'
  }}>
    {/* Section Header */}
    <div style={{
      textAlign: 'center',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px auto'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        background: 'rgba(179, 38, 30, 0.08)',
        color: '#B3261E',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        borderRadius: '9999px',
        marginBottom: '12px'
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
          trending_up
        </span>
        By The Numbers
      </div>
      <h2 style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '32px',
        fontWeight: 800,
        color: '#CC1B1B',
        letterSpacing: '-0.01em',
        marginBottom: '12px',
        lineHeight: 1.2
      }}>
        Leading the Way in Higher Education
      </h2>
      <p style={{
        color: '#49454F',
        fontSize: '14px',
        lineHeight: 1.5
      }}>
        Our impact through the numbers tells the story of excellence and growth.
      </p>
    </div>

    {/* Bento Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '16px',
      gridAutoRows: 'auto'
    }}>
      {/* Card 1 - Students (Large) */}
      <div style={{
        gridColumn: 'span 2',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FDEAEA 100%)',
        padding: '28px',
        borderRadius: '24px',
        border: '1px solid rgba(179, 38, 30, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: '0 8px 24px rgba(179, 38, 30, 0.08)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(179, 38, 30, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(179, 38, 30, 0.08)';
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          background: 'rgba(179, 38, 30, 0.05)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'rgba(179, 38, 30, 0.1)',
            borderRadius: '12px',
            marginBottom: '12px'
          }}>
            <span className="material-symbols-outlined" style={{
              color: '#B3261E',
              fontSize: '24px'
            }}>
              groups
            </span>
          </div>
          <h3 style={{
            fontSize: '36px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            color: '#B3261E',
            marginBottom: '4px'
          }}>
            50,000+
          </h3>
          <p style={{
            color: '#49454F',
            fontWeight: 600,
            fontSize: '13px'
          }}>
            Students Currently Enrolled
          </p>
        </div>

        {/* Growth indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '16px',
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '12px',
          width: 'fit-content',
          fontSize: '12px',
          fontWeight: 700,
          color: '#4CAF50'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            trending_up
          </span>
          20% Growth YoY
        </div>
      </div>

      {/* Card 2 - Faculty */}
      <div style={{
        background: 'linear-gradient(135deg, #B3261E 0%, #8B1A14 100%)',
        padding: '28px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: '0 8px 32px rgba(179, 38, 30, 0.25)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 16px 56px rgba(179, 38, 30, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(179, 38, 30, 0.25)';
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            marginBottom: '12px'
          }}>
            <span className="material-symbols-outlined" style={{
              color: '#FFFFFF',
              fontSize: '24px'
            }}>
              school
            </span>
          </div>
          <h3 style={{
            fontSize: '36px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            marginBottom: '4px'
          }}>
            2,000+
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: 600,
            fontSize: '13px'
          }}>
            Expert Faculty Members
          </p>
        </div>

        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '16px',
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          width: 'fit-content',
          fontSize: '12px',
          fontWeight: 700
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            verified
          </span>
          World-Class Educators
        </div>
      </div>

      {/* Card 3 - Global */}
      <div style={{
        background: 'linear-gradient(135deg, #E8DEF8 0%, #D4C5E8 100%)',
        padding: '40px',
        borderRadius: '28px',
        border: '1px solid rgba(98, 91, 113, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px',
        color: '#1D192B',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: '0 8px 24px rgba(98, 91, 113, 0.12)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(98, 91, 113, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(98, 91, 113, 0.12)';
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-80px',
          width: '200px',
          height: '200px',
          background: 'rgba(98, 91, 113, 0.08)',
          borderRadius: '50%'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            background: 'rgba(125, 82, 96, 0.15)',
            borderRadius: '16px',
            marginBottom: '20px'
          }}>
            <span className="material-symbols-outlined" style={{
              color: '#625B71',
              fontSize: '32px'
            }}>
              public
            </span>
          </div>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            marginBottom: '8px'
          }}>
            45+
          </h3>
          <p style={{
            color: '#49454F',
            fontWeight: 600,
            fontSize: '15px'
          }}>
            Countries Connected
          </p>
        </div>

        {/* Stat detail */}
        <div style={{
          marginTop: '16px',
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#625B71'
        }}>
          🌍 Global partnerships & collaborations
        </div>
      </div>

      {/* Card 4 - Research */}
      

      
    </div>
  </div>
</section>




        {/* About Section */}
        <section style={{
          padding: '56px 24px',
          background: '#FFFBFE'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
                <img
                  src={CanPic1}
                  alt="medical lab"
                  style={{
                    borderRadius: '14px',
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFZhsaZx3nT8VzXBuEX5kakcUU7i88FRrdE7sX7c-8Qgv2UFsFdbgL7-xDPM5JJlvGgYCwD68ZV1qvgvpcxiHuOnGjArPa6K3j-EGdS2hULRsuVo2O6vwiQ6BS1U5LOhB33lKGLdnmfOTnfSClwd-QruJSQEmIuSVgFQRYoL3xCIX2ruHUYp9aHzKPeHJWMpBn-NJ7ODblTbLTE5c41Zs9HP0AghmGD2uKPMUmqDiJoGhjOHzyeCiwl3j--6SOJd59y0deU2hBZ8E"
                  alt="student plaza"
                  style={{
                    borderRadius: '14px',
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <img
                  src={CanPic2}
                  alt="campus view"
                  style={{
                    borderRadius: '14px',
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
                <img
                  src={CanPic3}
                  alt="students"
                  style={{
                    borderRadius: '14px',
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color: '#CC1B1B',
                letterSpacing: '-0.01em'
              }}>
                Academic Excellence &amp; Multidisciplinary Growth
              </h3>
              <p style={{
                color: '#49454F',
                lineHeight: 1.5,
                fontSize: '15px'
              }}>
                As a comprehensive public institution, Can Tho University (CTU) offers a diverse range of undergraduate and postgraduate programs. While widely recognized for its agricultural and environmental research, it stands as a <span style={{ color: '#B3261E', fontWeight: 700 }}>critical multidisciplinary hub</span> in Vietnam's educational ecosystem.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: '16px',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    background: 'rgba(179, 38, 30, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    height: 'fit-content'
                  }}>
                    <span className="material-symbols-outlined" style={{ color: '#B3261E' }}>menu_book</span>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: 'var(--on-surface)' }}>Credit-Based System</h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#49454F'
                    }}>
                      Flexible academic structure allowing students to tailor their learning path effectively.
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: '16px',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    background: 'rgba(179, 38, 30, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    height: 'fit-content'
                  }}>
                    <span className="material-symbols-outlined" style={{ color: '#B3261E' }}>translate</span>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: 'var(--on-surface)' }}>70% English Instruction</h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#49454F'
                    }}>
                      High-quality programs designed for international standards with significant English medium delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{
                padding: '24px',
                background: 'rgba(232, 222, 248, 0.1)',
                borderLeft: '4px solid #E8DEF8',
                borderRadius: '0 16px 16px 0',
                fontStyle: 'italic',
                color: '#49454F'
              }}>
                "CTU is not a specialized medical university, but its role in producing world-class researchers and multidisciplinary professionals makes it an essential partner for medical aspirants in Vietnam."
              </div>
            </div>
          </div>
        </section>

        {/* Global Recognition Section */}
        <section style={{
          padding: '56px 24px',
          background: '#F7F2FA'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px'
          }}>
            <div style={{
              textAlign: 'center',
              maxWidth: '768px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <h3 style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color: '#CC1B1B'
              }}>
                Global Perspective, Local Heart
              </h3>
              <p style={{
                color: '#49454F',
                fontSize: '14px'
              }}>
                Integrating international standards within the peaceful atmosphere of Can Tho city.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px'
            }}>
              {/* Global Card */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '1px solid rgba(202, 199, 208, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <h4 style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700
                  }}>
                    International Reach
                  </h4>
                  <span className="material-symbols-outlined" style={{ color: '#B3261E', fontSize: '24px' }}>
                    public_off
                  </span>
                </div>
                <p style={{
                  color: '#49454F',
                  lineHeight: 1.5,
                  fontSize: '14px'
                }}>
                  Hosting students from the USA, Japan, and Europe, CTU maintains active collaborations with top-tier universities globally, ensuring our research standards meet international benchmarks.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <span style={{
                    padding: '8px 16px',
                    background: 'rgba(125, 82, 96, 0.1)',
                    color: '#7D5260',
                    fontSize: '12px',
                    fontWeight: 700,
                    borderRadius: '9999px'
                  }}>
                    USA COLLABS
                  </span>
                  <span style={{
                    padding: '8px 16px',
                    background: 'rgba(125, 82, 96, 0.1)',
                    color: '#7D5260',
                    fontSize: '12px',
                    fontWeight: 700,
                    borderRadius: '9999px'
                  }}>
                    EU PARTNERS
                  </span>
                  <span style={{
                    padding: '8px 16px',
                    background: 'rgba(125, 82, 96, 0.1)',
                    color: '#7D5260',
                    fontSize: '12px',
                    fontWeight: 700,
                    borderRadius: '9999px'
                  }}>
                    JAPANESE ALLIANCE
                  </span>
                </div>
              </div>

              {/* Location Card */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '1px solid rgba(202, 199, 208, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <h4 style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700
                  }}>
                    Life in Can Tho
                  </h4>
                  <span className="material-symbols-outlined" style={{ color: '#625B71', fontSize: '24px' }}>
                    location_on
                  </span>
                </div>
                <p style={{
                  color: '#49454F',
                  lineHeight: 1.5,
                  fontSize: '14px'
                }}>
                  Known for its peaceful surroundings, student-friendly culture, and low cost of living. Can Tho is one of the safest cities in Vietnam, providing a focused environment for academic excellence.
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--on-surface)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#4CAF50', fontSize: '20px' }}>check_circle</span> Safe
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#4CAF50', fontSize: '20px' }}>check_circle</span> Affordable
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#4CAF50', fontSize: '20px' }}>check_circle</span> Scenic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>







        {/* Full Width CTA Section */}
<section
  style={{
    width: "100%",
    margin: "0",
    padding: "80px 24px",
    background: "linear-gradient(135deg, #FFF7F7 0%, #FDEAEA 50%, #F7F2FA 100%)",
    position: "relative",
    overflow: "hidden"
  }}
>
  {/* Decorative Blur Circles */}
  <div
    style={{
      position: "absolute",
      top: "-80px",
      left: "-80px",
      width: "220px",
      height: "220px",
      background: "rgba(179,38,30,0.08)",
      borderRadius: "50%",
      filter: "blur(40px)"
    }}
  ></div>

  <div
    style={{
      position: "absolute",
      bottom: "-100px",
      right: "-100px",
      width: "260px",
      height: "260px",
      background: "rgba(125,82,96,0.08)",
      borderRadius: "50%",
      filter: "blur(50px)"
    }}
  ></div>

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 2
    }}
  >
    {/* Badge */}
    <div
      style={{
        display: "inline-block",
        padding: "8px 18px",
        background: "#ffffff",
        color: "#B3261E",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "700",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "20px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.06)"
      }}
    >
      Admissions Open 2026
    </div>

    {/* Heading */}
    <h2
      style={{
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontSize: "48px",
        fontWeight: "800",
        color: "#CC1B1B",
        lineHeight: "1.2",
        marginBottom: "18px"
      }}
    >
      Shape Your Future at <br />
      Can Tho University
    </h2>

    {/* Caption */}
    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        fontSize: "18px",
        color: "#49454F",
        lineHeight: "1.7",
        marginBottom: "36px"
      }}
    >
      Join a globally connected university known for academic excellence,
      research innovation, and a vibrant student life in Vietnam’s most
      welcoming city.
    </p>

    {/* Buttons */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "16px"
      }}
    >
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "#B3261E",
          color: "#fff",
          padding: "14px 30px",
          borderRadius: "14px",
          fontSize: "16px",
          fontWeight: "700",
          boxShadow: "0 10px 25px rgba(179,38,30,0.18)"
        }}
      >
        Apply Now
      </button>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "#ffffff",
          color: "#1C1B1F",
          padding: "14px 30px",
          borderRadius: "14px",
          fontSize: "16px",
          fontWeight: "700",
          border: "1px solid #E0E0E0"
        }}
      >
        Get Free Guidance
      </button>
    </div>
  </div>
</section>



        
        
      </main>

      {/* Bottom Navigation */}
      <nav style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '8px 16px 24px 16px',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.04)',
        borderTop: '1px solid rgba(255, 107, 107, 0.1)',
        '@media (max-width: 768px)': {
          display: 'flex'
        }
      }}>
        <NavItem icon="school" label="Overview" active={true} />
        <NavItem icon="menu_book" label="Courses" />
        <NavItem icon="assignment_ind" label="Admission" />
        <NavItem icon="support_agent" label="Expert Help" />
      </nav>
    </div>


    <EnquiryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />

    

    <Footer />


  </>
  );
};

// Helper component for bottom navigation
const NavItem = ({ icon, label, active = false }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: active ? '#FDEAEA' : 'transparent',
    color: active ? '#B3261E' : '#79747E',
    borderRadius: '12px',
    padding: active ? '8px 16px' : '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }}>
    <span className="material-symbols-outlined" style={{
      fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0"
    }}>
      {icon}
    </span>
    <span style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }}>
      {label}
    </span>
  </div>



  
);

export default UniversityProfile;
