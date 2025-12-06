"use client";

import React from "react";
import { LucideIcon } from "lucide-react"; // Assuming Lucide icons are installed
import ContactForm from "../components/ContactForm"; // Assuming you have a ContactForm component

const HomePage = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, var(--primary) 30%, #ffffff 100%)",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Placeholder for high-res image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/path-to-high-res-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        ></div>
        <h1
          className="fade-in"
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            zIndex: 2,
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          Welcome to the Future of Chatbots
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            margin: "20px 0",
            zIndex: 2,
            animation: "fadeIn 2.5s ease-in-out",
          }}
        >
          Powering businesses with AI-driven solutions for tomorrow's challenges.
        </p>
        <div style={{ display: "flex", gap: "20px", zIndex: 2, animation: "fadeIn 3s ease-in-out" }}>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              borderRadius: "30px",
              background: "linear-gradient(45deg, var(--primary), #ff7d7d)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Get Started
          </button>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              borderRadius: "30px",
              background: "#fff",
              color: "var(--primary)",
              border: "2px solid var(--primary)",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Get in Touch</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
          Have questions? Reach out to us, and we'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </section>
    </div>
  );
},

export default HomePage;