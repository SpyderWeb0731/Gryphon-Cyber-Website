import { Link } from 'react-router-dom'
import '../App.css'
import gryphonLogo from "../assets/gryphon-logo.png";

function Services() {
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

      {/* NAVBAR */}

      <header className="navbar">
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

            <Link to="/about">
              About
            </Link>

            <Link
              to="/services"
              className="active"
            >
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


      {/* PAGE HERO */}

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


        {/* SERVICES */}

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
                        <span>+</span>
                        {capability}
                      </div>
                    )
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* CTA */}

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


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-logo-text">
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
  )
}

export default Services