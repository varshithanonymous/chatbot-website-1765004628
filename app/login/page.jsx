"use client";

import React from "react";

export default function LoginPage() {
  const handleSocialLogin = (platform) => {
    console.log(`${platform} login triggered`);
  },

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, var(--primary), #1e3c72)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "2rem",
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#fff",
          }}
        >
          Welcome Back!
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) =>
              (e.target.style.border = "1px solid var(--primary)")
            }
            onBlur={(e) =>
              (e.target.style.border = "1px solid rgba(255, 255, 255, 0.3)")
            }
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) =>
              (e.target.style.border = "1px solid var(--primary)")
            }
            onBlur={(e) =>
              (e.target.style.border = "1px solid rgba(255, 255, 255, 0.3)")
            }
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              background: "var(--primary)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "rgba(255, 255, 255, 0.9)")
            }
            onMouseOut={(e) => (e.target.style.background = "var(--primary)")}
          >
            Login
          </button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleSocialLogin("Google")}
          >
            {/* [Image: Google logo] */}
            <span>Continue with Google</span>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleSocialLogin("GitHub")}
          >
            {/* [Image: GitHub logo] */}
            <span>Continue with GitHub</span>
          </button>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "0.875rem",
          }}
        >
          Don’t have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: "600",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fff")}
            onMouseOut={(e) => (e.target.style.color = "var(--primary)")}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}