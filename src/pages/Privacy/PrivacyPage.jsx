import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Mail, Phone, MapPin } from 'lucide-react';
import './PrivacyPage.css';

const PrivacyPage = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: "We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our HRMS platform and services. By using our platform, you agree to the terms outlined in this policy."
        },
        {
            title: "2. Information We Collect",
            subsections: [
                {
                    subtitle: "a. Personal Information",
                    items: ["Name", "Email address", "Phone number", "Company details"]
                },
                {
                    subtitle: "b. Employee Data (for HRMS usage)",
                    items: ["Employee names and profiles", "Attendance and leave records", "Payroll and compensation details"]
                },
                {
                    subtitle: "c. Technical Information",
                    items: ["IP address", "Browser type", "Device information", "Usage data"]
                }
            ]
        },
        {
            title: "3. How We Use Your Information",
            content: "We use the collected data to:",
            items: [
                "Provide and maintain our HRMS services",
                "Manage employee records and HR processes",
                "Improve platform performance and user experience",
                "Communicate updates, support, and important notifications",
                "Ensure security and prevent unauthorized access"
            ]
        },
        {
            title: "4. Data Security",
            content: "We implement strong security measures to protect your data, including encryption, secure servers, and access controls. While we strive to protect your information, no system is completely secure. We continuously improve our security practices to ensure maximum protection."
        },
        {
            title: "5. Data Sharing",
            content: "We do not sell or rent your personal information. We may share data only in the following cases:",
            items: [
                "With trusted service providers (for hosting, analytics, etc.)",
                "When required by law or legal authorities",
                "To protect our platform and users from fraud or misuse"
            ]
        },
        {
            title: "6. Data Retention",
            content: "We retain your data only for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time."
        },
        {
            title: "7. Your Rights",
            content: "You have the right to:",
            items: [
                "Access your data",
                "Update or correct your information",
                "Request deletion of your data",
                "Withdraw consent where applicable"
            ],
            footer: "To exercise these rights, please contact us."
        },
        {
            title: "8. Cookies",
            content: "We use cookies to improve your experience on our website. Cookies help us understand user behavior and enhance functionality. You can manage or disable cookies through your browser settings."
        },
        {
            title: "9. Third-Party Services",
            content: "Our platform may integrate with third-party tools. We are not responsible for their privacy practices, and we recommend reviewing their policies separately."
        },
        {
            title: "10. Updates to This Policy",
            content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date."
        }
    ];

    return (
        <div className="privacy-page-root">
            <main className="privacy-main-container">
                <div className="privacy-card">
                    <header className="privacy-header">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="privacy-title"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="privacy-meta"
                        >
                            <span>Effective Date: March 17, 2026</span>
                            <span className="meta-divider">|</span>
                            <span>Last Updated: March 17, 2026</span>
                        </motion.div>
                    </header>

                    <div className="privacy-content-wrapper">
                        {sections.map((section, index) => (
                            <section key={index} className="privacy-section">
                                <h2 className="section-title">{section.title}</h2>
                                {section.content && <p className="section-text">{section.content}</p>}

                                {section.items && (
                                    <ul className="section-list">
                                        {section.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.subsections && (
                                    <div className="subsections-list">
                                        {section.subsections.map((sub, i) => (
                                            <div key={i} className="privacy-subsection">
                                                <h3>{sub.subtitle}</h3>
                                                <ul className="sub-list">
                                                    {sub.items.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.footer && <p className="section-footer-text">{section.footer}</p>}
                            </section>
                        ))}

                        <section className="privacy-section contact-info-section">
                            <h2 className="section-title">11. Contact Us</h2>
                            <p className="section-text">If you have any questions or concerns about this Privacy Policy, please contact us:</p>

                            <div className="contact-details-list">
                                <div className="contact-detail-item">
                                    <strong>Email:</strong> <span>support@yourhrms.com</span>
                                </div>
                                <div className="contact-detail-item">
                                    <strong>Phone:</strong> <span>+91 XXXXX XXXXX</span>
                                </div>
                                <div className="contact-detail-item">
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

export default PrivacyPage;
