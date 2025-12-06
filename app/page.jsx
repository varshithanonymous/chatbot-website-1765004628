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
              background: "linear-gradient(45deg, var(--primary), #ff7a7a)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
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
              border: "1px solid var(--primary)",
              cursor: "pointer",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        style={{
          padding: "50px 20px",
          background: "#f8f9fa",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ gridColumn: "1/-1", fontSize: "2.5rem", marginBottom: "30px" }}>Why Choose Us?</h2>
        {[
          {
            title: "AI-Powered Solutions",
            description: "Leverage the most advanced AI for human-like interactions.",
            icon: "cpu",
          },
          {
            title: "Scalability",
            description: "Solutions tailored to small businesses and enterprises alike.",
            icon: "layers",
          },
          {
            title: "Cross-Platform Integration",
            description: "Seamlessly connect with websites, apps, and social channels.",
            icon: "share",
          },
          {
            title: "Enhanced NLU",
            description: "Deliver intuitive experiences with advanced natural language understanding.",
            icon: "message-circle",
          },
        ].map((feature, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.1)";
            }}
          >
            <LucideIcon name={feature.icon} size={40} style={{ color: "var(--primary)", marginBottom: "15px" }} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{feature.title}</h3>
            <p style={{ color: "#6c757d" }}>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        style={{
          padding: "50px 20px",
          background: "linear-gradient(135deg, #ffffff 0%, #e9f5fc 100%)",
          overflowX: "auto",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "30px" }}>What Our Clients Say</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            scrollBehavior: "smooth",
            overflowX: "scroll",
          }}
        >
          {[
            {
              name: "Jane Doe",
              quote: "Our business has transformed thanks to their chatbot solutions!",
            },
            {
              name: "John Smith",
              quote: "The AI is so advanced, it's like chatting with a real person!",
            },
            {
              name: "Emily Davis",
              quote: "Fantastic service and incredible scalability for our needs.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <p style={{ fontStyle: "italic", color: "#6c757d" }}>"{testimonial.quote}"</p>
              <h4 style={{ marginTop: "10px", fontWeight: "bold" }}>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section
        style={{
          padding: "50px 20px",
          background: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Get in Touch</h2>
        <ContactForm />
      </section>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeIn 2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
},

export default HomePage;