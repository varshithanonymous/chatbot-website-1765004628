"use client";

import { Home, FileText, LogIn, UserPlus, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            background: "linear-gradient(to right, var(--primary), var(--secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
        >
          CHATBOT-WEBSITE
        </div>

        {/* Desktop Menu */}
        <div
          style={{
            display: isMenuOpen ? "none" : "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--secondary)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--primary)")}
          >
            <Home size={18} /> Home
          </a>
          <a
            href="#report"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--secondary)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--primary)")}
          >
            <FileText size={18} /> Report
          </a>
          <a
            href="#login"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--secondary)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--primary)")}
          >
            <LogIn size={18} /> Login
          </a>
          <a
            href="#signup"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--secondary)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--primary)")}
          >
            <UserPlus size={18} /> Signup
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          style={{
            display: "none",
            cursor: "pointer",
          }}
          className="mobile-menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--primary)" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem 0",
            gap: "1rem",
          }}
        >
          <a
            href="#home"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Home
          </a>
          <a
            href="#report"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Report
          </a>
          <a
            href="#login"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Login
          </a>
          <a
            href="#signup"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Signup
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-icon {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}