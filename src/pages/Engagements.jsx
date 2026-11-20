import React, { useEffect, useState } from "react";



import { createPortal } from "react-dom";







import { Link } from "react-router-dom";















import NavbarBrand from "../components/NavbarBrand";







import Footer from "../components/Footer";















import "./Engagements.css";







import "../App.css";















const BASE = import.meta.env.BASE_URL || "/";















const asset = (path) => `${BASE}${path.replace(/^\/+/, "")}`;















/* ==========================================================







   POLICE / LAW ENFORCEMENT







\========================================================== */















const policeImages = [







  {







    src: asset("engagements/police/police-training-01.jpeg"),







    title: "Cybersecurity Training",







    description:







      "Cybersecurity awareness and technology-focused training for law enforcement personnel.",







  },







  {







    src: asset("engagements/police/police-training-02.jpeg"),







    title: "Law Enforcement Engagement",







    description:







      "Practical engagement with frontline security and law enforcement teams.",







  },







  {







    src: asset("engagements/police/police-training-03.jpeg"),







    title: "Knowledge & Awareness",







    description:







      "Sharing knowledge around emerging cyber threats and digital investigations.",







  },







];















/* ==========================================================







   LEADERSHIP







\========================================================== */















const leadershipImages = [







  {







    src: asset("engagements/leadership/leadership-01.jpeg"),







    title: "Cybersecurity Seminar",







    description:







      "Gryphon Cyber leadership participating in cybersecurity discussions and seminars.",







  },







  {







    src: asset("engagements/leadership/leadership-02.jpeg"),







    title: "Industry Engagement",







    description:







      "Connecting with cybersecurity professionals and industry stakeholders.",







  },







  {







    src: asset("engagements/leadership/leadership-03.jpeg"),







    title: "Strategic Discussions",







    description:







      "Leadership engagement around emerging security challenges and technologies.",







  },







  {







    src: asset("engagements/leadership/leadership-04.jpeg"),







    title: "Cybersecurity Community",







    description:







      "Participating in forums that shape the future of cybersecurity.",







  },







];















/* ==========================================================







   EVENTS







\========================================================== */















const eventImages = [







  {







    src: asset("engagements/events/event-01.png"),







    title: "Industry Forum",







    description:







      "Participation in technology and cybersecurity forums.",







  },







  {







    src: asset("engagements/events/event-02.jpeg"),







    title: "Professional Collaboration",







    description:







      "Building meaningful relationships across the security ecosystem.",







  },







  {







    src: asset("engagements/events/event-03.jpeg"),







    title: "Cybersecurity Engagement",







    description:







      "Gryphon Cyber participating in cybersecurity and technology-focused engagements.",







  },







];















/* ==========================================================







   IMAGE CARD







\========================================================== */















