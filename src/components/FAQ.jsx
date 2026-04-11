import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ faq, isOpen, onClick, isHighlighted }) => {
    return (
        <div 
            className={`faq-item ${isOpen ? 'active' : ''} ${isHighlighted ? 'highlight' : ''}`}
            onClick={onClick}
        >
            <button className="faq-question-row">
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon">
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
                        className="faq-answer-container"
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
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
        }
    ];

    return (
        <section ref={sectionRef} className="faq-section" id="faq">
            <div className="faq-container">
                <div className={`faq-header fade ${isVisible ? 'show' : ''}`}>
                    <span className="faq-label">FAQs</span>
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">
                        Find answers to common questions about our HRMS platform, features, pricing, and support.
                    </p>
                </div>

                <div className={`faq-list fade ${isVisible ? 'show' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            isHighlighted={faq.highlight}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
