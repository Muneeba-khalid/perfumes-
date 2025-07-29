

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ck5 from '../assets/ck5.jpeg';
import ck8 from '../assets/ck8.jpeg';
import d9 from '../assets/d9.jpeg';
import testi4 from '../assets/testi4.jpeg';
import testi5 from '../assets/testi5.jpeg';
import testi6 from '../assets/testi6.jpeg';
import banner1 from "../assets/banner1.jpg";
import { Link } from 'react-router-dom';

  
import { FaClock, FaUser, FaQuoteLeft, FaStar, FaShoppingBag } from 'react-icons/fa';

const blogs = [
  {
    title: 'Top 10 Signature Perfumes of 2025',
    image: testi4,
    author: 'Muneeba Khalid',
    date: 'June 18, 2025',
    content: 'Discover the most enchanting and luxurious perfumes making waves this year. From bold florals to woody musks, these are the scents you cannot miss.'
  },
  {
    title: 'How to Choose a Perfume That Matches Your Personality',
    image: testi5,
    author: 'Sarah Malik',
    date: 'June 12, 2025',
    content: 'Perfume is personal. Learn how to pick the perfect fragrance that resonates with your character and daily lifestyle.'
  },
  {
    title: 'Perfume Layering: A Guide to Creating Your Own Unique Scent',
    image: testi6,
    author: 'Ali Rehman',
    date: 'May 28, 2025',
    content: 'Blend notes like a pro. This blog covers expert techniques for mixing perfumes and creating a signature scent that turns heads.'
  }
];

