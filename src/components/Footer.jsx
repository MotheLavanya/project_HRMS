import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Twitter, Linkedin, Facebook, Github,
    ArrowRight, Mail
} from 'lucide-react';
import './Footer.css';

const Footer = ({ onNavigate, onDemoClick }) => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');

    const footerData = {
        platform: {
            title: "Platform",
            links: [
                { name: "Features", id: "features" },
                { name: "Integrations", id: "integrations" },
                { name: "Pricing", id: "pricing" }, // Mapping to home for now
                { name: "Book a Demo", action: "demo" }
            ]
        },
        resources: {
            title: "Resources",
            links: [
                { name: "Blog", id: "blog" },
                { name: "Testimonials", id: "testimonials" }, // Mapping to testimonials page
                { name: "FAQs", id: "faq" }
            ]
        },
        company: {
            title: "Company",
            links: [
                { name: "About Us", id: "about" },
                // { name: "Careers", id: "careers" },
                { name: "Contact Us", id: "contact" }
            ]
        },
        legal: {
            title: "Legal",
            links: [
                { name: "Privacy Policy", id: "privacy" },
                { name: "Terms of Service", id: "terms" },
                { name: "Security Policy", id: "security" }
                // { name: "Cookie Policy", id: "home"      
            ]
        }
    };

    const handleLinkClick = (link) => {
        if (link.action === "demo") {
            onDemoClick?.();
        } else {
            onNavigate(link.id);
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Success! Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer-v3">
            <div className="footer-container-v3">
                <div className="footer-grid-v3">

                    {/* 1️⃣ Company Info (About) */}
                    <div className="footer-brand-col">
                        <div className="footer-logo-v3" onClick={() => onNavigate('home')}>
                            <div className="logo-icon-v3">H</div>
                            <span>HRMS</span>
                        </div>
                        <p className="footer-about-text">
                            Our HRMS platform helps businesses simplify HR operations by managing employees,
                            automating payroll, tracking attendance, and providing powerful HR insights.
                        </p>
                        <div className="footer-social-v3">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* 2️⃣ Platform, 3️⃣ Resources, 4️⃣ Company, 5️⃣ Legal */}
                    <div className="footer-nav-groups">
                        {Object.entries(footerData).map(([key, group]) => (
                            <div key={key} className="footer-nav-col-v3">
                                <h4 className="footer-heading-v3">{group.title}</h4>
                                {key === 'company' ? ( // Special handling for 'Company' group
                                    <ul className="footer-links-v3">
                                        <li><button onClick={() => onNavigate('about')} className="footer-link-v3">About Us</button></li>
                                        <li><button onClick={() => onNavigate('careers')} className="footer-link-v3">Careers</button></li>
                                        {/* Render other company links dynamically if needed, or hardcode */}
                                        {group.links.filter(link => link.name !== "About Us" && link.name !== "Careers").map((link, idx) => (
                                            <li key={idx}>
                                                <button
                                                    onClick={() => handleLinkClick(link)}
                                                    className="footer-link-v3"
                                                >
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="footer-links-v3">
                                        {group.links.map((link, idx) => (
                                            <li key={idx}>
                                                <button
                                                    onClick={() => handleLinkClick(link)}
                                                    className="footer-link-v3"
                                                >
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                {/* 6️⃣ Newsletter */}
                <div className="footer-newsletter-v3">
                    <div className="newsletter-content">
                        <h4 className="footer-heading-v3">Stay Updated</h4>
                        <p>Subscribe for HR insights, product updates, and industry news.</p>
                    </div>
                    <form className="newsletter-form-v3" onSubmit={handleSubscribe}>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="subscribe-btn-v3">
                            Subscribe
                            <ArrowRight size={16} />
                        </button>
                    </form>
                </div>

                <div className="footer-bottom-v3">
                    <div className="copyright-v3">
                        © {currentYear} HRMS Platform Inc. All rights reserved.
                    </div>
                    <div className="footer-decor-lines">
                        <div className="decor-line"></div>
                        <div className="decor-dot"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
