import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import BookDemo from "./pages/BookDemo";
import RequestTraining from "./pages/RequestTraining";
import Engagements from "./pages/Engagements";


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
          path="/training"
          element={<Training />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/engagements"
          element={<Engagements />}
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
      <AppRoutes />
    </HashRouter>
  );
}


export default App;