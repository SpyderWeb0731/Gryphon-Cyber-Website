import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import gryphonLogo from "../assets/gryphon-logo.png";
import "./Footer.css";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gryphoncyber/",
    Icon: FaInstagram,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/gryphon_cyber",
    Icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    // Replace this URL with the public company-page URL if it differs.
    href: "https://www.linkedin.com/company/109755959/",
    Icon: FaLinkedinIn,
  },
];

const MUMBAI_MAP =
  "https://www.google.com/maps/place/Gryphon+Cyber+Private+Limited/@19.0082821,72.8208377,17z/";
const DELHI_MAP =
  "https://www.google.com/maps?q=Upasana+building,+1,+Hamdard+Nagar,+Vakil+Lane,+Mandi+House,+New+Delhi,+Delhi+110001";

function Footer() {
  return (
    <footer className="gryphon-footer" aria-label="Gryphon Cyber website footer">
      <div className="gryphon-footer__main">
        <div className="gryphon-footer__brand">
          <Link
            to="/"
            className="gryphon-footer__logo-link"
            aria-label="Gryphon Cyber home"
          >
            <img
              src={gryphonLogo}
              alt="Gryphon Cyber"
              className="gryphon-footer__logo"
            />
          </Link>

          <p>
            Cyber intelligence and ground operations for complex investigations,
            intelligence gathering and digital security.
          </p>

          <div className="gryphon-footer__socials" aria-label="Social media">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="gryphon-footer__social-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Gryphon Cyber on ${label}`}
                title={label}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <nav className="gryphon-footer__column" aria-label="Company links">
          <h2>Company</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/training">Training</Link>
        </nav>

        <nav className="gryphon-footer__column" aria-label="Solutions links">
          <h2>Solutions</h2>
          <Link to="/solutions#saksham">SAKSHAM</Link>
          <Link to="/solutions#spider">SPIDER</Link>
          <Link to="/solutions#oversight">OVERSIGHT</Link>
          <Link to="/solutions#lawsync">LawSync</Link>
        </nav>

        <div className="gryphon-footer__column gryphon-footer__office">
          <h2>Mumbai Office</h2>
          <a href={MUMBAI_MAP} target="_blank" rel="noopener noreferrer">
            Unit No. 220, 2nd Floor, Gryphon Cyber Pvt Ltd, T V Industrial
            Estate, Hind Cycle Marg, Worli, Mumbai, Maharashtra 400030
          </a>
          <a
            className="gryphon-footer__map-link"
            href={MUMBAI_MAP}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps <span aria-hidden="true">↗</span>
          </a>

          <h2 className="gryphon-footer__second-office">Delhi Office</h2>
          <a href={DELHI_MAP} target="_blank" rel="noopener noreferrer">
            H-1, Upasana Building, J-1, Hailey Rd, Hamdard Nagar, Vakil Lane,
            Mandi House, New Delhi, Delhi 110001
          </a>
          <a
            className="gryphon-footer__map-link"
            href={DELHI_MAP}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="gryphon-footer__bottom">
        <span>© {new Date().getFullYear()} Gryphon Cyber Pvt. Ltd.</span>
        <span>Cyber Intelligence · Ground Operations</span>
      </div>
    </footer>
  );
}

export default Footer;
