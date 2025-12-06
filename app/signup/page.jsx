"use client";

import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  },

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup form submitted:", formData);
  },

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, rgba(63,94,251,1), rgba(252,70,107,1))",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Create an Account
        </h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              background: "rgba(255, 255, 255, 0.6)",
              boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              background: "rgba(255, 255, 255, 0.6)",
              boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "1rem",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1.5rem",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              background: "rgba(255, 255, 255, 0.6)",
              boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "8px",
              background: "var(--primary)",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3c81f6")}
            onMouseOut={(e) => (e.target.style.background = "var(--primary)")}
          >
            Signup
          </button>
        </form>
        <div
          style={{
            margin: "1.5rem 0",
            color: "#fff",
            fontSize: "0.9rem",
          }}
        >
          <hr style={{ border: "0.5px solid rgba(255, 255, 255, 0.5)" }} />
          Or sign up with
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <button
            style={{
              flex: 1,
              padding: "0.7rem",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.6)",
              color: "#000",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#fff")}
            onMouseOut={(e) =>
              (e.target.style.background = "rgba(255, 255, 255, 0.6)")
            }
          >
            {/* [Image: Google Logo] */}
            Google
          </button>
          <button
            style={{
              flex: 1,
              padding: "0.7rem",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.6)",
              color: "#000",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#fff")}
            onMouseOut={(e) =>
              (e.target.style.background = "rgba(255, 255, 255, 0.6)")
            }
          >
            {/* [Image: GitHub Logo] */}
            GitHub
          </button>
        </div>
        <p
          style={{
            marginTop: "1.5rem",
            color: "#fff",
            fontSize: "0.9rem",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#3c81f6",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}