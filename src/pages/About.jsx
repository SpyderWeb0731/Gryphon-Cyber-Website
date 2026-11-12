import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import "../App.css";
import NavbarBrand from "../components/NavbarBrand";

import gryphonLogo from "../assets/gryphon-logo.png";

const trustLogos = [
  { src: `${import.meta.env.BASE_URL}logos/trust/maharashtra-police.png`, alt: "Maharashtra Police" },
  { src: `${import.meta.env.BASE_URL}logos/trust/indian-army.png`, alt: "Indian Army" },
  { src: `${import.meta.env.BASE_URL}logos/trust/indianoil.png`, alt: "IndianOil" },
  { src: `${import.meta.env.BASE_URL}logos/trust/hdfc-bank.png`, alt: "HDFC Bank" },
  { src: `${import.meta.env.BASE_URL}logos/trust/enforcement-directorate.png`, alt: "Enforcement Directorate" },
  { src: `${import.meta.env.BASE_URL}logos/trust/dggi.png`, alt: "Directorate General of GST Intelligence" },
  { src: `${import.meta.env.BASE_URL}logos/trust/intelligence-bureau.png`, alt: "Intelligence Bureau" },
  { src: `${import.meta.env.BASE_URL}logos/trust/bsf.png`, alt: "Border Security Force" },
  { src: `${import.meta.env.BASE_URL}logos/trust/ministry-home-affairs.png`, alt: "Ministry of Home Affairs" },
  { src: `${import.meta.env.BASE_URL}logos/trust/ministry-defence.png`, alt: "Ministry of Defence" },
  { src: `${import.meta.env.BASE_URL}logos/service-logo-1.png`, alt: "Maharashtra Police" },
  { src: `${import.meta.env.BASE_URL}logos/service-logo-2.png`, alt: "Arunachal Pradesh Police" },
  { src: `${import.meta.env.BASE_URL}logos/service-logo-3.png`, alt: "Chhattisgarh Police" },
  { src: `${import.meta.env.BASE_URL}logos/service-logo-4.png`, alt: "West Bengal Police" },
];

