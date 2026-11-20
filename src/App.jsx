import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import BookDemo from "./pages/BookDemo";
import RequestTraining from "./pages/RequestTraining";
import Engagements from "./pages/Engagements";
import Blog from "./pages/Blog";

import "./App.css";


/* ==========================================================
   GRYPHON CYBER — SCROLL PROGRESS
   ----------------------------------------------------------
   Shows a very subtle progress line at the top of the screen
   so visitors always understand that more content is below.
========================================================== */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset;

      const documentHeight =
        document.documentElement.scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const scrollableHeight =
        documentHeight - viewportHeight;

      const percentage =
        scrollableHeight > 0
          ? (scrollTop / scrollableHeight) * 100
          : 0;

      setProgress(
        Math.min(100, Math.max(0, percentage))
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="gryphon-scroll-progress"
      aria-hidden="true"
    >
      <span
        style={{
          transform: `scaleX(${progress / 100})`,
        }}
      />
    </div>
  );
}


/* ==========================================================
   GRYPHON CYBER — PAGE TRANSITION
========================================================== */

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="gryphon-page-transition"
    >
      {children}
    </div>
  );
}


/* ==========================================================
   APPLICATION ROUTES
========================================================== */

function AppRoutes() {
  return (
    <PageTransition>
      <Routes>

        {/* ==================================================
            HOME
        ================================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ==================================================
            MAIN PAGES
        ================================================== */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/solutions"
          element={<Solutions />}
        />

        <Route
          path="/engagements"
          element={<Engagements />}
        />

        {/* ==================================================
            BLOG
        ================================================== */}

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/training"
          element={<Training />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ==================================================
            OTHER PAGES
        ================================================== */}

        <Route
          path="/book-demo"
          element={<BookDemo />}
        />


        {/* ==================================================
            TRAINING REQUEST
        ================================================== */}

        <Route
          path="/training/request"
          element={<RequestTraining />}
        />

      </Routes>
    </PageTransition>
  );
}


/* ==========================================================
   APP
========================================================== */

function App() {
  return (
    <HashRouter>

      {/* Global scroll progress indicator */}
      <ScrollProgress />

      <AppRoutes />

    </HashRouter>
  );
}


export default App;