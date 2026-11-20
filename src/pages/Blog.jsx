import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaExternalLinkAlt,
  FaPlay,
  FaArrowRight,
  FaNewspaper,
} from "react-icons/fa";

import NavbarBrand from "../components/NavbarBrand";
import Footer from "../components/Footer";

import "./Blog.css";
import "../App.css";

/* ==========================================================
   YOUTUBE VIDEOS
========================================================== */

const youtubeVideos = [
  {
    id: "eJNWChT_1C8",
    url: "https://www.youtube.com/watch?v=eJNWChT_1C8&feature=youtu.be",
  },
  {
    id: "tRN-XKnVIHw",
    url: "https://www.youtube.com/watch?si=HfXAVTHR54mGiKKT&v=tRN-XKnVIHw&feature=youtu.be",
  },
  {
    id: "OcczANS8moo",
    url: "https://www.youtube.com/watch?v=OcczANS8moo",
  },
  {
    /*
      Video 04:
      Use hqdefault directly because maxresdefault
      is not available/reliable for this video.
    */
    id: "fm13hu2aPLU",
    url: "https://www.youtube.com/watch?v=fm13hu2aPLU",
    thumbnail:
      "https://img.youtube.com/vi/fm13hu2aPLU/hqdefault.jpg",
  },
  {
    id: "ju6cpwWTEcI",
    url: "https://www.youtube.com/watch?v=ju6cpwWTEcI&feature=youtu.be",
  },
  {
    id: "-3izk3CYV_w",
    url: "https://www.youtube.com/watch?si=dIIfvMrQTvzaIRLr&v=-3izk3CYV_w&feature=youtu.be",
  },
  {
    id: "T_wEmBZo4rY",
    url: "https://www.youtube.com/watch?si=uD6kZpY3s0dsfPTc&v=T_wEmBZo4rY&feature=youtu.be",
  },
  {
    id: "k61yuaCkYDI",
    url: "https://www.youtube.com/watch?v=k61yuaCkYDI&feature=youtu.be",
  },
  {
    id: "M2izDj9W-gE",
    url: "https://www.youtube.com/watch?v=M2izDj9W-gE",
  },
  {
    id: "pjbC3eBaKdE",
    url: "https://www.youtube.com/watch?v=pjbC3eBaKdE",
  },
];

/* ==========================================================
   ARTICLES / MEDIA
========================================================== */

const articles = [
  {
    title:
      "Shifting World Order: The Case for Indo-Gulf Counter-terrorism Partnership",
    source: "India's World",
    type: "Article",
    url:
      "https://indiasworld.in/shifting-world-order-the-case-for-indo-gulf-counter-terrorism-partnership/",
    description:
      "An analysis of the evolving security environment and the importance of stronger Indo-Gulf counter-terrorism cooperation.",
  },
  {
    title: "Catching the Threat Before It Breathes",
    source: "The New Indian Express",
    type: "Magazine",
    url:
      "https://www.newindianexpress.com/magazine/2025/Nov/30/catching-the-threat-before-it-breathes",
    description:
      "A publication focused on identifying and addressing emerging threats before they develop into larger security challenges.",
  },
  {
    title: "Software Edge in the New Age",
    source: "The New Indian Express",
    type: "Article",
    url:
      "https://www.newindianexpress.com/",
    description:
      "An article discussing the growing importance of software, technology and cybersecurity in the modern security environment.",
  },
  {
    title: "India's World — Featured Publication",
    source: "India's World",
    type: "Media",
    url:
      "https://x.com/indiasworld_mag/status/1917549968090620338?s=48",
    description:
      "Featured media content published through India's World.",
  },
];

/* ==========================================================
   YOUTUBE THUMBNAIL COMPONENT
========================================================== */

