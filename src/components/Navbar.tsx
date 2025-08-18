"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999999000;
          padding: 16px 32px;
          transition: all 0.3s ease;
          backdrop-filter: ${isScrolled ? "blur(10px)" : "none"};
          background: ${
            isScrolled ? "rgba(255, 255, 255, 0.43)" : "transparent"
          }; 
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
          gap: 8px;
          font-size: 20px;
          padding-top: 30px;
          height: 20px;
          font-weight: 600;
          color: #000;
          text-decoration: none;
        }

        .logo-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transform: rotate(45deg);
          border-radius: 4px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #000;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sign-in-btn {
          background: none;
          border: none;
          color: #374151;
          font-size: 15px;
          font-weight: 500;
          padding: 8px 16px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .sign-in-btn:hover {
          color: #000;
        }

        .sign-up-btn {
          background: #000;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sign-up-btn:hover {
          background: #374151;
          transform: translateY(-1px);
        }

        .breadcrumb-menu{
          display: none
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
          }
          
          .nav-links {
            display: none;
          }
          
          .nav-actions {
            display: none
          }

          .breadcrumb-menu{
          display: flex}
          .sidenav-overlay{
            width: 100%;
            height: 100%;
            backdrop-filter: blur(3px);
            z-index: 999999999999999999;
            position: fixed
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            AROX
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                About us
              </a>
            </li>
            <li>
              <a href="#testimony" className="nav-link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact us
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="primary-button">Book Now</button>
          </div>
          <div className="breadcrumb-menu">
            <button
              className="breadcrumb-btn"
              onClick={() => setShowSideNav(true)}
              aria-label="Open menu"
            >
              <span style={{ fontSize: 22, fontWeight: 700 }}>☰</span>
            </button>
          </div>
        </div>
      </nav>

      {showSideNav && (
        <div className="sidenav-overlay" onClick={() => setShowSideNav(false)}>
          <aside
            style={{
              position: "fixed",
              top: "-10px",
              right: 0,
              bottom: 0,
              width: "260px",
              height: "100%",
              background: "#fff",
              boxShadow: "0 0 16px rgba(0,0,0,0.12)",
              zIndex: 999999999999,
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              transition: "transform 0.3s ease",
            }}
          >
            <button
              style={{
                alignSelf: "flex-end",
                background: "none",
                border: "none",
                fontSize: 24,
                color: "grey",
                cursor: "pointer",
              }}
              onClick={() => setShowSideNav(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              About us
            </a>
            <a
              href="#testimony"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              Testimonials
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setShowSideNav(false)}
            >
              Contact us
            </a>
            <button className="primary-button" style={{ marginTop: "auto" }}>
              Book Now
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
