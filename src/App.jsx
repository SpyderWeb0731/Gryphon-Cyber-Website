import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import BookDemo from "./pages/BookDemo";
import RequestTraining from "./pages/RequestTraining";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />

        {/* Other Pages */}
        <Route path="/book-demo" element={<BookDemo />} />

        {/* Training Request */}
        <Route
          path="/training/request"
          element={<RequestTraining />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;