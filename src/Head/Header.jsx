import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

export default function Header({ headerColor, textColor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="navbar" 
      style={{ 
        backgroundColor: headerColor, 
        color: textColor, 
        transition: "background-color 0.3s ease, color 0.3s ease" 
      }}
    >
      <div className="container">
        <h1 className="logo">Portfolio</h1>
        
        <button 
          className="menu-button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ color: textColor }} 
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#Home" style={{ color: textColor }}>Home</a></li>
          <li><a href="#Skill" style={{ color: textColor }}>Skills</a></li>
          <li><a href="#Project" style={{ color: textColor }}>Projects</a></li>
          <li><a href="#Academics" style={{ color: textColor }}>Academics</a></li>
          <li><a href="#Contact" style={{ color: textColor }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
