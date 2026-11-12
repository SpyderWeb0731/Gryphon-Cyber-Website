import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import '../App.css'
import heroBackground from '../assets/Gryphon_Cyber_Hero_Background.png';
import gryphonLogo from '../assets/gryphon-logo.png';


import Footer from "../components/Footer";
import NavbarBrand from "../components/NavbarBrand";

function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    const animatedElements = document.querySelectorAll(

      '.story-intro, .intelligence-network, .network-trust-logos, .services-story-heading, .story-service-card, .product-story'

    )

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('story-visible')

          }

        })

      },

      {

        threshold: 0.15

      }

    )

    animatedElements.forEach((element) => {

      element.classList.add('story-hidden')

      observer.observe(element)

    })

    return () => {

      observer.disconnect()

    }

  }, [])

  return (

    <div className="app">



      {/* =====================================================

          NAVBAR

      ===================================================== */}

      <header className="navbar gryphon-standard-navbar">

        <div className="nav-container">

          <Link

            to="/"

            className="logo-link"

            onClick={() => setMobileMenuOpen(false)}

          >

            <NavbarBrand />

          </Link>

          {/* DESKTOP NAVIGATION — existing version */}

          <nav className="nav-links">

            <Link to="/" className="active">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/solutions">Solutions</Link>

            <Link to="/engagements">Engagements</Link>

            <Link to="/training">Training</Link>

            <Link to="/contact">Contact</Link>

          </nav>

          <Link to="/book-demo" className="demo-button">

            Book a Demo

            <span>→</span>

          </Link>

          {/* MOBILE HAMBURGER */}

          <button

            type="button"

            className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}

            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}

            aria-expanded={mobileMenuOpen}

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

          >

            <span></span>

            <span></span>

            <span></span>

          </button>

        </div>

        {/* MOBILE NAVIGATION */}

        <div className={`mobile-nav-menu ${mobileMenuOpen ? "show" : ""}`}>

          <Link

            to="/"

            className="mobile-active"

            onClick={() => setMobileMenuOpen(false)}

          >

            Home

          </Link>

          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>

            About

          </Link>

          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>

            Services

          </Link>

          <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>

            Solutions

          </Link>

          <Link to="/engagements" onClick={() => setMobileMenuOpen(false)}>

            Engagements

          </Link>

          <Link to="/training" onClick={() => setMobileMenuOpen(false)}>

            Training

          </Link>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>

            Contact

          </Link>

          <Link

            to="/book-demo"

            className="mobile-demo-button"

            onClick={() => setMobileMenuOpen(false)}

          >

            Book a Demo <span>→</span>

          </Link>

        </div>

        <style>{`

          /* Mobile-only additions.

             Desktop navbar keeps the existing App.css appearance. */

          .mobile-menu-toggle,

          .mobile-nav-menu {

            display: none;

          }

          @media (max-width: 760px) {

            .navbar .nav-links,

            .navbar .demo-button {

              display: none !important;

            }

            .navbar .nav-container {

              position: relative !important;

            }

            .mobile-menu-toggle {

              width: 44px !important;

              height: 44px !important;

              display: flex !important;

              flex-direction: column !important;

              align-items: center !important;

              justify-content: center !important;

              gap: 5px !important;

              margin-left: auto !important;

              padding: 0 !important;

              border: 1px solid rgba(34, 211, 238, .35) !important;

              border-radius: 8px !important;

              background: rgba(7, 20, 38, .90) !important;

              cursor: pointer !important;

            }

            .mobile-menu-toggle span {

              width: 21px !important;

              height: 2px !important;

              display: block !important;

              border-radius: 10px !important;

              background: #ffffff !important;

              transition:

                transform .25s ease,

                opacity .2s ease !important;

            }

            .mobile-menu-toggle.open span:nth-child(1) {

              transform: translateY(7px) rotate(45deg) !important;

            }

            .mobile-menu-toggle.open span:nth-child(2) {

              opacity: 0 !important;

            }

            .mobile-menu-toggle.open span:nth-child(3) {

              transform: translateY(-7px) rotate(-45deg) !important;

            }

            .mobile-nav-menu {

              position: absolute !important;

              top: 100% !important;

              left: 0 !important;

              right: 0 !important;

              display: flex !important;

              flex-direction: column !important;

              box-sizing: border-box !important;

              padding: 10px 18px 18px !important;

              background: rgba(4, 12, 24, .98) !important;

              backdrop-filter: blur(18px) !important;

              -webkit-backdrop-filter: blur(18px) !important;

              border-top: 1px solid rgba(34, 211, 238, .12) !important;

              border-bottom: 1px solid rgba(34, 211, 238, .18) !important;

              box-shadow: 0 18px 40px rgba(0, 0, 0, .45) !important;

              transform: translateY(-12px) !important;

              opacity: 0 !important;

              visibility: hidden !important;

              pointer-events: none !important;

              transition:

                opacity .22s ease,

                transform .22s ease,

                visibility .22s ease !important;

            }

            .mobile-nav-menu.show {

              transform: translateY(0) !important;

              opacity: 1 !important;

              visibility: visible !important;

              pointer-events: auto !important;

            }

            .mobile-nav-menu a {

              width: 100% !important;

              box-sizing: border-box !important;

              padding: 14px 12px !important;

              color: #ffffff !important;

              font-size: 15px !important;

              font-weight: 500 !important;

              text-decoration: none !important;

              border-bottom: 1px solid rgba(255,255,255,.06) !important;

            }

            .mobile-nav-menu a:hover,

            .mobile-nav-menu a.mobile-active {

              color: #22d3ee !important;

            }

            .mobile-demo-button {

              display: flex !important;

              align-items: center !important;

              justify-content: center !important;

              gap: 10px !important;

              margin-top: 12px !important;

              border: 0 !important;

              border-radius: 8px !important;

              background: #ffffff !important;

              color: #071426 !important;

              font-weight: 700 !important;

            }

            .mobile-demo-button span {

              font-size: 19px !important;

            }

          }

          @media (max-width: 420px) {

            .mobile-menu-toggle {

              width: 42px !important;

              height: 42px !important;

            }

            .mobile-nav-menu {

              padding-left: 14px !important;

              padding-right: 14px !important;

            }

          }

        `}</style>

      </header>

      {/* =====================================================

          MAIN

      ===================================================== */}

      <main>

        {/* =====================================================

            HERO

        ===================================================== */}

        <section
          className="hero gc-home-hero"
          id="home"
          style={{ "--gc-hero-bg": `url("${heroBackground}")` }}
        >

          {/* LEFT CONTENT */}

          <div className="hero-content gc-home-hero-content">

            <div className="hero-badge">

              CYBER INTELLIGENCE • GROUND OPERATIONS

            </div>

            <h1>

               We serve who

              <span>

                serves the nation

              </span>

            </h1>

            <p className="hero-description">

              Gryphon Cyber delivers cyber intelligence,

              investigative expertise and ground operations

              for complex investigations, intelligence

              gathering and digital security.

            </p>

            <div className="hero-buttons">

              <a

                href="#/solutions"

                className="primary-button"

              >

                Explore Solutions

                <span>→</span>

              </a>

              <a

                href="#/about"

                className="secondary-button"

              >

                Discover Gryphon

                <span>↗</span>

              </a>

            </div>

            {/* HERO FEATURES */}

            <div className="hero-features">

              <div className="hero-feature">

                <span className="feature-number">

                  01

                </span>

                <div>

                  <strong>

                    Intelligence

                  </strong>

                  <small>

                    Data-driven insight

                  </small>

                </div>

              </div>

              <div className="hero-feature">

                <span className="feature-number">

                  02

                </span>

                <div>

                  <strong>

                    Mission

                  </strong>

                  <small>

                    Operational precision

                  </small>

                </div>

              </div>

              <div className="hero-feature">

                <span className="feature-number">

                  03

                </span>

                <div>

                  <strong>

                    Trusted

                  </strong>

                  <small>

                    Built for complex realities

                  </small>

                </div>

              </div>

            </div>

          </div>

          {/* The hero artwork is rendered as a full-section background image. */}

        </section>

        {/* =====================================================

            SCROLL INTELLIGENCE EXPERIENCE

        ===================================================== */}

        <section className="intelligence-story">

          {/* =================================================

              INTRO

          ================================================= */}

          <div className="story-intro">

            <div className="story-label">

              01 — THE GRYPHON APPROACH

            </div>

            <h2>

              From information

              <span>

                to intelligence.

              </span>

            </h2>

            <p>

              We transform complex information into actionable

              intelligence through technology, investigation,

              training and operational expertise.

            </p>

          </div>

          {/* =================================================

              3D NETWORK

          ================================================= */}

          <div className="intelligence-network">

            <div className="network-orbit orbit-one"></div>

            <div className="network-orbit orbit-two"></div>

            <div className="network-orbit orbit-three"></div>

            <div className="network-core" aria-label="Gryphon Cyber company logo">
              <img
                src={gryphonLogo}
                alt="Gryphon Cyber"
                className="network-core-logo"
              />
            </div>

            <div className="network-node node-1">

              <span>

                DATA

              </span>

            </div>

            <div className="network-node node-2">

              <span>

                ANALYSIS

              </span>

            </div>

            <div className="network-node node-3">

              <span>

                SECURITY

              </span>

            </div>

            <div className="network-node node-4">

              <span>

                ACTION

              </span>

            </div>

            <div className="network-line line-1"></div>

            <div className="network-line line-2"></div>

            <div className="network-line line-3"></div>

            <div className="network-line line-4"></div>

          </div>

          {/* =================================================
              INSTITUTIONAL LOGO NETWORK
              Logos are displayed beneath the connected circles.
              The four existing service-logo assets are included too.
          ================================================= */}

          <div className="network-trust-logos">
            <div className="network-trust-heading">
              <span>CONNECTED INSTITUTIONAL ECOSYSTEM</span>
              <h3>Built around trusted networks.</h3>
            </div>

            <div className="network-trust-grid">
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/maharashtra-police.png`} alt="Maharashtra Police" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/indian-army.png`} alt="Indian Army" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/indianoil.png`} alt="IndianOil" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/hdfc-bank.png`} alt="HDFC Bank" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/enforcement-directorate.png`} alt="Enforcement Directorate" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/dggi.png`} alt="Directorate General of GST Intelligence" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/intelligence-bureau.png`} alt="Intelligence Bureau" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/bsf.png`} alt="Border Security Force" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/ministry-home-affairs.png`} alt="Ministry of Home Affairs" loading="lazy" /></div>
              <div className="network-trust-logo"><img src={`${import.meta.env.BASE_URL}logos/trust/ministry-defence.png`} alt="Ministry of Defence" loading="lazy" /></div>

              {/* Existing four project logos already used in the website */}
              <div className="network-trust-logo network-trust-existing"><img src={`${import.meta.env.BASE_URL}logos/service-logo-1.png`} alt="Maharashtra Police institutional logo" loading="lazy" /></div>
              <div className="network-trust-logo network-trust-existing"><img src={`${import.meta.env.BASE_URL}logos/service-logo-2.png`} alt="Arunachal Pradesh Police institutional logo" loading="lazy" /></div>
              <div className="network-trust-logo network-trust-existing"><img src={`${import.meta.env.BASE_URL}logos/service-logo-3.png`} alt="Chhattisgarh Police institutional logo" loading="lazy" /></div>
              <div className="network-trust-logo network-trust-existing"><img src={`${import.meta.env.BASE_URL}logos/service-logo-4.png`} alt="West Bengal Police institutional logo" loading="lazy" /></div>
            </div>
          </div>

          {/* =================================================

              SERVICES

          ================================================= */}

          <div className="services-story">

            <div className="story-label">

              02 — WHAT WE DO

            </div>

            <div className="services-story-heading">

              <h2>

                Intelligence

                <span>

                  in action.

                </span>

              </h2>

              <p>

                Four capabilities designed to support complex

                investigations, operational challenges and

                digital security requirements.

              </p>

            </div>

            <div className="services-story-grid">

              {/* SERVICE 01 */}

              <article className="story-service-card">

                <div className="story-service-number">

                  01

                </div>

                <div className="story-service-icon" aria-hidden="true">

                  <svg className="story-service-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 18 24 8l19 10-19 10L5 18Z" />
                    <path d="M13 23v10c7 6 15 6 22 0V23" />
                    <path d="M43 19v13" />
                    <circle cx="43" cy="35" r="2" fill="currentColor" />
                  </svg>

                </div>

                <h3>

                  Training Programs

                </h3>

                <p>

                  Comprehensive knowledge and practical skills

                  for investigators handling real-world scenarios.

                </p>

                <div className="story-service-list">

                  <span>

                    Crime Investigation Techniques

                  </span>

                  <span>

                    Cyber Forensic Skills

                  </span>

                  <span>

                    Scenario-based Simulation

                  </span>

                </div>

              </article>

              {/* SERVICE 02 */}

              <article className="story-service-card">

                <div className="story-service-number">

                  02

                </div>

                <div className="story-service-icon" aria-hidden="true">

                  <svg className="story-service-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 25v-4a16 16 0 0 1 32 0v4" />
                    <rect x="6" y="22" width="8" height="13" rx="3" />
                    <rect x="34" y="22" width="8" height="13" rx="3" />
                    <path d="M38 35c-2 5-7 7-14 7h-4" />
                    <path d="M20 42h5" />
                  </svg>

                </div>

                <h3>

                  Expert Consultation

                </h3>

                <p>

                  Personalized guidance on IT strategies and

                  cybersecurity for complex operational challenges.

                </p>

                <div className="story-service-list">

                  <span>

                    Strategic IT Planning

                  </span>

                  <span>

                    Cybersecurity Audits

                  </span>

                  <span>

                    Digital Risk Assessment

                  </span>

                </div>

              </article>

              {/* SERVICE 03 */}

              <article className="story-service-card">

                <div className="story-service-number">

                  03

                </div>

                <div className="story-service-icon" aria-hidden="true">

                  <svg className="story-service-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 35h20a9 9 0 0 0 1-18 13 13 0 0 0-25-2 10 10 0 0 0 4 20Z" />
                    <path d="M16 25h5l3-5 4 10 3-5h4" />
                    <circle cx="24" cy="25" r="2" fill="currentColor" />
                  </svg>

                </div>

                <h3>

                  Digital Transformation

                </h3>

                <p>

                  Cloud computing and data analytics solutions

                  designed to streamline operations and improve

                  efficiency.

                </p>

                <div className="story-service-list">

                  <span>

                    Cloud Infrastructure Setup

                  </span>

                  <span>

                    Data Analytics Implementation

                  </span>

                  <span>

                    Process Automation

                  </span>

                </div>

              </article>

              {/* SERVICE 04 */}

              <article className="story-service-card">

                <div className="story-service-number">

                  04

                </div>

                <div className="story-service-icon" aria-hidden="true">

                  <svg className="story-service-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 5 40 11v12c0 10-7 17-16 20C15 40 8 33 8 23V11l16-6Z" />
                    <path d="m16 24 6 6 11-12" />
                    <path d="M8 11 24 18l16-7" />
                  </svg>

                </div>

                <h3>

                  Security Solutions

                </h3>

                <p>

                  Robust protection for digital assets, networks

                  and sensitive data against security threats.

                </p>

                <div className="story-service-list">

                  <span>

                    Network Security Hardening

                  </span>

                  <span>

                    Threat Monitoring Systems

                  </span>

                  <span>

                    Breach Prevention Protocols

                  </span>

                </div>

              </article>

            </div>

          </div>

          {/* =================================================

              PRODUCT ECOSYSTEM

          ================================================= */}

         {/* =================================================

    PRODUCT ECOSYSTEM

================================================= */}

<div className="product-story">

  <div className="story-label">

    03 — INTEGRATED PRODUCT SUITE

  </div>

  <h2>

    One ecosystem.

    <span>

      Multiple intelligence capabilities.

    </span>

  </h2>

  <p className="product-story-description">

    A unified ecosystem designed for the Indian

    intelligence landscape, integrating predictive

    analysis, search and network mapping.

  </p>

  <div className="product-story-grid">

    {/* =========================

        SAKSHAM

    ========================= */}

    <Link

      to="/solutions#saksham"

      className="product-story-card"

    >

      <span className="product-code">

        SAKSHAM

      </span>

      <h3>

        Advanced Intelligence Analysis

      </h3>

      <p>

        Predictive behavioral analysis and threat

        quantification.

      </p>

      <span className="product-arrow">

        →

      </span>

    </Link>

    {/* =========================

        SPIDER

    ========================= */}

    <Link

      to="/solutions#spider"

      className="product-story-card"

    >

      <span className="product-code">

        SPIDER

      </span>

      <h3>

        Unified Intelligence Search

      </h3>

      <p>

        Federated search across 20+ data sources.

      </p>

      <span className="product-arrow">

        →

      </span>

    </Link>

    {/* =========================

        OVERSIGHT

    ========================= */}

    <Link

      to="/solutions#oversight"

      className="product-story-card"

    >

      <span className="product-code">

        OVERSIGHT

      </span>

      <h3>

        Deep Network Analysis

      </h3>

      <p>

        Big-data link analysis for complex networks.

      </p>

      <span className="product-arrow">

        →

      </span>

    </Link>

    {/* =========================

        LAWSYNC

    ========================= */}

    <Link

      to="/solutions#lawsync"

      className="product-story-card"

    >

      <span className="product-code">

        LAWSYNC

      </span>

      <h3>

        Law Enforcement & Intelligence

      </h3>

      <p>

        Unified real-time coordination and data

        management.

      </p>

      <span className="product-arrow">

        →

      </span>

    </Link>

  </div>

</div>

        </section>

        {/* =====================================================

            TRUST STRIP

        ===================================================== */}

        <section className="trust-strip">

          <div className="trust-container">

            <div className="trust-item">

              <span className="trust-line"></span>

              <span>

                CYBER INTELLIGENCE

              </span>

            </div>

            <div className="trust-item">

              <span className="trust-line"></span>

              <span>

                GROUND OPERATIONS

              </span>

            </div>

            <div className="trust-item">

              <span className="trust-line"></span>

              <span>

                INVESTIGATIONS

              </span>

            </div>

            <div className="trust-item">

              <span className="trust-line"></span>

              <span>

                DIGITAL SECURITY

              </span>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================

          FOOTER

      ===================================================== */}

      <Footer />

    </div>

  )

}

export default Home