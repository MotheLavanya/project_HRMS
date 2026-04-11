import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './FAQPage.css';

const FAQItem = ({ faq, isOpen, onClick, isHighlighted }) => {
    return (
        <div
            className={`faqp-item ${isOpen ? 'active' : ''} ${isHighlighted ? 'highlight' : ''}`}
            onClick={onClick}
        >
            <button className="faqp-question-row">
                <span className="faqp-question">{faq.question}</span>
                <span className="faqp-icon">
                    <Plus size={24} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="faqp-answer">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQPage = ({ onNavigate }) => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What is an HRMS platform?",
            answer: "An HRMS (Human Resource Management System) is a software solution that helps businesses manage employee data, payroll, attendance, leave, and performance — all in one centralized system."
        },
        {
            question: "How can this HRMS help my business?",
            answer: "Our platform automates repetitive HR tasks, reduces manual errors, and provides real-time insights, allowing your team to focus on productivity and employee engagement.",
            highlight: true
        },
        {
            question: "Is the platform suitable for small businesses?",
            answer: "Yes, our HRMS is designed to support businesses of all sizes, from startups to large enterprises, with scalable features."
        },
        {
            question: "Does the system support payroll management?",
            answer: "Yes, the platform includes automated payroll processing with accurate calculations, deductions, and reporting."
        },
        {
            question: "Can employees access the system?",
            answer: "Yes, employees can log in to view attendance, apply for leave, access payslips, and update their information."
        },
        {
            question: "Is my data secure?",
            answer: "We use advanced security measures and cloud infrastructure to ensure your data is safe, secure, and always accessible."
        },
        {
            question: "Does the HRMS integrate with other tools?",
            answer: "Yes, our platform supports integrations with popular tools like accounting software, communication platforms, and more."
        },
        {
            question: "How can I get started?",
            answer: "You can request a demo or contact our team to get started with the platform."
        },
        {
            question: "How is attendance tracked?",
            answer: "Our system supports biometric integration, web-clocking, and mobile-based tracking with GPS geo-fencing for field employees."
        },
        {
            question: "Can I generate custom reports?",
            answer: "Yes, you can generate real-time analytics and custom reports for payroll, performance, and attendance with various export options."
        },
        {
            question: "Is there a mobile app available?",
            answer: "Yes, we have native iOS and Android applications for both employees and managers to stay connected on the go."
        },
        {
            question: "How does leave management work?",
            answer: "Employees can request leave through their portal, and managers can approve/reject with automated workflows and real-time balance tracking."
        },
        {
            question: "Can I manage multiple locations?",
            answer: "Absolutely. Our platform supports multi-branch and multi-location management with centralized control and local-specific policies."
        },
        {
            question: "What about data backup?",
            answer: "Your data is automatically backed up daily on secure cloud servers to ensure zero data loss and business continuity."
        },
        {
            question: "Is there a free trial?",
            answer: "We offer a personalized demo to showcase how ClassX360 can solve your specific HR challenges. Contact us to schedule today."
        },
        {
            question: "Does it support role-based access?",
            answer: "Yes, you can define granular permissions and roles to control exactly what sensitive data different users can access."
        }
    ];

    return (
        <div className="faqp-root">
            <div className="faqp-container">
                {/* Hero section */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="faqp-header"
                >
                    <span className="faqp-tag">Support</span>
                    <h1 className="faqp-title">Frequently Asked Questions</h1>
                    <p className="faqp-description">
                        Everything you need to know about our HRMS platform and how it can help your business thrive.
                    </p>
                </motion.header>

                {/* FAQ Items */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="faqp-list-wrapper"
                >
                    <div className="faqp-column">
                        {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faqp-item ${openIndex === index ? 'active' : ''} ${faq.highlight ? 'highlight' : ''}`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="faqp-question-box">
                                    <span className="faqp-question">{faq.question}</span>
                                    <div className="faqp-toggle">
                                        <div className="toggle-line horizontal"></div>
                                        <div className="toggle-line vertical"></div>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="faqp-answer-wrapper"
                                        >
                                            <p className="faqp-answer">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    <div className="faqp-column">
                        {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                            const actualIndex = index + Math.ceil(faqs.length / 2);
                            return (
                                <div 
                                    key={actualIndex} 
                                    className={`faqp-item ${openIndex === actualIndex ? 'active' : ''} ${faq.highlight ? 'highlight' : ''}`}
                                    onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                                >
                                    <div className="faqp-question-box">
                                        <span className="faqp-question">{faq.question}</span>
                                        <div className="faqp-toggle">
                                            <div className="toggle-line horizontal"></div>
                                            <div className="toggle-line vertical"></div>
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {openIndex === actualIndex && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="faqp-answer-wrapper"
                                            >
                                                <p className="faqp-answer">{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom CTA is currently disabled */}
            </div>
        </div>
    );
};

export default FAQPage;