const featuredPerfumes = [
  {
    name: "Midnight Oud",
    description: "A rich blend of dark oud, vanilla, and amber for mysterious evenings",
    image: ck5,
    notes: ["Dior", "Vanilla", "Amber", "Saffron"],
    price: "RS:22,335"
  },
  {
    name: "Golden Blossom",
    description: "A floral explosion of jasmine, rose and peony for daytime elegance",
    image: ck8,
    notes: ["Jasmine", "Rose", "Peony", "Musk"],
    price: "RS:21,336"
  },
  {
    name: "Ocean Breeze",
    description: "Fresh aquatic notes with citrus and sea salt for a crisp, clean scent",
    image: d9,
    notes: ["Bergamot", "Sea Salt", "Driftwood", "Ambergris"],
    price: "RS:10,670"
  }
];

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100
    });
  }, []);

  return (
    <section className="blog-section" style={{ 
      fontFamily: "'Poppins', sans-serif", 
      background: '#ffffff',
      padding: '6rem 0 8rem',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <div 
        data-aos="fade-up"
        className="blog-hero" 
        style={{ 
          textAlign: 'center', 
          marginBottom: '6rem',
          maxWidth: '900px',
          margin: '0 auto 6rem',
          padding: '0 2rem'
        }}
      >
        <h1 style={{ 
          fontSize: '4.5rem', 
          color: '#58397A', 
          fontWeight: '800', 
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          The <span style={{ color: '#68507B' }}>Essence of Luxury</span>
        </h1>
        <p style={{ 
          color: '#6B7280', 
          fontSize: '1.4rem',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover the world of luxury perfumes through our curated articles, expert guides, and insider knowledge
        </p>
      </div>

      {/* Blog Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '3rem',
        maxWidth: '1400px',
        margin: '0 auto 8rem',
        padding: '0 2rem'
      }}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="blog-card"
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              transition: 'all 0.5s ease'
            }}
          >
            <div className="blog-card-image" style={{
              width: '100%',
              height: '350px',
              overflow: 'hidden'
            }}>
              <img 
                src={blog.image} 
                alt={blog.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ padding: '2.2rem' }}>
              <h2 style={{ 
                color: '#58397A', 
                fontSize: '1.8rem', 
                marginBottom: '1rem',
                fontWeight: '700',
                lineHeight: '1.4'
              }}>
                {blog.title}
              </h2>
              <p style={{ 
                color: '#4B5563', 
                fontSize: '1.05rem', 
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                {blog.content}
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                fontSize: '0.95rem', 
                color: '#6B7280',
                borderTop: '1px solid #f3f3f3',
                paddingTop: '1.5rem'
              }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUser style={{ marginRight: '8px', color: '#68507B' }} /> 
                  {blog.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaClock style={{ marginRight: '8px', color: '#68507B' }} /> 
                  {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The History of Perfumery */}
      <div
        data-aos="fade-up"
        style={{
          background: '#f9f5ff',
          padding: '5rem 4rem',
          borderRadius: '30px',
          maxWidth: '1200px',
          margin: '6rem auto',
          position: 'relative'
        }}
      >
        <h2 style={{ 
          fontSize: '3rem', 
          color: '#58397A', 
          fontWeight: '800', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          A Fragrant Journey Through Time
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Ancient Beginnings
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              The art of perfumery dates back over 4,000 years to ancient Mesopotamia, where the world's first recorded chemist, Tapputi, distilled flowers, oil, and calamus to create aromatic blends. The Egyptians elevated perfume to sacred status, using fragrances in religious ceremonies and the mummification process. They developed sophisticated techniques to extract scents from local flora like lily, frankincense, and myrrh.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Cleopatra famously used rose and jasmine perfumes to seduce Julius Caesar and Mark Antony. Historical records suggest she had the sails of her ship soaked in fragrance so Rome would smell her arrival before seeing her fleet.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              The Islamic Golden Age
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              During the 8th-13th centuries, Muslim chemists made groundbreaking advancements in distillation techniques. Persian scholar Ibn Sina (Avicenna) perfected the process of extracting oils from flowers through steam distillation, which remains fundamental to modern perfumery. This allowed for more delicate floral scents that couldn't be obtained through ancient enfleurage methods.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8'
            }}>
              The famous Persian rosewater became a coveted luxury item traded along the Silk Road, influencing fragrance development in both Europe and Asia. Many modern perfume classification terms like "alcohol" and "ambregris" derive from Arabic roots.
            </p>
          </div>
        </div>
      </div>

      {/* Luxe Scents Feature */}
      <div
        data-aos="fade-up"
        className="luxe-feature"
        style={{
          background: '#ffffff',
          margin: '6rem auto',
          padding: '0',
          borderRadius: '30px',
          maxWidth: '1200px',
          boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          alignItems: 'center'
        }}>
          <div style={{ padding: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.8rem', 
              color: '#58397A', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              lineHeight: '1.3'
            }}>
              Crafting <span style={{ color: '#68507B' }}>Timeless</span> Fragrances
            </h2>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.15rem', 
              marginBottom: '1.5rem',
              lineHeight: '1.8'
            }}>
              At <strong>Luxe Scents</strong>, we believe perfume is more than a scent—it's liquid emotion, bottled memories, and wearable art. Our master perfumers combine rare ingredients with innovative techniques to create fragrances that evolve beautifully throughout the day.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.15rem', 
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              Each creation begins with inspiration—a sunset, a love story, a childhood memory. We then meticulously blend top, heart, and base notes to craft perfumes with remarkable depth and longevity. Our perfumers undergo rigorous training, with many having studied at the prestigious Grasse Institute of Perfumery in France.
            </p>
            <div className="cta-button" style={{
              display: 'inline-block',
              background: '#68507B',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(104, 80, 123, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Discover Our Process
            </div>
          </div>
          <div className="luxe-image" style={{
            height: '100%',
            overflow: 'hidden'
          }}>
            <img 
              src={banner1} 
              alt="Luxe Scents Perfume Collection" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                minHeight: '500px'
              }}
            />
          </div>
        </div>
      </div>

      {/* The Science of Scent */}
      <div
        data-aos="fade-up"
        style={{
          background: '#ffffff',
          padding: '5rem 4rem',
          borderRadius: '30px',
          maxWidth: '1200px',
          margin: '6rem auto',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)'
        }}
      >
        <h2 style={{ 
          fontSize: '3rem', 
          color: '#58397A', 
          fontWeight: '800', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          The Neuroscience of Fragrance
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              How Your Brain Processes Scents
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Unlike other senses that route through the thalamus, smell has a direct pathway to the brain's limbic system—the seat of emotion and memory. This explains why a particular fragrance can instantly transport you back to your grandmother's kitchen or your first love. Scientists estimate humans can distinguish between 1 trillion different odors, far more than previously believed.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              When you inhale a fragrance, odor molecules bind to receptors in the olfactory epithelium, triggering electrical signals that reach your brain within 100-150 milliseconds. This rapid processing makes smell our most immediate sense.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Psychological Effects of Fragrance
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Studies show lavender reduces stress by slowing nervous system activity, while citrus scents increase alertness by up to 54%. Vanilla has been found to induce feelings of happiness, and peppermint can enhance concentration and athletic performance. Hospitals are increasingly using fragrance therapy—lemon to combat nausea, pine to reduce anxiety before procedures.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8'
            }}>
              At Luxe Scents, we incorporate these psychological principles into our formulations. Our "Morning Ritual" collection features energizing citrus and herbal notes, while the "Evening Serenade" line uses calming chamomile and sandalwood.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Perfumes Section */}
      <div style={{ 
        maxWidth: '1400px', 
        margin: '8rem auto',
        padding: '0 2rem'
      }}>
        <div
          data-aos="fade-up"
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ 
            fontSize: '3.2rem', 
            color: '#58397A', 
            fontWeight: '800', 
            marginBottom: '1.5rem'
          }}>
            Our <span style={{ color: '#68507B' }}>Signature</span> Creations
          </h2>
          <p style={{ 
            color: '#6B7280', 
            fontSize: '1.3rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Explore our most beloved fragrances that have captivated perfume enthusiasts worldwide
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          margin: '0 auto'
        }}>
          {featuredPerfumes.map((perfume, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="perfume-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                transition: 'all 0.5s ease'
              }}
            >
              <div className="perfume-image" style={{
                width: '100%',
                height: '400px',
                overflow: 'hidden'
              }}>
                <img 
                  src={perfume.image} 
                  alt={perfume.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '1.8rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    color: '#f59e0b'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ marginRight: '3px' }} />
                    ))}
                  </div>
                  <div style={{
                    color: '#58397A',
                    fontWeight: '700',
                    fontSize: '1.2rem'
                  }}>
                    {perfume.price}
                  </div>
                </div>
                <h3 style={{ 
                  color: '#58397A',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}>
                  {perfume.name}
                </h3>
                <p style={{ 
                  color: '#6B7280',
                  fontSize: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  {perfume.description}
                </p>
                <div>
                  <h4 style={{ 
                    color: '#58397A',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Key Notes:
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {perfume.notes.map((note, i) => (
                      <span key={i} style={{
                        background: '#f0e5fa',
                        color: '#68507B',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Perfume Application Guide */}
      <div
        data-aos="fade-up"
        style={{
          background: '#f9f5ff',
          padding: '5rem 4rem',
          borderRadius: '30px',
          maxWidth: '1200px',
          margin: '6rem auto'
        }}
      >
        <h2 style={{ 
          fontSize: '3rem', 
          color: '#58397A', 
          fontWeight: '800', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          The Art of Perfume Application
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Pulse Point Perfection
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              The warmth of pulse points—wrists, neck, behind ears, inner elbows—helps diffuse fragrance throughout the day. For optimal longevity, apply to clean, moisturized skin. The oil in lotion creates a bonding surface that slows fragrance evaporation. Avoid rubbing wrists together as this crushes top notes and alters the scent profile.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              For evening wear, add application points behind knees and at the ankles—these "rising heat" zones create an alluring scent trail as you move. Our studies show this technique increases fragrance detection by others by up to 40%.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Seasonal Considerations
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              In winter, apply perfume to clothed areas like scarf ends and coat lapels—the fabric holds scent molecules longer in cold, dry air. Summer calls for lighter application to exposed skin, as heat intensifies fragrance projection. Humidity makes aquatic and citrus notes shine, while cold weather enhances woody and oriental accords.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8'
            }}>
              For special occasions, try the "spray and walk through" technique: mist perfume into the air before stepping into the fragrance cloud. This creates an even, subtle distribution. Remember—perfume should be discovered, not announced.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div
        data-aos="fade-up"
        className="testimonial-section"
        style={{
          background: 'linear-gradient(135deg, #68507B 0%, #58397A 100%)',
          borderRadius: '30px',
          padding: '5rem',
          maxWidth: '1200px',
          margin: '8rem auto',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          fontSize: '200px',
          opacity: '0.05'
        }}>
          <FaQuoteLeft />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          fontSize: '200px',
          opacity: '0.05',
          transform: 'rotate(180deg)'
        }}>
          <FaQuoteLeft />
        </div>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: '2'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '2rem',
            lineHeight: '1.4'
          }}>
            What Our Clients Say
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8',
            marginBottom: '3rem',
            fontStyle: 'italic'
          }}>
            "Luxe Scents transformed my perfume experience. The Midnight Oud is unlike anything I've ever worn - complex, mysterious, and utterly addictive. It's become my signature scent that gets compliments everywhere I go."
          </p>
          <div>
            <p style={{ 
              fontWeight: '600',
              fontSize: '1.1rem',
              marginBottom: '0.5rem'
            }}>
              Ayesha Khan
            </p>
            <p style={{ 
              opacity: '0.8',
              fontSize: '0.9rem'
            }}>
              Loyal Customer Since 2023
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div
        data-aos="fade-up"
        style={{
          background: '#ffffff',
          padding: '5rem 4rem',
          borderRadius: '30px',
          maxWidth: '1200px',
          margin: '6rem auto',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)'
        }}
      >
        <h2 style={{ 
          fontSize: '3rem', 
          color: '#58397A', 
          fontWeight: '800', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Sustainable Perfumery
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Ethical Sourcing
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              We partner directly with organic farms in Grasse, France and Uttarakhand, India to source botanicals through fair trade agreements. Our rose harvest supports women's cooperatives in Bulgaria, while sandalwood comes from sustainable plantations in Australia. Through our "Seed to Scent" initiative, we plant three trees for every one used in production.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              All animal-derived ingredients (like musk and ambergris) are synthetic replicas, cruelty-free yet indistinguishable from natural versions. We've reduced water usage in production by 65% through innovative steam distillation methods.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: '#68507B', 
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Eco-Conscious Packaging
            </h3>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Our bottles use 30% recycled glass, with caps crafted from reclaimed wood. Shipping materials are 100% biodegradable—cornstarch foam replaces plastic inserts, and soy-based inks print on FSC-certified paper. The "Refill, Not Replace" program offers discounted refills using your existing bottle.
            </p>
            <p style={{ 
              color: '#4B5563', 
              fontSize: '1.1rem', 
              lineHeight: '1.8'
            }}>
              By 2026, we aim to be carbon neutral across our supply chain. Each purchase contributes to rainforest conservation through our partnership with the Rainforest Trust.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div
        data-aos="fade-up"
        className="final-cta"
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 6rem',
          padding: '0 2rem'
        }}
      >
        <h2 style={{ 
          fontSize: '3rem', 
          color: '#58397A', 
          fontWeight: '800', 
          marginBottom: '1.5rem',
          lineHeight: '1.3'
        }}>
          Ready to Find Your Signature Scent?
        </h2>
        <p style={{ 
          color: '#6B7280', 
          fontSize: '1.3rem',
          marginBottom: '3rem',
          lineHeight: '1.8'
        }}>
          Visit our boutique or explore our online collection to discover perfumes that tell your unique story. Our fragrance experts are always available to guide you through our collection with personalized consultations.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
         
      
<div 
  className="cta-button" 
  onClick={() => window.location.href = '/'}
  style={{
    background: '#68507B',
    color: 'white',
    padding: '1.2rem 2.5rem',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(104, 80, 123, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }}
>
  Shop Now
</div>
          {/* <div className="cta-button secondary" style={{
            background: 'transparent',
            color: '#68507B',
            padding: '1.2rem 2.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid #68507B',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Book a Consultation
          </div> */}
          <Link to="/consultation">
  <div 
    className="cta-button secondary" 
    style={{
      background: 'transparent',
      color: '#68507B',
      padding: '1.2rem 2.5rem',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid #68507B',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }}
  >
    Book a Consultation
  </div>
</Link>
        </div>
      </div>

      {/* Comprehensive About Section */}
      <div
        data-aos="fade-up"
        style={{
          background: '#fff',
          marginTop: '5rem',
          padding: '3rem 4rem',
          borderRadius: '20px',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          lineHeight: '1.9',
        }}
      >
        <h2 style={{ fontSize: '2.7rem', color: '#58397A',  fontWeight: 'bold', marginBottom: '1.5rem' }}>
          The Art of Fragrance — Discover Luxe Scents Signature Perfume Collection
        </h2>
        <p style={{ color: '#374151', fontSize: '1.2rem' }}>
          <strong>At Luxe Scents,</strong> perfume is not merely a scent—it's an emotion, a lifestyle, and a moment captured in a bottle. We specialize in creating perfumes that blend modern sophistication with timeless elegance. Whether you're stepping into a boardroom or preparing for a night out, our fragrances are designed to make a lasting impression.
        </p>
        <p style={{ color: '#374151', fontSize: '1.2rem' }}>
          Our master perfumers draw inspiration from nature, culture, and memory to create luxurious scent profiles. From delicate floral bouquets to deep, spicy accords, each bottle is a testament to art and passion. Luxe Scents represents individuality and luxury—without compromise.
        </p>
        <p style={{ color: '#374151', fontSize: '1.2rem' }}>
          The creation of a Luxe Scents fragrance begins with an inspiration—perhaps the golden light of a Marrakech sunset or the crisp air of Alpine forests. Our perfumers then embark on a meticulous process that can take up to two years to perfect. We source rare ingredients: Bulgarian roses harvested at dawn when their scent is most potent, vanilla from Madagascar aged for maximum depth, and oud from sustainably managed agarwood trees in Southeast Asia.
        </p>
        <p style={{ color: '#374151', fontSize: '1.2rem' }}>
          We offer customization, layering kits, and curated collections for all personalities—whether you're bold, soft, or somewhere in between. Our mission is to empower everyone to express their identity through scent. Join thousands who have made Luxe Scents their fragrance companion.
        </p>
        <p style={{ color: '#374151', fontSize: '1.2rem' }}>
          Beyond our ready-to-wear collections, we provide bespoke fragrance services where clients work one-on-one with our perfumers to create a completely unique scent. This 8-week journey includes scent profiling sessions, multiple iterations, and finally, your personal formula archived in our vault for future refills. Many clients choose to pass these custom creations to future generations as olfactory heirlooms.
        </p>
        <p style={{ color: '#374151', fontSize: '1.2rem' }}>
          Experience the charm, the allure, and the memory that is Luxe Scents—where every spray tells your story. Our fragrances are designed to evolve with you throughout the day, revealing different facets of their personality just as you reveal different facets of yours. From the bright, sparkling top notes that make first impressions to the deep, resonant base notes that linger in memory, each Luxe Scents creation is a journey in itself.
        </p>
      </div>

      {/* Add CSS for animations and hover effects */}
      <style jsx>{`
        .blog-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .perfume-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(104, 80, 123, 0.4) !important;
        }
        
        .cta-button.secondary:hover {
          background-color: #f0e5fa !important;
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .blog-hero h1 {
            font-size: 3rem !important;
          }
          
          .testimonial-section {
            padding: 3rem 2rem !important;
          }
          
          .luxe-feature > div {
            grid-template-columns: 1fr !important;
          }
          
          .luxe-feature > div > div:first-child {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogPage;