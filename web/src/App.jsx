import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQs from "./pages/FAQs";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import HistoryOfDancing from "./pages/HistoryOfDancing";
import ContactUs from "./pages/ContactUs";
import USA from "./pages/USA";
import Philippines from "./pages/Philippines";
import logo from "./assets/logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <Link to="/" onClick={closeMenu} aria-label="Go to home">
                <img src={logo} alt="Logo" style={{ width: "95px" }} />
              </Link>
            </div>

            <button
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
              <li className="active">
                <Link to="/" onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={closeMenu}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/faqs" onClick={closeMenu}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={closeMenu}>
                  GALLERY
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={closeMenu}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={closeMenu}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <header className="hero">
                <div className="title">
                  <h1>Da Little Aloha Show</h1>
                </div>
                <div className="button">
                  <Link to="/gallery" className="btn">
                    Gallery
                  </Link>
                  <Link to="/history-of-dancing" className="btn">
                    History of Polynesian Dance
                  </Link>
                  <Link to="/about-us" className="btn">
                    About Us
                  </Link>
                </div>
              </header>
            }
          />
        </Routes>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/history-of-dancing" element={<HistoryOfDancing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/samoan-hula/usa" element={<USA />} />
            <Route path="/samoan-hula/philippines" element={<Philippines />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            {/* Column 1: Logo and Description */}
            <div className="footer-column">
              <div className="footer-logo">
                <Link to="/" aria-label="Go to home">
                  <img
                    src={logo}
                    alt="Da Little Aloha Show"
                    style={{ marginLeft: "120px" }}
                  />
                </Link>
              </div>
              <p
                className="footer-description"
                style={{ fontSize: "1.2rem", marginLeft: "1.5rem" }}
              >
                Honoring Samoan tradition through craftsmanship and flame. Every
                hula dance is a bridge between heritage, artistry, and the
                spirit of Siva Afi.
              </p>
            </div>

            {/* Column 2: Best Sellers */}
            <div className="footer-column">
              <h3 className="footer-heading">Mana Fire Knives</h3>
              <div className="best-sellers">
                <div className="product-item">
                  <img
                    src="https://manafireknives.com/wp-content/uploads/2025/10/IMG_0337-300x300.jpeg"
                    alt="Warriorblade"
                  />
                  <span className="product-title">WARRIORBLADE</span>
                </div>
                <div className="product-item">
                  <img
                    src="https://manafireknives.com/wp-content/uploads/2025/10/IMG_3562-300x300.jpeg"
                    alt="Doubles"
                  />
                  <span className="product-title">DOUBLES</span>
                </div>
              </div>
              <a
                href="https://www.manafireknives.com/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block", marginTop: "12px" }}
              >
                <button type="button" style={{ padding: "10px 50px" }}>
                  Visit Mana Fire Knives
                </button>
              </a>
            </div>

            {/* Column 3: Links */}
            <div className="footer-column">
              <h3 className="footer-heading">LINKS</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Socials */}
            <div className="footer-column">
              <h3 className="footer-heading">SOCIALS</h3>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/people/Merv-Mana-Papa/100067165101576/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/manafireknives/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <hr className="footer-divider" />
            <p className="footer-copyright">
              MANA Aloha Hula Show © 2025-2026. All rights reserved. John Kanna
              Plamoottil
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
