import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Training() {

  const [activeTraining, setActiveTraining] = useState("cyber");

  useEffect(() => {

    const elements = document.querySelectorAll(
      ".training-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("training-visible");
          }

        });

      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };

  }, []);

  const trainingPrograms = [
    {
      id: "cyber",
      number: "01",
      label: "CYBER INVESTIGATION",
      title: "Cyber Investigation",
      description:
        "Advanced techniques for digital crime scene analysis and evidence preservation.",
      tag: "INVESTIGATION",
      visual: "investigation",
    },

    {
      id: "forensics",
      number: "02",
      label: "FORENSIC ANALYSIS",
      title: "Forensic Analysis",
      description:
        "Deep-dive into digital forensics, data recovery, and chain of custody protocols.",
      tag: "FORENSICS",
      visual: "forensics",
    },

    {
      id: "simulation",
      number: "03",
      label: "SCENARIO SIMULATION",
      title: "Scenario Simulation",
      description:
        "Real-world scenario-based training for hands-on practical experience.",
      tag: "FIELD SIMULATION",
      visual: "simulation",
    },

    {
      id: "interview",
      number: "04",
      label: "INTERVIEW SKILLS",
      title: "Interview Skills",
      description:
        "Enhanced interrogation and intelligence gathering methodologies.",
      tag: "INTELLIGENCE",
      visual: "interview",
    },
  ];

  return (
    <div className="app training-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          <Link
            to="/"
            className="logo-link"
          >
            <span className="navbar-brand-text">
              GRYPHON
            </span>
          </Link>

          <nav className="nav-links">

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
              to="/training"
              className="active"
            >
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


      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="training-hero">

          <div className="training-grid"></div>

          <div className="training-glow training-glow-one"></div>

          <div className="training-glow training-glow-two"></div>


          {/* LEFT */}

          <div className="training-hero-content">

            <div className="training-eyebrow">

              <span></span>

              GRYPHON CYBER • TRAINING & EXPERTISE

            </div>


            <h1>

              Train for the
              <span>
                investigation.
              </span>

            </h1>


            <p>

              Practical cyber investigation training designed
              to equip investigative teams with advanced
              techniques and hands-on experience for modern
              investigations.

            </p>


            <div className="training-hero-actions">

              <a
                href="#training-programs"
                className="training-primary-button"
              >
                Explore Training
                <span>↓</span>
              </a>

              <Link
  to="/training/request"
  className="training-secondary-button"
>
  Request Training
  <span>→</span>
</Link>

            </div>


            <div className="training-hero-meta">

              <div>

                <strong>12+</strong>

                <span>
                  STATES
                </span>

              </div>


              <div>

                <strong>01</strong>

                <span>
                  PRACTICAL FOCUS
                </span>

              </div>


              <div>

                <strong>360°</strong>

                <span>
                  INVESTIGATION
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              TRAINING COMMAND VISUAL
          ================================================= */}

          <div className="training-command">

            <div className="training-command-label">
              TRAINING SYSTEM
            </div>


            <div className="training-radar">

              <div className="training-radar-ring ring-one"></div>

              <div className="training-radar-ring ring-two"></div>

              <div className="training-radar-ring ring-three"></div>


              <div className="training-radar-cross horizontal"></div>

              <div className="training-radar-cross vertical"></div>


              <div className="training-radar-sweep"></div>


              <div className="training-radar-core">

                <span></span>

              </div>


              <div className="training-radar-point point-one">
                <span>01</span>
              </div>

              <div className="training-radar-point point-two">
                <span>02</span>
              </div>

              <div className="training-radar-point point-three">
                <span>03</span>
              </div>

              <div className="training-radar-point point-four">
                <span>04</span>
              </div>

            </div>


            <div className="training-command-data">

              <div>
                <span>MODE</span>
                <strong>FIELD READY</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>ACTIVE</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="training-intro training-reveal">

          <div className="training-section-number">
            01
          </div>


          <div className="training-intro-content">

            <div className="training-section-label">
              TRAINING & EXPERTISE
            </div>

            <h2>

              Beyond tools.
              <span>
                Build capability.
              </span>

            </h2>

            <p>

              Gryphon Cyber's training programs go beyond
              technology demonstrations. The focus is on
              practical knowledge and techniques that
              investigators can apply to real-world
              investigative scenarios.

            </p>

          </div>

        </section>


        {/* =================================================
            TRAINING PROGRAMS
        ================================================= */}

        <section
          className="training-programs"
          id="training-programs"
        >

          <div className="training-section-header training-reveal">

            <div>

              <div className="training-section-label">
                02 — CORE PROGRAMS
              </div>

              <h2>
                Investigation
                <span>
                  in practice.
                </span>
              </h2>

            </div>

            <p>

              Four core training areas designed around
              practical investigative capability.

            </p>

          </div>


          <div className="training-program-layout">


            {/* PROGRAM LIST */}

            <div className="training-program-list">

              {trainingPrograms.map((program) => (

                <button
                  key={program.id}
                  type="button"
                  className={
                    `training-program-item ${
                      activeTraining === program.id
                        ? "active"
                        : ""
                    }`
                  }
                  onClick={() =>
                    setActiveTraining(program.id)
                  }
                >

                  <span className="training-program-number">
                    {program.number}
                  </span>

                  <span className="training-program-name">
                    {program.label}
                  </span>

                  <span className="training-program-arrow">
                    →
                  </span>

                </button>

              ))}

            </div>


            {/* PROGRAM DETAIL */}

            <div className="training-program-detail">

              {trainingPrograms.map((program) => (

                <div
                  key={program.id}
                  className={
                    `training-detail-panel ${
                      activeTraining === program.id
                        ? "active"
                        : ""
                    }`
                  }
                >

                  <div className="training-detail-top">

                    <span>
                      {program.number}
                    </span>

                    <span>
                      {program.tag}
                    </span>

                  </div>


                  <div
                    className={`training-detail-visual training-visual-${program.visual}`}
                  >

                    <div className="training-detail-grid"></div>

                    {/* =================================================
                        CYBER INVESTIGATION
                    ================================================= */}

                    {program.visual === "investigation" && (
                      <div className="visual-investigation">

                        <div className="investigation-target">
                          <div className="target-ring target-ring-one"></div>
                          <div className="target-ring target-ring-two"></div>
                          <div className="target-cross horizontal"></div>
                          <div className="target-cross vertical"></div>

                          <div className="target-core">
                            CYBER
                          </div>
                        </div>

                        <div className="investigation-node investigation-node-one">
                          <span></span>
                          DEVICE
                        </div>

                        <div className="investigation-node investigation-node-two">
                          <span></span>
                          IP TRACE
                        </div>

                        <div className="investigation-node investigation-node-three">
                          <span></span>
                          EVIDENCE
                        </div>

                        <div className="investigation-node investigation-node-four">
                          <span></span>
                          TIMELINE
                        </div>

                        <div className="investigation-line investigation-line-one"></div>
                        <div className="investigation-line investigation-line-two"></div>
                        <div className="investigation-line investigation-line-three"></div>
                        <div className="investigation-line investigation-line-four"></div>

                        <div className="investigation-scan"></div>

                      </div>
                    )}

                    {/* =================================================
                        FORENSIC ANALYSIS
                    ================================================= */}

                    {program.visual === "forensics" && (
                      <div className="visual-forensics">

                        <div className="forensic-disk">
                          <div className="forensic-disk-inner"></div>

                          <div className="forensic-disk-center">
                            DATA
                          </div>
                        </div>

                        <div className="forensic-file file-one">
                          <span>FILE</span>
                          <strong>01</strong>
                        </div>

                        <div className="forensic-file file-two">
                          <span>HASH</span>
                          <strong>02</strong>
                        </div>

                        <div className="forensic-file file-three">
                          <span>IMAGE</span>
                          <strong>03</strong>
                        </div>

                        <div className="forensic-data-line data-line-one"></div>
                        <div className="forensic-data-line data-line-two"></div>
                        <div className="forensic-data-line data-line-three"></div>

                        <div className="forensic-scan"></div>

                        <div className="forensic-status">
                          EVIDENCE INTEGRITY
                          <strong>VERIFIED</strong>
                        </div>

                      </div>
                    )}

                    {/* =================================================
                        SCENARIO SIMULATION
                    ================================================= */}

                    {program.visual === "simulation" && (
                      <div className="visual-simulation">

                        <div className="simulation-grid"></div>

                        <div className="simulation-zone zone-one">A</div>
                        <div className="simulation-zone zone-two">B</div>
                        <div className="simulation-zone zone-three">C</div>
                        <div className="simulation-zone zone-four">D</div>

                        <div className="simulation-route route-one"></div>
                        <div className="simulation-route route-two"></div>
                        <div className="simulation-route route-three"></div>

                        <div className="simulation-pulse pulse-one"></div>
                        <div className="simulation-pulse pulse-two"></div>
                        <div className="simulation-pulse pulse-three"></div>

                        <div className="simulation-center">
                          <span>SCENARIO</span>
                          <strong>ACTIVE</strong>
                        </div>

                      </div>
                    )}

                    {/* =================================================
                        INTERVIEW SKILLS
                    ================================================= */}

                    {program.visual === "interview" && (
                      <div className="visual-interview">

                        <div className="interview-person person-one">
                          <span>I</span>
                        </div>

                        <div className="interview-person person-two">
                          <span>S</span>
                        </div>

                        <div className="interview-connection connection-one"></div>
                        <div className="interview-connection connection-two"></div>
                        <div className="interview-connection connection-three"></div>

                        <div className="interview-wave">
                          <span></span><span></span><span></span><span></span>
                          <span></span><span></span><span></span><span></span>
                          <span></span><span></span><span></span><span></span>
                        </div>

                        <div className="interview-data interview-data-one">
                          QUESTION
                        </div>

                        <div className="interview-data interview-data-two">
                          RESPONSE
                        </div>

                        <div className="interview-data interview-data-three">
                          INTELLIGENCE
                        </div>

                        <div className="interview-scan"></div>

                      </div>
                    )}

                  </div>


                  <h3>
                    {program.title}
                  </h3>


                  <p>
                    {program.description}
                  </p>


                  <div className="training-detail-status">

                    <span className="status-dot"></span>

                    TRAINING MODULE

                    <strong>
                      ACTIVE
                    </strong>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            TRAINING METHOD
        ================================================= */}

        <section className="training-method">

          <div className="training-method-header training-reveal">

            <div className="training-section-label">
              03 — TRAINING METHOD
            </div>

            <h2>

              Learn.
              <span>
                Simulate.
              </span>
              Apply.

            </h2>

          </div>


          <div className="training-method-flow">

            <div className="training-method-progress">
              <span className="training-flow-line"></span>
              <span className="training-flow-pulse"></span>
            </div>

            <div className="training-method-grid">

              <div
                className="training-method-card training-reveal"
                data-step="01"
              >
                <span>01</span>

                <div className="training-method-icon">
                  ◇
                </div>

                <h3>
                  Learn
                </h3>

                <p>
                  Develop the foundational knowledge and
                  investigative methodologies required for
                  modern cyber investigations.
                </p>

              </div>


              <div
                className="training-method-card training-reveal"
                data-step="02"
              >
                <span>02</span>

                <div className="training-method-icon">
                  ◎
                </div>

                <h3>
                  Simulate
                </h3>

                <p>
                  Apply concepts through scenario-based
                  training and practical investigative
                  situations.
                </p>

              </div>


              <div
                className="training-method-card training-reveal"
                data-step="03"
              >
                <span>03</span>

                <div className="training-method-icon">
                  +
                </div>

                <h3>
                  Investigate
                </h3>

                <p>
                  Develop hands-on capability across cyber
                  investigation and forensic analysis.
                </p>

              </div>


              <div
                className="training-method-card training-reveal"
                data-step="04"
              >
                <span>04</span>

                <div className="training-method-icon">
                  →
                </div>

                <h3>
                  Apply
                </h3>

                <p>
                  Translate training into practical
                  investigative capability in operational
                  environments.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            TRAINING IMPACT
        ================================================= */}

        <section className="training-impact">

          <div className="training-impact-grid"></div>


          <div className="training-impact-content training-reveal">

            <div className="training-section-label">
              04 — FIELD EXPERIENCE
            </div>

            <h2>

              Training built for
              <span>
                real investigations.
              </span>

            </h2>

            <p>

              The training approach emphasizes practical
              investigative skills, scenario simulation,
              evidence handling and intelligence gathering
              methodologies.

            </p>

          </div>


          <div className="training-impact-stats">

            <div className="training-impact-stat">

              <strong>
                12+
              </strong>

              <span>
                STATES
              </span>

              <p>
                Training delivered to law enforcement
                agencies across India.
              </p>

            </div>


            <div className="training-impact-stat">

              <strong>
                04
              </strong>

              <span>
                CORE AREAS
              </span>

              <p>
                Cyber investigation, forensics, simulation
                and interview skills.
              </p>

            </div>


            <div className="training-impact-stat">

              <strong>
                01
              </strong>

              <span>
                OBJECTIVE
              </span>

              <p>
                Upskilling investigative personnel with
                practical capabilities.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <section className="training-cta training-reveal">

          <div className="training-cta-grid"></div>

          <div className="training-cta-glow"></div>


          <div className="training-cta-content">

            <div className="training-section-label">
              05 — START A TRAINING PROGRAM
            </div>

            <h2>

              Build your
              <span>
                investigative capability.
              </span>

            </h2>

            <p>

              Connect with Gryphon Cyber to discuss
              training requirements for your team.

            </p>


            <Link
              to="/contact"
              className="training-cta-button"
            >
              Discuss Training
              <span>→</span>
            </Link>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-logo">
              GRYPHON
            </div>

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
              Training
            </h3>

            <a href="#training-programs">
              Training Programs
            </a>

            <a href="#training-programs">
              Cyber Investigation
            </a>

            <a href="#training-programs">
              Forensic Analysis
            </a>

            <a href="#training-programs">
              Scenario Simulation
            </a>

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

export default Training;