function YoutubeThumbnail({ video, index }) {
  const defaultThumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  const fallbackThumbnail =
    `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  const [imageSource, setImageSource] = useState(
    video.thumbnail || defaultThumbnail
  );

  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (
      imageSource !== fallbackThumbnail &&
      !imageFailed
    ) {
      setImageSource(fallbackThumbnail);
      return;
    }

    setImageFailed(true);
  };

  return (
    <>
      {!imageFailed ? (
        <img
          src={imageSource}
          alt={`Gryphon Cyber YouTube video ${index + 1}`}
          loading="lazy"
          onError={handleImageError}
        />
      ) : (
        <div className="blog-video-image-fallback">
          <FaYoutube />
          <span>
            YouTube Video
          </span>
        </div>
      )}
    </>
  );
}

/* ==========================================================
   BLOG PAGE
========================================================== */

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  /* ========================================================
     ESCAPE + RESIZE
  ======================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="blog-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className="
          navbar
          gryphon-standard-navbar
          blog-navbar
        "
      >

        <div className="nav-container">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="logo-link"
            onClick={closeMobileMenu}
            aria-label="Gryphon Cyber home"
          >
            <NavbarBrand />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              nav-links
              blog-desktop-nav
            "
            aria-label="Main navigation"
          >

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
              to="/engagements"
              className="blog-engagements-link"
            >
              Engagements
            </Link>

            <Link to="/blog" className="active">
              Blog
            </Link>

            <Link to="/training">
              Training
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </nav>

          {/* =================================================
              DESKTOP EXPLORE ENGAGEMENTS
          ================================================= */}

          <Link
            to="/engagements"
            className="
              talk-button
              blog-desktop-talk
            "
          >
            Explore Engagements
            <span>→</span>
          </Link>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            className={`blog-mobile-toggle ${
              mobileMenuOpen ? "open" : ""
            }`}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                (open) => !open
              )
            }
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {mobileMenuOpen && (
          <div className="blog-mobile-menu">

            <Link
              to="/"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={closeMobileMenu}
            >
              Services
            </Link>

            <Link
              to="/solutions"
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>

            <Link
              to="/engagements"
              onClick={closeMobileMenu}
              className="blog-mobile-engagements"
            >
              Engagements
            </Link>

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="active"
            >
              Blog
            </Link>

            <Link
              to="/training"
              onClick={closeMobileMenu}
            >
              Training
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            <Link
              to="/engagements"
              className="blog-mobile-talk"
              onClick={closeMobileMenu}
            >
              Explore Engagements
              <span>→</span>
            </Link>

          </div>
        )}

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section className="blog-hero">

          <div className="blog-grid-background" />

          <div className="blog-glow blog-glow-one" />

          <div className="blog-glow blog-glow-two" />

          <div className="blog-hero-content">

            <div className="blog-eyebrow">
              <span />
              GRYPHON CYBER MEDIA & INSIGHTS
            </div>

            <h1>
              Knowledge.

              <span>
                {" "}
                Intelligence.
              </span>

              <br />

              Perspective.
            </h1>

            <p>
              Explore Gryphon Cyber's videos,
              published articles, media appearances
              and cybersecurity insights from
              across the security ecosystem.
            </p>

            <div className="blog-hero-actions">

              <button
                type="button"
                className="blog-primary-button"
                onClick={() => {
                  document
                    .getElementById("videos")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Explore Videos
                <FaArrowRight />
              </button>

              <button
                type="button"
                className="blog-secondary-button"
                onClick={() => {
                  document
                    .getElementById("articles")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Read Articles
              </button>

            </div>

          </div>

        </section>

        {/* =====================================================
            VIDEOS
        ===================================================== */}

        <section
          className="blog-section"
          id="videos"
        >

          <div className="blog-section-heading">

            <div className="blog-section-label">
              <FaYoutube />
              VIDEO
            </div>

            <h2>
              Gryphon Cyber

              <span>
                {" "}
                on Video
              </span>
            </h2>

            <p>
              Watch interviews, discussions,
              appearances and cybersecurity-related
              content published on YouTube.
            </p>

          </div>

          <div className="blog-video-grid">

            {youtubeVideos.map(
              (video, index) => (

                <article
                  className="blog-video-card"
                  key={video.id}
                >

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-video-thumbnail"
                  >

                    <YoutubeThumbnail
                      video={video}
                      index={index}
                    />

                    <div className="blog-video-overlay">

                      <span className="blog-play-button">
                        <FaPlay />
                      </span>

                    </div>

                    <span className="blog-video-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                  </a>

                  <div className="blog-video-content">

                    <div className="blog-card-source">
                      <FaYoutube />
                      YouTube
                    </div>

                    <h3>
                      Gryphon Cyber —
                      Featured Video
                    </h3>

                    <p>
                      Watch the original
                      video on the official
                      YouTube source.
                    </p>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-card-link"
                    >
                      Watch on YouTube
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

        {/* =====================================================
            ARTICLES
        ===================================================== */}

        <section
          className="
            blog-section
            blog-articles-section
          "
          id="articles"
        >

          <div className="blog-section-heading">

            <div className="blog-section-label">
              <FaNewspaper />
              ARTICLES & MEDIA
            </div>

            <h2>
              Published

              <span>
                {" "}
                Perspectives
              </span>
            </h2>

            <p>
              Explore articles and media
              publications from external
              platforms. Every card takes you
              to the original publication.
            </p>

          </div>

          <div className="blog-article-grid">

            {articles.map(
              (article) => (

                <article
                  className="blog-article-card"
                  key={article.title}
                >

                  <div className="blog-article-image">

                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="blog-article-placeholder">
                        <FaNewspaper />
                      </div>
                    )}

                    <span>
                      {article.type}
                    </span>

                  </div>

                  <div className="blog-article-content">

                    <div className="blog-card-source">
                      {article.source}
                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p>
                      {article.description}
                    </p>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-card-link"
                    >
                      Read Original
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="blog-cta">

          <div className="blog-cta-content">

            <div className="blog-section-label">
              STAY CONNECTED
            </div>

            <h2>
              Follow the conversation

              <span>
                {" "}
                around cybersecurity.
              </span>
            </h2>

            <p>
              Stay connected with Gryphon
              Cyber for new cybersecurity
              discussions, publications and
              technology insights.
            </p>

            <Link
              to="/engagements"
              className="blog-primary-button"
            >
              Explore Engagements
              <FaArrowRight />
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
