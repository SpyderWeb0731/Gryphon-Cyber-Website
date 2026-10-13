import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import gryphonLogo from "../assets/gryphon-logo.png";

import "../App.css";
import Footer from "../components/Footer";

function BookDemo() {

  const [submitted, setSubmitted] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(() =>

    typeof window !== "undefined" ? window.matchMedia("(max-width: 760px)").matches : false

  );

  useEffect(() => {

    const media = window.matchMedia("(max-width: 760px)");

    const updateViewport = () => setIsMobile(media.matches);

    updateViewport();

    media.addEventListener("change", updateViewport);

    return () => media.removeEventListener("change", updateViewport);

  }, []);

  const [formData, setFormData] = useState({

    name: "",

    organization: "",

    email: "",

    phone: "",

    designation: "",

    demoType: "",

    preferredDate: "",

    preferredTime: "",

    requirements: "",

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(

      "http://localhost:5000/api/book-demo",

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          name: formData.name,

          organization: formData.organization,

          designation: formData.designation,

          email: formData.email,

          phone: formData.phone,

          demoType: formData.demoType,

          preferredDate: formData.preferredDate,

          preferredTime: formData.preferredTime,

          requirements: formData.requirements,

        }),

      }

    );

    const data = await response.json();

    if (!response.ok) {

      throw new Error(

        data.message || "Unable to save demo request." 

      );

    }

    setSubmitted(true);

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  } catch (error) {

    console.error("Book Demo submission error:", error);

    alert(

      "Unable to submit your demo request.\n\n" +

      "Please make sure the Gryphon Cyber backend server is running."

    );

  }

};

  return (

    <div className="app book-demo-page">

      <style>{`

          .book-demo-responsive-navbar { position: relative; z-index: 1000; }

          .book-demo-responsive-navbar .book-demo-nav-container { min-width: 0; }

          .book-demo-responsive-navbar .navbar-logo { max-width: 100%; height: auto; object-fit: contain; }

          .book-demo-mobile-toggle { display: flex; width: 44px; height: 44px; flex: 0 0 44px; padding: 11px; flex-direction: column; justify-content: center; gap: 5px; align-items: center; border: 1px solid #00c6e8; border-radius: 11px; background: #06111f; cursor: pointer; }

          .book-demo-mobile-toggle span { display: block; width: 19px; height: 2px; background: #fff; border-radius: 2px; transition: transform .2s ease, opacity .2s ease; }

          .book-demo-mobile-toggle.is-open span:first-child { transform: translateY(7px) rotate(45deg); }

          .book-demo-mobile-toggle.is-open span:nth-child(2) { opacity: 0; }

          .book-demo-mobile-toggle.is-open span:last-child { transform: translateY(-7px) rotate(-45deg); }

          .book-demo-mobile-menu { position: absolute; top: 100%; left: 0; right: 0; z-index: 1001; display: flex; flex-direction: column; gap: 4px; max-height: calc(100dvh - 76px); overflow-y: auto; padding: 14px 16px 18px; background: #04101f; border-top: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.12); box-shadow: 0 18px 35px rgba(0,0,0,.35); }

          .book-demo-mobile-menu > a { display: flex; align-items: center; justify-content: space-between; width: 100%; min-height: 46px; padding: 12px 14px; color: #edf4fb; text-decoration: none; border-radius: 9px; box-sizing: border-box; }

          .book-demo-mobile-menu .book-demo-mobile-cta { justify-content: center; gap: 10px; margin-top: 8px; background: #1764e8; color: #fff; font-weight: 700; text-align: center; }

          .book-demo-page, .book-demo-page \* { box-sizing: border-box; }

          .book-demo-page { width: 100%; max-width: 100%; overflow-x: clip; }

          .book-demo-page .demo-container, .book-demo-page .demo-form, .book-demo-page .demo-form-grid, .book-demo-page .demo-form-section, .book-demo-page .demo-field { min-width: 0; }

          .book-demo-page input, .book-demo-page select, .book-demo-page textarea, .book-demo-page button { max-width: 100%; font: inherit; }

          .book-demo-page input, .book-demo-page select, .book-demo-page textarea { width: 100%; }

          @media (max-width: 760px) {

            .book-demo-responsive-navbar { width: 100%; }

            .book-demo-responsive-navbar .nav-container { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; min-height: 76px; padding: 12px 18px; }

            .book-demo-responsive-navbar .logo-link { display: flex; align-items: center; min-width: 0; max-width: calc(100% - 60px); }

            .book-demo-responsive-navbar .navbar-logo { width: auto; max-width: 150px; max-height: 48px; }

            .book-demo-page .demo-page { padding-left: 18px; padding-right: 18px; }

            .book-demo-page .demo-container { width: 100%; max-width: 100%; }

            .book-demo-page .demo-heading h1 { font-size: clamp(2.4rem, 11vw, 4rem); line-height: .98; overflow-wrap: anywhere; }

            .book-demo-page .demo-heading p { font-size: 14px; line-height: 1.8; }

            .book-demo-page .demo-form-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 18px; }

            .book-demo-page .demo-form-section { padding: 20px 16px; }

            .book-demo-page .demo-field { width: 100%; }

            .book-demo-page .demo-field input, .book-demo-page .demo-field select, .book-demo-page .demo-field textarea { min-width: 0; width: 100%; font-size: 16px; }

            .book-demo-page .demo-submit-area { display: flex; flex-direction: column; align-items: stretch; gap: 16px; }

            .book-demo-page .demo-submit-button { width: 100%; justify-content: center; }

            .book-demo-page .footer-container { grid-template-columns: minmax(0, 1fr) !important; gap: 28px; }

            .book-demo-page .footer-bottom { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }

          }

          @media (min-width: 761px) and (max-width: 1024px) {

            .book-demo-page .demo-form-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

            .book-demo-responsive-navbar .nav-container { gap: 16px; }

            .book-demo-responsive-navbar .nav-links { gap: 14px; }

          }

          @media (prefers-reduced-motion: reduce) { .book-demo-mobile-toggle span { transition: none; } }

        `}</style>

      {/* =================================================

          NAVBAR

      ================================================= */}

      <header className="navbar book-demo-responsive-navbar">

        <div className="nav-container book-demo-nav-container">

          <Link to="/" className="logo-link" onClick={() => setMobileMenuOpen(false)}>

            <img src={gryphonLogo} alt="Gryphon Cyber Private Limited" className="navbar-logo" />

          </Link>

          {!isMobile && (

            <>

              <nav className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/services">Services</Link>

                <Link to="/solutions">Solutions</Link>

                <Link to="/training">Training</Link>

                <Link to="/contact">Contact</Link>

              </nav>

              <Link to="/book-demo" className="demo-button active-demo-button">

                Book a Demo <span>→</span>

              </Link>

            </>

          )}

          {isMobile && (

            <button

              type="button"

              className={`book-demo-mobile-toggle ${mobileMenuOpen ? "is-open" : ""}`}

              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}

              aria-expanded={mobileMenuOpen}

              onClick={() => setMobileMenuOpen((open) => !open)}

            >

              <span />

              <span />

              <span />

            </button>

          )}

        </div>

        {isMobile && mobileMenuOpen && (

          <nav className="book-demo-mobile-menu" aria-label="Mobile navigation">

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>

            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>

            <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>

            <Link to="/training" onClick={() => setMobileMenuOpen(false)}>Training</Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            <Link to="/book-demo" className="book-demo-mobile-cta" onClick={() => setMobileMenuOpen(false)}>

              Book a Demo <span>→</span>

            </Link>

          </nav>

        )}

      </header>

      {/* =================================================

          BOOK DEMO HERO

      ================================================= */}

      <main>

        <section className="demo-page">

          <div className="demo-background-grid"></div>

          <div className="demo-glow"></div>

          <div className="demo-container">

            <div className="demo-heading">

              <div className="demo-label">

                GRYPHON CYBER • DEMONSTRATION

              </div>

              <h1>

                Book a

                <span>

                  private demo.

                </span>

              </h1>

              <p>

                Tell us about your organization and requirements.

                Our team will arrange a focused demonstration

                of the relevant Gryphon Cyber capabilities.

              </p>

            </div>

            {/* =================================================

                SUCCESS MESSAGE

            ================================================= */}

            {submitted ? (

              <div className="demo-success">

                <div className="demo-success-icon">

                  ✓

                </div>

                <div>

                  <div className="demo-success-label">

                    REQUEST RECEIVED

                  </div>

                  <h2>

                    Thank you.

                  </h2>

                  <p>

                    Your demo request has been recorded.

                    Our team will review the information

                    and coordinate the next steps.

                  </p>

                  <button

                    type="button"

                    className="demo-secondary-button"

                    onClick={() => {

                      setSubmitted(false);

                      setFormData({

                        name: "",

                        organization: "",

                        email: "",

                        phone: "",

                        designation: "",

                        demoType: "",

                        preferredDate: "",

                        preferredTime: "",

                        requirements: "",

                      });

                    }}

                  >

                    Submit another request

                  </button>

                </div>

              </div>

            ) : (

              <form

                className="demo-form"

                onSubmit={handleSubmit}

              >

                {/* =========================

                    PERSONAL DETAILS

                ========================= */}

                <div className="demo-form-section">

                  <div className="demo-form-section-title">

                    01

                    <span>

                      CONTACT INFORMATION

                    </span>

                  </div>

                  <div className="demo-form-grid">

                    <div className="demo-field">

                      <label htmlFor="name">

                        Full Name \*

                      </label>

                      <input

                        id="name"

                        name="name"

                        type="text"

                        placeholder="Enter your full name"

                        value={formData.name}

                        onChange={handleChange}

                        required

                      />

                    </div>

                    <div className="demo-field">

                      <label htmlFor="designation">

                        Designation

                      </label>

                      <input

                        id="designation"

                        name="designation"

                        type="text"

                        placeholder="Your designation"

                        value={formData.designation}

                        onChange={handleChange}

                      />

                    </div>

                    <div className="demo-field">

                      <label htmlFor="organization">

                        Organization \*

                      </label>

                      <input

                        id="organization"

                        name="organization"

                        type="text"

                        placeholder="Organization / Department"

                        value={formData.organization}

                        onChange={handleChange}

                        required

                      />

                    </div>

                    <div className="demo-field">

                      <label htmlFor="email">

                        Official Email \*

                      </label>

                      <input

                        id="email"

                        name="email"

                        type="email"

                        placeholder="name@organization.com"

                        value={formData.email}

                        onChange={handleChange}

                        required

                      />

                    </div>

                    <div className="demo-field">

                      <label htmlFor="phone">

                        Phone Number \*

                      </label>

                      <input

                        id="phone"

                        name="phone"

                        type="tel"

                        placeholder="+91 XXXXX XXXXX"

                        value={formData.phone}

                        onChange={handleChange}

                        required

                      />

                    </div>

                  </div>

                </div>

                {/* =========================

                    DEMO DETAILS

                ========================= */}

                <div className="demo-form-section">

                  <div className="demo-form-section-title">

                    02

                    <span>

                      DEMONSTRATION DETAILS

                    </span>

                  </div>

                  <div className="demo-form-grid">

                    <div className="demo-field">

                      <label htmlFor="demoType">

                        Area of Interest \*

                      </label>

                      <select

                        id="demoType"

                        name="demoType"

                        value={formData.demoType}

                        onChange={handleChange}

                        required

                      >

                        <option value="">

                          Select an area

                        </option>

                        <option value="SAKSHAM">

                          SAKSHAM — Predictive Intelligence

                        </option>

                        <option value="SPIDER">

                          SPIDER — Unified Intelligence Search

                        </option>

                        <option value="OVERSIGHT">

                          OVERSIGHT — Network Analysis

                        </option>

                        <option value="LAWSYNC">

                          LawSync — Digital Policing

                        </option>

                        <option value="Cyber Security">

                          Cyber Security

                        </option>

                        <option value="Training">

                          Training Programs

                        </option>

                        <option value="Custom">

                          Custom Requirement

                        </option>

                      </select>

                    </div>

                    <div className="demo-field">

                      <label htmlFor="preferredDate">

                        Preferred Date \*

                      </label>

                      <input

                        id="preferredDate"

                        name="preferredDate"

                        type="date"

                        value={formData.preferredDate}

                        onChange={handleChange}

                        required

                      />

                    </div>

                    <div className="demo-field">

                      <label htmlFor="preferredTime">

                        Preferred Time \*

                      </label>

                      <select

                        id="preferredTime"

                        name="preferredTime"

                        value={formData.preferredTime}

                        onChange={handleChange}

                        required

                      >

                        <option value="">

                          Select a time

                        </option>

                        <option value="10:00 AM">

                          10:00 AM

                        </option>

                        <option value="11:00 AM">

                          11:00 AM

                        </option>

                        <option value="12:00 PM">

                          12:00 PM

                        </option>

                        <option value="2:00 PM">

                          2:00 PM

                        </option>

                        <option value="3:00 PM">

                          3:00 PM

                        </option>

                        <option value="4:00 PM">

                          4:00 PM

                        </option>

                        <option value="5:00 PM">

                          5:00 PM

                        </option>

                      </select>

                    </div>

                  </div>

                </div>

                {/* =========================

                    REQUIREMENTS

                ========================= */}

                <div className="demo-form-section">

                  <div className="demo-form-section-title">

                    03

                    <span>

                      REQUIREMENTS

                    </span>

                  </div>

                  <div className="demo-field">

                    <label htmlFor="requirements">

                      Tell us about your requirement

                    </label>

                    <textarea

                      id="requirements"

                      name="requirements"

                      rows="6"

                      placeholder="Briefly describe your use case, operational requirement, or the capabilities you would like to explore."

                      value={formData.requirements}

                      onChange={handleChange}

                    />

                  </div>

                </div>

                {/* =========================

                    SUBMIT

                ========================= */}

                <div className="demo-submit-area">

                  <p>

                    By submitting this form, you are requesting

                    a demonstration and follow-up from Gryphon Cyber.

                  </p>

                  <button

                    type="submit"

                    className="demo-submit-button"

                  >

                    Request Demo

                    <span>→</span>

                  </button>

                </div>

              </form>

            )}

          </div>

        </section>

      </main>

      {/* =================================================

          FOOTER

      ================================================= */}

      <Footer />

    </div>

  );

} 

export default BookDemo;