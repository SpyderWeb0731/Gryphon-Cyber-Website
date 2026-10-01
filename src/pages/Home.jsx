import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import gryphonLogo from '../assets/gryphon-logo.png'
function Home() {
  const [activeNode, setActiveNode] = useState(null);
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.story-intro, .intelligence-network, .services-story-heading, .story-service-card, .product-story'
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
      <header className="navbar">

  <div className="nav-container">

    <Link
      to="/"
      className="logo-link"
    >

      <img
        src={gryphonLogo}
        alt="Gryphon Cyber Private Limited"
        className="navbar-logo"
      />

    </Link>


    <nav className="nav-links">

      <Link
        to="/"
        className="active"
      >
        Home
      </Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/services">
        Services
      </Link>

      <Link to="/solutions">
        Solutions
      </Link>

      <Link to="/training">
        Training
      </Link>

      <Link to="/contact">
        Contact
      </Link>

    </nav>


    <Link
      to="/book-demo"
      className="demo-button"
    >
      Book a Demo
      <span>
        →
      </span>
    </Link>

  </div>

</header>
      {/* =====================================================
          MAIN
      ===================================================== */}
      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          className="hero"
          id="home"
        >
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <div className="hero-badge">
              CYBER INTELLIGENCE • GROUND OPERATIONS
            </div>
            <h1>
              Beyond the
              <span>
                Visible.
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
                href="/solutions"
                className="primary-button"
              >
                Explore Solutions
                <span>→</span>
              </a>
              <a
                href="/about"
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
          {/* =====================================================
              HERO VISUAL
          ===================================================== */}
          <div className="hero-visual">
  <div className="gryphon-mission-visual">
  {/* =====================================================
      ATMOSPHERIC GLOW
  ===================================================== */}
  <div className="mission-glow glow-one"></div>
  <div className="mission-glow glow-two"></div>
  {/* =====================================================
      MAIN RADAR RINGS
  ===================================================== */}
  <div className="mission-ring ring-one"></div>
  <div className="mission-ring ring-two"></div>
  <div className="mission-ring ring-three"></div>
  {/* =====================================================
      3D ORBITAL SYSTEM
  ===================================================== */}
  <div className="mission-orbit orbit-a"></div>
  <div className="mission-orbit orbit-b"></div>
  <div className="mission-orbit orbit-c"></div>
  {/* =====================================================
      CENTRAL EARTH / INTELLIGENCE CORE
  ===================================================== */}
  <div className="mission-earth">
    <div className="earth-grid"></div>
    <div className="earth-land land-one"></div>
    <div className="earth-land land-two"></div>
    <div className="earth-land land-three"></div>
    <div className="earth-light light-one"></div>
    <div className="earth-light light-two"></div>
    <div className="earth-light light-three"></div>
    <div className="earth-light light-four"></div>
  </div>
  {/* =====================================================
      CENTRAL SECURITY SHIELD
  ===================================================== */}
  <div className="mission-shield">
    <div className="shield-lock">
      <div className="lock-body"></div>
      <div className="lock-ring"></div>
    </div>
  </div>
  {/* =====================================================
      01 — INTELLIGENCE ANALYSIS
  ===================================================== */}
  <div
    className="mission-node node-intelligence"
    tabIndex="0"
    aria-label="Intelligence Analysis"
  >
    <div className="node-icon">
      <div className="analysis-screen screen-one"></div>
      <div className="analysis-screen screen-two"></div>
      <div className="analysis-screen screen-three"></div>
    </div>
    {/* HOVER INFORMATION CARD */}
    <div className="mission-info-card">
      <div className="mission-info-top">
        <span className="mission-info-number">
          01
        </span>
        <span className="mission-info-status">
          INTELLIGENCE
        </span>
      </div>
      <h3>
        Intelligence Analysis
      </h3>
      <p>
        Transform complex information into actionable
        intelligence through advanced analysis and
        connected intelligence systems.
      </p>
      <Link
        to="/solutions"
        className="mission-info-button"
      >
        Explore Intelligence
        <span>
          →
        </span>
      </Link>
    </div>
  </div>
  {/* =====================================================
      02 — CYBER SECURITY
  ===================================================== */}
  <div
    className="mission-node node-security"
    tabIndex="0"
    aria-label="Cyber Security"
  >
    <div className="security-icon">
      <div className="security-shield"></div>
    </div>
    {/* HOVER INFORMATION CARD */}
    <div className="mission-info-card">
      <div className="mission-info-top">
        <span className="mission-info-number">
          02
        </span>
        <span className="mission-info-status">
          SECURITY
        </span>
      </div>
      <h3>
        Cyber Security
      </h3>
      <p>
        Protect critical digital assets through
        network security hardening, threat monitoring
        and breach prevention capabilities.
      </p>
      <Link
        to="/services"
        className="mission-info-button"
      >
        Explore Security
        <span>
          →
        </span>
      </Link>
    </div>
  </div>
  {/* =====================================================
      03 — DIGITAL FORENSICS
  ===================================================== */}
  <div
    className="mission-node node-forensics"
    tabIndex="0"
    aria-label="Digital Forensics"
  >
    <div className="fingerprint-icon">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    {/* HOVER INFORMATION CARD */}
    <div className="mission-info-card">
      <div className="mission-info-top">
        <span className="mission-info-number">
          03
        </span>
        <span className="mission-info-status">
          FORENSICS
        </span>
      </div>
      <h3>
        Digital Forensics
      </h3>
      <p>
        Develop practical cyber forensic capabilities
        for investigation, evidence analysis and
        scenario-based operational work.
      </p>
      <Link
        to="/training"
        className="mission-info-button"
      >
        Explore Training
        <span>
          →
        </span>
      </Link>
    </div>
  </div>
  {/* =====================================================
      04 — GROUND OPERATIONS
  ===================================================== */}
  <div
    className="mission-node node-ground"
    tabIndex="0"
    aria-label="Ground Operations"
  >
    <div className="ground-icon">
      <div className="ground-person"></div>
      <div className="ground-drone"></div>
    </div>
    {/* HOVER INFORMATION CARD */}
    <div className="mission-info-card">
      <div className="mission-info-top">
        <span className="mission-info-number">
          04
        </span>
        <span className="mission-info-status">
          OPERATIONS
        </span>
      </div>
      <h3>
        Ground Operations
      </h3>
      <p>
        Connect digital intelligence with operational
        realities to support complex investigations
        and intelligence gathering.
      </p>
      <Link
        to="/about"
        className="mission-info-button"
      >
        Discover Gryphon
        <span>
          →
        </span>
      </Link>
    </div>
  </div>
  {/* =====================================================
      05 — SECURE INFRASTRUCTURE
  ===================================================== */}
  <div
    className="mission-node node-cloud"
    tabIndex="0"
    aria-label="Secure Infrastructure"
  >
    <div className="cloud-icon">
      <div className="cloud-shape"></div>
      <div className="server server-one"></div>
      <div className="server server-two"></div>
      <div className="server server-three"></div>
    </div>
    {/* HOVER INFORMATION CARD */}
    <div className="mission-info-card">
      <div className="mission-info-top">
        <span className="mission-info-number">
          05
        </span>
        <span className="mission-info-status">
          INFRASTRUCTURE
        </span>
      </div>
      <h3>
        Secure Infrastructure
      </h3>
      <p>
        Build secure technology environments supporting
        cloud infrastructure, data analytics and
        protected digital operations.
      </p>
      <Link
        to="/services"
        className="mission-info-button"
      >
        Explore Services
        <span>
          →
        </span>
      </Link>
    </div>
  </div>
  {/* =====================================================
      CONNECTION BEAMS
  ===================================================== */}
  <div className="mission-beam beam-one"></div>
  <div className="mission-beam beam-two"></div>
  <div className="mission-beam beam-three"></div>
  <div className="mission-beam beam-four"></div>
  <div className="mission-beam beam-five"></div>
  {/* =====================================================
      FLOATING DATA PARTICLES
  ===================================================== */}
  <div className="mission-particle particle-one"></div>
  <div className="mission-particle particle-two"></div>
  <div className="mission-particle particle-three"></div>
  <div className="mission-particle particle-four"></div>
  <div className="mission-particle particle-five"></div>
  <div className="mission-particle particle-six"></div>
  <div className="mission-particle particle-seven"></div>
  <div className="mission-particle particle-eight"></div>
  {/* =====================================================
      SCANNING BEAM
  ===================================================== */}
  <div className="mission-scanner"></div>
</div>
</div>
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
            <div className="network-core">
              <span>
                GC
              </span>
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
                <div className="story-service-icon">
                  ◇
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
                <div className="story-service-icon">
                  ◎
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
                <div className="story-service-icon">
                  ◉
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
                <div className="story-service-icon">
                  ⬡
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
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img
              src={gryphonLogo}
              alt="Gryphon Cyber"
            />
            <p>
              Cyber intelligence and ground operations
              for complex investigations, intelligence
              gathering and digital security.
            </p>
          </div>
          <div className="footer-column">
            <h3>
              Company
            </h3>
            <a href="/">
              Home
            </a>
            <a href="/about">
              About
            </a>
            <a href="/services">
              Services
            </a>
            <a href="/contact">
              Contact
            </a>
          </div>
          <div className="footer-column">
            <h3>
              Solutions
            </h3>
            <a href="/solutions">
              SAKSHAM
            </a>
            <a href="/solutions">
              SPIDER
            </a>
            <a href="/solutions">
              OVERSIGHT
            </a>
            <a href="/solutions">
              LawSync
            </a>
          </div>
          <div className="footer-column">
            <h3>
              Contact
            </h3>
            <a href="/contact">
              Contact Gryphon
            </a>
            <a href="mailto:support@gryphoncyber.com">
              support@gryphoncyber.com
            </a>
            <span>
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Gryphon Cyber Pvt. Ltd.
          </span>
          <span>
            Cyber Intelligence • Ground Operations
          </span>
        </div>
      </footer>
    </div>
  )
}
export default Home