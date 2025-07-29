
// import { useState } from 'react';
// import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';

// const ContactPage = () => {
//   const colors = {
//     primary: '#4A2C6D',       // Darker purple for better contrast
//     secondary: '#A9B5DF',
//     accent: '#7886C7',
//     light: '#E8D8F2',
//     dark: '#2D336B',
//     lightPurple: '#68507B',
//     formBorder: '#3A1B5F',    // New darker border color
//     success: '#4BB543'        // Success color for dialog
//   };

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showDialog, setShowDialog] = useState(false);
//   const [dialogMessage, setDialogMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setDialogMessage('Your message has been sent successfully! We will contact you soon.');
//       setShowDialog(true);
//       setFormData({ 
//         name: '', 
//         email: '', 
//         subject: '', 
//         message: '' 
//       });
//     } catch (error) {
//       console.error('Submission error:', error);
//       setDialogMessage('Failed to send message. Please try again later.');
//       setShowDialog(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//   };

//   return (
//     <div style={{
//       fontFamily: "'Montserrat', sans-serif",
//       color: colors.dark,
//       backgroundColor: 'white',
//       minHeight: '100vh',
//       paddingBottom: '2rem'
//     }}>
//       {/* Success Dialog */}
//       <Dialog open={showDialog} onClose={handleCloseDialog}>
//         <DialogTitle style={{ color: colors.primary }}>Message Sent</DialogTitle>
//         <DialogContent>
//           <DialogContentText style={{ color: colors.dark }}>
//             {dialogMessage}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} style={{ color: colors.primary }}>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

    
//          {/* Ultra-Premium Abstract Header */}
//       <div style={{
//         background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
//         height: '45vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden',
//         padding: '0 2rem'
//       }}>
//         {/* Decorative Elements */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: `
//             radial-gradient(circle at 20% 30%, rgba(169, 181, 223, 0.15) 0%, transparent 25%),
//             radial-gradient(circle at 80% 70%, rgba(232, 216, 242, 0.15) 0%, transparent 25%),
//             linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)
//           `,
//           zIndex: 1
//         }}></div>

//         {/* Floating Orbs */}
//         <div style={{
//           position: 'absolute',
//           top: '20%',
//           left: '10%',
//           width: '150px',
//           height: '150px',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${colors.light} 0%, transparent 70%)`,
//           opacity: 0.3,
//           animation: 'float 8s ease-in-out infinite'
//         }}></div>
//         <div style={{
//           position: 'absolute',
//           bottom: '15%',
//           right: '10%',
//           width: '200px',
//           height: '200px',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
//           opacity: 0.2,
//           animation: 'float 10s ease-in-out infinite 2s'
//         }}></div>

//         {/* Header Content */}
//         <div style={{
//           position: 'relative',
//           zIndex: 2,
//           maxWidth: '800px'
//         }}>
//           <div style={{
//             fontSize: '1.2rem',
//             letterSpacing: '5px',
//             marginBottom: '1rem',
//             color: colors.light,
//             fontWeight: 300,
//             textTransform: 'uppercase'
//           }}>Connect With Us</div>
          
//           <h1 style={{
//             fontFamily: "'Playfair Display', serif",
//             fontSize: '4rem',
//             marginBottom: '1.5rem',
//             fontWeight: 700,
//             lineHeight: 1.1,
//             textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
//           }}>
//             <span style={{
//               display: 'block',
//               background: `linear-gradient(to right, ${colors.light}, white)`,
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}>Signature Scents</span>
//           </h1>
          
//           <div style={{
//             width: '80px',
//             height: '3px',
//             background: `linear-gradient(to right, ${colors.light}, ${colors.accent})`,
//             margin: '2rem auto',
//             borderRadius: '3px'
//           }}></div>
          
//           <p style={{
//             fontSize: '1.2rem',
//             maxWidth: '600px',
//             margin: '0 auto',
//             lineHeight: 1.6,
//             fontWeight: 300,
//             opacity: 0.9
//           }}>
//             Where luxury meets fragrance. Let's create something extraordinary together.
//           </p>
//         </div>

