import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267911/logo_mbimde.png";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/faqs", label: "FAQS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/shop", label: "SHOP" },
  { href: "/contact-us", label: "CONTACT US" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#f5a623]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Da Little Aloha Show"
            className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-[0_0_8px_rgba(245,166,35,0.3)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md hover:text-[var(--color-lime)] ${
                  location === link.href
                    ? "text-[var(--color-lime)]"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-[var(--color-lime)] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#0a0a0a]/98 backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="Da Little Aloha Show"
                className="h-12 w-12 object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-[var(--color-lime)] transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="opacity-0 animate-[fadeInUp_0.3s_ease-out_forwards]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-medium tracking-wide transition-colors duration-200 ${
                    location === link.href
                      ? "text-[var(--color-lime)]"
                      : "text-white hover:text-[var(--color-lime)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#080808] overflow-hidden">
      {/* Top ember divider */}
      <div className="w-full flex items-center justify-center pt-8 pb-4 px-4">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#f5a623]/40 to-transparent" />
        <div className="mx-4 w-2 h-2 rotate-45 bg-[#f5a623]/60" />
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#f5a623]/40 to-transparent" />
      </div>

      {/* Tapa texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tapa-footer" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tapa-footer)" />
        </svg>
      </div>

      <div className="relative z-10 container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src={LOGO_URL}
                alt="Da Little Aloha Show"
                className="h-16 w-16 object-contain drop-shadow-[0_0_12px_rgba(245,166,35,0.3)]"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Honoring Samoan tradition through craftsmanship and flame. Every hula dance is a bridge between heritage, artistry, and the spirit of Siva Afi.
            </p>
          </div>

          {/* Mana Fire Knives */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">
              Mana Fire Knives
            </h3>
            <div className="flex gap-3 mb-4">
              <div className="w-16 h-16 rounded-sm overflow-hidden border border-[var(--color-gold)]/20">
                <img
                  src="https://manafireknives.com/wp-content/uploads/2025/10/IMG_0337-300x300.jpeg"
                  alt="Warriorblade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-sm overflow-hidden border border-[var(--color-gold)]/20">
                <img
                  src="https://manafireknives.com/wp-content/uploads/2025/10/IMG_3562-300x300.jpeg"
                  alt="Doubles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <a
              href="https://www.manafireknives.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-[var(--color-lime)] hover:text-[var(--color-gold)] transition-colors font-medium"
            >
              Visit Mana Fire Knives →
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">
              Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/shop", label: "Shop" },
                { href: "/contact-us", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[var(--color-lime)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">
              Socials
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Merv-Mana-Papa/100067165101576/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-lime)]/10 hover:border-[var(--color-lime)]/30 hover:text-[var(--color-lime)] transition-all text-white/60"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/manafireknives/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-lime)]/10 hover:border-[var(--color-lime)]/30 hover:text-[var(--color-lime)] transition-all text-white/60"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/30">
            MANA Aloha Hula Show © 2025-2026. All rights reserved. John Kanna Plamoottil
          </p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
