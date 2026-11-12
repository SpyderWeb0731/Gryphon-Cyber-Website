import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarBrand from "../components/NavbarBrand";
import Footer from "../components/Footer";
import "./Engagements.css";
import "../App.css";

/*
  ==========================================================
  GRYPHON CYBER — ENGAGEMENTS PAGE
  ==========================================================

  Place your images inside:

  public/engagements/police/
  public/engagements/leadership/
  public/engagements/events/

  The image paths below match the current files.
*/

const policeImages = [
  {
    src: "/engagements/police/police-training-01.jpeg",
    title: "Cybersecurity Training",
    description:
      "Cybersecurity awareness and technology-focused training for law enforcement personnel.",
  },
  {
    src: "/engagements/police/police-training-02.jpeg",
    title: "Law Enforcement Engagement",
    description:
      "Practical engagement with frontline security and law enforcement teams.",
  },
  {
    src: "/engagements/police/police-training-03.jpeg",
    title: "Knowledge & Awareness",
    description:
      "Sharing knowledge around emerging cyber threats and digital investigations.",
  },
];

const leadershipImages = [
  {
    src: "/engagements/leadership/leadership-01.jpeg",
    title: "Cybersecurity Seminar",
    description:
      "Gryphon Cyber leadership participating in cybersecurity discussions and seminars.",
  },
  {
    src: "/engagements/leadership/leadership-02.jpeg",
    title: "Industry Engagement",
    description:
      "Connecting with cybersecurity professionals and industry stakeholders.",
  },
  {
    src: "/engagements/leadership/leadership-03.jpeg",
    title: "Strategic Discussions",
    description:
      "Leadership engagement around emerging security challenges and technologies.",
  },
  {
    src: "/engagements/leadership/leadership-04.jpeg",
    title: "Cybersecurity Community",
    description:
      "Participating in forums that shape the future of cybersecurity.",
  },
];

const eventImages = [
  {
    src: "/engagements/events/event-01.png",
    title: "Industry Forum",
    description:
      "Participation in technology and cybersecurity forums.",
  },
  {
    src: "/engagements/events/event-02.jpeg",
    title: "Professional Collaboration",
    description:
      "Building meaningful relationships across the security ecosystem.",
  },
  {
    src: "/engagements/events/event-03.jpeg",
    title: "Cybersecurity Engagement",
    description:
      "Gryphon Cyber participating in cybersecurity and technology-focused engagements.",
  },
];


function ImageCard({ image, index, onOpen }) {
  return (
    <article
      className={`engagement-image-card ${
        index === 0 ? "engagement-featured-card" : ""
      }`}
      onClick={() => onOpen(image)}
    >
      <div className="engagement-image-wrapper">
        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add(
              "engagement-image-missing"
            );
          }}
        />

        <div className="engagement-image-placeholder">
          <span className="placeholder-icon">GC</span>
          <span>Add Engagement Image</span>
        </div>

        <div className="engagement-image-overlay">
          <span className="view-image">
            View Image <span>↗</span>
          </span>
        </div>
      </div>

      <div className="engagement-card-content">
        <span className="engagement-card-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    </article>
  );
}


