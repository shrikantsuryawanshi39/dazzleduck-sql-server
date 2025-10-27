import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import "../css/custom.css"; 
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: "⚡",
      title: "Fast & Efficient",
      desc: "Vectorized query execution and smart caching deliver lightning-fast analytics performance.",
    },
    {
      icon: "🧩",
      title: "Extensible",
      desc: "Flexible modular architecture supporting plugins, backend connectors, and custom UDFs.",
    },
    {
      icon: "🌍",
      title: "Open & Transparent",
      desc: "Fully open-source project — transparent, auditable, and community-driven.",
    },
    {
      icon: "🛠️",
      title: "Developer Friendly",
      desc: "Built with a clean API, extensive documentation, and modern SQL compatibility.",
    },
  ];

  return (
    <Layout
      title="Dazzle Duck SQL Server"
      description="Modern, high-performance SQL engine for next-generation analytics."
    >
      <main className="hero-section">
        <div className="hero-content">
          <h1>Dazzle Duck SQL Server</h1>
          <p className="hero-subtitle">
            The next-generation SQL engine for high-performance analytics — fast, modern, and open.
          </p>
          <div className="hero-buttons">
            <Link className="button-primary" to="/docs/intro">
              🚀 Get Started
            </Link>
            <a
              className="button-secondary"
              href="https://github.com/dazzleduck-web/dazzleduck-sql-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </main>

      <section className="features-section">
        <h2>Why Choose Dazzle Duck?</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>
          © {new Date().getFullYear()} Dazzle Duck SQL Server — Built with ❤️ using Docusaurus.
        </p>
      </footer>
    </Layout>
  );
}
