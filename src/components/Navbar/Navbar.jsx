import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">

        {/* Logo */}
        <a href="#home" className="brand">
          <span className="brand-mark">VN</span>

          <span className="brand-name">
            NARENDRA<span className="accent">.</span>
          </span>
        </a>

        {/* Navigation */}

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#resume"
            className="resume-btn"
            onClick={closeMenu}
          >
            Resume
          </a>

        </nav>

        {/* Mobile Button */}

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;