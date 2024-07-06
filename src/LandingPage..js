import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <div className="logo">
                    <a href="/">STUDYNT</a>
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                    <a href="/signup" className="signup-btn">Sign Up</a>
                </nav>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to STUDYNT</h1>
                    <p>Join the ultimate student community. Collaborate, learn, and grow together.</p>
                    <a href="/signup" className="cta-btn">Get Started</a>
                </div>
            </section>
            <section id="about" className="about">
                <h2>About Us</h2>
                <p>STUDYNT is a platform where students can connect, share knowledge, and help each other with academic challenges.</p>
            </section>
            <section id="features" className="features">
                <h2>Features</h2>
                <div className="feature-list">
                    <div className="feature">
                        <h3>Collaborate</h3>
                        <p>Work together on projects and assignments.</p>
                    </div>
                    <div className="feature">
                        <h3>Discuss</h3>
                        <p>Engage in meaningful discussions with peers.</p>
                    </div>
                    <div className="feature">
                        <h3>Learn</h3>
                        <p>Access a wealth of academic resources and materials.</p>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>Have questions? Reach out to me at solonjogo@gmail.com</p>
            </section>
            <footer className="footer">
                <p>&copy; 2024 STUDYNT. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
