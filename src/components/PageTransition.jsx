import { useLocation, Routes } from "react-router-dom";

export default function PageTransition({ children }) {
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