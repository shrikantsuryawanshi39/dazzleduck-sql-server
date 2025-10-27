import React from 'react';
import Layout from '@theme/Layout';
import '../css/about.css';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function about() {
    return (
        <Layout
            title="About Dazzle Duck SQL Server"
            description="Learn about Dazzle Duck SQL Server — the next-generation SQL query engine optimized for analytics."
        >
            <main className="about-page">
                <section className="intro-section">
                    <h1>About <span className="highlight">Dazzle Duck SQL Server</span></h1>
                    <p className="intro-text">
                        Dazzle Duck SQL Server is a modern, high-performance SQL engine designed for fast,
                        scalable, and developer-friendly analytics. Built with simplicity and extensibility
                        in mind, it enables teams to query, analyze, and visualize large datasets efficiently.
                    </p>

                    <div className="intro-links">
                        <a href="./docs/about" className="secondary-btn">Learn More</a>
                    </div>
                </section>

                <section className="details-section">
                    <h2>Our Vision</h2>
                    <p>
                        We aim to make SQL analytics lightning-fast, simple to use, and accessible to everyone.
                        Dazzle Duck bridges the gap between traditional databases and modern analytical systems,
                        offering a single engine that’s both powerful and developer-friendly.
                    </p>
                    <ul className="key-points">
                        <li><strong>Speed:</strong> Vectorized execution for faster analytical queries.</li>
                        <li><strong>Simplicity:</strong> Minimal configuration and intuitive SQL syntax.</li>
                        <li><strong>Extensibility:</strong> Easily plug in connectors, optimizers, or custom functions.</li>
                        <li><strong>Open Source:</strong> Community-driven development with transparent governance.</li>
                    </ul>
                </section>

                <section className="team-section">
                    <h2>Meet the Team</h2>
                    <p>
                        Dazzle Duck is built and maintained by a passionate open-source community of developers
                        and data engineers who believe in open, high-performance analytics for all.
                    </p>

                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://placehold.co/600x400" alt="Shivam Suryawanshi" />
                            <h4>Shivam Suryawanshi</h4>
                            <p>Founder & Lead Developer</p>
                        </div>
                        <div className="team-member">
                            <img src="https://placehold.co/600x400" alt="Community" />
                            <h4>Open Source Contributors</h4>
                            <p>Community Developers</p>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <h2>Get in Touch</h2>
                    <p>
                        Have feedback, ideas, or questions? We’d love to hear from you!
                        Join the community or reach out directly using the links below.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:contact@dazzleduck.io"><FaEnvelope /> contact@dazzleduck.io</a>
                        <a href="https://github.com/dazzleduck-web/dazzleduck-sql-server" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub Repository
                        </a>
                        <a href="https://twitter.com/dazzleduckdb" target="_blank" rel="noopener noreferrer">
                            <FaTwitter /> @dazzleduckdb
                        </a>
                    </div>
                </section>

                <section className="footer-note">
                    <p>
                        Built with ❤️ by the <strong>Dazzle Duck</strong> community.<br />
                        Read more in our <a href="/docs/about">About Docs</a>.
                    </p>
                </section>
            </main>
        </Layout>
    );
}
