import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Clock, 
    MessageCircle, 
    HelpCircle, 
    FileText,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'Book Demo',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-card-root">
            {/* Premium Background Elements */}
            <div className="contact-card-bg">
                <div className="float-shape shape-1"></div>
                <div className="float-shape shape-2"></div>
                <div className="float-shape shape-3"></div>
            </div>
            
            <main className="contact-card-container">
                <motion.div 
                    className="dual-surface-card"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="card-shine-effect"></div>
                    
                    {/* Left Surface: The Form (White) */}
                    <div className="surface-left">
                        <div className="surface-content">
                            <header className="card-form-header">
                                <span className="p-badge">Get in Touch</span>
                                <h1>Send us a message</h1>
                                <p>We'd love to hear from you. Please fill out the form below.</p>
                            </header>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="card-form">
                                    <div className="card-input-row">
                                        <div className="card-input-group">
                                            <label>Full Name</label>
                                            <input name="fullName" type="text" placeholder="John Doe" required onChange={handleChange} />
                                        </div>
                                        <div className="card-input-group">
                                            <label>Work Email</label>
                                            <input name="email" type="email" placeholder="john@company.com" required onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="card-input-row">
                                        <div className="card-input-group">
                                            <label>Company</label>
                                            <input name="company" type="text" placeholder="Your Org" required onChange={handleChange} />
                                        </div>
                                        <div className="card-input-group">
                                            <label>Phone</label>
                                            <input name="phone" type="tel" placeholder="+91 XXX XXX XXXX" required onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="card-input-group">
                                        <label>How can we help?</label>
                                        <select name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                                            <option>Book Demo</option>
                                            <option>Pricing Plans</option>
                                            <option>Technical Support</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="card-input-group">
                                        <label>Message</label>
                                        <textarea name="message" placeholder="Tell us more about your needs..." required onChange={handleChange}></textarea>
                                    </div>
                                    <button type="submit" className="card-submit-btn">
                                        Submit Inquiry <ArrowRight size={18} />
                                    </button>
                                </form>
                            ) : (
                                <motion.div 
                                    className="card-success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="success-icon-v7"><CheckCircle2 size={40} /></div>
                                    <h2>Request Received!</h2>
                                    <p>Our team will reach out to you within 24 hours.</p>
                                    <button className="card-reset-btn" onClick={() => setSubmitted(false)}>Send Another</button>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Right Surface: Information (Violet) */}
                    <div className="surface-right">
                        <div className="surface-content">
                            <div className="info-glow-decoration"></div>
                            
                            <header className="card-info-header">
                                <h2>Contact Information</h2>
                                <p>Prefer a direct conversation? Here's how to reach us.</p>
                            </header>

                            <div className="card-info-items">
                                <div className="card-info-item">
                                    <div className="item-icon-v7"><Mail size={24} /></div>
                                    <div className="item-details">
                                        <label>Email Support</label>
                                        <p>hello@yourhrms.com</p>
                                    </div>
                                </div>
                                <div className="card-info-item">
                                    <div className="item-icon-v7"><Phone size={24} /></div>
                                    <div className="item-details">
                                        <label>Call Directly</label>
                                        <p>+91 (040) 4567 8900</p>
                                    </div>
                                </div>
                                <div className="card-info-item">
                                    <div className="item-icon-v7"><MapPin size={24} /></div>
                                    <div className="item-details">
                                        <label>Our Headquarters</label>
                                        <p>HITECH City, Hyderabad, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-help-island">
                                <HelpCircle size={20} className="island-pulsate" />
                                <p>Looking for help? <span className="underline">View FAQs</span></p>
                            </div>

                            <footer className="card-info-footer">
                                <p>Follow our journey</p>
                                <div className="social-links-v7">
                                    <div className="social-glow-orb"><MessageCircle size={16} /></div>
                                    <div className="social-glow-orb"><HelpCircle size={16} /></div>
                                    <div className="social-glow-orb"><FileText size={16} /></div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default ContactPage;
