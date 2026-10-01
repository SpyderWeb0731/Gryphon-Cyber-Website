import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Training from "./pages/Training";
import RequestTraining from "./pages/RequestTraining";
import Contact from "./pages/Contact";

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="global-page-transition"
    >
      <div className="page-transition-line"></div>

      <div className="page-transition-content">
        {children}
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <PageTransition>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

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
          path="/training/request"
          element={<RequestTraining />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Gryphon-Cyber-Website">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;