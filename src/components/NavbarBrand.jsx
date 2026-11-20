import { useEffect } from "react";
import gryphonLogo from "../assets/gryphon-logo.png";
import "./NavbarStandard.css";

export default function NavbarBrand() {
  useEffect(() => {
    const navbar = document.querySelector(
      "header.navbar.gryphon-standard-navbar"
    );

    if (!navbar) {
      console.warn("Gryphon navbar not found");
      return;
    }

    let lastScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    let ticking = false;

    const getScrollY = () => {
      return (
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    };

    const showNavbar = () => {
      navbar.style.setProperty(
        "transform",
        "translate3d(0, 0, 0)",
        "important"
      );

      navbar.style.setProperty(
        "transition",
        "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        "important"
      );

      navbar.classList.remove("navbar-scroll-hidden");
      navbar.classList.add("navbar-scroll-visible");
    };

    const hideNavbar = () => {
      navbar.style.setProperty(
        "transform",
        "translate3d(0, -110%, 0)",
        "important"
      );

      navbar.style.setProperty(
        "transition",
        "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        "important"
      );

      navbar.classList.remove("navbar-scroll-visible");
      navbar.classList.add("navbar-scroll-hidden");
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = getScrollY();

        // Always show at the very top
        if (currentScrollY <= 20) {
          showNavbar();
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        // Keep navbar visible when mobile menu is open
        const mobileMenuOpen = navbar.querySelector(
          'button[aria-expanded="true"]'
        );

        if (mobileMenuOpen) {
          showNavbar();
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        const difference = currentScrollY - lastScrollY;

        // Scrolling DOWN
        if (difference > 1) {
          hideNavbar();
        }

        // Scrolling UP
        else if (difference < -1) {
          showNavbar();
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    // Force initial visible state
    showNavbar();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    document.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);

      navbar.style.removeProperty("transform");
      navbar.style.removeProperty("transition");

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