import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "../App.css";

import gryphonLogo from "../assets/gryphon-logo.png";

import Footer from "../components/Footer";

function Contact() {

  const [form, setForm] = useState({

    name: "",

    organization: "",

    email: "",

    phone: "",

    subject: "",

    message: "",

  });

  const [sent, setSent] = useState(false);

  const [errors, setErrors] = useState({

    email: "",

    phone: "",

  });

  const [isMobile, setIsMobile] = useState(

    () => typeof window !== "undefined" && window.innerWidth <= 760

  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 760px)");

    const handleViewportChange = (event) => {

      setIsMobile(event.matches);

      if (!event.matches) setMobileMenuOpen(false);

    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => mediaQuery.removeEventListener("change", handleViewportChange);

  }, []);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({

      ...prev,

      [name]: value,

    }));

    /* Clear validation error when user edits the field */

    if (name === "email" || name === "phone") {

      setErrors((previous) => ({

        ...previous,

        [name]: "",

      }));

    }

    /* Reset success state when user starts a new enquiry */

    if (sent) {

      setSent(false);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    /* =====================================================

       VALIDATION REGEX

    ===================================================== */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^(?:\+91[\s-]?|0)?[6-9]\d{9}$/;

    const email = form.email.trim();

    const phone = form.phone.trim();

    const newErrors = {

      email: "",

      phone: "",

    };

    /* =====================================================

       EMAIL VALIDATION

    ===================================================== */

    if (!emailRegex.test(email)) {

      newErrors.email = "Please enter a valid email address.";

    }

    /* =====================================================

       PHONE VALIDATION

       Phone is optional on Contact page.

       If entered, it must be a valid Indian mobile number.

    ===================================================== */

    if (phone) {

      const cleanedPhone = phone.replace(/[\s-]/g, "");

      if (!phoneRegex.test(cleanedPhone)) {

        newErrors.phone =

          "Please enter a valid Indian mobile number.";

      }

    }

    /* =====================================================

       SHOW EMAIL / PHONE VALIDATION ERRORS

    ===================================================== */

    if (newErrors.email || newErrors.phone) {

      setErrors(newErrors);

      if (newErrors.email && newErrors.phone) {

        alert(

          "Please correct the following:\n\n" +

            "• Invalid email address\n" +

            "• Invalid Indian mobile number"

        );

      } else if (newErrors.email) {

        alert(

          "Please enter a valid email address.\n\n" +

            "Example: name@organization.com"

        );

      } else if (newErrors.phone) {

        alert(

          "Please enter a valid Indian mobile number.\n\n" +

            "Example: 9876543210"

        );

      }

      return;

    }

    /* =====================================================

       REQUIRED FIELD VALIDATION

    ===================================================== */

    if (!form.name.trim()) {

      alert("Please enter your full name.");

      return;

    }

    if (!form.email.trim()) {

      alert("Please enter your email address.");

      return;

    }

    if (!form.subject) {

      alert("Please select an enquiry type.");

      return;

    }

    if (!form.message.trim()) {

      alert("Please enter your message.");

      return;

    }

    /* =====================================================

       SEND DATA TO BACKEND

       Backend:

       http://localhost:5000/api/contact

       The backend saves this information into:

       Gryphon_Submissions.xlsx

       Sheet:

       Contact Enquiries

    ===================================================== */

    try {

      const response = await fetch(

        "http://localhost:5000/api/contact",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({

            name: form.name,

            organization: form.organization,

            email: form.email,

            phone: form.phone,

            subject: form.subject,

            message: form.message,

          }),

        }

      );

      const data = await response.json();

      /* =====================================================

         BACKEND ERROR

      ===================================================== */

      if (!response.ok) {

        throw new Error(

          data.message || "Unable to save enquiry."

        );

      }

      /* =====================================================

         SUCCESS

      ===================================================== */

      setSent(true);

      alert(

        "Thank you.\n\n" +

          "Your enquiry has been submitted successfully and saved."

      );

      /* =====================================================

         CLEAR FORM AFTER SUCCESSFUL SAVE

      ===================================================== */

      setForm({

        name: "",

        organization: "",

        email: "",

        phone: "",

        subject: "",

        message: "",

      });

      setErrors({

        email: "",

        phone: "",

      });

    } catch (error) {

      console.error("Contact form error:", error);

      /* =====================================================

         BACKEND CONNECTION ERROR

      ===================================================== */

      alert(

        "Unable to submit your enquiry.\n\n" +

          "Please make sure the Gryphon Cyber backend server is running."

      );

    }

  };

  return (

    <div className="contact-page">

      {/* =====================================================

          NAVBAR

      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          <Link to="/" className="logo-link">

            <img src={gryphonLogo} alt="Gryphon Cyber" className="navbar-logo" />

          </Link>

          {!isMobile && (

            <>

              <nav className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/services">Services</Link>

                <Link to="/solutions">Solutions</Link>

                <Link to="/training">Training</Link>

                <Link to="/contact" className="active">Contact</Link>

              </nav>

              <Link to="/training/request" className="talk-button">Request Training <span>→</span></Link>

            </>

          )}

          {isMobile && (

            <button type="button" className={`contact-mobile-toggle ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenuOpen}>

              <span></span><span></span><span></span>

            </button>

          )}

        </div>

        {isMobile && mobileMenuOpen && (

          <div className="contact-mobile-menu">

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>

            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>

            <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>

            <Link to="/training" onClick={() => setMobileMenuOpen(false)}>Training</Link>

            <Link to="/contact" className="active" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            <Link to="/training/request" className="contact-mobile-talk" onClick={() => setMobileMenuOpen(false)}>Request Training <span>→</span></Link>

          </div>

        )}

      </header>

      <main>

        {/* =====================================================

            HERO

        ===================================================== */}

        <section className="contact-hero">

          <div className="contact-grid"></div>

          <div className="contact-glow contact-glow-one"></div>

          <div className="contact-glow contact-glow-two"></div>

          <div className="contact-hero-content">

            <div className="contact-eyebrow">

              <span></span>

              GRYPHON CYBER • CONNECT

            </div>

            <h1>

              Start the

              <span>

                conversation.

              </span>

            </h1>

            <p>

              Tell us what you are working on, what capability you need,

              or how Gryphon Cyber can support your organization.

            </p>

            <div className="contact-meta">

              <div>

                <strong>

                  01

                </strong>

                <span>

                  CONNECT

                </span>

              </div>

              <div>

                <strong>

                  02

                </strong>

                <span>

                  DISCUSS

                </span>

              </div>

              <div>

                <strong>

                  03

                </strong>

                <span>

                  RESPOND

                </span>

              </div>

            </div>

          </div>

          {/* =================================================

              COMMAND VISUAL

          ================================================= */}

          <div className="contact-command">

            <div className="contact-command-label">

              SECURE COMMUNICATION CHANNEL

            </div>

            <div className="contact-orbit contact-orbit-one"></div>

            <div className="contact-orbit contact-orbit-two"></div>

            <div className="contact-orbit contact-orbit-three"></div>

            <div className="contact-core">

              <span>

                GC

              </span>

            </div>

            <div className="contact-node contact-node-one">

              <i></i>

              CONNECT

            </div>

            <div className="contact-node contact-node-two">

              <i></i>

              VERIFY

            </div>

            <div className="contact-node contact-node-three">

              <i></i>

              RESPOND

            </div>

            <div className="contact-scan"></div>

            <div className="contact-command-status">

              <i></i>

              CHANNEL

              <strong>

                READY

              </strong>

            </div>

          </div>

        </section>

        {/* =====================================================

            CONTACT MAIN

        ===================================================== */}

        <section className="contact-main">

          {/* ===================================================

              CONTACT INFORMATION

          =================================================== */}

          <div className="contact-information">

            <div className="contact-section-label">

              01 — CONTACT GRYPHON

            </div>

            <h2>

              Let's discuss

              <span>

                the mission.

              </span>

            </h2>

            <p>

              For enquiries, consultations, cybersecurity requirements,

              training programs and organizational engagements,

              contact the Gryphon Cyber team.

            </p>

            <div className="contact-detail-list">

              {/* EMAIL */}

              <a

                href="mailto:support@gryphoncyber.com"

                className="contact-detail"

              >

                <div className="contact-detail-icon">

                  @

                </div>

                <div>

                  <small>

                    EMAIL

                  </small>

                  <strong>

                    support@gryphoncyber.com

                  </strong>

                </div>

                <span>

                  ↗

                </span>

              </a>

              {/* LOCATION */}

              <div className="contact-detail">

                <div className="contact-detail-icon">

                  ◎

                </div>

                <div>

                  <small>

                    LOCATION

                  </small>

                  <strong>

                    New Delhi, India

                  </strong>

                </div>

                <span>

                  •

                </span>

              </div>

              {/* WEBSITE */}

              <a

                href="https://www.gryphoncyber.in"

                target="_blank"

                rel="noreferrer"

                className="contact-detail"

              >

                <div className="contact-detail-icon">

                  ↗

                </div>

                <div>

                  <small>

                    WEB

                  </small>

                  <strong>

                    www.gryphoncyber.in

                  </strong>

                </div>

                <span>

                  ↗

                </span>

              </a>

            </div>

            <div className="contact-response">

              <span></span>

              <div>

                <strong>

                  DIRECT CHANNEL

                </strong>

                <small>

                  Email the Gryphon Cyber team directly for enquiries.

                </small>

              </div>

            </div>

          </div>

          {/* ===================================================

              CONTACT FORM

          =================================================== */}

          <div className="contact-form-wrap">

            <div className="contact-form-top">

              <span>

                02

              </span>

              <strong>

                SEND AN ENQUIRY

              </strong>

              <small>

                RESPONSE CHANNEL / ACTIVE

              </small>

            </div>

            <form

              onSubmit={handleSubmit}

              className="contact-form"

              noValidate

            >

              <div className="contact-field-grid">

                {/* =================================================

                    FULL NAME

                ================================================= */}

                <div className="contact-field">

                  <label>

                    FULL NAME *

                  </label>

                  <input

                    type="text"

                    name="name"

                    value={form.name}

                    onChange={handleChange}

                    placeholder="Your name"

                    required

                  />

                </div>

                {/* =================================================

                    ORGANIZATION

                ================================================= */}

                <div className="contact-field">

                  <label>

                    ORGANIZATION

                  </label>

                  <input

                    type="text"

                    name="organization"

                    value={form.organization}

                    onChange={handleChange}

                    placeholder="Organization / Department"

                  />

                </div>

                {/* =================================================

                    EMAIL

                ================================================= */}

                <div className="contact-field">

                  <label>

                    EMAIL *

                  </label>

                  <input

                    type="text"

                    name="email"

                    value={form.email}

                    onChange={handleChange}

                    placeholder="name@organization.com"

                    required

                    className={

                      errors.email

                        ? "input-error"

                        : ""

                    }

                  />

                  {errors.email && (

                    <span className="field-error">

                      {errors.email}

                    </span>

                  )}

                </div>

                {/* =================================================

                    PHONE

                ================================================= */}

                <div className="contact-field">

                  <label>

                    PHONE

                  </label>

                  <input

                    type="tel"

                    name="phone"

                    value={form.phone}

                    onChange={handleChange}

                    placeholder="+91 XXXXX XXXXX"

                    className={

                      errors.phone

                        ? "input-error"

                        : ""

                    }

                  />

                  {errors.phone && (

                    <span className="field-error">

                      {errors.phone}

                    </span>

                  )}

                </div>

              </div>

              {/* =================================================

                  SUBJECT

              ================================================= */}

              <div className="contact-field">

                <label>

                  SUBJECT *

                </label>

                <select

                  name="subject"

                  value={form.subject}

                  onChange={handleChange}

                  required

                >

                  <option value="">

                    Select enquiry type

                  </option>

                  <option value="Cybersecurity Services">

                    Cybersecurity Services

                  </option>

                  <option value="Training">

                    Training

                  </option>

                  <option value="Digital Transformation">

                    Digital Transformation

                  </option>

                  <option value="Security Solutions">

                    Security Solutions

                  </option>

                  <option value="Expert Consultation">

                    Expert Consultation

                  </option>

                  <option value="General Enquiry">

                    General Enquiry

                  </option>

                </select>

              </div>

              {/* =================================================

                  MESSAGE

              ================================================= */}

              <div className="contact-field">

                <label>

                  MESSAGE *

                </label>

                <textarea

                  name="message"

                  value={form.message}

                  onChange={handleChange}

                  placeholder="Tell us about your requirement..."

                  rows="7"

                  required

                ></textarea>

              </div>

              {/* =================================================

                  SUBMIT

              ================================================= */}

              <div className="contact-submit-row">

                <div className="contact-submit-status">

                  <span></span>

                  <div>

                    <strong>

                      {sent

                        ? "REQUEST SAVED"

                        : "SECURE ENQUIRY"

                      }

                    </strong>

                    <small>

                      {sent

                        ? "Your enquiry has been saved to the Gryphon Cyber records."

                        : "Your message will be securely submitted to the Gryphon Cyber team."

                      }

                    </small>

                  </div>

                </div>

                <button

                  type="submit"

                  className="contact-submit"

                >

                  {sent

                    ? "SUBMITTED"

                    : "SEND ENQUIRY"

                  }

                  <span>

                    →

                  </span>

                </button>

              </div>

            </form>

          </div>

        </section>

        {/* =====================================================

            CAPABILITIES

        ===================================================== */}

        <section className="contact-capabilities">

          <div className="contact-capabilities-header">

            <div className="contact-section-label">

              03 — HOW WE CAN ENGAGE

            </div>

            <h2>

              One channel.

              <span>

                Multiple capabilities.

              </span>

            </h2>

          </div>

          <div className="contact-capability-grid">

            {/* =================================================

                CYBERSECURITY

            ================================================= */}

            <Link

              to="/services"

              className="contact-capability-card"

            >

              <span>

                01

              </span>

              <div className="contact-capability-icon">

                ◇

              </div>

              <h3>

                Cybersecurity

              </h3>

              <p>

                Discuss security requirements, implementation and

                organizational cybersecurity needs.

              </p>

              <b>

                EXPLORE SERVICES →

              </b>

            </Link>

            {/* =================================================

                TRAINING

            ================================================= */}

            <Link

              to="/training"

              className="contact-capability-card"

            >

              <span>

                02

              </span>

              <div className="contact-capability-icon">

                ◎

              </div>

              <h3>

                Training

              </h3>

              <p>

                Explore practical training programs for investigative

                and cybersecurity capabilities.

              </p>

              <b>

                EXPLORE TRAINING →

              </b>

            </Link>

            {/* =================================================

                SOLUTIONS

            ================================================= */}

            <Link

              to="/solutions"

              className="contact-capability-card"

            >

              <span>

                03

              </span>

              <div className="contact-capability-icon">

                +

              </div>

              <h3>

                Solutions

              </h3>

              <p>

                Explore Gryphon Cyber's operational technology and

                intelligence solutions.

              </p>

              <b>

                EXPLORE SOLUTIONS →

              </b>

            </Link>

            {/* =================================================

                REQUEST TRAINING

            ================================================= */}

            <Link

              to="/training/request"

              className="contact-capability-card"

            >

              <span>

                04

              </span>

              <div className="contact-capability-icon">

                →

              </div>

              <h3>

                Request Training

              </h3>

              <p>

                Send your organization's training requirement directly

                to the Gryphon Cyber team.

              </p>

              <b>

                REQUEST TRAINING →

              </b>

            </Link>

          </div>

        </section>

        {/* =====================================================

            FINAL CTA

        ===================================================== */}

        <section className="contact-final">

          <div className="contact-final-glow"></div>

          <div className="contact-section-label">

            GRYPHON CYBER

          </div>

          <h2>

            Your requirement.

            <span>

              Our response.

            </span>

          </h2>

          <a

            href="mailto:support@gryphoncyber.com"

            className="contact-final-button"

          >

            Email Gryphon Cyber

            <span>

              ↗

            </span>

          </a>

        </section>

      </main>

      {/* =====================================================

          FOOTER

      ===================================================== */}

      <Footer />

      <style>{`

/* Contact page mobile navigation */

.contact-mobile-toggle { display:flex; width:44px; height:44px; margin-left:auto; padding:0; border:1px solid rgba(255,255,255,.22); border-radius:10px; background:rgba(7,20,38,.9); align-items:center; justify-content:center; flex-direction:column; gap:5px; cursor:pointer; z-index:100001; }

.contact-mobile-toggle span { display:block; width:21px; height:2px; border-radius:2px; background:#fff; transition:transform .25s ease, opacity .25s ease; }

.contact-mobile-toggle.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }

.contact-mobile-toggle.open span:nth-child(2) { opacity:0; }

.contact-mobile-toggle.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

.contact-mobile-menu { position:absolute; top:100%; left:0; right:0; display:flex; flex-direction:column; gap:4px; padding:14px 20px 20px; background:rgba(5,16,31,.98); border-top:1px solid rgba(255,255,255,.08); border-bottom:1px solid rgba(255,255,255,.1); box-shadow:0 18px 40px rgba(0,0,0,.35); z-index:100000; }

.contact-mobile-menu > a { display:flex; align-items:center; justify-content:space-between; min-height:48px; padding:0 14px; color:#fff !important; text-decoration:none; border-radius:8px; }

.contact-mobile-menu > a:hover, .contact-mobile-menu > a.active { background:rgba(23,100,232,.16); color:#fff !important; }

.contact-mobile-menu .contact-mobile-talk { justify-content:center; gap:10px; margin-top:10px; background:#1764e8 !important; color:#fff !important; font-weight:700; }

.contact-mobile-menu .contact-mobile-talk:hover { background:#2875f0 !important; color:#fff !important; }

@media (min-width:761px) { .contact-mobile-toggle, .contact-mobile-menu { display:none !important; } }

@media (max-width:760px) { .contact-page .navbar { position:relative; z-index:100000; } .contact-page .nav-container { position:relative; } }

@media (max-width:420px) { .contact-mobile-toggle { width:40px; height:40px; } .contact-mobile-menu { padding-left:14px; padding-right:14px; } }

      `}</style>

    </div>

  );

}

export default Contact;