import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import "../App.css";

import gryphonLogo from "../assets/gryphon-logo.png";

import Footer from "../components/Footer";

function Solutions() {

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

  const location = useLocation();

  const products = [

    {

      code: "SAKSHAM",

      category: "PREDICTIVE INTELLIGENCE",

      title: "Advanced Intelligence Analysis",

      description:

        "Predictive behavioral analysis and threat quantification using the proprietary L-Square algorithm, shifting operations from reactive to proactive.",

      stats: [

        ["01", "Mirror Data Analysis"],

        ["02", "Syndicate Matching"],

        ["03", "Threat Quantification"],

        ["04", "Behavioral Anomalies"],

        ["05", "Real-Time Alerts"],

      ],

    },

    {

      code: "SPIDER",

      category: "SOCIAL INTELLIGENCE",

      title: "Unified Intelligence Search",

      description:

        "Parallel federated search across 20+ data sources including social media, telecom and vehicle records.",

      stats: [

        ["20+", "Data Sources"],

        ["< 5s", "Query Response"],

        ["01", "Linked Numbers & Addresses"],

        ["02", "Social Handles & Aliases"],

        ["03", "Automated Reporting"],

      ],

    },

    {

      code: "OVERSIGHT",

      category: "DEEP NETWORK ANALYSIS",

      title: "Deep Network Intelligence",

      description:

        "Big-data link analysis designed to visualize hidden connections, hierarchies and bridge nodes in complex networks.",

      stats: [

        ["100M+", "Records Processed Daily"],

        ["01", "VoIP Party Identification"],

        ["02", "Multi-Dataset Correlation"],

        ["03", "Geo-Distributed Analysis"],

        ["04", "Internet Usage Categorization"],

      ],

    },

    {

      code: "LAWSYNC",

      category: "LAW ENFORCEMENT & INTELLIGENCE",

      title: "Digital Policing",

      description:

        "A unified law enforcement platform that modernizes policing, improves data management and enables efficient role-based real-time coordination.",

      stats: [

        ["01", "Incident Management"],

        ["02", "Third Eye"],

        ["03", "Real-Time Collaboration"],

        ["04", "Jail Release Management"],

        ["15+", "Customizable Modules"],

      ],

    },

  ];

  /*

  =========================================================

  HASH / PRODUCT NAVIGATION

  =========================================================

  This handles:

  /solutions#saksham

  /solutions#spider

  /solutions#oversight

  /solutions#lawsync

  It waits for React to render the page and then scrolls

  directly to the requested product.

  =========================================================

  */

  useEffect(() => {

    const hash = location.hash;

    // If there is no hash, go to the top of the page.

    if (!hash) {

      window.scrollTo({

        top: 0,

        behavior: "auto",

      });

      return;

    }

    // Remove the # symbol.

    const productId = hash.substring(1);

    /*

    Wait until the product sections have been rendered.

    */

    const timer = setTimeout(() => {

      const element = document.getElementById(productId);

      if (element) {

        element.scrollIntoView({

          behavior: "smooth",

          block: "start",

        });

      }

    }, 150);

    return () => {

      clearTimeout(timer);

    };

  }, [location.hash]);

  return (

    <div className="app">

      {/* =================================================

          NAVBAR

      ================================================= */}

      <header className="navbar">

        <div className="nav-container">

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

                <Link to="/services">Services</Link>

                <Link to="/solutions" className="active">

                  Solutions

                </Link>

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

              className={`solutions-mobile-toggle ${

                mobileMenuOpen ? "open" : ""

              }`}

              aria-label={

                mobileMenuOpen

                  ? "Close navigation menu"

                  : "Open navigation menu"

              }

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

          <div className="solutions-mobile-menu">

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>

              Home

            </Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>

              About

            </Link>

            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>

              Services

            </Link>

            <Link

              to="/solutions"

              className="mobile-active"

              onClick={() => setMobileMenuOpen(false)}

            >

              Solutions

            </Link>

            <Link to="/training" onClick={() => setMobileMenuOpen(false)}>

              Training

            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>

              Contact

            </Link>

            <Link

              to="/contact"

              className="solutions-mobile-talk"

              onClick={() => setMobileMenuOpen(false)}

            >

              Talk to Us

              <span>→</span>

            </Link>

          </div>

        )}

        {/* MOBILE NAVIGATION STYLES */}

        <style>{`

          /* SOLUTIONS MOBILE NAVIGATION */

          .solutions-mobile-toggle {

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

            -webkit-tap-highlight-color: transparent !important;

            flex-shrink: 0 !important;

          }

          .solutions-mobile-toggle span {

            width: 21px !important;

            height: 2px !important;

            display: block !important;

            border-radius: 10px !important;

            background: #ffffff !important;

            transition: transform 0.25s ease, opacity 0.2s ease !important;

          }

          .solutions-mobile-toggle.open span:nth-child(1) {

            transform: translateY(7px) rotate(45deg) !important;

          }

          .solutions-mobile-toggle.open span:nth-child(2) {

            opacity: 0 !important;

          }

          .solutions-mobile-toggle.open span:nth-child(3) {

            transform: translateY(-7px) rotate(-45deg) !important;

          }

          .solutions-mobile-menu {

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

          .solutions-mobile-menu a {

            width: 100% !important;

            box-sizing: border-box !important;

            padding: 14px 12px !important;

            color: #ffffff !important;

            font-size: 15px !important;

            font-weight: 500 !important;

            line-height: 1.3 !important;

            text-decoration: none !important;

            border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;

            transition: color 0.2s ease, background 0.2s ease !important;

          }

          .solutions-mobile-menu a:hover,

          .solutions-mobile-menu a.mobile-active {

            color: #22d3ee !important;

          }

          .solutions-mobile-talk {

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

          .solutions-mobile-talk span {

            font-size: 19px !important;

            color: #ffffff !important;

          }

          .solutions-mobile-talk:hover {

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

            .solutions-mobile-toggle {

              width: 42px !important;

              height: 42px !important;

            }

            .solutions-mobile-menu {

              padding-left: 14px !important;

              padding-right: 14px !important;

            }

          }

        `}</style>

      </header>

      <main>

        {/* =================================================

            HERO

        ================================================= */}

        <section className="solutions-page-hero">

          <div className="solutions-grid">

          </div>

          <div className="solutions-glow">

          </div>

          <div className="solutions-hero-content">

            <div className="inner-page-label">

              GRYPHON CYBER • INTELLIGENCE PLATFORM

            </div>

            <h1>

              Intelligence,

              <span>

                connected.

              </span>

            </h1>

            <p>

              An integrated product ecosystem combining

              predictive analysis, intelligence search,

              deep network analysis and digital policing.

            </p>

          </div>

        </section>

        {/* =================================================

            PRODUCT NAVIGATION

        ================================================= */}

        <section className="solution-index">

          <div className="solution-index-inner">

            <div className="section-label">

              PRODUCT SUITE

            </div>

            <div className="solution-index-links">

              {products.map((product, index) => (

                <a

                  href={`#${product.code.toLowerCase()}`}

                  key={product.code}

                >

                  <span>

                    0{index + 1}

                  </span>

                  {product.code}

                </a>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================

            PRODUCTS

        ================================================= */}

        <section className="solutions-products">

          {products.map((product, index) => (

            <article

              className="solution-product"

              id={product.code.toLowerCase()}

              key={product.code}

            >

              {/* PRODUCT NUMBER */}

              <div className="solution-product-number">

                0{index + 1}

              </div>

              {/* =================================================

                  PRODUCT CONTENT

              ================================================= */}

              <div className="solution-product-content">

                <div className="solution-product-category">

                  {product.category}

                </div>

                <div className="solution-product-code">

                  {product.code}

                </div>

                <h2>

                  {product.title}

                </h2>

                <p className="solution-product-description">

                  {product.description}

                </p>

                <div className="solution-product-line">

                </div>

                <div className="solution-feature-grid">

                  {product.stats.map((item) => (

                    <div

                      className="solution-feature"

                      key={item[0] + item[1]}

                    >

                      <span className="solution-feature-number">

                        {item[0]}

                      </span>

                      <span className="solution-feature-name">

                        {item[1]}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* =================================================

                  PRODUCT VISUAL

              ================================================= */}

              <div className="solution-product-visual">

                <div

                  className="solution-orbit orbit-one"

                >

                </div>

                <div

                  className="solution-orbit orbit-two"

                >

                </div>

                <div

                  className="solution-orbit orbit-three"

                >

                </div>

                <div className="solution-core">

                  <span>

                    {product.code.substring(0, 2)}

                  </span>

                </div>

                <div className="solution-data-node node-a">

                  INTEL

                </div>

                <div className="solution-data-node node-b">

                  DATA

                </div>

                <div className="solution-data-node node-c">

                  ANALYSIS

                </div>

              </div>

            </article>

          ))}

        </section>

        {/* =================================================

            DEPLOYMENT

        ================================================= */}

        <section className="deployment-section">

          <div className="section-label">

            DEPLOYMENT & INTEGRATION

          </div>

          <h2>

            Built for

            <span>

              secure environments.

            </span>

          </h2>

          <div className="deployment-grid">

            {/* DEPLOYMENT 01 */}

            <div className="deployment-card">

              <span className="deployment-number">

                01

              </span>

              <h3>

                Flexible Hosting

              </h3>

              <p>

                Deploy on air-gapped on-premise servers

                for maximum security or utilize secure

                GovCloud infrastructure.

              </p>

            </div>

            {/* DEPLOYMENT 02 */}

            <div className="deployment-card">

              <span className="deployment-number">

                02

              </span>

              <h3>

                Seamless Integration

              </h3>

              <p>

                API-first architecture designed for

                compatibility with existing LEA databases,

                CCTNS and legacy intelligence systems.

              </p>

            </div>

            {/* DEPLOYMENT 03 */}

            <div className="deployment-card">

              <span className="deployment-number">

                03

              </span>

              <h3>

                Rapid Implementation

              </h3>

              <p>

                Standardized deployment protocols enable

                full operational capability within 6 weeks

                of project initiation.

              </p>

            </div>

          </div>

          <div className="deployment-flow">

            <span>

              SETUP

            </span>

            <i>

            </i>

            <span>

              INGEST

            </span>

            <i>

            </i>

            <span>

              TRAIN

            </span>

            <i>

            </i>

            <span>

              GO-LIVE

            </span>

          </div>

        </section>

        {/* =================================================

            CTA

        ================================================= */}

        <section className="solutions-cta">

          <div>

            <div className="section-label">

              INTELLIGENCE CAPABILITY

            </div>

            <h2>

              Ready to modernize

              <span>

                your intelligence capability?

              </span>

            </h2>

          </div>

          <Link

            to="/contact"

            className="services-cta-button"

          >

            Discuss Your Requirements

            <span>

              →

            </span>

          </Link>

        </section>

      </main>

      {/* =================================================

          FOOTER

      ================================================= */}

      <Footer />

    </div>

  );

}

export default Solutions;