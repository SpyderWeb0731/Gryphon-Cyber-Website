import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import gryphonLogo from "../assets/gryphon-logo.png";

function About() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".about-reveal, .about-capability-card, .about-why-item, .about-leader-card"
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

      <header className="navbar about-navbar">
        <div className="nav-container">

          <Link to="/" className="logo-link">
            <img
              src={gryphonLogo}
              alt="Gryphon Cyber"
              className="navbar-logo"
            />
          </Link>

          <nav className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link
              to="/about"
              className="active"
            >
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
            to="/contact"
            className="talk-button"
          >
            Talk to Us
            <span>→</span>
          </Link>

        </div>
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

            <div className="about-eyebrow">
              <span className="about-eyebrow-dot"></span>
              ABOUT GRYPHON CYBER
            </div>

            <h1>
              Beyond the
              <span> visible.</span>
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
              NEW 3D INTELLIGENCE CORE
          ================================================= */}

          <div
            className="about-core-stage"
          >

            <div className="about-core-label core-label-top">
              INTELLIGENCE CORE
            </div>

            <div className="about-core-label core-label-right">
              SYSTEM / 01
            </div>

            <div className="about-core-label core-label-bottom">
              ANALYSIS • OPERATIONS • SECURITY
            </div>


            <div className="about-core">

              {/* Outer rotating architecture */}

              <div className="core-orbit core-orbit-one">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="core-orbit core-orbit-two">
                <span></span>
                <span></span>
              </div>

              <div className="core-orbit core-orbit-three">
                <span></span>
              </div>


              {/* Glass outer shell */}

              <div className="core-shell">

                <div className="core-shell-line line-one"></div>
                <div className="core-shell-line line-two"></div>
                <div className="core-shell-line line-three"></div>
                <div className="core-shell-line line-four"></div>

              </div>


              {/* =================================================
                  CENTRAL 3D GRYPHON CUBE
              ================================================= */}

              <div className="core-crystal">

                <div className="crystal-face crystal-front">
                  <span>G</span>
                </div>

                <div className="crystal-face crystal-back"></div>
                <div className="crystal-face crystal-left"></div>
                <div className="crystal-face crystal-right"></div>
                <div className="crystal-face crystal-top"></div>
                <div className="crystal-face crystal-bottom"></div>

                <div className="crystal-core-light"></div>

              </div>


              {/* Data particles */}

              <div className="core-particle particle-one"></div>
              <div className="core-particle particle-two"></div>
              <div className="core-particle particle-three"></div>
              <div className="core-particle particle-four"></div>
              <div className="core-particle particle-five"></div>
              <div className="core-particle particle-six"></div>
              <div className="core-particle particle-seven"></div>
              <div className="core-particle particle-eight"></div>


              {/* Scanning beam */}

              <div className="core-scan"></div>

            </div>


            <div className="core-status">

              <span className="core-status-dot"></span>

              <span>
                INTELLIGENCE SYSTEM
              </span>

              <strong>
                ONLINE
              </strong>

            </div>

          </div>

        </section>



        {/* ===================================================
            WHO WE ARE
        =================================================== */}

        <section
          className="about-section about-who"
          id="who-we-are"
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
                  ◇
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
                  ◎
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
                  +
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
                  ⊙
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
    INSTITUTIONAL REACH
=================================================== */}

{/* ===================================================
    3D INSTITUTIONAL SERVICES
=================================================== */}

