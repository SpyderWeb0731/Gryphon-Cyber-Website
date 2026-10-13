import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "../App.css";
import Footer from "../components/Footer";

function RequestTraining() {

  const [submitted, setSubmitted] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 760px)");

    const updateViewport = () => {

      setIsMobile(mediaQuery.matches);

      if (!mediaQuery.matches) {

        setMobileMenuOpen(false);

      }

    };

    updateViewport();

    mediaQuery.addEventListener("change", updateViewport);

    return () => {

      mediaQuery.removeEventListener("change", updateViewport);

    };

  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const [errors, setErrors] = useState({

    email: "",

    phone: "",

  });

  const [formData, setFormData] = useState({

    name: "",

    organization: "",

    designation: "",

    email: "",

    phone: "",

    trainingArea: "",

    participants: "",

    preferredDate: "",

    mode: "",

    message: "",

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({

      ...previous,

      [name]: value,

    }));

    if (name === "email" || name === "phone") {

      setErrors((previous) => ({

        ...previous,

        [name]: "",

      }));

    }

    if (submitted) {

      setSubmitted(false);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/;

    const email = formData.email.trim();

    const phone = formData.phone.trim();

    const cleanedPhone = phone.replace(/[\s-]/g, "");

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

    ===================================================== */

    if (!phoneRegex.test(cleanedPhone)) {

      newErrors.phone = "Please enter a valid Indian mobile number.";

    }

    /* =====================================================

       SHOW VALIDATION ERRORS

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

       SEND TRAINING REQUEST TO BACKEND

       Backend will save it into Excel

    ===================================================== */

    try {

      const response = await fetch(

        "http://localhost:5000/api/training-request",

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

            trainingArea: formData.trainingArea,

            participants: formData.participants,

            preferredDate: formData.preferredDate,

            mode: formData.mode,

            message: formData.message,

          }),

        }

      );

      const data = await response.json();

      if (!response.ok) {

        throw new Error(

          data.message || "Unable to save training request."

        );

      }

      /* =====================================================

         SUCCESS

      ===================================================== */

      setSubmitted(true);

      alert(

        "Training request submitted successfully.\n\n" +

          "Your request has been saved."

      );

      /* =====================================================

         RESET FORM

      ===================================================== */

      setFormData({

        name: "",

        organization: "",

        designation: "",

        email: "",

        phone: "",

        trainingArea: "",

        participants: "",

        preferredDate: "",

        mode: "",

        message: "",

      });

      setErrors({

        email: "",

        phone: "",

      });

    } catch (error) {

      console.error("Training request error:", error);

      alert(

        "Unable to submit your training request.\n\n" +

          "Please make sure the Gryphon Cyber backend server is running."

      );

    }

  };

  return (

    <div className="app request-training-page">

      <style>{`

        .request-training-page {

          width: 100%;

          min-width: 0;

          overflow-x: hidden;

        }

        .request-training-page .request-mobile-toggle,

        .request-training-page .request-mobile-menu {

          display: none;

        }

        .request-training-page .request-mobile-toggle {

          border: 1px solid rgba(0, 191, 255, 0.75);

          background: #02070d;

          color: #fff;

          width: 44px;

          height: 44px;

          border-radius: 10px;

          padding: 0;

          align-items: center;

          justify-content: center;

          flex-direction: column;

          gap: 5px;

          cursor: pointer;

          flex-shrink: 0;

        }

        .request-training-page .request-mobile-toggle span {

          width: 19px;

          height: 2px;

          background: #fff;

          border-radius: 2px;

          transition: transform 0.2s ease, opacity 0.2s ease;

        }

        .request-training-page .request-mobile-toggle.open span:nth-child(1) {

          transform: translateY(7px) rotate(45deg);

        }

        .request-training-page .request-mobile-toggle.open span:nth-child(2) {

          opacity: 0;

        }

        .request-training-page .request-mobile-toggle.open span:nth-child(3) {

          transform: translateY(-7px) rotate(-45deg);

        }

        @media (max-width: 760px) {

          .request-training-page {

            font-size: 15px;

          }

          .request-training-page .request-training-navbar {

            position: relative;

            z-index: 1000;

            width: 100%;

          }

          .request-training-page .request-training-navbar .nav-container {

            width: 100%;

            min-height: 72px;

            height: auto;

            padding: 12px 18px;

            box-sizing: border-box;

            display: flex;

            align-items: center;

            justify-content: space-between;

            gap: 14px;

          }

          .request-training-page .request-training-navbar .logo-link {

            min-width: 0;

            flex: 1;

          }

          .request-training-page .request-training-navbar .navbar-brand-text {

            font-size: 18px;

            letter-spacing: 0.14em;

          }

          .request-training-page .request-mobile-toggle {

            display: flex;

          }

          .request-training-page .request-mobile-menu {

            position: absolute;

            top: 100%;

            left: 0;

            width: 100%;

            box-sizing: border-box;

            padding: 12px 14px 16px;

            background: #030b16;

            border-top: 1px solid rgba(255, 255, 255, 0.08);

            border-bottom: 1px solid rgba(0, 191, 255, 0.18);

            box-shadow: 0 18px 35px rgba(0, 0, 0, 0.42);

            display: block;

            max-height: calc(100vh - 72px);

            overflow-y: auto;

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transform: translateY(-8px);

            transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;

          }

          .request-training-page .request-mobile-menu.open {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

            transform: translateY(0);

          }

          .request-training-page .request-mobile-menu nav {

            display: flex;

            flex-direction: column;

            gap: 4px;

          }

          .request-training-page .request-mobile-menu nav a {

            display: block;

            width: 100%;

            box-sizing: border-box;

            padding: 13px 14px;

            border-radius: 8px;

            color: #e7edf5;

            text-decoration: none;

            font-size: 15px;

            line-height: 1.2;

          }

          .request-training-page .request-mobile-menu nav a:hover,

          .request-training-page .request-mobile-menu nav a:focus-visible {

            background: rgba(23, 100, 232, 0.16);

          }

          .request-training-page .request-mobile-training {

            display: flex;

            width: 100%;

            box-sizing: border-box;

            margin-top: 10px;

            padding: 14px 16px;

            align-items: center;

            justify-content: center;

            gap: 10px;

            border-radius: 8px;

            background: #1764e8 !important;

            color: #fff !important;

            text-decoration: none;

            font-weight: 700;

            font-size: 14px;

          }

          .request-training-page .request-mobile-training span {

            font-size: 18px;

          }

          .request-training-page .request-training-hero {

            min-height: auto;

            padding: 78px 20px 70px;

            display: flex;

            flex-direction: column;

            gap: 0;

          }

          .request-training-page .request-hero-content {

            width: 100%;

            max-width: none;

          }

          .request-training-page .request-eyebrow {

            font-size: 10px;

            letter-spacing: 0.14em;

            line-height: 1.5;

          }

          .request-training-page .request-hero-content h1 {

            max-width: 100%;

            margin: 18px 0 20px;

            font-size: clamp(46px, 13vw, 72px);

            line-height: 0.94;

            overflow-wrap: anywhere;

          }

          .request-training-page .request-hero-content p {

            max-width: 100%;

            font-size: 14px;

            line-height: 1.75;

          }

          .request-training-page .request-hero-meta {

            width: 100%;

            display: grid;

            grid-template-columns: repeat(3, minmax(0, 1fr));

            gap: 12px;

            margin-top: 30px;

          }

          .request-training-page .request-hero-meta strong {

            font-size: 14px;

          }

          .request-training-page .request-hero-meta span {

            font-size: 8px;

            letter-spacing: 0.13em;

          }

          .request-training-page .request-command {

            width: min(100%, 330px);

            height: 330px;

            margin: 55px auto 0;

            transform: scale(0.9);

            transform-origin: center top;

          }

          .request-training-page .request-form-section,

          .request-training-page .request-process {

            padding-left: 20px;

            padding-right: 20px;

          }

          .request-training-page .request-form-section {

            padding-top: 72px;

            padding-bottom: 72px;

          }

          .request-training-page .request-form-header h2,

          .request-training-page .request-process-header h2 {

            font-size: clamp(42px, 11vw, 62px);

            line-height: 0.98;

          }

          .request-training-page .request-form-header p {

            max-width: 100%;

            font-size: 14px;

            line-height: 1.7;

          }

          .request-training-page .training-request-form {

            width: 100%;

          }

          .request-training-page .form-block {

            padding: 24px 0;

          }

          .request-training-page .form-grid {

            display: grid !important;

            grid-template-columns: minmax(0, 1fr) !important;

            gap: 20px;

          }

          .request-training-page .form-field {

            min-width: 0;

            width: 100%;

          }

          .request-training-page .form-field input,

          .request-training-page .form-field select,

          .request-training-page .form-field textarea {

            width: 100%;

            max-width: 100%;

            box-sizing: border-box;

            font-size: 16px;

          }

          .request-training-page .form-field textarea {

            min-height: 170px;

            resize: vertical;

          }

          .request-training-page .request-submit-area {

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 24px;

            padding-top: 24px;

          }

          .request-training-page .request-submit-info {

            width: 100%;

          }

          .request-training-page .request-submit-button {

            width: 100%;

            min-height: 54px;

            box-sizing: border-box;

            justify-content: center;

          }

          .request-training-page .request-process {

            padding-top: 72px;

            padding-bottom: 72px;

          }

          .request-training-page .request-process-flow {

            display: grid !important;

            grid-template-columns: minmax(0, 1fr) !important;

            gap: 14px;

            margin-top: 36px;

          }

          .request-training-page .request-process-card {

            width: 100%;

            min-width: 0;

            box-sizing: border-box;

          }

          .request-training-page .request-process-connector {

            display: none !important;

          }

          .request-training-page .request-bottom-cta {

            padding: 72px 20px;

          }

          .request-training-page .request-bottom-cta h2 {

            font-size: clamp(42px, 11vw, 62px);

            line-height: 0.98;

          }

          .request-training-page .request-back-button {

            max-width: 100%;

            box-sizing: border-box;

          }

          .request-training-page .site-footer {

            overflow: hidden;

          }

          .request-training-page .footer-container {

            width: 100%;

            box-sizing: border-box;

            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 34px 20px;

            padding-left: 20px;

            padding-right: 20px;

          }

          .request-training-page .footer-brand {

            grid-column: 1 / -1;

          }

          .request-training-page .footer-bottom {

            padding: 18px 20px;

            display: flex;

            flex-direction: column;

            align-items: flex-start;

            gap: 8px;

          }

        }

        @media (max-width: 480px) {

          .request-training-page .request-training-navbar .nav-container {

            padding-left: 14px;

            padding-right: 14px;

          }

          .request-training-page .request-training-hero {

            padding-left: 16px;

            padding-right: 16px;

          }

          .request-training-page .request-hero-content h1 {

            font-size: clamp(43px, 14vw, 60px);

          }

          .request-training-page .request-command {

            width: min(100%, 300px);

            height: 300px;

            transform: scale(0.86);

            margin-bottom: -35px;

          }

          .request-training-page .request-form-section,

          .request-training-page .request-process,

          .request-training-page .request-bottom-cta {

            padding-left: 16px;

            padding-right: 16px;

          }

          .request-training-page .footer-container {

            grid-template-columns: minmax(0, 1fr);

          }

          .request-training-page .footer-brand {

            grid-column: auto;

          }

        }

      `}</style>

      {/* =====================================================

          NAVBAR

      ===================================================== */}

      <header className="navbar request-training-navbar">

        <div className="nav-container">

          <Link to="/" className="logo-link" onClick={closeMobileMenu}>

            <span className="navbar-brand-text">GRYPHON</span>

          </Link>

          {!isMobile && (

            <>

              <nav className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/services">Services</Link>

                <Link to="/solutions">Solutions</Link>

                <Link to="/training" className="active">Training</Link>

                <Link to="/contact">Contact</Link>

              </nav>

              <Link to="/contact" className="talk-button">

                Talk to Us <span>→</span>

              </Link>

            </>

          )}

          {isMobile && (

            <>

              <button

                type="button"

                className={`request-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}

                onClick={() => setMobileMenuOpen((previous) => !previous)}

                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}

                aria-expanded={mobileMenuOpen}

              >

                <span></span>

                <span></span>

                <span></span>

              </button>

              <div className={`request-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>

                <nav>

                  <Link to="/" onClick={closeMobileMenu}>Home</Link>

                  <Link to="/about" onClick={closeMobileMenu}>About</Link>

                  <Link to="/services" onClick={closeMobileMenu}>Services</Link>

                  <Link to="/solutions" onClick={closeMobileMenu}>Solutions</Link>

                  <Link to="/training" onClick={closeMobileMenu}>Training</Link>

                  <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>

                </nav>

                <Link

                  to="/training/request"

                  className="request-mobile-training active"

                  onClick={closeMobileMenu}

                >

                  Request Training <span>→</span>

                </Link>

              </div>

            </>

          )}

        </div>

      </header>

      <main>

        {/* =====================================================

            HERO

        ===================================================== */}

        <section className="request-training-hero">

          <div className="request-grid"></div>

          <div className="request-glow"></div>

          <div className="request-hero-content">

            <div className="request-eyebrow">

              <span></span>

              GRYPHON CYBER • TRAINING REQUEST

            </div>

            <h1>

              Build your

              <span>

                training program.

              </span>

            </h1>

            <p>

              Tell us about your team's training requirements

              and we'll help structure a program around your

              operational needs.

            </p>

            <div className="request-hero-meta">

              <div>

                <strong>

                  01

                </strong>

                <span>

                  REQUIREMENT

                </span>

              </div>

              <div>

                <strong>

                  02

                </strong>

                <span>

                  PLANNING

                </span>

              </div>

              <div>

                <strong>

                  03

                </strong>

                <span>

                  EXECUTION

                </span>

              </div>

            </div>

          </div>

          {/* =================================================

              COMMAND VISUAL

          ================================================= */}

          <div className="request-command">

            <div className="request-command-label">

              TRAINING INTAKE SYSTEM

            </div>

            <div className="request-orbit orbit-one"></div>

            <div className="request-orbit orbit-two"></div>

            <div className="request-orbit orbit-three"></div>

            <div className="request-command-core">

              <span>

                GC

              </span>

            </div>

            <div className="request-command-node node-one">

              <span></span>

              01

            </div>

            <div className="request-command-node node-two">

              <span></span>

              02

            </div>

            <div className="request-command-node node-three">

              <span></span>

              03

            </div>

            <div className="request-command-line line-one"></div>

            <div className="request-command-line line-two"></div>

            <div className="request-command-line line-three"></div>

            <div className="request-command-status">

              <span></span>

              INTAKE SYSTEM

              <strong>

                READY

              </strong>

            </div>

          </div>

        </section>

        {/* =====================================================

            FORM SECTION

        ===================================================== */}

        <section className="request-form-section">

          <div className="request-form-header">

            <div className="request-section-label">

              01 — TRAINING REQUIREMENT

            </div>

            <h2>

              Tell us what

              <span>

                you need.

              </span>

            </h2>

            <p>

              Provide the details below so the Gryphon Cyber

              team can understand your training requirement.

            </p>

          </div>

          <form

            className="training-request-form"

            onSubmit={handleSubmit}

            noValidate

          >

            {/* =================================================

                PERSONAL / ORGANIZATION

            ================================================= */}

            <div className="form-block">

              <div className="form-block-header">

                <span>

                  01

                </span>

                <div>

                  CONTACT & ORGANIZATION

                </div>

              </div>

              <div className="form-grid">

                {/* FULL NAME */}

                <div className="form-field">

                  <label>

                    FULL NAME *

                  </label>

                  <input

                    type="text"

                    name="name"

                    value={formData.name}

                    onChange={handleChange}

                    placeholder="Enter your full name"

                    required

                  />

                </div>

                {/* ORGANIZATION */}

                <div className="form-field">

                  <label>

                    ORGANIZATION *

                  </label>

                  <input

                    type="text"

                    name="organization"

                    value={formData.organization}

                    onChange={handleChange}

                    placeholder="Organization / Department"

                    required

                  />

                </div>

                {/* DESIGNATION */}

                <div className="form-field">

                  <label>

                    DESIGNATION

                  </label>

                  <input

                    type="text"

                    name="designation"

                    value={formData.designation}

                    onChange={handleChange}

                    placeholder="Your designation"

                  />

                </div>

                {/* EMAIL */}

                <div className="form-field">

                  <label>

                    EMAIL *

                  </label>

                  <input

                    type="text"

                    name="email"

                    value={formData.email}

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

                {/* PHONE */}

                <div className="form-field">

                  <label>

                    PHONE NUMBER *

                  </label>

                  <input

                    type="tel"

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                    placeholder="+91 XXXXX XXXXX"

                    required

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

            </div>

            {/* =================================================

                TRAINING REQUIREMENT

            ================================================= */}

            <div className="form-block">

              <div className="form-block-header">

                <span>

                  02

                </span>

                <div>

                  TRAINING REQUIREMENT

                </div>

              </div>

              <div className="form-grid">

                {/* TRAINING AREA */}

                <div className="form-field">

                  <label>

                    TRAINING AREA *

                  </label>

                  <select

                    name="trainingArea"

                    value={formData.trainingArea}

                    onChange={handleChange}

                    required

                  >

                    <option value="">

                      Select training area

                    </option>

                    <option value="Cyber Investigation">

                      Cyber Investigation

                    </option>

                    <option value="Forensic Analysis">

                      Forensic Analysis

                    </option>

                    <option value="Scenario Simulation">

                      Scenario Simulation

                    </option>

                    <option value="Interview Skills">

                      Interview Skills

                    </option>

                    <option value="Multiple Areas">

                      Multiple Training Areas

                    </option>

                  </select>

                </div>

                {/* PARTICIPANTS */}

                <div className="form-field">

                  <label>

                    PARTICIPANTS *

                  </label>

                  <input

                    type="number"

                    name="participants"

                    value={formData.participants}

                    onChange={handleChange}

                    placeholder="Number of participants"

                    min="1"

                    required

                  />

                </div>

                {/* PREFERRED DATE */}

                <div className="form-field">

                  <label>

                    PREFERRED DATE

                  </label>

                  <input

                    type="date"

                    name="preferredDate"

                    value={formData.preferredDate}

                    onChange={handleChange}

                  />

                </div>

                {/* TRAINING MODE */}

                <div className="form-field">

                  <label>

                    TRAINING MODE

                  </label>

                  <select

                    name="mode"

                    value={formData.mode}

                    onChange={handleChange}

                  >

                    <option value="">

                      Select mode

                    </option>

                    <option value="On-site">

                      On-site

                    </option>

                    <option value="Online">

                      Online

                    </option>

                    <option value="Hybrid">

                      Hybrid

                    </option>

                  </select>

                </div>

              </div>

            </div>

            {/* =================================================

                REQUIREMENTS

            ================================================= */}

            <div className="form-block">

              <div className="form-block-header">

                <span>

                  03

                </span>

                <div>

                  ADDITIONAL REQUIREMENTS

                </div>

              </div>

              <div className="form-field">

                <label>

                  TELL US ABOUT YOUR REQUIREMENT

                </label>

                <textarea

                  name="message"

                  value={formData.message}

                  onChange={handleChange}

                  placeholder="Tell us about your team, objectives, preferred topics or any specific requirements..."

                  rows="7"

                ></textarea>

              </div>

            </div>

            {/* =================================================

                SUBMIT

            ================================================= */}

            <div className="request-submit-area">

              <div className="request-submit-info">

                <span className="request-submit-dot"></span>

                <div>

                  <strong>

                    READY TO BEGIN

                  </strong>

                  <small>

                    Your request will be saved securely

                    to the Gryphon Cyber training records.

                  </small>

                </div>

              </div>

              <button

                type="submit"

                className="request-submit-button"

              >

                {submitted

                  ? "REQUEST SAVED"

                  : "SUBMIT TRAINING REQUEST"

                }

                <span>

                  →

                </span>

              </button>

            </div>

          </form>

        </section>

        {/* =====================================================

            PROCESS

        ===================================================== */}

        <section className="request-process">

          <div className="request-process-header">

            <div className="request-section-label">

              02 — WHAT HAPPENS NEXT

            </div>

            <h2>

              From request

              <span>

                to training.

              </span>

            </h2>

          </div>

          <div className="request-process-flow">

            {/* 01 */}

            <div className="request-process-card">

              <span>

                01

              </span>

              <div className="request-process-icon">

                ◇

              </div>

              <h3>

                Request

              </h3>

              <p>

                Share your team's training requirements

                with Gryphon Cyber.

              </p>

            </div>

            <div className="request-process-connector"></div>

            {/* 02 */}

            <div className="request-process-card">

              <span>

                02

              </span>

              <div className="request-process-icon">

                ◎

              </div>

              <h3>

                Discuss

              </h3>

              <p>

                Discuss objectives, participants and

                training requirements.

              </p>

            </div>

            <div className="request-process-connector"></div>

            {/* 03 */}

            <div className="request-process-card">

              <span>

                03

              </span>

              <div className="request-process-icon">

                +

              </div>

              <h3>

                Structure

              </h3>

              <p>

                Structure the training around the

                identified requirements.

              </p>

            </div>

            <div className="request-process-connector"></div>

            {/* 04 */}

            <div className="request-process-card">

              <span>

                04

              </span>

              <div className="request-process-icon">

                →

              </div>

              <h3>

                Execute

              </h3>

              <p>

                Deliver practical training focused on

                investigative capability.

              </p>

            </div>

          </div>

        </section>

        {/* =====================================================

            CTA

        ===================================================== */}

        <section className="request-bottom-cta">

          <div className="request-bottom-glow"></div>

          <div>

            <div className="request-section-label">

              GRYPHON CYBER

            </div>

            <h2>

              Ready to build

              <span>

                capability?

              </span>

            </h2>

            <Link

              to="/training"

              className="request-back-button"

            >

              Back to Training

              <span>

                ←

              </span>

            </Link>

          </div>

        </section>

      </main>

      {/* =====================================================

          FOOTER

      ===================================================== */}

      <Footer />

    </div>

  );

}

export default RequestTraining;
