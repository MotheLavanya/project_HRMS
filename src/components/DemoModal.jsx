import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, User, Mail, Phone, Building2 } from 'lucide-react';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '', dateTime: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => setSubmitted(false), 400); // Reset after close animation
    };

    const benefits = [
        'Employee management dashboard',
        'Attendance & leave tracking',
        'Payroll automation',
        'HR analytics insights',
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="demo-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className="demo-modal"
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 30 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button className="demo-close" onClick={handleClose}>
                            <X size={20} />
                        </button>

                        {/* Decorative top bar */}
                        <div className="demo-top-bar" />

                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Header */}
                                    <div className="demo-header">
                                        <div className="demo-badge">Free Demo</div>
                                        <h2 className="demo-title">Book a Personalized HRMS Demo</h2>
                                        <p className="demo-subtitle">
                                            See how our HRMS simplifies employee management, payroll, and HR operations.
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form className="demo-form" onSubmit={handleSubmit}>
                                        <div className="demo-field">
                                            <User size={16} className="demo-field-icon" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="demo-field">
                                            <Mail size={16} className="demo-field-icon" />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Work Email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="demo-field">
                                            <Phone size={16} className="demo-field-icon" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="demo-field">
                                            <Building2 size={16} className="demo-field-icon" />
                                            <input
                                                type="text"
                                                name="company"
                                                placeholder="Company Name"
                                                required
                                                value={form.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="demo-field">
                                            <Calendar size={16} className="demo-field-icon" />
                                            <input
                                                type="datetime-local"
                                                name="dateTime"
                                                required
                                                value={form.dateTime}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <button type="submit" className="demo-submit">
                                            Book My Demo
                                        </button>
                                    </form>

                                    {/* Benefits */}
                                    <div className="demo-benefits">
                                        <p className="demo-benefits-title">What you'll see in the demo</p>
                                        <div className="demo-benefits-list">
                                            {benefits.map((item, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="demo-benefit-chip"
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.07 }}
                                                >
                                                    <CheckCircle2 size={13} />
                                                    {item}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    className="demo-success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <motion.div
                                        className="demo-success-icon"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                                    >
                                        <CheckCircle2 size={48} />
                                    </motion.div>
                                    <h3 className="demo-success-title">Demo Request Sent!</h3>
                                    <p className="demo-success-msg">
                                        Our team will contact you soon to confirm your demo session.
                                    </p>
                                    <button className="demo-submit" onClick={handleClose}>
                                        Done
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DemoModal;