<section className="about-3d-services">

  {/* Background */}

  <div className="services-3d-grid"></div>

  <div className="services-3d-glow"></div>


  {/* Header */}

  <div className="services-3d-header about-reveal">

    <div className="services-3d-eyebrow">

      <span></span>

      <strong>
        INSIGHTS
      </strong>

      <span></span>

    </div>


    <h2>
      We Provide
      <span> Services.</span>
    </h2>


    <p>
      Supporting institutions with intelligence,
      technology and operational capabilities.
    </p>

  </div>



  {/* =================================================
      3D LOGO STAGE
  ================================================= */}

  <div className="services-3d-stage">


    {/* Central light */}

    <div className="services-3d-center-light"></div>


    {/* Horizontal energy line */}

    <div className="services-energy-line">

      <span></span>

    </div>



    {/* ===============================================
        LOGO 01
    =============================================== */}

    <div className="service-logo-object service-logo-one">

      <div className="logo-object-shadow"></div>

      <div className="logo-object-platform">

        <div className="logo-platform-edge"></div>

        <div className="logo-image-wrap">

          <img
            src="/logos/service-logo-1.png"
            alt="Institutional service partner"
          />

        </div>

        <div className="logo-scan-line"></div>

      </div>


      <div className="logo-object-orbit">

        <span></span>

      </div>


      <div className="logo-object-label">

        <span>01</span>

        <strong>
          MAHARASHTRA POLICE
        </strong>

      </div>

    </div>



    {/* ===============================================
        LOGO 02
    =============================================== */}

    <div className="service-logo-object service-logo-two">

      <div className="logo-object-shadow"></div>

      <div className="logo-object-platform">

        <div className="logo-platform-edge"></div>

        <div className="logo-image-wrap">

          <img
            src="/logos/service-logo-2.png"
            alt="Institutional service partner"
          />

        </div>

        <div className="logo-scan-line"></div>

      </div>


      <div className="logo-object-orbit">

        <span></span>

      </div>


      <div className="logo-object-label">

        <span>02</span>

        <strong>
          ARUNACHAL PRADESH POLICE
        </strong>

      </div>

    </div>



    {/* ===============================================
        LOGO 03
    =============================================== */}

    <div className="service-logo-object service-logo-three">

      <div className="logo-object-shadow"></div>

      <div className="logo-object-platform">

        <div className="logo-platform-edge"></div>

        <div className="logo-image-wrap">

          <img
            src="/logos/service-logo-3.png"
            alt="Institutional service partner"
          />

        </div>

        <div className="logo-scan-line"></div>

      </div>


      <div className="logo-object-orbit">

        <span></span>

      </div>


      <div className="logo-object-label">

        <span>03</span>

        <strong>
          FIELD NETWORK
        </strong>

      </div>

    </div>

    {/* ===============================================
    LOGO 04
=============================================== */}

<div className="service-logo-object service-logo-four">

  <div className="logo-object-shadow"></div>

  <div className="logo-object-platform">

    <div className="logo-platform-edge"></div>

    <div className="logo-image-wrap">

      <img
        src="/logos/service-logo-4.png"
        alt="Institutional service partner"
      />

    </div>

    <div className="logo-scan-line"></div>

  </div>


  <div className="logo-object-orbit">

    <span></span>

  </div>


  <div className="logo-object-label">

    <span>04</span>

    <strong>
      WEST BENGAL POLICE
    </strong>

  </div>

</div>


  </div>



  {/* Bottom system information */}

  <div className="services-3d-status">

    <div>

      <span className="services-status-dot"></span>

      <strong>
        OPERATIONAL NETWORK
      </strong>

    </div>


    <span className="services-status-divider"></span>


    <div>
      INTELLIGENCE
      <span>•</span>
      TECHNOLOGY
      <span>•</span>
      OPERATIONS
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
      src="/logos/govind-ray.png"
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
                    MANAGING DIRECTOR
                  </span>

                </div>


                <div className="leader-avatar leader-avatar-second">

                  <div className="leader-avatar-ring"></div>

                  <div className="leader-avatar-core leader-photo-core">
                    <img
                      src="/logos/sm-sahai.png"
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
                    Managing Director
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

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          <div className="footer-column">

            <h3>
              Solutions
            </h3>

            <Link to="/solutions">
              SAKSHAM
            </Link>

            <Link to="/solutions">
              SPIDER
            </Link>

            <Link to="/solutions">
              OVERSIGHT
            </Link>

            <Link to="/solutions">
              LawSync
            </Link>

          </div>


          <div className="footer-column">

            <h3>
              Contact
            </h3>

            <Link to="/contact">
              Contact Gryphon
            </Link>

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
  );
}

export default About;