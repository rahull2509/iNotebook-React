import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer({
  theme = { base: "#ffffffff", text: "#333" },
}) {
  return (
    <footer
      style={{
        backgroundColor: theme.base,
        color: theme.text,
        padding: "15px 20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "10px", // 
        }}
      >
        <p style={{ margin: 0 }}>© 2025 Rahul | All Rights Reserved</p>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px", 
          }}
        >
          <a
            href="https://github.com/rahull2509"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.text, fontSize: "20px" }}
          >
            <FaGithub />
          </a>

          <a
            href="https://twitter.com/rahull2509"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.text, fontSize: "20px" }}
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/rahullgangwar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.text, fontSize: "20px" }}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
