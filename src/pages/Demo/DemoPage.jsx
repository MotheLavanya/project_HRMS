import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, Calendar, User, Mail, Phone, 
    Building2, Users as UsersIcon, Clock, 
    BarChart3, ShieldCheck, Play, ArrowRight,
    Sparkles, Check
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './DemoPage.css';

const DemoPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '', 
        employees: '', date: '', time: '', message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset form or send data...
    };

    const experiences = [
        { icon: <Play size={24} />, title: "Live Dashboard Walkthrough", desc: "Real-time tour of the HRMS core engine." },
        { icon: <UsersIcon size={24} />, title: "Employee Management", desc: "See how we handle the entire lifecycle." },
        { icon: <Clock size={24} />, title: "Attendance & Leave", desc: "Automated tracking and approval flows." },
        { icon: <ShieldCheck size={24} />, title: "Payroll Automation", desc: "Error-free salary and compliance tools." },
        { icon: <BarChart3 size={24} />, title: "Reports & Analytics", desc: "Deep dive into data-driven HR insights." },
    ];

    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_grey.svg"
    ];

    const steps = [
        { num: 1, title: "Fill the form", desc: "Tell us about your needs." },
        { num: 2, title: "Choose your time", desc: "Pick a slot that works." },
        { num: 3, title: "Join the live demo", desc: "Get your personalized tour." },
    ];

    return (
        <div className="master-demo-page">
            {/* 1. Hero Section */}
            <section className="demo-hero">
                <div className="demo-hero-gradient-overlay" />
                <div className="demo-hero-container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="demo-hero-content"
                    >
                        <motion.span 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="demo-badge"
                        >
                            <Sparkles size={14} /> 100% Free & No Obligation
                        </motion.span>
                        <h1>Book a <span className="text-gradient">Free Demo</span></h1>
                        <p className="hero-subtext">
                            See how our HRMS platform can simplify your HR operations, save time, and improve team productivity.
                        </p>
                        <div className="hero-bullet-points">
                            {[
                                "Personalized demo based on your business",
                                "No technical setup required",
                                "Get all your questions answered live"
                            ].map((point, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (idx * 0.2) }}
                                    className="hero-bullet"
                                >
                                    <div className="bullet-icon"><Check size={14} /></div>
                                    <span>{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Demo Booking Form Section */}
            <section className="demo-booking-section">
                <div className="demo-container">
                    <div className="booking-grid">
                        {/* Form Column */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="booking-form-card"
                        >
                            {!submitted ? (
                                <>
                                    <div className="form-header">
                                        <h2>Schedule Your Demo</h2>
                                        <p>Fill in the details to experience HRM Sphere.</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="actual-form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" name="name" placeholder="John Doe" required onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Work Email</label>
                                                <input type="email" name="email" placeholder="john@company.com" required onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Company Name</label>
                                                <input type="text" name="company" placeholder="Acme Inc." required onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Number of Employees</label>
                                            <select name="employees" required onChange={handleChange}>
                                                <option value="">Select range</option>
                                                <option value="1-50">1-50 Employees</option>
                                                <option value="51-200">51-200 Employees</option>
                                                <option value="201-500">201-500 Employees</option>
                                                <option value="500+">500+ Employees</option>
                                            </select>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Preferred Date</label>
                                                <input type="date" name="date" required onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Preferred Time</label>
                                                <input type="time" name="time" required onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Message (Optional)</label>
                                            <textarea name="message" placeholder="Tell us about your specific goals..." onChange={handleChange}></textarea>
                                        </div>
                                        <button type="submit" className="schedule-btn">
                                            Schedule My Demo <ArrowRight size={18} />
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <motion.div 
                                    className="confirmation-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="success-icon-box">
                                        <CheckCircle2 size={60} />
                                    </div>
                                    <h3>Your demo has been scheduled! 🎉</h3>
                                    <p>We've received your request. Our team will contact you shortly with the meeting details.</p>
                                    <button onClick={() => setSubmitted(false)} className="reset-btn">Schedule Another</button>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Benefits Column */}
                        <div className="booking-benefits-col">
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="benefits-illustration-card"
                            >
                                <div className="illustration-placeholder">
                                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" alt="HR Solutions" />
                                    <div className="illustration-overlay" />
                                </div>
                                <div className="benefits-mini-list">
                                    <div className="mini-benefit">
                                        <div className="mini-icon"><CheckCircle2 size={16} /></div>
                                        <div>
                                            <strong>Immediate ROI</strong>
                                            <p>See how you can save up to 20 hrs/week.</p>
                                        </div>
                                    </div>
                                    <div className="mini-benefit">
                                        <div className="mini-icon"><CheckCircle2 size={16} /></div>
                                        <div>
                                            <strong>Seamless Transition</strong>
                                            <p>Learn about our 48-hour data migration.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What You'll Get Section */}
            <section className="demo-experience-section">
                <div className="demo-container">
                    <div className="experience-header">
                        <h2>What You’ll Experience in the Demo</h2>
                    </div>
                    <div className="experience-grid">
                        {experiences.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="experience-card"
                            >
                                <div className="experience-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Trust Section */}
            <section className="demo-trust-section">
                <div className="demo-container">
                    <p className="trust-label">Trusted by Growing Businesses</p>
                    <div className="logo-slider">
                        <div className="logo-track">
                            {[...logos, ...logos].map((logo, idx) => (
                                <div key={idx} className="logo-item">
                                    <img src={logo} alt="Client" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Glass Flow Process Section */}
            <section className="demo-process-section">
                <div className="demo-container">
                    <div className="process-header">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            How It Works
                        </motion.h2>
                    </div>
                    <div className="process-flow-container">
                        <div className="flow-line-bg">
                            <motion.div 
                                className="flow-line-pulse"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <div className="glass-steps-grid">
                            {steps.map((step, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="glass-step-card"
                                >
                                    <div className="step-glass-capsule">
                                        <span className="step-number">{step.num}</span>
                                        <div className="step-content">
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                    <div className="card-glow" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DemoPage;
