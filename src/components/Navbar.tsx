"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          gap: 8px;
          font-size: 20px;
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

        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
          }
          
          .nav-links {
            display: none;
          }
          
          .nav-actions {
            gap: 12px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            Elites
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
        </div>
      </nav>
    </>
  );
}
