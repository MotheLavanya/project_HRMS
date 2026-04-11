import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, MapPin } from 'lucide-react';
import './SecurityPage.css';

const SecurityPage = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: "We are committed to protecting the security of your data and ensuring the safety of our HRMS platform. This Security Policy outlines the measures we take to safeguard your information."
        },
        {
            title: "2. Data Protection",
            content: "We use industry-standard practices to protect your data, including:",
            items: [
                "Encryption of data in transit (HTTPS/SSL)",
                "Secure storage of sensitive information",
                "Regular backups to prevent data loss"
            ]
        },
        {
            title: "3. Access Control",
            content: "We ensure that only authorized users can access sensitive data:",
            items: [
                "Role-based access control (RBAC)",
                "Secure login with strong password requirements",
                "Multi-factor authentication (optional/recommended)"
            ]
        },
        {
            title: "4. Infrastructure Security",
            content: "Our platform is hosted on secure servers with:",
            items: [
                "Firewall protection",
                "Intrusion detection and monitoring systems",
                "Regular system updates and patches"
            ]
        },
        {
            title: "5. Data Privacy",
            content: "We handle all employee and company data with strict confidentiality:",
            items: [
                "No unauthorized sharing of data",
                "Data used only for service functionality",
                "Compliance with applicable data protection laws"
            ]
        },
        {
            title: "6. Monitoring and Threat Detection",
            content: "We continuously monitor our systems to:",
            items: [
                "Detect unusual activity",
                "Prevent unauthorized access",
                "Respond quickly to potential threats"
            ]
        },
        {
            title: "7. Incident Response",
            content: "In case of a security incident:",
            items: [
                "Immediate investigation is initiated",
                "Affected users are notified promptly",
                "Corrective actions are taken to prevent recurrence"
            ]
        },
        {
            title: "8. User Responsibilities",
            content: "To maintain security, users should:",
            items: [
                "Use strong and unique passwords",
                "Keep login credentials confidential",
                "Log out from shared devices",
                "Report suspicious activity immediately"
            ]
        },
        {
            title: "9. Third-Party Security",
            content: "We may use trusted third-party services (e.g., cloud hosting, analytics). These providers follow strict security standards. However, we recommend reviewing their policies separately."
        },
        {
            title: "10. Data Backup and Recovery",
            content: "We perform regular backups to ensure:",
            items: [
                "Data recovery in case of failure",
                "Business continuity",
                "Minimal downtime"
            ]
        },
        {
            title: "11. Updates to Security Practices",
            content: "We continuously improve our security measures. This policy may be updated to reflect new technologies and practices."
        }
    ];

    return (
        <div className="security-page-root">
            <main className="security-main-container">
                <div className="security-card">
                    <header className="security-header">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="security-title"
                        >
                            Security Policy
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="security-meta"
                        >
                            <span>Effective Date: March 17, 2026</span>
                            <span className="meta-divider">|</span>
                            <span>Last Updated: March 17, 2026</span>
                        </motion.div>
                    </header>

                    <div className="security-content-wrapper">
                        {sections.map((section, index) => (
                            <motion.section
                                key={index}
                                className="security-section"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <h2 className="section-title">{section.title}</h2>
                                {section.content && <p className="section-text">{section.content}</p>}

                                {section.items && (
                                    <ul className="section-list">
                                        {section.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </motion.section>
                        ))}

                        <motion.section
                            className="security-section contact-info-section"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">12. Contact Us</h2>
                            <p className="section-text">If you notice any security issue or vulnerability, please contact us immediately:</p>

                            <div className="contact-details-list">
                                <div className="contact-detail-item">
                                    <Mail size={18} className="contact-icon" />
                                    <strong>Email:</strong> <span>security@yourhrms.com</span>
                                </div>
                                <div className="contact-detail-item">
                                    <MapPin size={18} className="contact-icon" />
                                    <strong>Location:</strong> <span>Hyderabad, India</span>
                                </div>
                            </div>
                        </motion.section>

                        <div className="security-trust-box">
                            <ShieldCheck className="trust-icon" size={24} />
                            <p>100% Encrypted & ISO 27001 Ready Platform</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default SecurityPage;
