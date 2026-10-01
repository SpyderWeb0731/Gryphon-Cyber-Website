import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import gryphonLogo from "../assets/gryphon-logo.png";


function Solutions() {

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
          >

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

            <Link to="/services">
              Services
            </Link>

            <Link
              to="/solutions"
              className="active"
            >
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

            <span>
              →
            </span>

          </Link>


        </div>

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

      <footer className="footer">


        <div className="footer-container">


          {/* FOOTER BRAND */}

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



          {/* COMPANY */}

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



          {/* SOLUTIONS */}

          <div className="footer-column">


            <h3>
              Solutions
            </h3>


            <Link to="/solutions#saksham">
              SAKSHAM
            </Link>


            <Link to="/solutions#spider">
              SPIDER
            </Link>


            <Link to="/solutions#oversight">
              OVERSIGHT
            </Link>


            <Link to="/solutions#lawsync">
              LawSync
            </Link>


          </div>



          {/* CONTACT */}

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


export default Solutions;