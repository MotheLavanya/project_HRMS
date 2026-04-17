import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, User, Mail, Phone, Building2, Users, ShieldCheck } from 'lucide-react';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '', companySize: '', dateTime: ''
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
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', company: '', companySize: '', dateTime: '' });
        }, 400); // Reset after close animation
    };

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
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button className="demo-close" onClick={handleClose}>
                            <X size={20} />
                        </button>

                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    className="demo-modal-grid"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Left Side - Branding & Trust */}
                                    <div className="demo-left">
                                        <div className="demo-left-content">
                                            <span className="demo-badge">See HRMS in Action</span>
                                            <h2 className="demo-title">Book Your Free Demo</h2>
                                            <p className="demo-desc">
                                                Discover how our HRMS simplifies payroll, attendance, and employee management.
                                            </p>
                                            
                                            <ul className="demo-benefits">
                                                <li>
                                                    <CheckCircle2 size={20} className="benefit-icon" />
                                                    <span>Easy employee management</span>
                                                </li>
                                                <li>
                                                    <CheckCircle2 size={20} className="benefit-icon" />
                                                    <span>Automated payroll system</span>
                                                </li>
                                                <li>
                                                    <CheckCircle2 size={20} className="benefit-icon" />
                                                    <span>Real-time reports & insights</span>
                                                </li>
                                            </ul>

                                            <div className="demo-trust">
                                                <ShieldCheck size={18} />
                                                <span>No spam. Your data is safe with us.</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Form */}
                                    <div className="demo-right">
                                        <form className="demo-form" onSubmit={handleSubmit}>
                                            <div className="demo-field">
                                                <User size={18} className="demo-field-icon" />
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
                                                <Mail size={18} className="demo-field-icon" />
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
                                                <Phone size={18} className="demo-field-icon" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    required
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="demo-row">
                                                <div className="demo-field">
                                                    <Building2 size={18} className="demo-field-icon" />
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
                                                    <Users size={18} className="demo-field-icon" />
                                                    <select 
                                                        name="companySize" 
                                                        required 
                                                        value={form.companySize} 
                                                        onChange={handleChange}
                                                        className={form.companySize ? 'has-value' : ''}
                                                    >
                                                        <option value="" disabled hidden>Company Size</option>
                                                        <option value="1-10">1 - 10 employees</option>
                                                        <option value="11-50">11 - 50 employees</option>
                                                        <option value="51-200">51 - 200 employees</option>
                                                        <option value="201-500">201 - 500 employees</option>
                                                        <option value="501+">501+ employees</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="demo-field">
                                                <Calendar size={18} className="demo-field-icon" />
                                                <input
                                                    type="datetime-local"
                                                    name="dateTime"
                                                    required
                                                    value={form.dateTime}
                                                    onChange={handleChange}
                                                    className={form.dateTime ? 'has-value' : ''}
                                                />
                                            </div>

                                            <button type="submit" className="demo-submit">
                                                Schedule Demo
                                            </button>
                                        </form>
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
                                        <CheckCircle2 size={56} />
                                    </motion.div>
                                    <h3 className="demo-success-title">🎉 Demo scheduled successfully!</h3>
                                    <p className="demo-success-msg">
                                        Our team will contact you shortly to confirm your session.
                                    </p>
                                    <button className="demo-submit-done" onClick={handleClose}>
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
