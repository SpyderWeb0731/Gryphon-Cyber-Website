import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import '../App.css'

import gryphonLogo from "../assets/gryphon-logo.png";

import Footer from "../components/Footer";

function Services() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(

    () => typeof window !== "undefined" && window.innerWidth <= 760

  );

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 760px)");

    const handleViewportChange = (event) => {

      setIsMobile(event.matches);

      if (!event.matches) {

        setMobileMenuOpen(false);

      }

    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {

      mediaQuery.removeEventListener("change", handleViewportChange);

    };

  }, []);

  const services = [

    {

      number: '01',

      title: 'Training Programs',

      description:

        'Comprehensive knowledge and practical skills for investigators handling real-world scenarios with advanced methodologies.',

      capabilities: [

        'Crime Investigation Techniques',

        'Cyber Forensic Skills',

        'Scenario-based Simulation',

      ],

    },

    {

      number: '02',

      title: 'Expert Consultation',

      description:

        'Personalized guidance on IT strategies and cybersecurity, leveraging deep industry knowledge to solve complex operational challenges.',

      capabilities: [

        'Strategic IT Planning',

        'Cybersecurity Audits',

        'Digital Risk Assessment',

      ],

    },

    {

      number: '03',

      title: 'Digital Transformation',

      description:

        'Cloud computing and data analytics solutions designed to streamline operations and unlock new levels of efficiency.',

      capabilities: [

        'Cloud Infrastructure Setup',

        'Data Analytics Implementation',

        'Process Automation',

      ],

    },

    {

      number: '04',

      title: 'Security Solutions',

      description:

        'Robust protection for digital assets, networks and sensitive data through advanced security measures.',

      capabilities: [

        'Network Security Hardening',

        'Threat Monitoring Systems',

        'Breach Prevention Protocols',

      ],

    },

  ]

  return (

    <div className="app">

      {/* =====================================================

          NAVBAR

      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          {/* LOGO */}

          <Link

            to="/"

            className="logo-link"

            onClick={() => setMobileMenuOpen(false)}

          >

            <img

              src={gryphonLogo}

              alt="Gryphon Cyber"

              className="navbar-logo"

            />

          </Link>

          {!isMobile && (

            <>

              {/* DESKTOP NAVIGATION */}

              <nav className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/services" className="active">Services</Link>

                <Link to="/solutions">Solutions</Link>

                <Link to="/training">Training</Link>

                <Link to="/contact">Contact</Link>

              </nav>

              {/* DESKTOP TALK BUTTON */}

              <Link to="/contact" className="talk-button">

                Talk to Us

                <span>→</span>

              </Link>

            </>

          )}

          {/* MOBILE HAMBURGER */}

          {isMobile && (

            <button

              type="button"

              className={`services-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}

              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}

              aria-expanded={mobileMenuOpen}

              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

            >

              <span></span>

              <span></span>

              <span></span>

            </button>

          )}

        </div>

        {/* MOBILE NAVIGATION */}

        {isMobile && mobileMenuOpen && (

          <div className="services-mobile-menu">

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>

            <Link

              to="/services"

              className="mobile-active"

              onClick={() => setMobileMenuOpen(false)}

            >

              Services

            </Link>

            <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>

            <Link to="/training" onClick={() => setMobileMenuOpen(false)}>Training</Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            <Link

              to="/contact"

              className="services-mobile-talk"

              onClick={() => setMobileMenuOpen(false)}

            >

              Talk to Us

              <span>→</span>

            </Link>

          </div>

        )}

        {/* MOBILE NAVIGATION STYLES */}

        <style>{`

          /\* SERVICES MOBILE NAVIGATION \*/

          .services-mobile-toggle {

            width: 44px !important;

            height: 44px !important;

            display: flex !important;

            flex-direction: column !important;

            align-items: center !important;

            justify-content: center !important;

            gap: 5px !important;

            margin-left: auto !important;

            padding: 0 !important;

            border: 1px solid rgba(34, 211, 238, 0.35) !important;

            border-radius: 8px !important;

            background: rgba(7, 20, 38, 0.90) !important;

            cursor: pointer !important;

            outline: none !important;

            flex-shrink: 0 !important;

          }

          .services-mobile-toggle span {

            width: 21px !important;

            height: 2px !important;

            display: block !important;

            border-radius: 10px !important;

            background: #ffffff !important;

            transition: transform 0.25s ease, opacity 0.2s ease !important;

          }

          .services-mobile-toggle.open span:nth-child(1) {

            transform: translateY(7px) rotate(45deg) !important;

          }

          .services-mobile-toggle.open span:nth-child(2) {

            opacity: 0 !important;

          }

          .services-mobile-toggle.open span:nth-child(3) {

            transform: translateY(-7px) rotate(-45deg) !important;

          }

          .services-mobile-menu {

            position: absolute !important;

            top: 100% !important;

            left: 0 !important;

            right: 0 !important;

            display: flex !important;

            flex-direction: column !important;

            box-sizing: border-box !important;

            padding: 10px 18px 18px !important;

            background: rgba(4, 12, 24, 0.98) !important;

            backdrop-filter: blur(18px) !important;

            -webkit-backdrop-filter: blur(18px) !important;

            border-top: 1px solid rgba(34, 211, 238, 0.12) !important;

            border-bottom: 1px solid rgba(34, 211, 238, 0.18) !important;

            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45) !important;

            z-index: 99999 !important;

          }

          .services-mobile-menu a {

            width: 100% !important;

            box-sizing: border-box !important;

            padding: 14px 12px !important;

            color: #ffffff !important;

            font-size: 15px !important;

            font-weight: 500 !important;

            line-height: 1.3 !important;

            text-decoration: none !important;

            border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;

          }

          .services-mobile-menu a:hover,

          .services-mobile-menu a.mobile-active {

            color: #22d3ee !important;

          }

          .services-mobile-talk {

            display: flex !important;

            align-items: center !important;

            justify-content: center !important;

            gap: 10px !important;

            margin-top: 12px !important;

            padding: 13px 16px !important;

            border: 0 !important;

            border-radius: 8px !important;

            background: #1764e8 !important;

            color: #ffffff !important;

            font-weight: 700 !important;

            text-decoration: none !important;

          }

          .services-mobile-talk span {

            font-size: 19px !important;

            color: #ffffff !important;

          }

          .services-mobile-talk:hover {

            background: #1764e8 !important;

            color: #ffffff !important;

          }

          @media (max-width: 760px) {

            .navbar,

            .navbar .nav-container {

              position: relative !important;

            }

          }

          @media (max-width: 420px) {

            .services-mobile-toggle {

              width: 42px !important;

              height: 42px !important;

            }

            .services-mobile-menu {

              padding-left: 14px !important;

              padding-right: 14px !important;

            }

          }

        `}</style>

      </header>

      {/* =====================================================

          PAGE HERO

      ===================================================== */}

      <main>

        <section className="inner-page-hero">

          <div className="inner-page-grid"></div>

          <div className="inner-page-glow"></div>

          <div className="inner-page-content">

            <div className="inner-page-label">

              GRYPHON CYBER • CAPABILITIES

            </div>

            <h1>

              Intelligence built

              <span>

                for the real world.

              </span>

            </h1>

            <p>

              From investigator training and expert consultation

              to digital transformation and security solutions,

              Gryphon Cyber combines technology with operational

              expertise.

            </p>

          </div>

        </section>

        {/* =====================================================

            SERVICES

        ===================================================== */}

        <section className="services-page-section">

          <div className="services-page-header">

            <div className="section-label">

              01 — OUR SERVICES

            </div>

            <h2>

              Four capabilities.

              <span>

                One intelligence ecosystem.

              </span>

            </h2>

            <p>

              Our services are designed to support complex

              investigations, cybersecurity requirements and

              operational transformation.

            </p>

          </div>

          <div className="services-page-grid">

            {services.map((service) => (

              <article

                className="service-page-card"

                key={service.number}

              >

                <div className="service-page-number">

                  {service.number}

                </div>

                <div className="service-page-status">

                  <span></span>

                  ACTIVE CAPABILITY

                </div>

                <h3>

                  {service.title}

                </h3>

                <p>

                  {service.description}

                </p>

                <div className="service-page-divider"></div>

                <div className="service-page-capabilities">

                  {service.capabilities.map(

                    (capability) => (

                      <div

                        key={capability}

                        className="service-capability"

                      >

                        <span>

                          +

                        </span>

                        {capability}

                      </div>

                    )

                  )}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =====================================================

            CTA

        ===================================================== */}

        <section className="services-page-cta">

          <div>

            <div className="section-label">

              NEXT STEP

            </div>

            <h2>

              Have a complex

              <span>

                challenge?

              </span>

            </h2>

            <p>

              Let's discuss how Gryphon Cyber can support

              your intelligence, cybersecurity or operational

              requirements.

            </p>

          </div>

          <Link

            to="/contact"

            className="services-cta-button"

          >

            Start a Conversation

            <span>→</span>

          </Link>

        </section>

      </main>

      {/* =====================================================

          FOOTER

      ===================================================== */}

      <Footer />

    </div>

  )

}

export default Services