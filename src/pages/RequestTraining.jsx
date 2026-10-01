import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function RequestTraining() {
  const [submitted, setSubmitted] = useState(false);

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

    const phoneRegex = /^(?:\+91[\s-]?|0)?[6-9]\d{9}$/;

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


          {/* TRAINING */}

          <div className="footer-column">

            <h3>
              Training
            </h3>

            <Link to="/training">
              Training
            </Link>

            <Link to="/training/request">
              Request Training
            </Link>

          </div>


          {/* SOLUTIONS */}

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

export default RequestTraining;