function ImageCard({ image, index, onOpen }) {







  return (







    <article







      className={`engagement-image-card ${







        index === 0 ? "engagement-featured-card" : ""







      }`}







      onClick={() => onOpen(image)}







      onKeyDown={(event) => {







        if (event.key === "Enter" || event.key === " ") {







          event.preventDefault();







          onOpen(image);







        }







      }}







      role="button"







      tabIndex={0}







      aria-label={`View ${image.title}`}







    >







      <div className="engagement-image-wrapper">







        <img







          src={image.src}







          alt={image.title}







          loading="lazy"







          onError={(event) => {







            event.currentTarget.style.display = "none";







            event.currentTarget.parentElement?.classList.add(







              "engagement-image-missing"







            );







          }}







        />















        <div







          className="engagement-image-placeholder"







          aria-hidden="true"







        >







          <span className="placeholder-icon">GC</span>







          <span>Add Engagement Image</span>







        </div>















        <div







          className="engagement-image-overlay"







          aria-hidden="true"







        >







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















/* ==========================================================







   ENGAGEMENT SECTION







\========================================================== */















function EngagementSection({







  eyebrow,







  title,







  description,







  images,







  sectionClass = "",







  onOpen,







}) {







  return (







    <section







      className={`engagement-section ${sectionClass}`}







    >







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















/* ==========================================================







   MAIN PAGE







\========================================================== */















export default function Engagements() {







  const [selectedImage, setSelectedImage] =







    useState(null);















  const [mobileMenuOpen, setMobileMenuOpen] =







    useState(false);















  /* ========================================================







     ESCAPE KEY







  ======================================================== */















  useEffect(() => {







    const handleKeyDown = (event) => {







      if (event.key === "Escape") {







        setSelectedImage(null);







        setMobileMenuOpen(false);







      }







    };















    document.addEventListener(







      "keydown",







      handleKeyDown







    );















    return () => {







      document.removeEventListener(







        "keydown",







        handleKeyDown







      );







    };







  }, []);















  /* ========================================================







     RESPONSIVE MOBILE MENU







  ======================================================== */















  useEffect(() => {







    const handleResize = () => {







      if (window.innerWidth > 760) {







        setMobileMenuOpen(false);







      }







    };















    window.addEventListener(







      "resize",







      handleResize







    );















    return () => {







      window.removeEventListener(







        "resize",







        handleResize







      );







    };







  }, []);















  /* ========================================================







     MOBILE BODY LOCK







  ======================================================== */















  useEffect(() => {







    document.body.classList.toggle(







      "engagements-menu-open",







      mobileMenuOpen







    );















    return () => {







      document.body.classList.remove(







        "engagements-menu-open"







      );







    };







  }, [mobileMenuOpen]);















  /* ========================================================







     IMAGE MODAL BODY LOCK







  ======================================================== */















  useEffect(() => {







    if (!selectedImage) return undefined;















    const previousOverflow =







      document.body.style.overflow;















    document.body.style.overflow = "hidden";















    return () => {







      document.body.style.overflow =







        previousOverflow;







    };







  }, [selectedImage]);















  /* ========================================================







     HELPERS







  ======================================================== */















  const closeMobileMenu = () => {







    setMobileMenuOpen(false);







  };















  const closeModal = () => {







    setSelectedImage(null);







  };















  /* ========================================================







     RENDER







  ======================================================== */















  return (







    <div className="engagements-page">















      {/* ==================================================







          NAVBAR







      ================================================== */}















      <header







        className="







          navbar







          gryphon-standard-navbar







          engagements-navbar







        "







      >







        <div







          className="







            nav-container







            engagements-nav-container







          "







        >















          {/* LOGO */}















          <Link







            to="/"







            className="logo-link"







            onClick={closeMobileMenu}







            aria-label="Gryphon Cyber home"







          >







            <NavbarBrand />







          </Link>















          {/* =================================================







              DESKTOP NAVIGATION







          ================================================= */}















          <nav







            className="







              nav-links







              engagements-desktop-nav







            "







            aria-label="Main navigation"







          >







            <Link to="/">







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















            <Link







              to="/engagements"







              className="engagements-nav-link active"







            >







              Engagements







            </Link>

            <Link to="/blog" className="engagements-nav-link">
              Blog
            </Link>















            <Link to="/training">







              Training







            </Link>















            <Link to="/contact">







              Contact







            </Link>







          </nav>















          {/* =================================================







              BLOG BUTTON







          ================================================= */}















          <Link







  to="/blog"







  className="engagements-primary-button"







>







  <span className="engagements-primary-text">







    Explore Our Blog







  </span>















  <span







    className="engagements-primary-arrow"







    aria-hidden="true"







  >







    →







  </span>







</Link>















          {/* =================================================







              MOBILE MENU BUTTON







          ================================================= */}















          <button







            type="button"







            className={`engagements-mobile-toggle ${







              mobileMenuOpen ? "open" : ""







            }`}







            aria-label={







              mobileMenuOpen







                ? "Close navigation menu"







                : "Open navigation menu"







            }







            aria-expanded={mobileMenuOpen}







            aria-controls="engagements-mobile-menu"







            onClick={() =>







              setMobileMenuOpen(







                (open) => !open







              )







            }







          >







            <span />







            <span />







            <span />







          </button>







        </div>















        {/* =================================================







            MOBILE MENU







        ================================================= */}















        {mobileMenuOpen && (







          <div







            id="engagements-mobile-menu"







            className="







              engagements-mobile-menu







            "







            aria-hidden="false"







          >







            <Link







              to="/"







              onClick={closeMobileMenu}







            >







              Home







            </Link>















            <Link







              to="/about"







              onClick={closeMobileMenu}







            >







              About







            </Link>















            <Link







              to="/services"







              onClick={closeMobileMenu}







            >







              Services







            </Link>















            <Link







              to="/solutions"







              onClick={closeMobileMenu}







            >







              Solutions







            </Link>















            <Link







              to="/engagements"







              onClick={closeMobileMenu}







              className="mobile-active-link"







            >







              Engagements







            </Link>

            <Link
              to="/blog"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>



<Link







              to="/training"







              onClick={closeMobileMenu}







            >







              Training







            </Link>















            <Link







              to="/contact"







              onClick={closeMobileMenu}







            >







              Contact







            </Link>







            <Link



              to="/blog"



              className="engagements-mobile-blog"



              onClick={closeMobileMenu}



            >



              <span>Explore Our Blog</span>



              <strong>→</strong>



            </Link>



</div>







        )}







      </header>















      {/* ==================================================







          MAIN







      ================================================== */}















      <main>















        {/* =================================================







            HERO







        ================================================= */}















        <section className="engagements-hero">















          <div className="engagements-hero-grid" />















          <div







            className="







              engagements-hero-glow







              glow-one







            "







          />















          <div







            className="







              engagements-hero-glow







              glow-two







            "







          />















          <div className="engagements-hero-content">















            <div className="engagements-eyebrow">







              <span className="eyebrow-dot" />







              REAL-WORLD CYBERSECURITY







              ENGAGEMENTS







            </div>















            <h1>







              Beyond the Screen.







              <br />







              <span>







                Into the Field.







              </span>







            </h1>















            <p>







              Cybersecurity is not limited







              to technology and systems.







              Gryphon Cyber actively engages







              with law enforcement, security







              professionals, industry leaders







              and organizations to strengthen







              awareness, knowledge and







              operational readiness.







            </p>















            <div className="engagements-hero-stats">















              <div className="hero-stat">







                <strong>01</strong>







                <span>







                  Field Training







                </span>







              </div>















              <div className="hero-stat">







                <strong>02</strong>







                <span>







                  Industry Engagement







                </span>







              </div>















              <div className="hero-stat">







                <strong>03</strong>







                <span>







                  Leadership







                </span>







              </div>















            </div>







          </div>







        </section>















        {/* =================================================







            INTRO







        ================================================= */}















        <section className="engagements-intro">















          <div className="intro-line" />















          <div className="intro-content">















            <span className="section-label">







              GRYPHON CYBER IN ACTION







            </span>















            <h2>







              Turning Knowledge Into







              <span>







                {" "}







                Real-World Impact.







              </span>







            </h2>















            <p>







              Our engagement extends beyond







              the digital environment.







              Through training programs,







              cybersecurity seminars,







              professional forums and







              strategic interactions,







              Gryphon Cyber works with







              people and organizations at







              the forefront of today's







              security challenges.







            </p>















          </div>







        </section>















        {/* =================================================







            POLICE







        ================================================= */}















        <EngagementSection







          eyebrow="LAW ENFORCEMENT"







          title="Empowering Those on the Front Lines"







          description="Gryphon Cyber conducts cybersecurity awareness, technology and knowledge-sharing engagements with law enforcement and security personnel, helping frontline teams better understand emerging digital threats and cyber-enabled challenges."







          images={policeImages}







          sectionClass="police-section"







          onOpen={setSelectedImage}







        />















        {/* =================================================







            LEADERSHIP







        ================================================= */}















        <EngagementSection







          eyebrow="LEADERSHIP & INDUSTRY"







          title="Leadership in the Cybersecurity Community"







          description="Our leadership actively participates in cybersecurity seminars, conferences, professional forums and strategic discussions, staying connected with emerging technologies, threats and the evolving security landscape."







          images={leadershipImages}







          sectionClass="leadership-section"







          onOpen={setSelectedImage}







        />















        {/* =================================================







            EVENTS







        ================================================= */}















        <EngagementSection







          eyebrow="EVENTS & COLLABORATION"







          title="Connecting. Learning. Advancing."







          description="From professional events to knowledge-sharing sessions, Gryphon Cyber continues to connect with the wider cybersecurity ecosystem and contribute to meaningful conversations around digital security."







          images={eventImages}







          sectionClass="events-section"







          onOpen={setSelectedImage}







        />















        {/* =================================================







            CTA







        ================================================= */}















        <section className="engagements-cta">















          <div className="cta-grid" />















          <div className="cta-content">















            <span className="section-label">







              THE NEXT ENGAGEMENT







            </span>















            <h2>







              Building a More







              <span>







                {" "}







                Resilient Digital







                Environment.







              </span>







            </h2>















            <p>







              Explore how Gryphon Cyber







              can support your organization's







              cybersecurity, intelligence and







              operational requirements.







            </p>















            {/* BLOG BUTTON */}















            <Link







              to="/blog"







              className="engagement-cta-button"







            >







              <span>







                Explore Our Blog







              </span>















              <strong>→</strong>







            </Link>















          </div>







        </section>















      </main>















      {/* ==================================================







          FOOTER







      ================================================== */}















      <Footer />















            {/* IMAGE LIGHTBOX */}



      {selectedImage &&



        createPortal(



          <div



            className="engagement-lightbox"



            role="dialog"



            aria-modal="true"



            aria-label={selectedImage.title}



            onClick={closeModal}



            style={{



              position: "fixed",



              inset: 0,



              zIndex: 999999,



              display: "flex",



              alignItems: "center",



              justifyContent: "center",



              padding: "24px",



              boxSizing: "border-box",



              background: "rgba(0, 3, 8, 0.94)",



              backdropFilter: "blur(12px)",



            }}



          >



            <button



              type="button"



              className="lightbox-close"



              onClick={closeModal}



              aria-label="Close image"



              style={{



                position: "fixed",



                top: "18px",



                right: "20px",



                zIndex: 1000001,



                width: "46px",



                height: "46px",



                border: "1px solid rgba(0, 217, 255, 0.55)",



                borderRadius: "50%",



                background: "rgba(2, 8, 13, 0.92)",



                color: "#ffffff",



                fontSize: "30px",



                lineHeight: 1,



                cursor: "pointer",



              }}



            >



              ×



            </button>







            <div



              className="lightbox-content"



              onClick={(event) => event.stopPropagation()}



              style={{



                position: "relative",



                width: "min(1100px, 94vw)",



                maxHeight: "90vh",



                overflow: "auto",



                border: "1px solid rgba(0, 217, 255, 0.25)",



                borderRadius: "14px",



                background: "#030a13",



                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.65)",



              }}



            >



              <img



                key={selectedImage.src}



                src={selectedImage.src}



                alt={selectedImage.title}



                style={{



                  display: "block",



                  width: "100%",



                  maxHeight: "72vh",



                  objectFit: "contain",



                  background: "#000",



                }}



              />







              <div



                className="lightbox-caption"



                style={{



                  padding: "18px 22px 22px",



                  background: "#030a13",



                }}



              >



                <span



                  style={{



                    display: "block",



                    color: "#ffffff",



                    fontSize: "19px",



                    fontWeight: 800,



                  }}



                >



                  {selectedImage.title}



                </span>







                <p



                  style={{



                    margin: "8px 0 0",



                    color: "rgba(255, 255, 255, 0.65)",



                    fontSize: "14px",



                    lineHeight: 1.65,



                  }}



                >



                  {selectedImage.description}



                </p>



              </div>



            </div>



          </div>,



          document.body



        )}



</div>







  );







}
