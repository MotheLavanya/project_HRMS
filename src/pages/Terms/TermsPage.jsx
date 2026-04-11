import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './TermsPage.css';

const TermsPage = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: "Welcome to our HRMS platform. These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms. If you do not agree, please do not use our services."
        },
        {
            title: "2. Use of Services",
            content: "You agree to use our HRMS platform only for lawful business purposes. You must not:",
            items: [
                "Use the platform for illegal activities",
                "Attempt to gain unauthorized access to the system",
                "Interfere with or disrupt platform performance",
                "Misuse or copy any part of the service"
            ]
        },
        {
            title: "3. Account Responsibilities",
            content: "To use our services, you may need to create an account. You are responsible for:",
            items: [
                "Maintaining the confidentiality of your login credentials",
                "All activities that occur under your account",
                "Providing accurate and up-to-date information"
            ],
            footer: "We are not responsible for any loss caused by unauthorized access to your account."
        },
        {
            title: "4. Data and Content",
            content: "You retain ownership of the data you upload to the platform. By using our service, you grant us permission to:",
            items: [
                "Store and process your data",
                "Use data to provide and improve our services"
            ],
            footer: "You are responsible for ensuring that your data is accurate and complies with applicable laws."
        },
        {
            title: "5. Subscription and Payments",
            content: "Some features of our HRMS platform may require a paid subscription.",
            items: [
                "Pricing details are provided on the website",
                "Payments must be made on time",
                "Failure to pay may result in suspension of services",
                "All fees are non-refundable unless stated otherwise."
            ]
        },
        {
            title: "6. Service Availability",
            content: "We strive to provide uninterrupted service, but we do not guarantee that the platform will always be available. We may:",
            items: [
                "Perform maintenance",
                "Update features",
                "Temporarily suspend access if necessary"
            ]
        },
        {
            title: "7. Intellectual Property",
            content: "All content, design, and technology on this platform are owned by us. You may not:",
            items: [
                "Copy, reproduce, or distribute our content",
                "Reverse-engineer or attempt to extract source code"
            ]
        },
        {
            title: "8. Data Security",
            content: "We take reasonable measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security."
        },
        {
            title: "9. Termination",
            content: "We reserve the right to suspend or terminate your access if:",
            items: [
                "You violate these terms",
                "You misuse the platform",
                "Required payments are not made"
            ]
        },
        {
            title: "10. Limitation of Liability",
            content: "We are not liable for:",
            items: [
                "Any indirect or consequential damages",
                "Loss of data, revenue, or business",
                "Issues caused by third-party services"
            ]
        },
        {
            title: "11. Third-Party Integrations",
            content: "Our platform may integrate with third-party tools. We are not responsible for their services or policies."
        },
        {
            title: "12. Changes to Terms",
            content: "We may update these Terms of Service at any time. Continued use of the platform means you accept the updated terms."
        },
        {
            title: "13. Governing Law",
            content: "These terms are governed by the laws of India."
        }
    ];

    return (
        <div className="terms-page-root">
            <main className="terms-main-container">
                <div className="terms-card">
                    <header className="terms-header">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="terms-title"
                        >
                            Terms of Service
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="terms-meta"
                        >
                            <span>Effective Date: March 17, 2026</span>
                            <span className="meta-divider">|</span>
                            <span>Last Updated: March 17, 2026</span>
                        </motion.div>
                    </header>

                    <div className="terms-content-wrapper">
                        {sections.map((section, index) => (
                            <section key={index} className="terms-section">
                                <h2 className="section-title">{section.title}</h2>
                                {section.content && <p className="section-text">{section.content}</p>}

                                {section.items && (
                                    <ul className="section-list">
                                        {section.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.footer && <p className="section-footer-text">{section.footer}</p>}
                            </section>
                        ))}

                        <section className="terms-section contact-info-section">
                            <h2 className="section-title">14. Contact Us</h2>
                            <p className="section-text">If you have any questions about these Terms, please contact us:</p>

                            <div className="contact-details-list">
                                <div className="contact-detail-item">
                                    <Mail size={18} className="contact-icon" />
                                    <strong>Email:</strong> <span>support@yourhrms.com</span>
                                </div>
                                <div className="contact-detail-item">
                                    <Phone size={18} className="contact-icon" />
                                    <strong>Phone:</strong> <span>+91 XXXXX XXXXX</span>
                                </div>
                                <div className="contact-detail-item">
                                    <MapPin size={18} className="contact-icon" />
                                    <strong>Location:</strong> <span>Hyderabad, India</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default TermsPage;