//         {/* Floating Particles */}
//         {[...Array(15)].map((_, i) => (
//           <div key={i} style={{
//             position: 'absolute',
//             background: 'white',
//             borderRadius: '50%',
//             opacity: Math.random() * 0.3 + 0.1,
//             width: `${Math.random() * 5 + 2}px`,
//             height: `${Math.random() * 5 + 2}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             animation: `float ${Math.random() * 10 + 5}s linear infinite ${Math.random() * 5}s`,
//             zIndex: 1
//           }}></div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr)',
//         gap: '2rem',
//         maxWidth: '1200px',
//         margin: '2rem auto',
//         padding: '0 1.5rem'
//       }}>
//         {/* Contact Form */}
//         <div style={{
//           backgroundColor: 'white',
//           padding: '2rem',
//           borderRadius: '8px',
//           boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//           border: `2px solid ${colors.formBorder}`  // Thicker border
//         }}>
//           <h2 style={{
//             fontFamily: "'Playfair Display', serif",
//             color: colors.primary,
//             marginBottom: '1.5rem',
//             fontSize: '1.8rem'
//           }}>Send Us a Message</h2>

//           <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="name" style={{ 
//                 display: 'block', 
//                 marginBottom: '0.5rem',
//                 fontWeight: '600',
//                 color: colors.dark
//               }}>Your Name*</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: `2px solid ${colors.formBorder}`,  // Thicker border
//                   borderRadius: '6px',
//                   transition: 'all 0.3s',
//                   fontFamily: 'inherit',
//                   backgroundColor: 'white',
//                   fontSize: '1rem'
//                 }}
//               />
//             </div>
            
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="email" style={{ 
//                 display: 'block', 
//                 marginBottom: '0.5rem',
//                 fontWeight: '600',
//                 color: colors.dark
//               }}>Email Address*</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: `2px solid ${colors.formBorder}`,  // Thicker border
//                   borderRadius: '6px',
//                   transition: 'all 0.3s',
//                   backgroundColor: 'white',
//                   fontSize: '1rem'
//                 }}
//               />
//             </div>
            
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="subject" style={{ 
//                 display: 'block', 
//                 marginBottom: '0.5rem',
//                 fontWeight: '600',
//                 color: colors.dark
//               }}>Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: `2px solid ${colors.formBorder}`,  // Thicker border
//                   borderRadius: '6px',
//                   transition: 'all 0.3s',
//                   backgroundColor: 'white',
//                   fontSize: '1rem'
//                 }}
//               />
//             </div>
            
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label htmlFor="message" style={{ 
//                 display: 'block', 
//                 marginBottom: '0.5rem',
//                 fontWeight: '600',
//                 color: colors.dark
//               }}>Your Message*</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: `2px solid ${colors.formBorder}`,  // Thicker border
//                   borderRadius: '6px',
//                   transition: 'all 0.3s',
//                   minHeight: '150px',
//                   resize: 'vertical',
//                   fontFamily: 'inherit',
//                   backgroundColor: 'white',
//                   fontSize: '1rem'
//                 }}
//               />
//             </div>
            
//             <button 
//               type="submit" 
//               disabled={isSubmitting}
//               style={{
//                 background: isSubmitting ? colors.lightPurple : colors.primary,
//                 color: 'white',
//                 border: 'none',
//                 padding: '14px 32px',
//                 borderRadius: '6px',
//                 cursor: isSubmitting ? 'not-allowed' : 'pointer',
//                 transition: 'all 0.3s',
//                 fontWeight: '600',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '10px',
//                 fontSize: '1rem',
//                 width: '100%',
//                 maxWidth: '300px',
//                 margin: '0 auto',
//                 ':hover': {
//                   background: !isSubmitting && colors.accent,
//                   transform: !isSubmitting && 'translateY(-2px)'
//                 }
//               }}
//             >
//               <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>

//         {/* Contact Information */}
//         <div style={{
//           backgroundColor: 'white',
//           padding: '2rem',
//           borderRadius: '8px',
//           boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//           border: `2px solid ${colors.formBorder}`  // Thicker border
//         }}>
//           <h2 style={{
//             fontFamily: "'Playfair Display', serif",
//             color: colors.primary,
//             marginBottom: '1.5rem',
//             fontSize: '1.8rem'
//           }}>Contact Information</h2>
          
//           <div style={{ 
//             display: 'flex', 
//             alignItems: 'flex-start',
//             marginBottom: '2rem'
//           }}>
//             <div style={{
//               background: colors.secondary,
//               color: colors.primary,
//               width: '50px',
//               height: '50px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '1rem',
//               fontSize: '1.2rem',
//               flexShrink: 0
//             }}>
//               <FaMapMarkerAlt />
//             </div>
//             <div>
//               <h3 style={{ 
//                 marginBottom: '0.5rem',
//                 color: colors.primary,
//                 fontSize: '1.2rem'
//               }}>Our Location</h3>
//               <p style={{ color: colors.dark, lineHeight: '1.6' }}>123 Fragrance Lane<br />Baghbanpura, Lahore, Pakistan</p>
//             </div>
//           </div>
          
//           <div style={{ 
//             display: 'flex', 
//             alignItems: 'flex-start',
//             marginBottom: '2rem'
//           }}>
//             <div style={{
//               background: colors.secondary,
//               color: colors.primary,
//               width: '50px',
//               height: '50px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '1rem',
//               fontSize: '1.2rem',
//               flexShrink: 0
//             }}>
//               <FaPhoneAlt />
//             </div>
//             <div>
//               <h3 style={{ 
//                 marginBottom: '0.5rem',
//                 color: colors.primary,
//                 fontSize: '1.2rem'
//               }}>Phone</h3>
//               <p style={{ color: colors.dark, lineHeight: '1.6' }}>+92 300 1234567<br />Mon-Fri: 9am-6pm</p>
//             </div>
//           </div>
          
//           <div style={{ 
//             display: 'flex', 
//             alignItems: 'flex-start',
//             marginBottom: '2rem'
//           }}>
//             <div style={{
//               background: colors.secondary,
//               color: colors.primary,
//               width: '50px',
//               height: '50px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '1rem',
//               fontSize: '1.2rem',
//               flexShrink: 0
//             }}>
//               <FaEnvelope />
//             </div>
//             <div>
//               <h3 style={{ 
//                 marginBottom: '0.5rem',
//                 color: colors.primary,
//                 fontSize: '1.2rem'
//               }}>Email</h3>
//               <p style={{ color: colors.dark, lineHeight: '1.6' }}>info@signaturescents.com<br />response within 24 hours</p>
//             </div>
//           </div>
          
//           {/* Google Map */}
//           <div style={{
//             height: '250px',
//             marginTop: '2rem',
//             borderRadius: '8px',
//             overflow: 'hidden',
//             border: `2px solid ${colors.formBorder}`  // Thicker border
//           }}>
//             <iframe
//               title="Our Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.715306662536!2d74.36787431515658!3d31.52091898137336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 border: 'none'
//               }}
//               allowFullScreen
//               loading="lazy"
//             />
//           </div>
          
//           {/* Social Links */}
//           <div style={{
//             display: 'flex',
//             gap: '1rem',
//             marginTop: '2rem',
//             justifyContent: 'center'
//           }}>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '42px',
//               height: '42px',
//               background: colors.secondary,
//               color: colors.primary,
//               borderRadius: '50%',
//               transition: 'all 0.3s',
//               fontSize: '1.1rem',
//               ':hover': {
//                 background: colors.primary,
//                 color: 'white',
//                 transform: 'translateY(-3px)'
//               }
//             }}>
//               <FaInstagram />
//             </a>
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '42px',
//               height: '42px',
//               background: colors.secondary,
//               color: colors.primary,
//               borderRadius: '50%',
//               transition: 'all 0.3s',
//               fontSize: '1.1rem',
//               ':hover': {
//                 background: colors.primary,
//                 color: 'white',
//                 transform: 'translateY(-3px)'
//               }
//             }}>
//               <FaFacebookF />
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '42px',
//               height: '42px',
//               background: colors.secondary,
//               color: colors.primary,
//               borderRadius: '50%',
//               transition: 'all 0.3s',
//               fontSize: '1.1rem',
//               ':hover': {
//                 background: colors.primary,
//                 color: 'white',
//                 transform: 'translateY(-3px)'
//               }
//             }}>
//               <FaTwitter />
//             </a>
//             <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '42px',
//               height: '42px',
//               background: colors.secondary,
//               color: colors.primary,
//               borderRadius: '50%',
//               transition: 'all 0.3s',
//               fontSize: '1.1rem',
//               ':hover': {
//                 background: colors.primary,
//                 color: 'white',
//                 transform: 'translateY(-3px)'
//               }
//             }}>
//               <FaPinterestP />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;



















import { useState, useRef } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactPage = () => {
  const colors = {
    primary: '#4A2C6D',
    secondary: '#A9B5DF',
    accent: '#7886C7',
    light: '#E8D8F2',
    dark: '#2D336B',
    lightPurple: '#68507B',
    formBorder: '#3A1B5F',
    success: '#4BB543',
    error: '#FF3333'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    setCaptchaError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      setCaptchaError(true);
      setDialogMessage('Please verify you are not a robot');
      setShowDialog(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setDialogMessage('Your message has been sent successfully! We will contact you soon.');
      setShowDialog(true);
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      });
      captchaRef.current.reset();
      setCaptchaVerified(false);
    } catch (error) {
      console.error('Submission error:', error);
      setDialogMessage('Failed to send message. Please try again later.');
      setShowDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      color: colors.dark,
      backgroundColor: 'white',
      minHeight: '100vh',
      paddingBottom: '2rem'
    }}>
      {/* Success Dialog */}
      <Dialog open={showDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ color: colors.primary }}>Message Status</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: colors.dark }}>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: colors.primary }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>







      {/* Header Section */}
      {/* <div style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
        height: '40vh',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 1.5rem'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px'
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '1rem',
            fontWeight: 700,
            lineHeight: 1.2
          }}>
            Contact Signature Scents
          </h1>
          <div style={{
            width: '80px',
            height: '3px',
            background: colors.light,
            margin: '1.5rem auto',
            borderRadius: '3px'
          }}></div>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            We'd love to hear from you
          </p>
        </div>
      </div> */}



         {/* Ultra-Premium Abstract Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
        height: '45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(169, 181, 223, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(232, 216, 242, 0.15) 0%, transparent 25%),
            linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)
          `,
          zIndex: 1
        }}></div>

        {/* Floating Orbs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.light} 0%, transparent 70%)`,
          opacity: 0.3,
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          opacity: 0.2,
          animation: 'float 10s ease-in-out infinite 2s'
        }}></div>

        {/* Header Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px'
        }}>
          <div style={{
            fontSize: '1.2rem',
            letterSpacing: '5px',
            marginBottom: '1rem',
            color: colors.light,
            fontWeight: 300,
            textTransform: 'uppercase'
          }}>Connect With Us</div>
          
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '4rem',
            marginBottom: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.1,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            <span style={{
              display: 'block',
              background: `linear-gradient(to right, ${colors.light}, white)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Signature Scents</span>
          </h1>
          
          <div style={{
            width: '80px',
            height: '3px',
            background: `linear-gradient(to right, ${colors.light}, ${colors.accent})`,
            margin: '2rem auto',
            borderRadius: '3px'
          }}></div>
          
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300,
            opacity: 0.9
          }}>
            Where luxury meets fragrance. Let's create something extraordinary together.
          </p>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            background: 'white',
            borderRadius: '50%',
            opacity: Math.random() * 0.3 + 0.1,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s linear infinite ${Math.random() * 5}s`,
            zIndex: 1
          }}></div>
        ))}
      </div>









      {/* Main Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 1.5rem'
      }}>
        {/* Contact Form */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          border: `2px solid ${colors.formBorder}`
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: colors.primary,
            marginBottom: '1.5rem',
            fontSize: '1.8rem'
          }}>Send Us a Message</h2>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: colors.dark
              }}>Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `2px solid ${colors.formBorder}`,
                  borderRadius: '6px',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                  ':focus': {
                    outline: 'none',
                    borderColor: colors.accent,
                    boxShadow: `0 0 0 2px ${colors.light}`
                  }
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: colors.dark
              }}>Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `2px solid ${colors.formBorder}`,
                  borderRadius: '6px',
                  transition: 'all 0.3s',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                  ':focus': {
                    outline: 'none',
                    borderColor: colors.accent,
                    boxShadow: `0 0 0 2px ${colors.light}`
                  }
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="subject" style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: colors.dark
              }}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `2px solid ${colors.formBorder}`,
                  borderRadius: '6px',
                  transition: 'all 0.3s',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                  ':focus': {
                    outline: 'none',
                    borderColor: colors.accent,
                    boxShadow: `0 0 0 2px ${colors.light}`
                  }
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: colors.dark
              }}>Your Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `2px solid ${colors.formBorder}`,
                  borderRadius: '6px',
                  transition: 'all 0.3s',
                  minHeight: '150px',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                  ':focus': {
                    outline: 'none',
                    borderColor: colors.accent,
                    boxShadow: `0 0 0 2px ${colors.light}`
                  }
                }}
              />
            </div>

            {/* reCAPTCHA Component */}
            <div style={{ 
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              transform: 'scale(0.85)', // Slightly smaller for mobile
              transformOrigin: 'center'
            }}>
              <ReCAPTCHA
                ref={captchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key
                onChange={handleCaptchaChange}
                theme="light"
              />
            </div>
            {captchaError && (
              <p style={{ 
                color: colors.error,
                textAlign: 'center',
                marginBottom: '1rem',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>
                Please complete the CAPTCHA verification
              </p>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? colors.lightPurple : colors.primary,
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '6px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '1rem',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                ':hover': {
                  background: !isSubmitting && colors.accent,
                  transform: !isSubmitting && 'translateY(-2px)',
                  boxShadow: !isSubmitting && '0 4px 8px rgba(0,0,0,0.15)'
                },
                ':active': {
                  transform: !isSubmitting && 'translateY(0)'
                }
              }}
            >
              <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          border: `2px solid ${colors.formBorder}`
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: colors.primary,
            marginBottom: '1.5rem',
            fontSize: '1.8rem'
          }}>Contact Information</h2>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: colors.secondary,
              color: colors.primary,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 style={{ 
                marginBottom: '0.5rem',
                color: colors.primary,
                fontSize: '1.2rem'
              }}>Our Location</h3>
              <p style={{ color: colors.dark, lineHeight: '1.6' }}>123 Fragrance Lane<br />Baghbanpura, Lahore, Pakistan</p>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: colors.secondary,
              color: colors.primary,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>
              <FaPhoneAlt />
            </div>
            <div>
              <h3 style={{ 
                marginBottom: '0.5rem',
                color: colors.primary,
                fontSize: '1.2rem'
              }}>Phone</h3>
              <p style={{ color: colors.dark, lineHeight: '1.6' }}>+92 300 1234567<br />Mon-Fri: 9am-6pm</p>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: colors.secondary,
              color: colors.primary,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>
              <FaEnvelope />
            </div>
            <div>
              <h3 style={{ 
                marginBottom: '0.5rem',
                color: colors.primary,
                fontSize: '1.2rem'
              }}>Email</h3>
              <p style={{ color: colors.dark, lineHeight: '1.6' }}>info@signaturescents.com<br />response within 24 hours</p>
            </div>
          </div>
          
          {/* Google Map */}
          <div style={{
            height: '250px',
            marginTop: '2rem',
            borderRadius: '8px',
            overflow: 'hidden',
            border: `2px solid ${colors.formBorder}`
          }}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.715306662536!2d74.36787431515658!3d31.52091898137336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          
          {/* Social Links */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
            justifyContent: 'center'
          }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              background: colors.secondary,
              color: colors.primary,
              borderRadius: '50%',
              transition: 'all 0.3s',
              fontSize: '1.1rem',
              ':hover': {
                background: colors.primary,
                color: 'white',
                transform: 'translateY(-3px)'
              }
            }}>
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              background: colors.secondary,
              color: colors.primary,
              borderRadius: '50%',
              transition: 'all 0.3s',
              fontSize: '1.1rem',
              ':hover': {
                background: colors.primary,
                color: 'white',
                transform: 'translateY(-3px)'
              }
            }}>
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              background: colors.secondary,
              color: colors.primary,
              borderRadius: '50%',
              transition: 'all 0.3s',
              fontSize: '1.1rem',
              ':hover': {
                background: colors.primary,
                color: 'white',
                transform: 'translateY(-3px)'
              }
            }}>
              <FaTwitter />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              background: colors.secondary,
              color: colors.primary,
              borderRadius: '50%',
              transition: 'all 0.3s',
              fontSize: '1.1rem',
              ':hover': {
                background: colors.primary,
                color: 'white',
                transform: 'translateY(-3px)'
              }
            }}>
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;