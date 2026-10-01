import { useState } from "react";
import { Link } from "react-router-dom";
import gryphonLogo from "../assets/gryphon-logo.png";
import "../App.css";

function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

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
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="nav-container">

          <Link to="/" className="logo-link">

            <img
              src={gryphonLogo}
              alt="Gryphon Cyber Private Limited"
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
            to="/book-demo"
            className="demo-button active-demo-button"
          >
            Book a Demo
            <span>→</span>
          </Link>

        </div>

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
                        Full Name *
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
                        Organization *
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
                        Official Email *
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
                        Phone Number *
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
                        Area of Interest *
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
                        Preferred Date *
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
                        Preferred Time *
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

export default BookDemo;