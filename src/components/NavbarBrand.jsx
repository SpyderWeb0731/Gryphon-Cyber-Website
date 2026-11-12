import { useEffect } from "react";
import gryphonLogo from "../assets/gryphon-logo.png";
import "./NavbarStandard.css";

export default function NavbarBrand() {
  useEffect(() => {
    const navbar = document.querySelector(
      "header.navbar.gryphon-standard-navbar"
    );

    if (!navbar) return undefined;

    navbar.classList.remove("navbar-scroll-hidden");

    let lastScrollY = Math.max(window.scrollY || 0, 0);
    let accumulatedMovement = 0;
    let previousDirection = 0;

    const threshold = 7;

    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY || 0, 0);

      /*
       * Never hide the navbar while the mobile menu is open.
       */
      const mobileMenuOpen = Boolean(
        navbar.querySelector(
          'button[aria-expanded="true"]'
        )
      );

      if (currentScrollY <= 45 || mobileMenuOpen) {
        navbar.classList.remove("navbar-scroll-hidden");

        lastScrollY = currentScrollY;
        accumulatedMovement = 0;
        previousDirection = 0;

        return;
      }

      const delta = currentScrollY - lastScrollY;

      if (delta === 0) {
        return;
      }

      const direction = delta > 0 ? 1 : -1;

      /*
       * Reset the accumulated movement when
       * the scroll direction changes.
       */
      if (direction !== previousDirection) {
        accumulatedMovement = 0;
        previousDirection = direction;
      }

      accumulatedMovement += Math.abs(delta);

      lastScrollY = currentScrollY;

      /*
       * Hide navbar when scrolling down.
       * Show navbar when scrolling up.
       */
      if (accumulatedMovement >= threshold) {
        if (direction > 0) {
          navbar.classList.add("navbar-scroll-hidden");
        } else {
          navbar.classList.remove("navbar-scroll-hidden");
        }

        accumulatedMovement = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      navbar.classList.remove("navbar-scroll-hidden");
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