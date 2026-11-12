import { useEffect } from "react";
import gryphonLogo from "../assets/gryphon-logo.png";
import "./NavbarStandard.css";

export default function NavbarBrand() {
  useEffect(() => {
    const navbar = document.querySelector(
      "header.navbar.gryphon-standard-navbar"
    );

    if (!navbar) return;

    let lastScrollY = window.scrollY || 0;
    let ticking = false;

    // Start visible
    navbar.style.setProperty("--navbar-y", "0px");

    const showNavbar = () => {
      navbar.style.setProperty("--navbar-y", "0px");

      navbar.classList.remove("navbar-scroll-hidden");
      navbar.classList.add("navbar-scroll-visible");
    };

    const hideNavbar = () => {
      navbar.style.setProperty("--navbar-y", "-110%");
      
      navbar.classList.remove("navbar-scroll-visible");
      navbar.classList.add("navbar-scroll-hidden");
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY || 0;

        // Always visible at the top
        if (currentScrollY <= 40) {
          showNavbar();
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        // Keep navbar visible if mobile menu is open
        const mobileMenuOpen = Boolean(
          navbar.querySelector('button[aria-expanded="true"]')
        );

        if (mobileMenuOpen) {
          showNavbar();
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        const difference = currentScrollY - lastScrollY;

        // Scrolling DOWN
        if (difference > 0) {
          hideNavbar();
        }

        // Scrolling UP
        else if (difference < 0) {
          showNavbar();
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    // Initial state
    showNavbar();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      navbar.style.setProperty("--navbar-y", "0px");

      navbar.classList.remove("navbar-scroll-hidden");
      navbar.classList.remove("navbar-scroll-visible");
    };
  }, []);

  return (
    <>
      <img
        src={gryphonLogo}
        alt="Gryphon Cyber Private Limited"
        className="navbar-logo"
      />

      <span className="navbar-company-name">
        <span className="navbar-company-main">
          GRYPHON CYBER
        </span>

        <span className="navbar-company-sub">
          PRIVATE LIMITED
        </span>
      </span>
    </>
  );
}