function EngagementSection({
  eyebrow,
  title,
  description,
  images,
  sectionClass = "",
  onOpen,
}) {
  return (
    <section className={`engagement-section ${sectionClass}`}>
      <div className="engagement-section-heading">
        <div className="engagement-section-eyebrow">
          <span />
          {eyebrow}
        </div>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className="engagement-gallery">
        {images.map((image, index) => (
          <ImageCard
            key={`${image.title}-${index}`}
            image={image}
            index={index}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}


export default function Engagements() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="engagements-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className="navbar gryphon-standard-navbar engagements-navbar"
        style={{ position: "relative", zIndex: 100000 }}
      >
        <div className="nav-container engagements-nav-container">
          <Link
            to="/"
            className="logo-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <NavbarBrand />
          </Link>

          <nav className="nav-links engagements-desktop-nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/engagements" className="active">Engagements</Link>
            <Link to="/training">Training</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <Link to="/contact" className="talk-button engagements-desktop-talk">
            Talk to Us
            <span>→</span>
          </Link>

          <button
            type="button"
            className={`engagements-mobile-toggle ${
              mobileMenuOpen ? "open" : ""
            }`}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="engagements-mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          id="engagements-mobile-menu"
          className={`engagements-mobile-menu ${
            mobileMenuOpen ? "open" : ""
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
          <Link
            to="/engagements"
            className="mobile-active"
            onClick={() => setMobileMenuOpen(false)}
          >
            Engagements
          </Link>
          <Link to="/training" onClick={() => setMobileMenuOpen(false)}>Training</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link
            to="/contact"
            className="engagements-mobile-talk"
            onClick={() => setMobileMenuOpen(false)}
          >
            Talk to Us
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section className="engagements-hero">

          <div className="engagements-hero-grid" />

          <div className="engagements-hero-glow glow-one" />
          <div className="engagements-hero-glow glow-two" />

          <div className="engagements-hero-content">

            <div className="engagements-eyebrow">
              <span className="eyebrow-dot" />
              REAL-WORLD CYBERSECURITY ENGAGEMENTS
            </div>

            <h1>
              Beyond the Screen.
              <br />
              <span>Into the Field.</span>
            </h1>

            <p>
              Cybersecurity is not limited to technology and systems.
              Gryphon Cyber actively engages with law enforcement,
              security professionals, industry leaders and organizations
              to strengthen awareness, knowledge and operational
              readiness.
            </p>

            <div className="engagements-hero-stats">

              <div className="hero-stat">
                <strong>01</strong>
                <span>Field Training</span>
              </div>

              <div className="hero-stat">
                <strong>02</strong>
                <span>Industry Engagement</span>
              </div>

              <div className="hero-stat">
                <strong>03</strong>
                <span>Leadership</span>
              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            INTRODUCTION
        =================================================== */}

        <section className="engagements-intro">

          <div className="intro-line" />

          <div className="intro-content">

            <span className="section-label">
              GRYPHON CYBER IN ACTION
            </span>

            <h2>
              Turning Knowledge Into
              <span> Real-World Impact.</span>
            </h2>

            <p>
              Our engagement extends beyond the digital environment.
              Through training programs, cybersecurity seminars,
              professional forums and strategic interactions, Gryphon
              Cyber works with people and organizations at the forefront
              of today's security challenges.
            </p>

          </div>

        </section>


        {/* ===================================================
            POLICE TRAINING
        =================================================== */}

        <EngagementSection
          eyebrow="LAW ENFORCEMENT"
          title="Empowering Those on the Front Lines"
          description="Gryphon Cyber conducts cybersecurity awareness, technology and knowledge-sharing engagements with law enforcement and security personnel, helping frontline teams better understand emerging digital threats and cyber-enabled challenges."
          images={policeImages}
          sectionClass="police-section"
          onOpen={setSelectedImage}
        />


        {/* ===================================================
            LEADERSHIP
        =================================================== */}

        <EngagementSection
          eyebrow="LEADERSHIP & INDUSTRY"
          title="Leadership in the Cybersecurity Community"
          description="Our leadership actively participates in cybersecurity seminars, conferences, professional forums and strategic discussions, staying connected with emerging technologies, threats and the evolving security landscape."
          images={leadershipImages}
          sectionClass="leadership-section"
          onOpen={setSelectedImage}
        />


        {/* ===================================================
            EVENTS
        =================================================== */}

        <EngagementSection
          eyebrow="EVENTS & COLLABORATION"
          title="Connecting. Learning. Advancing."
          description="From professional events to knowledge-sharing sessions, Gryphon Cyber continues to connect with the wider cybersecurity ecosystem and contribute to meaningful conversations around digital security."
          images={eventImages}
          sectionClass="events-section"
          onOpen={setSelectedImage}
        />


        {/* ===================================================
            CTA
        =================================================== */}

        <section className="engagements-cta">

          <div className="cta-grid" />

          <div className="cta-content">

            <span className="section-label">
              THE NEXT ENGAGEMENT
            </span>

            <h2>
              Building a More
              <span> Resilient Digital Environment.</span>
            </h2>

            <p>
              Explore how Gryphon Cyber can support your organization's
              cybersecurity, intelligence and operational requirements.
            </p>

            <Link to="/contact" className="engagement-cta-button">
              <span>Talk to Gryphon Cyber</span>
              <strong>→</strong>
            </Link>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />


      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="engagement-lightbox"
          onClick={closeModal}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeModal}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
            />

            <div className="lightbox-caption">
              <span>{selectedImage.title}</span>
              <p>{selectedImage.description}</p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}