
import React, { useState } from 'react';
import hero from '../assets/hero.jpeg';

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div style={styles.hero}>
      <div style={styles.background}>
        <img 
          src={hero} 
          alt="Premium perfume collection" 
          style={styles.backgroundImage} 
          loading="lazy"
        />
        <div style={styles.overlay}></div>
      </div>
      
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h1 style={styles.title} className="animateFadeIn">
            Discover Your Signature Scent
          </h1>
          <p style={styles.subtitle} className="animateFadeIn delay1">
            Experience the essence of luxury with our premium collection of handcrafted fragrances
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton} 
              onClick={openPopup}  // <-- yahan popup open karega
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6f4fc1'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8a6bc9'}
            >
              Explore Collection
            </button>
            <button
              style={styles.secondaryButton}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#6f4fc1';
                e.currentTarget.style.borderColor = '#6f4fc1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'white';
              }}
            >
              View Top Rated
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div style={styles.popupOverlay} onClick={closePopup}>
          <div style={styles.popupContent} onClick={e => e.stopPropagation()}>
            <h2>Explore Our Collection</h2>
            <p>Here you can add more details about your premium perfume collection.</p>
            <button onClick={closePopup} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animateFadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .delay1 {
            animation-delay: 0.4s;
          }
          @media (max-width: 900px) {
            h1 {
              font-size: 3rem !important;
            }
            p {
              font-size: 1.2rem !important;
            }
            button {
              padding: 12px 30px !important;
              font-size: 1rem !important;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 2.2rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            button {
              padding: 10px 25px !important;
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    minHeight: '700px',
    color: '#fff',
    overflow: 'hidden',
    fontFamily: "'Playfair Display', serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7) contrast(1.1)',
    transition: 'transform 0.8s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(70, 20, 100, 0.7)',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    padding: '20px',
    maxWidth: '900px',
    textAlign: 'center',
  },
  textContainer: {},
  title: {
    fontSize: '4rem',
    fontWeight: 800,
    marginBottom: '20px',
    lineHeight: 1.2,
    textShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '45px',
    lineHeight: 1.6,
    opacity: 0.9,
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#8a6bc9',
    color: 'white',
    border: 'none',
    padding: '15px 45px',
    fontSize: '1.15rem',
    fontWeight: 700,
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(138, 107, 201, 0.4)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '15px 45px',
    fontSize: '1.15rem',
    fontWeight: 700,
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  popupContent: {
    backgroundColor: '#fff',
    color: '#333',
    padding: '40px 30px',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: '25px',
    padding: '10px 30px',
    backgroundColor: '#8a6bc9',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontWeight: '700',
    cursor: 'pointer',
  },
};

export default HeroSection;
