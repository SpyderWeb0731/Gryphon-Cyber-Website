```jsx
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

    const showNavbar = () => {
      navbar.classList.remove("navbar-scroll-hidden");
      navbar.classList.add("navbar-scroll-visible");
    };

    const hideNavbar = () => {
      navbar.classList.remove("navbar-scroll-visible");
      navbar.classList.add("navbar-scroll-hidden");
    };

    // Navbar is visible when the page loads
    showNavbar();

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY || 0;

        // Always show navbar when at the top
        if (currentScrollY <= 40) {
          showNavbar();
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        // Keep navbar visible while mobile menu is open
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

        // Only react to meaningful movement
        if (Math.abs(difference) >= 6) {
          if (difference > 0) {
            // Scrolling DOWN → hide navbar
            hideNavbar();
          } else {
            // Scrolling UP → show navbar
            showNavbar();
          }

          lastScrollY = currentScrollY;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      navbar.classList.remove("navbar-scroll-hidden");
      navbar.classList.add("navbar-scroll-visible");
    };
  }, []);

  return (
    <div className="navbar-brand">
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
    </div>
  );
}
```