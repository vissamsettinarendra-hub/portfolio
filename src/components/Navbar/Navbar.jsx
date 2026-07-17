import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner container">

        <a href="#home" className="brand">
          <span className="brand-mark">VN</span>

          <span className="brand-name">
            NARENDRA<span className="accent">.</span>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>

          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a href="#resume" className="resume-btn" onClick={() => setMenuOpen(false)}>
            Resume
          </a>

        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;