function About() {

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

  useEffect(() => {

    const revealElements = document.querySelectorAll(

      ".about-reveal, .about-capability-card, .about-why-item, .about-leader-card, .about-trust-section, .about-trust-card"

    );

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("about-visible");

          }

        });

      },

      {

        threshold: 0.12,

      }

    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {

      observer.disconnect();

    };

  }, []);

  return (

    <div className="about-page">

      {/* =====================================================

          NAVBAR

      ===================================================== */}

      <header className="navbar gryphon-standard-navbar" style={{ position: "relative", zIndex: 100000 }}>

        <div className="nav-container">

          <Link
            to="/"
            className="logo-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <NavbarBrand />
          </Link>

          {!isMobile && (

            <>

              <nav className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/about" className="active">About</Link>

                <Link to="/services">Services</Link>

                <Link to="/solutions">Solutions</Link>

                <Link to="/engagements">Engagements</Link>

                <Link to="/training">Training</Link>

                <Link to="/contact">Contact</Link>

              </nav>

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

              className={`about-mobile-toggle ${

                mobileMenuOpen ? "open" : ""

              }`}

              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}

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

          <div className="about-mobile-menu">

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>

              Home

            </Link>

            <Link

              to="/about"

              className="mobile-active"

              onClick={() => setMobileMenuOpen(false)}

            >

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

              to="/contact"

              className="about-mobile-talk"

              onClick={() => setMobileMenuOpen(false)}

            >

              Talk to Us

              <span>→</span>

            </Link>

          </div>

        )}

        <style>{`

          /\* ABOUT MOBILE NAVIGATION \*/

          .about-mobile-toggle {

            position: relative !important;

            z-index: 100002 !important;

            pointer-events: auto !important;

            touch-action: manipulation !important;

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

          .about-mobile-toggle span {

            width: 21px !important;

            height: 2px !important;

            display: block !important;

            border-radius: 10px !important;

            background: #ffffff !important;

            transition: transform 0.25s ease, opacity 0.2s ease !important;

          }

          .about-mobile-toggle.open span:nth-child(1) {

            transform: translateY(7px) rotate(45deg) !important;

          }

          .about-mobile-toggle.open span:nth-child(2) {

            opacity: 0 !important;

          }

          .about-mobile-toggle.open span:nth-child(3) {

            transform: translateY(-7px) rotate(-45deg) !important;

          }

          .about-mobile-menu {

            position: absolute !important;

            pointer-events: auto !important;

            touch-action: manipulation !important;

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

          .about-mobile-menu a {

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

          .about-mobile-menu a:hover,

          .about-mobile-menu a.mobile-active {

            color: #22d3ee !important;

          }

          .about-mobile-talk {

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

          .about-mobile-talk span {

            font-size: 19px !important;

            color: #ffffff !important;

          }

          .about-mobile-talk:hover {

            background: #1764e8 !important;

            color: #ffffff !important;

          }

          

          @media (max-width: 420px) {

            .about-mobile-toggle {

              width: 42px !important;

              height: 42px !important;

            }

            .about-mobile-menu {

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

        {/* ===================================================

            HERO

        =================================================== */}

        <section className="about-hero">

          <div className="about-hero-grid"></div>

          <div className="about-hero-glow about-glow-one"></div>

          <div className="about-hero-glow about-glow-two"></div>

          <div className="about-hero-content">

            <div className="about-eyebrow about-brand-lockup">
  <img
    src={gryphonLogo}
    alt="Gryphon Cyber Logo"
    className="about-brand-logo"
  />

  <span className="about-brand-name">
    <span className="about-brand-main">
      GRYPHON CYBER
    </span>

    <span className="about-brand-sub">
      PRIVATE LIMITED
    </span>
  </span>
</div>

            <h1>
  Beyond the
  <span>
    Visible.
  </span>
</h1>

            <p>

              Cyber intelligence, investigative expertise and

              ground operations designed for complex missions,

              intelligence gathering and digital security.

            </p>

            <div className="about-hero-actions">

              <Link

                to="/solutions"

                className="about-primary-button"

              >

                Explore Intelligence

                <span>→</span>

              </Link>

              <a

                href="#who-we-are"

                className="about-secondary-button"

                onClick={(event) => {

                  event.preventDefault();

                  document
                    .getElementById("who-we-are")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                }}

              >

                Discover Gryphon

                <span>↓</span>

              </a>

            </div>

            <div className="about-hero-meta">

              <div>

                <strong>CYBER</strong>

                <span>INTELLIGENCE</span>

              </div>

              <div>

                <strong>GROUND</strong>

                <span>OPERATIONS</span>

              </div>

              <div>

                <strong>DIGITAL</strong>

                <span>SECURITY</span>

              </div>

            </div>

          </div>

          {/* =================================================
              3D CYBER SECURITY CORE
              A holographic shield / intelligence node replaces
              the previous cube while keeping the company logo
              in the left-side brand lockup above.
          ================================================= */}

          <div className="about-core-stage">
            <div className="about-core-label core-label-top">
              CYBER INTELLIGENCE CORE
            </div>

            <div className="about-core-label core-label-right">
              SECURITY / 01
            </div>

            <div className="about-core-label core-label-bottom">
              INTELLIGENCE • INVESTIGATION • SECURITY
            </div>

            <div className="cyber-core-scene" aria-hidden="true">
              <div className="cyber-core-haze"></div>

              {/* Rotating 3D radar rings */}
              <div className="cyber-orbit cyber-orbit-a">
                <span className="orbit-dot orbit-dot-1"></span>
                <span className="orbit-dot orbit-dot-2"></span>
              </div>
              <div className="cyber-orbit cyber-orbit-b">
                <span className="orbit-dot orbit-dot-3"></span>
              </div>
              <div className="cyber-orbit cyber-orbit-c"></div>

              {/* Holographic 3D security shield */}
              <div className="cyber-shield-3d">
                <div className="shield-depth shield-depth-1"></div>
                <div className="shield-depth shield-depth-2"></div>
                <div className="shield-face shield-face-front">
                  <span className="shield-top-line"></span>
                  <span className="shield-circuit circuit-1"></span>
                  <span className="shield-circuit circuit-2"></span>
                  <span className="shield-circuit circuit-3"></span>
                  <span className="shield-circuit circuit-4"></span>
                  <span className="shield-lock">
                    <span className="lock-shackle"></span>
                    <span className="lock-body"></span>
                    <span className="lock-dot"></span>
                  </span>
                  <span className="shield-scan"></span>
                </div>
                <div className="shield-face shield-face-back"></div>
              </div>

              {/* Floating intelligence nodes */}
              <span className="intel-node node-1"></span>
              <span className="intel-node node-2"></span>
              <span className="intel-node node-3"></span>
              <span className="intel-node node-4"></span>
              <span className="intel-node node-5"></span>
              <span className="intel-node node-6"></span>

              {/* Data trails */}
              <span className="data-trail trail-1"></span>
              <span className="data-trail trail-2"></span>
              <span className="data-trail trail-3"></span>

              <div className="cyber-core-crosshair crosshair-horizontal"></div>
              <div className="cyber-core-crosshair crosshair-vertical"></div>
            </div>

            <div className="core-status">
              <span className="core-status-dot"></span>
              <span>INTELLIGENCE SYSTEM</span>
              <strong>ONLINE</strong>
            </div>
          </div>

          <style>{`
            /* =====================================================
               CYBER SECURITY 3D CORE
               ===================================================== */
            .cyber-core-scene {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 560px;
              height: 560px;
              transform: translate(-50%, -50%);
              transform-style: preserve-3d;
              perspective: 1200px;
              isolation: isolate;
            }

            .cyber-core-haze {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 360px;
              height: 360px;
              transform: translate(-50%, -50%);
              border-radius: 50%;
              background: radial-gradient(circle, rgba(0, 221, 255, .28) 0%, rgba(0, 155, 255, .13) 32%, transparent 72%);
              filter: blur(28px);
              animation: cyberHazePulse 4s ease-in-out infinite;
              z-index: -4;
            }

            .cyber-orbit {
              position: absolute;
              left: 50%;
              top: 50%;
              border: 1px solid rgba(0, 218, 255, .38);
              transform-style: preserve-3d;
              border-radius: 50%;
              pointer-events: none;
            }

            .cyber-orbit-a {
              width: 400px;
              height: 138px;
              transform: translate(-50%, -50%) rotateX(68deg) rotateZ(-12deg);
              animation: cyberOrbitA 7s linear infinite;
              box-shadow: 0 0 18px rgba(0, 218, 255, .08);
            }

            .cyber-orbit-b {
              width: 430px;
              height: 430px;
              transform: translate(-50%, -50%) rotateX(67deg) rotateY(24deg);
              border-color: rgba(0, 218, 255, .22);
              animation: cyberOrbitB 11s linear infinite reverse;
            }

            .cyber-orbit-c {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 300px;
              height: 300px;
              transform: translate(-50%, -50%) rotateY(68deg);
              border: 1px dashed rgba(0, 218, 255, .18);
              border-radius: 50%;
              animation: cyberOrbitC 9s linear infinite;
            }

            .orbit-dot {
              position: absolute;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #12ddff;
              box-shadow: 0 0 8px #12ddff, 0 0 22px rgba(18, 221, 255, .85);
            }

            .orbit-dot-1 { left: 6%; top: 50%; }
            .orbit-dot-2 { right: 12%; top: 24%; width: 5px; height: 5px; }
            .orbit-dot-3 { right: 6%; top: 48%; width: 6px; height: 6px; }

            /* 3D shield assembly */
            .cyber-shield-3d {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 235px;
              height: 270px;
              transform: translate(-50%, -50%) translateZ(40px);
              transform-style: preserve-3d;
              animation: cyberShieldRotate 10s cubic-bezier(.45, .05, .25, .95) infinite;
              filter: drop-shadow(0 0 18px rgba(0, 218, 255, .22));
            }

            .shield-depth,
            .shield-face {
              position: absolute;
              inset: 0;
              clip-path: polygon(50% 0%, 94% 18%, 88% 65%, 72% 87%, 50% 100%, 28% 87%, 12% 65%, 6% 18%);
              transform-style: preserve-3d;
            }

            .shield-depth {
              background: linear-gradient(145deg, rgba(0, 216, 255, .10), rgba(0, 90, 160, .03));
              border: 1px solid rgba(0, 220, 255, .22);
            }

            .shield-depth::after {
              content: "";
              position: absolute;
              inset: 7px;
              clip-path: inherit;
              border: 1px solid rgba(0, 220, 255, .20);
            }

            .shield-depth-1 {
              transform: translateZ(-18px) translateX(-12px) translateY(8px);
              opacity: .22;
              animation: shieldDepthPulse 3s ease-in-out infinite;
            }

            .shield-depth-2 {
              transform: translateZ(-34px) translateX(-22px) translateY(16px);
              opacity: .10;
            }

            .shield-face-front {
              background:
                linear-gradient(135deg, rgba(13, 239, 255, .16), rgba(0, 62, 115, .12) 42%, rgba(0, 220, 255, .08)),
                rgba(2, 17, 29, .58);
              border: 1px solid rgba(0, 229, 255, .66);
              box-shadow: inset 0 0 45px rgba(0, 210, 255, .10), 0 0 30px rgba(0, 206, 255, .14);
              overflow: hidden;
              backface-visibility: hidden;
            }

            .shield-face-back {
              transform: rotateY(180deg) translateZ(2px);
              background: linear-gradient(135deg, rgba(0, 214, 255, .08), rgba(0, 40, 80, .16));
              border: 1px solid rgba(0, 214, 255, .30);
              backface-visibility: hidden;
            }

            .shield-top-line {
              position: absolute;
              left: 20%;
              top: 17%;
              width: 60%;
              height: 1px;
              background: linear-gradient(90deg, transparent, #12ddff, transparent);
              box-shadow: 0 0 12px rgba(18, 221, 255, .8);
            }

            .shield-circuit {
              position: absolute;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(18, 221, 255, .72), rgba(18, 221, 255, .08));
              box-shadow: 0 0 7px rgba(18, 221, 255, .42);
              transform-origin: left center;
            }

            .circuit-1 { left: 23%; top: 31%; width: 55%; transform: rotate(7deg); }
            .circuit-2 { left: 18%; top: 53%; width: 64%; transform: rotate(-5deg); }
            .circuit-3 { left: 30%; top: 69%; width: 45%; transform: rotate(4deg); }
            .circuit-4 { left: 46%; top: 23%; width: 27%; transform: rotate(90deg); opacity: .55; }

            .shield-lock {
              position: absolute;
              left: 50%;
              top: 52%;
              width: 58px;
              height: 66px;
              transform: translate(-50%, -50%) translateZ(25px);
              filter: drop-shadow(0 0 12px rgba(18, 221, 255, .65));
            }

            .lock-shackle {
              position: absolute;
              left: 14px;
              top: 0;
              width: 30px;
              height: 30px;
              border: 4px solid #14dcff;
              border-bottom: 0;
              border-radius: 18px 18px 0 0;
            }

            .lock-body {
              position: absolute;
              left: 7px;
              bottom: 2px;
              width: 44px;
              height: 38px;
              border-radius: 6px;
              background: linear-gradient(135deg, rgba(15, 229, 255, .78), rgba(0, 106, 180, .45));
              border: 1px solid rgba(145, 245, 255, .85);
              box-shadow: inset 0 0 16px rgba(255,255,255,.12), 0 0 18px rgba(0, 220, 255, .30);
            }

            .lock-dot {
              position: absolute;
              left: 50%;
              top: 49px;
              width: 7px;
              height: 12px;
              transform: translateX(-50%);
              border-radius: 5px;
              background: #021522;
            }

            .shield-scan {
              position: absolute;
              left: 5%;
              top: -15%;
              width: 90%;
              height: 2px;
              background: linear-gradient(90deg, transparent, rgba(32, 239, 255, .95), transparent);
              box-shadow: 0 0 16px rgba(32, 239, 255, .9);
              animation: shieldScan 3.2s ease-in-out infinite;
            }

            /* Data nodes and trails */
            .intel-node {
              position: absolute;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #10dcff;
              box-shadow: 0 0 9px #10dcff, 0 0 24px rgba(16, 220, 255, .8);
              animation: nodeBlink 2.2s ease-in-out infinite;
            }

            .node-1 { left: 23%; top: 28%; animation-delay: -.3s; }
            .node-2 { left: 72%; top: 26%; animation-delay: -.9s; }
            .node-3 { left: 79%; top: 61%; animation-delay: -1.4s; }
            .node-4 { left: 24%; top: 68%; animation-delay: -1.8s; }
            .node-5 { left: 16%; top: 48%; width: 4px; height: 4px; }
            .node-6 { left: 84%; top: 43%; width: 4px; height: 4px; animation-delay: -1.1s; }

            .data-trail {
              position: absolute;
              height: 1px;
              width: 145px;
              background: linear-gradient(90deg, transparent, rgba(10, 215, 255, .55), transparent);
              opacity: .45;
              transform-origin: left center;
              animation: trailMove 4.5s ease-in-out infinite;
            }

            .trail-1 { left: 12%; top: 35%; transform: rotate(9deg); }
            .trail-2 { right: 7%; top: 54%; transform: rotate(-14deg); animation-delay: -1.8s; }
            .trail-3 { left: 30%; bottom: 24%; transform: rotate(-8deg); animation-delay: -3s; }

            .cyber-core-crosshair {
              position: absolute;
              background: rgba(0, 215, 255, .13);
              pointer-events: none;
            }

            .crosshair-horizontal { left: 7%; right: 7%; top: 50%; height: 1px; }
            .crosshair-vertical { top: 7%; bottom: 7%; left: 50%; width: 1px; opacity: .5; }

            @keyframes cyberShieldRotate {
              0% { transform: translate(-50%, -50%) translateZ(40px) rotateY(-22deg) rotateX(5deg) rotateZ(-2deg); }
              25% { transform: translate(-50%, -50%) translateZ(65px) rotateY(28deg) rotateX(-4deg) rotateZ(2deg); }
              50% { transform: translate(-50%, -50%) translateZ(48px) rotateY(180deg) rotateX(3deg) rotateZ(-2deg); }
              75% { transform: translate(-50%, -50%) translateZ(65px) rotateY(330deg) rotateX(-4deg) rotateZ(2deg); }
              100% { transform: translate(-50%, -50%) translateZ(40px) rotateY(338deg) rotateX(5deg) rotateZ(-2deg); }
            }

            @keyframes cyberOrbitA {
              from { transform: translate(-50%, -50%) rotateX(68deg) rotateZ(-12deg); }
              to { transform: translate(-50%, -50%) rotateX(68deg) rotateZ(348deg); }
            }

            @keyframes cyberOrbitB {
              from { transform: translate(-50%, -50%) rotateX(67deg) rotateY(24deg) rotateZ(0deg); }
              to { transform: translate(-50%, -50%) rotateX(67deg) rotateY(24deg) rotateZ(-360deg); }
            }

            @keyframes cyberOrbitC {
              from { transform: translate(-50%, -50%) rotateY(68deg) rotateZ(0deg); }
              to { transform: translate(-50%, -50%) rotateY(68deg) rotateZ(360deg); }
            }

            @keyframes cyberHazePulse {
              0%, 100% { opacity: .55; transform: translate(-50%, -50%) scale(.86); }
              50% { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
            }

            @keyframes shieldDepthPulse {
              0%, 100% { opacity: .16; }
              50% { opacity: .32; }
            }

            @keyframes shieldScan {
              0%, 12% { top: 8%; opacity: 0; }
              22% { opacity: .9; }
              75% { opacity: .65; }
              100% { top: 92%; opacity: 0; }
            }

            @keyframes nodeBlink {
              0%, 100% { opacity: .28; transform: scale(.7); }
              50% { opacity: 1; transform: scale(1.45); }
            }

            @keyframes trailMove {
              0%, 100% { opacity: .12; transform: translateX(-18px) scaleX(.7) rotate(9deg); }
              50% { opacity: .65; transform: translateX(24px) scaleX(1.1) rotate(9deg); }
            }

            @media (max-width: 900px) {
              .cyber-core-scene { width: 470px; height: 470px; }
              .cyber-shield-3d { width: 205px; height: 235px; }
              .cyber-orbit-a { width: 340px; }
              .cyber-orbit-b { width: 370px; height: 370px; }
            }

            @media (max-width: 600px) {
              .cyber-core-scene { width: 330px; height: 330px; }
              .cyber-shield-3d { width: 155px; height: 178px; }
              .cyber-orbit-a { width: 250px; height: 90px; }
              .cyber-orbit-b { width: 280px; height: 280px; }
              .cyber-orbit-c { width: 210px; height: 210px; }
              .cyber-core-haze { width: 240px; height: 240px; }
              .lock-shackle { transform: scale(.72); transform-origin: center top; }
              .lock-body { transform: scale(.72); transform-origin: center bottom; }
              .lock-dot { transform: translateX(-50%) scale(.72); }
            }

            @media (prefers-reduced-motion: reduce) {
              .cyber-core-scene *,
              .cyber-core-scene {
                animation: none !important;
              }
            }
          `}</style>

        </section>

        {/* ===================================================

            WHO WE ARE

        =================================================== */}

        <section

          className="about-section about-who"

          id="who-we-are"

          style={{ scrollMarginTop: "110px" }}

        >

          <div className="about-section-container">

            <div className="about-section-number">

              01

            </div>

            <div className="about-section-heading about-reveal">

              <div className="about-section-label">

                WHO WE ARE

              </div>

              <h2>

                Intelligence

                <span> beyond the obvious.</span>

              </h2>

            </div>

            <div className="about-who-layout">

              <div className="about-who-text about-reveal">

                <p className="about-lead">

                  Gryphon Cyber is a cyber intelligence and

                  ground operations partner supporting complex

                  investigations, intelligence gathering and

                  digital security requirements.

                </p>

                <p>

                  We develop bespoke tools and operational

                  capabilities tailored to demanding

                  investigative environments.

                </p>

                <p>

                  Our work combines cyber intelligence,

                  investigative expertise, training,

                  consulting and operational support.

                </p>

                <div className="about-inline-line">

                  <span></span>

                  <strong>

                    BEYOND THE VISIBLE

                  </strong>

                </div>

              </div>

              {/* Floating data architecture */}

              <div className="about-data-architecture about-reveal">

                <div className="data-architecture-glow"></div>

                <div className="data-node data-node-one">

                  <span></span>

                  INTELLIGENCE

                </div>

                <div className="data-node data-node-two">

                  <span></span>

                  INVESTIGATION

                </div>

                <div className="data-node data-node-three">

                  <span></span>

                  SECURITY

                </div>

                <div className="data-node data-node-four">

                  <span></span>

                  OPERATIONS

                </div>

                <div className="data-center">

                  <div className="data-center-inner">

                    GC

                  </div>

                </div>

                <div className="data-connection connection-one"></div>

                <div className="data-connection connection-two"></div>

                <div className="data-connection connection-three"></div>

                <div className="data-connection connection-four"></div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================

            WHAT WE DO

        =================================================== */}

        <section className="about-section about-capabilities">

          <div className="about-section-container">

            <div className="about-section-number">

              02

            </div>

            <div className="about-section-heading about-reveal">

              <div className="about-section-label">

                WHAT WE DO

              </div>

              <h2>

                Intelligence

                <span> in action.</span>

              </h2>

              <p>

                Four connected capabilities supporting

                investigations, operational challenges and

                digital security.

              </p>

            </div>

            <div className="about-capability-grid">

              <article

                className="about-capability-card about-reveal"

              >

                <div className="capability-number">

                  01

                </div>

                <div className="capability-icon capability-diamond">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M24 8 9 20 24 40 39 20 24 8Z" />
                    <path d="M9 20h30M24 8v32M9 20l15 5 15-5M24 25v15" />
                    <circle cx="24" cy="8" r="2.5" fill="currentColor" />
                    <circle cx="9" cy="20" r="2.5" fill="currentColor" />
                    <circle cx="39" cy="20" r="2.5" fill="currentColor" />
                    <circle cx="24" cy="40" r="2.5" fill="currentColor" />
                    <circle cx="24" cy="25" r="2.5" fill="currentColor" />
                  </svg>
                </div>

                <div className="capability-card-content">

                  <h3>

                    Cyber Intelligence

                  </h3>

                  <p>

                    Transform complex information into

                    actionable intelligence through connected

                    intelligence systems and advanced analysis.

                  </p>

                  <span className="capability-link">

                    INTELLIGENCE

                    <b>→</b>

                  </span>

                </div>

              </article>

              <article

                className="about-capability-card about-reveal"

              >

                <div className="capability-number">

                  02

                </div>

                <div className="capability-icon capability-rings">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="20" cy="20" r="12" />
                    <circle cx="20" cy="20" r="6" />
                    <path d="m29 29 11 11M20 15v10M15 20h10" />
                  </svg>
                </div>

                <div className="capability-card-content">

                  <h3>

                    Investigations

                  </h3>

                  <p>

                    Bespoke capabilities for complex

                    investigations, intelligence gathering,

                    due diligence and operational requirements.

                  </p>

                  <span className="capability-link">

                    INVESTIGATION

                    <b>→</b>

                  </span>

                </div>

              </article>

              <article

                className="about-capability-card about-reveal"

              >

                <div className="capability-number">

                  03

                </div>

                <div className="capability-icon capability-cross">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m4 18 20-11 20 11-20 11L4 18Z" />
                    <path d="M12 23v10c7 6 17 6 24 0V23M44 18v13" />
                    <circle cx="44" cy="34" r="2" fill="currentColor" />
                  </svg>
                </div>

                <div className="capability-card-content">

                  <h3>

                    Training & Consulting

                  </h3>

                  <p>

                    Practical knowledge, scenario-based

                    training and expert consultation for

                    modern investigative environments.

                  </p>

                  <span className="capability-link">

                    EXPERTISE

                    <b>→</b>

                  </span>

                </div>

              </article>

              <article

                className="about-capability-card about-reveal"

              >

                <div className="capability-number">

                  04

                </div>

                <div className="capability-icon capability-target">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M24 5 39 11v12c0 10-7 16-15 20C16 39 9 33 9 23V11L24 5Z" />
                    <path d="m17 24 5 5 10-11" />
                    <path d="M24 5v6M9 11l15 6 15-6" />
                  </svg>
                </div>

                <div className="capability-card-content">

                  <h3>

                    Ground Operations

                  </h3>

                  <p>

                    On-ground operational support connecting

                    digital intelligence with real-world

                    investigative requirements.

                  </p>

                  <span className="capability-link">

                    OPERATIONS

                    <b>→</b>

                  </span>

                </div>

              </article>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONNECTED INSTITUTIONAL ECOSYSTEM — ALL 14 LOGOS
        =================================================== */}
        <section className="about-all-network-section" aria-labelledby="about-trust-title">
          <div className="about-all-network-bg" aria-hidden="true"></div>
          <div className="about-all-network-inner">
            <div className="services-3d-header about-reveal">
              <div className="services-3d-eyebrow">
                <span></span>
                <strong>CONNECTED INSTITUTIONAL ECOSYSTEM</strong>
                <span></span>
              </div>
              <h2 id="about-trust-title">
                Built around <span>trusted networks.</span>
              </h2>
              <p>
                Our work is designed for complex environments where intelligence,
                technology and operational trust matter.
              </p>
            </div>

            <div className="all-logo-3d-stage" role="list">
              <div className="all-logo-stage-glow" aria-hidden="true"></div>
              <div className="all-logo-energy-line" aria-hidden="true"><span></span></div>

              {trustLogos.map((logo, index) => (
                <article
                  key={`${logo.alt}-${index}`}
                  className="all-logo-3d-card about-reveal"
                  style={{ "--logo-delay": `${index * 80}ms`, "--rotation-delay": `-${index * 0.42}s` }}
                  role="listitem"
                  aria-label={logo.alt}
                >
                  <div className="all-logo-card-shell">
                    <div className="all-logo-card-top-line"></div>
                    <div className="all-logo-card-corner corner-tl"></div>
                    <div className="all-logo-card-corner corner-tr"></div>
                    <div className="all-logo-card-corner corner-bl"></div>
                    <div className="all-logo-card-corner corner-br"></div>

                    <div className="all-logo-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="all-logo-card-face">
                      <div className="all-logo-image-wrap">
                        <img src={logo.src} alt={logo.alt} loading="lazy" />
                      </div>
                      <div className="all-logo-scan-line"></div>
                    </div>

                    <div className="all-logo-orbit" aria-hidden="true">
                      <span></span>
                    </div>

                    <div className="all-logo-card-shadow" aria-hidden="true"></div>
                  </div>

                  <div className="all-logo-card-label">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{logo.alt}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="services-3d-status all-logo-status">
              <div>
                <span className="services-status-dot"></span>
                <strong>OPERATIONAL NETWORK</strong>
              </div>
              <span className="services-status-divider"></span>
              <div>
                INTELLIGENCE <span>•</span> TECHNOLOGY <span>•</span> OPERATIONS
              </div>
            </div>
          </div>

          <style>{`
            /* =====================================================
               ALL 14 LOGOS — CONSISTENT 3D CYBER CARD SYSTEM
               Self-contained so it does not depend on conflicting
               older .about-trust-* rules in App.css.
            ===================================================== */
            .about-all-network-section {
              position: relative;
              overflow: hidden;
              min-height: 1250px;
              padding: 90px 0 120px;
              background:
                radial-gradient(circle at 50% 34%, rgba(0, 211, 255, .075), transparent 30%),
                linear-gradient(180deg, #020811 0%, #02070e 100%);
              isolation: isolate;
            }

            .about-all-network-bg {
              position: absolute;
              inset: 0;
              pointer-events: none;
              opacity: .55;
              background-image:
                linear-gradient(rgba(0, 208, 255, .035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 208, 255, .035) 1px, transparent 1px);
              background-size: 70px 70px;
              mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
            }

            .about-all-network-inner {
              position: relative;
              z-index: 2;
              width: min(1540px, calc(100% - 70px));
              margin: 0 auto;
            }

            .about-all-network-section .services-3d-header {
              position: relative;
              z-index: 4;
              max-width: 920px;
              margin: 0 auto 58px;
              text-align: center;
            }

            .about-all-network-section .services-3d-header h2 {
              margin: 12px 0 14px;
              color: #f4f8ff;
              font-size: clamp(38px, 4vw, 64px);
              line-height: 1.05;
              letter-spacing: -2.2px;
            }

            .about-all-network-section .services-3d-header h2 span {
              color: #11d8ff;
            }

            .about-all-network-section .services-3d-header p {
              max-width: 760px;
              margin: 0 auto;
              color: #91a5b8;
              font-size: 15px;
              line-height: 1.8;
            }

            .all-logo-3d-stage {
              position: relative;
              display: grid;
              grid-template-columns: repeat(7, minmax(0, 1fr));
              gap: 66px 20px;
              align-items: start;
              width: 100%;
              padding: 18px 0 30px;
              perspective: 1600px;
              transform-style: preserve-3d;
            }

            .all-logo-stage-glow {
              position: absolute;
              left: 50%;
              top: 40%;
              width: 72%;
              height: 300px;
              transform: translate(-50%, -50%);
              border-radius: 50%;
              background: radial-gradient(ellipse, rgba(0, 215, 255, .10), transparent 68%);
              filter: blur(20px);
              pointer-events: none;
              animation: allLogoAmbientGlow 6s ease-in-out infinite;
            }

            .all-logo-energy-line {
              position: absolute;
              left: 2%;
              right: 2%;
              top: 50%;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(0, 218, 255, .32), transparent);
              opacity: .65;
              pointer-events: none;
            }

            .all-logo-energy-line span {
              position: absolute;
              left: -5%;
              top: -2px;
              width: 90px;
              height: 4px;
              border-radius: 50%;
              background: #12dfff;
              box-shadow: 0 0 18px #12dfff, 0 0 38px rgba(18, 223, 255, .65);
              animation: allLogoEnergyTravel 4.5s linear infinite;
            }

            .all-logo-3d-card {
              position: relative;
              min-width: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              transform-style: preserve-3d;
              opacity: 0;
              animation: allLogoCardReveal .9s cubic-bezier(.16, 1, .3, 1) forwards;
              animation-delay: var(--logo-delay);
            }

            .all-logo-card-shell {
              position: relative;
              width: 100%;
              height: 205px;
              border: 1px solid rgba(0, 214, 255, .32);
              border-radius: 8px;
              background:
                linear-gradient(145deg, rgba(8, 27, 42, .82), rgba(2, 11, 20, .92)),
                radial-gradient(circle at 50% 40%, rgba(0, 214, 255, .10), transparent 65%);
              box-shadow:
                inset 0 0 0 1px rgba(255, 255, 255, .025),
                0 18px 40px rgba(0, 0, 0, .30),
                0 0 24px rgba(0, 210, 255, .035);
              transform: rotateX(8deg) rotateY(-10deg) translateZ(0);
              transform-style: preserve-3d;
              transform-origin: center center;
              animation: allLogoCard3DRotation 7s ease-in-out infinite;
              animation-delay: var(--rotation-delay);
              will-change: transform;
              transition: transform .65s cubic-bezier(.16, 1, .3, 1), box-shadow .65s ease, border-color .5s ease;
              overflow: visible;
            }

            .all-logo-card-shell::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: inherit;
              background: linear-gradient(120deg, transparent 20%, rgba(0, 224, 255, .12) 50%, transparent 80%);
              background-size: 220% 100%;
              animation: allLogoSurfaceSweep 4.5s linear infinite;
              pointer-events: none;
              z-index: 5;
            }

            .all-logo-card-shell::after {
              content: "";
              position: absolute;
              inset: -1px;
              border-radius: inherit;
              padding: 1px;
              background: linear-gradient(115deg, rgba(0, 220, 255, .75), transparent 25%, transparent 72%, rgba(0, 122, 255, .65));
              -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: .8;
              animation: allLogoBorderRotate 4s linear infinite;
              pointer-events: none;
              z-index: 6;
            }

            .all-logo-3d-card:hover .all-logo-card-shell {
              transform: rotateX(0deg) rotateY(0deg) translateY(-14px) translateZ(32px) scale(1.045);
              animation-play-state: paused;
              border-color: rgba(0, 225, 255, .9);
              box-shadow:
                inset 0 0 30px rgba(0, 210, 255, .07),
                0 28px 55px rgba(0, 0, 0, .48),
                0 0 36px rgba(0, 210, 255, .16);
            }

            .all-logo-card-top-line {
              position: absolute;
              left: 14px;
              top: 10px;
              width: 42px;
              height: 1px;
              background: #13dfff;
              box-shadow: 0 0 10px rgba(19, 223, 255, .8);
              z-index: 10;
            }

            .all-logo-card-corner {
              position: absolute;
              width: 22px;
              height: 22px;
              border-color: rgba(0, 224, 255, .75);
              border-style: solid;
              z-index: 10;
              pointer-events: none;
            }

            .corner-tl { left: -1px; top: -1px; border-width: 1px 0 0 1px; }
            .corner-tr { right: -1px; top: -1px; border-width: 1px 1px 0 0; }
            .corner-bl { left: -1px; bottom: -1px; border-width: 0 0 1px 1px; }
            .corner-br { right: -1px; bottom: -1px; border-width: 0 1px 1px 0; }

            .all-logo-card-number {
              position: absolute;
              top: 9px;
              right: 12px;
              z-index: 11;
              color: rgba(87, 224, 247, .85);
              font-size: 8px;
              font-weight: 800;
              letter-spacing: .18em;
            }

            .all-logo-card-face {
              position: absolute;
              inset: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(0, 203, 255, .11);
              background: radial-gradient(circle at 50% 45%, rgba(0, 215, 255, .07), rgba(1, 9, 17, .25) 65%, transparent);
              transform: translateZ(18px);
              transform-style: preserve-3d;
              overflow: hidden;
            }

            .all-logo-image-wrap {
              position: relative;
              z-index: 4;
              width: 82%;
              height: 82%;
              display: flex;
              align-items: center;
              justify-content: center;
              transform: translateZ(28px);
              transform-style: preserve-3d;
            }

            .all-logo-image-wrap::before {
              content: "";
              position: absolute;
              inset: 8%;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(0, 215, 255, .16), transparent 68%);
              filter: blur(10px);
              z-index: -1;
            }

            .all-logo-image-wrap img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: contain;
              filter: drop-shadow(0 8px 15px rgba(0, 0, 0, .28));
              transition: transform .65s cubic-bezier(.16, 1, .3, 1), filter .5s ease;
              backface-visibility: hidden;
            }

            .all-logo-3d-card:hover .all-logo-image-wrap img {
              transform: translateZ(14px) scale(1.08);
              filter: drop-shadow(0 0 12px rgba(0, 213, 255, .20)) drop-shadow(0 10px 18px rgba(0, 0, 0, .3));
            }

            .all-logo-scan-line {
              position: absolute;
              left: 0;
              right: 0;
              top: -20%;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(0, 226, 255, .9), transparent);
              box-shadow: 0 0 12px rgba(0, 226, 255, .65);
              animation: allLogoScan 3.4s ease-in-out infinite;
              z-index: 8;
              pointer-events: none;
            }

            .all-logo-orbit {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 104%;
              height: 34%;
              transform: translate(-50%, -50%) translateZ(7px) rotateX(68deg) rotateZ(4deg);
              border: 1px solid rgba(0, 210, 255, .16);
              border-radius: 50%;
              pointer-events: none;
              z-index: 9;
              animation: allLogoOrbit 5.5s linear infinite;
            }

            .all-logo-orbit span {
              position: absolute;
              left: 4%;
              top: 50%;
              width: 5px;
              height: 5px;
              transform: translateY(-50%);
              border-radius: 50%;
              background: #16dcff;
              box-shadow: 0 0 10px #16dcff, 0 0 24px rgba(22, 220, 255, .7);
            }

            .all-logo-card-shadow {
              position: absolute;
              left: 8%;
              right: 8%;
              bottom: -26px;
              height: 40px;
              border-radius: 50%;
              background: rgba(0, 205, 255, .12);
              filter: blur(18px);
              transform: translateZ(-15px);
              opacity: .6;
              transition: opacity .5s ease, transform .5s ease;
            }

            .all-logo-3d-card:hover .all-logo-card-shadow {
              opacity: 1;
              transform: translateZ(-5px) scale(1.15);
            }

            .all-logo-card-label {
              width: 100%;
              display: flex;
              align-items: baseline;
              gap: 9px;
              margin-top: 22px;
              padding: 0 5px;
              color: #a7bacb;
              text-transform: uppercase;
              letter-spacing: .08em;
              font-size: 10px;
              line-height: 1.4;
            }

            .all-logo-card-label span {
              color: #19dfff;
              font-weight: 900;
              font-size: 9px;
            }

            .all-logo-card-label strong {
              color: #d8e6f1;
              font-size: 10px;
              font-weight: 800;
            }

            .all-logo-status {
              margin-top: 46px;
            }

            @keyframes allLogoCardReveal {
              from { opacity: 0; transform: translateY(45px) rotateX(18deg) rotateY(-5deg); }
              to { opacity: 1; transform: translateY(0) rotateX(0deg) rotateY(0deg); }
            }

            @keyframes allLogoCard3DRotation {
              0% { transform: rotateX(8deg) rotateY(-10deg) translateZ(0) translateY(0); }
              25% { transform: rotateX(-5deg) rotateY(9deg) translateZ(10px) translateY(-4px); }
              50% { transform: rotateX(7deg) rotateY(13deg) translateZ(18px) translateY(0); }
              75% { transform: rotateX(-7deg) rotateY(-8deg) translateZ(10px) translateY(-4px); }
              100% { transform: rotateX(8deg) rotateY(-10deg) translateZ(0) translateY(0); }
            }

            @keyframes allLogoAmbientGlow {
              0%, 100% { transform: translate(-50%, -50%) scale(.92); opacity: .55; }
              50% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
            }

            @keyframes allLogoEnergyTravel {
              from { left: -8%; }
              to { left: 108%; }
            }

            @keyframes allLogoSurfaceSweep {
              from { background-position: 220% 0; }
              to { background-position: -220% 0; }
            }

            @keyframes allLogoBorderRotate {
              from { filter: hue-rotate(0deg); }
              to { filter: hue-rotate(30deg); }
            }

            @keyframes allLogoScan {
              0%, 15% { top: -10%; opacity: 0; }
              25% { opacity: .9; }
              70% { opacity: .75; }
              100% { top: 110%; opacity: 0; }
            }

            @keyframes allLogoOrbit {
              from { transform: translate(-50%, -50%) translateZ(7px) rotateX(68deg) rotateZ(0deg); }
              to { transform: translate(-50%, -50%) translateZ(7px) rotateX(68deg) rotateZ(360deg); }
            }

            @media (max-width: 1250px) {
              .all-logo-3d-stage { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 60px 22px; }
            }

            @media (max-width: 760px) {
              .about-all-network-section { min-height: auto; padding: 75px 0 90px; }
              .about-all-network-inner { width: min(94%, 620px); }
              .all-logo-3d-stage { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px 16px; }
              .all-logo-card-shell { height: 175px; }
              .all-logo-card-face { inset: 15px; }
              .all-logo-card-label { margin-top: 18px; font-size: 9px; }
              .all-logo-card-label strong { font-size: 9px; }
              .all-logo-status { flex-direction: column; gap: 14px; }
            }

            @media (prefers-reduced-motion: reduce) {
              .all-logo-3d-card,
              .all-logo-card-shell,
              .all-logo-stage-glow,
              .all-logo-energy-line span,
              .all-logo-card-shell::before,
              .all-logo-card-shell::after,
              .all-logo-scan-line,
              .all-logo-orbit {
                animation: none !important;
              }
              .all-logo-card-shell,
              .all-logo-image-wrap img {
                transition: none !important;
              }
            }
          `}</style>
        </section>

        {/* ===================================================

            WHY GRYPHON

        =================================================== */}

        <section className="about-section about-why">

          <div className="about-section-container">

            <div className="about-section-number">

              03

            </div>

            <div className="about-section-heading about-reveal">

              <div className="about-section-label">

                WHY GRYPHON

              </div>

              <h2>

                Built around

                <span> reality.</span>

              </h2>

              <p>

                Our approach combines localized expertise,

                operational understanding and technology.

              </p>

            </div>

            <div className="about-why-system">

              <div className="why-system-line">

                <div className="why-progress"></div>

              </div>

              <div className="about-why-item about-reveal">

                <div className="why-point">

                  01

                </div>

                <div>

                  <h3>

                    Localized Expertise

                  </h3>

                  <p>

                    Deep alignment with the Indian

                    intelligence and security environment.

                  </p>

                </div>

              </div>

              <div className="about-why-item about-reveal">

                <div className="why-point">

                  02

                </div>

                <div>

                  <h3>

                    Operational Reality

                  </h3>

                  <p>

                    Technology designed around real

                    investigative and operational requirements.

                  </p>

                </div>

              </div>

              <div className="about-why-item about-reveal">

                <div className="why-point">

                  03

                </div>

                <div>

                  <h3>

                    Proven Deployment

                  </h3>

                  <p>

                    Experience supporting deployments across

                    multiple states and agencies.

                  </p>

                </div>

              </div>

              <div className="about-why-item about-reveal">

                <div className="why-point">

                  04

                </div>

                <div>

                  <h3>

                    Cost Efficiency

                  </h3>

                  <p>

                    Intelligence capabilities developed with

                    operational efficiency in mind.

                  </p>

                </div>

              </div>

              <div className="about-why-item about-reveal">

                <div className="why-point">

                  05

                </div>

                <div>

                  <h3>

                    Holistic Support

                  </h3>

                  <p>

                    Beyond software: training, consultation

                    and operational support.

                  </p>

                </div>

              </div>

            </div>

            <div className="about-stat-strip">

              <div>

                <strong>

                  36+

                </strong>

                <span>

                  YEARS OF GOVERNMENT

                  SERVICE EXPERIENCE

                </span>

              </div>

              <div>

                <strong>

                  12+

                </strong>

                <span>

                  STATES WITH

                  TRAINING DEPLOYMENTS

                </span>

              </div>

              <div>

                <strong>

                  INDIA

                </strong>

                <span>

                  LOCALIZED INTELLIGENCE

                  CAPABILITIES

                </span>

              </div>

            </div>

          </div>

        </section>

          {/* ===================================================

            LEADERSHIP

        =================================================== */}

        <section className="about-section about-leadership">

          <div className="about-section-container">

            <div className="about-section-number">

              04

            </div>

            <div className="about-section-heading about-reveal">

              <div className="about-section-label">

                OUR LEADERSHIP

              </div>

              <h2>

                Experience behind

                <span> the mission.</span>

              </h2>

            </div>

            <div className="about-leaders-grid">

              <article className="about-leader-card about-reveal">

                <div className="leader-card-top">

                  <span>

                    01

                  </span>

                  <span>

                    EXECUTIVE

                  </span>

                </div>

                <div className="leader-avatar">

  <div className="leader-avatar-ring"></div>

  <div className="leader-avatar-core leader-photo-core">

    <img

      src={`${import.meta.env.BASE_URL}logos/govind-ray.png`}

      alt="Mr. Govind Ray"

    />

  </div>

  <div className="leader-avatar-orbit">

    <span></span>

  </div>

</div>

                <div className="leader-information">

                  <h3>

                    Mr. Govind Ray

                  </h3>

                  <div className="leader-role">

                    Managing Director & CEO

                  </div>

                  <p>

                    A cybersecurity investigator with

                    experience in high-stakes digital

                    investigations and government cyber

                    operations, with expertise in strategic

                    consulting and advanced vigilance systems.

                  </p>

                </div>

                <div className="leader-footer">

                  <span>

                    10+ YEARS

                  </span>

                  <span>

                    EXPERIENCE

                  </span>

                </div>

              </article>

              <article className="about-leader-card about-reveal">

                <div className="leader-card-top">

                  <span>

                    02

                  </span>

                  <span>

                    Executive Director

                  </span>

                </div>

                <div className="leader-avatar leader-avatar-second">

                  <div className="leader-avatar-ring"></div>

                  <div className="leader-avatar-core leader-photo-core">

                    <img

                      src={`${import.meta.env.BASE_URL}logos/sm-sahai.png`}

                      alt="Shri S.M. Sahai, IPS (Retd.)"

                    />

                  </div>

                  <div className="leader-avatar-orbit">

                    <span></span>

                  </div>

                </div>

                <div className="leader-information">

                  <h3>

                    Shri S.M. Sahai, IPS (Retd.)

                  </h3>

                  <div className="leader-role">

                    Executive Director

                  </div>

                  <p>

                    A digital security professional with

                    36 years of distinguished government

                    service and experience in national

                    security, counter-terrorism and

                    technology-led law enforcement.

                  </p>

                </div>

                <div className="leader-footer">

                  <span>

                    36 YEARS

                  </span>

                  <span>

                    GOVERNMENT SERVICE

                  </span>

                </div>

              </article>

            </div>

          </div>

        </section>

        {/* ===================================================

            FINAL CTA

        =================================================== */}

        <section className="about-final-cta">

          <div className="about-final-grid"></div>

          <div className="about-final-glow"></div>

          <div className="about-final-core">

            <div className="final-core-ring ring-one"></div>

            <div className="final-core-ring ring-two"></div>

            <div className="final-core-ring ring-three"></div>

            <div className="final-core-center">

              GC

            </div>

          </div>

          <div className="about-final-content">

            <div className="about-section-label">

              THE NEXT MOVE

            </div>

            <h2>

              Ready to see

              <span> beyond?</span>

            </h2>

            <p>

              Explore the intelligence capabilities,

              technology and operational systems built

              by Gryphon Cyber.

            </p>

            <div className="about-final-actions">

              <Link

                to="/solutions"

                className="about-primary-button"

              >

                Explore Solutions

                <span>→</span>

              </Link>

              <Link

                to="/contact"

                className="about-secondary-button"

              >

                Talk to Gryphon

                <span>↗</span>

              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* ABOUT PAGE — READABILITY & ICON REFINEMENTS */}
      <style>{`
        /* Keep all text comfortably readable while preserving the existing layout. */
        .about-page .about-hero-content > p {
          max-width: 680px;
          color: #bdcbd9 !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
          font-weight: 400 !important;
        }

        .about-page .about-hero-meta strong {
          color: #f1f7ff !important;
          font-size: 13px !important;
          line-height: 1.5 !important;
          letter-spacing: 0.08em !important;
        }

        .about-page .about-hero-meta span {
          color: #a9bdcf !important;
          font-size: 11px !important;
          line-height: 1.6 !important;
          letter-spacing: 0.12em !important;
        }

        /* Section numbers and eyebrow labels */
        .about-page .about-section-number {
          color: #48dff8 !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          letter-spacing: 0.16em !important;
        }

        .about-page .about-section-label {
          color: #48e2ff !important;
          font-size: 12px !important;
          font-weight: 800 !important;
          letter-spacing: 0.20em !important;
          line-height: 1.6 !important;
        }

        .about-page .about-section-heading > p {
          color: #c0cedc !important;
          font-size: 17px !important;
          line-height: 1.8 !important;
        }

        /* Who we are */
        .about-page .about-who-text p {
          color: #c5d1de !important;
          font-size: 16px !important;
          line-height: 1.85 !important;
          font-weight: 400 !important;
        }

        .about-page .about-who-text p.about-lead {
          color: #eef5fc !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
          font-weight: 500 !important;
        }

        .about-page .about-inline-line strong {
          color: #55e4fa !important;
          font-size: 11px !important;
          letter-spacing: 0.16em !important;
        }

        /* Capability cards */
        .about-page .capability-number {
          color: #55e4fa !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          letter-spacing: 0.12em !important;
        }

        .about-page .capability-icon {
          color: #12d8ff !important;
        }

        .about-page .capability-icon svg {
          display: block !important;
          width: 38px !important;
          height: 38px !important;
          color: #12d8ff !important;
          stroke: currentColor !important;
          flex: 0 0 auto !important;
        }

        .about-page .capability-card-content h3 {
          color: #f1f6fc !important;
          font-size: 21px !important;
          line-height: 1.45 !important;
          font-weight: 750 !important;
        }

        .about-page .capability-card-content p {
          color: #c1cedb !important;
          font-size: 16px !important;
          line-height: 1.8 !important;
          font-weight: 400 !important;
        }

        .about-page .capability-link {
          color: #9eb4c8 !important;
          font-size: 11px !important;
          line-height: 1.6 !important;
          font-weight: 800 !important;
          letter-spacing: 0.15em !important;
        }

        .about-page .capability-link b {
          color: #12d8ff !important;
          font-size: 18px !important;
        }

        /* Why Gryphon items */
        .about-page .why-point {
          color: #55e4fa !important;
          font-size: 13px !important;
          font-weight: 800 !important;
        }

        .about-page .about-why-item h3 {
          color: #f0f5fb !important;
          font-size: 19px !important;
          line-height: 1.45 !important;
          font-weight: 750 !important;
        }

        .about-page .about-why-item p {
          color: #bdcbd9 !important;
          font-size: 15px !important;
          line-height: 1.8 !important;
        }

        /* Statistics */
        .about-page .about-stat-strip strong {
          color: #f5f9ff !important;
          font-size: 27px !important;
          line-height: 1.25 !important;
          font-weight: 850 !important;
        }

        .about-page .about-stat-strip span {
          color: #b5c7d8 !important;
          font-size: 11px !important;
          line-height: 1.7 !important;
          font-weight: 750 !important;
          letter-spacing: 0.12em !important;
        }

        /* Institutional reach / 3D service stage */
        .about-page .services-3d-eyebrow strong {
          color: #62e7fa !important;
          font-size: 12px !important;
          letter-spacing: 0.18em !important;
        }

        .about-page .services-3d-header > p {
          color: #bdcbd9 !important;
          font-size: 17px !important;
          line-height: 1.8 !important;
        }

        .about-page .logo-object-label {
          color: #a9bdcf !important;
          font-size: 11px !important;
          line-height: 1.6 !important;
          letter-spacing: 0.12em !important;
        }

        .about-page .logo-object-label > span {
          color: #45dcf5 !important;
          font-size: 11px !important;
          font-weight: 850 !important;
        }

        .about-page .logo-object-label strong {
          color: #e1edf7 !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          letter-spacing: 0.12em !important;
        }

        .about-page .services-3d-status {
          color: #b5c7d8 !important;
          font-size: 11px !important;
          line-height: 1.7 !important;
          letter-spacing: 0.12em !important;
        }

        .about-page .services-3d-status strong {
          color: #d8e8f5 !important;
          font-size: 11px !important;
        }

        /* Leadership cards */
        .about-page .leader-card-top span {
          color: #b5c7d8 !important;
          font-size: 11px !important;
          line-height: 1.6 !important;
          font-weight: 750 !important;
          letter-spacing: 0.12em !important;
        }

        .about-page .leader-information h3 {
          color: #f2f7fc !important;
          font-size: 22px !important;
          line-height: 1.4 !important;
          font-weight: 800 !important;
        }

        .about-page .leader-role {
          color: #55ddf5 !important;
          font-size: 14px !important;
          line-height: 1.6 !important;
          font-weight: 700 !important;
        }

        .about-page .leader-information p {
          color: #c7d4e0 !important;
          font-size: 15px !important;
          line-height: 1.85 !important;
        }

        .about-page .leader-footer span {
          color: #b0c2d4 !important;
          font-size: 11px !important;
          line-height: 1.7 !important;
          font-weight: 800 !important;
          letter-spacing: 0.12em !important;
        }

        /* Final call to action */
        .about-page .about-final-content > p {
          color: #c7d4e0 !important;
          font-size: 17px !important;
          line-height: 1.8 !important;
        }

        .about-page .about-final-actions a {
          font-size: 15px !important;
          font-weight: 750 !important;
        }

        /* Tablet and mobile: readable without causing overflow */
        @media (max-width: 900px) {
          .about-page .about-hero-content > p,
          .about-page .about-section-heading > p,
          .about-page .services-3d-header > p {
            font-size: 16px !important;
          }

          .about-page .capability-card-content h3,
          .about-page .leader-information h3 {
            font-size: 19px !important;
          }

          .about-page .capability-card-content p,
          .about-page .about-why-item p,
          .about-page .leader-information p {
            font-size: 15px !important;
          }
        }

        @media (max-width: 600px) {
          .about-page .about-hero-content > p {
            font-size: 15px !important;
            line-height: 1.75 !important;
          }

          .about-page .about-hero-meta strong {
            font-size: 12px !important;
          }

          .about-page .about-hero-meta span,
          .about-page .about-stat-strip span,
          .about-page .logo-object-label,
          .about-page .services-3d-status,
          .about-page .leader-footer span {
            font-size: 10px !important;
          }

          .about-page .about-section-label {
            font-size: 11px !important;
          }

          .about-page .about-who-text p,
          .about-page .about-who-text p.about-lead,
          .about-page .capability-card-content p,
          .about-page .about-why-item p,
          .about-page .leader-information p,
          .about-page .about-final-content > p {
            font-size: 15px !important;
            line-height: 1.75 !important;
          }

          .about-page .capability-card-content h3,
          .about-page .about-why-item h3 {
            font-size: 18px !important;
          }

          .about-page .capability-link {
            font-size: 10px !important;
          }

          .about-page .about-stat-strip strong {
            font-size: 23px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page .capability-icon svg {
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================================

          FOOTER

      ===================================================== */}

      <Footer />

    </div>

  );

}

export default About;