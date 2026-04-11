import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Users, 
    Heart, 
    Globe, 
    Zap, 
    ArrowRight,
    MapPin,
    Briefcase
} from 'lucide-react';
import './CareersPage.css';

const CareersPage = ({ onDemoClick, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        { icon: <Heart className="text-pink-500" />, title: "People First", desc: "Wellness programs and mental health support." },
        { icon: <Globe className="text-blue-500" />, title: "Remote First", desc: "Work from anywhere in the world." },
        { icon: <Zap className="text-amber-500" />, title: "Equity", desc: "Everyone is an owner with our ESOP program." }
    ];

    const jobs = [
        { title: "Senior Frontend Engineer", location: "Remote / Bengaluru", dept: "Engineering" },
        { title: "Product Designer (UX/UI)", location: "Remote", dept: "Product" },
        { title: "HR Transformation Consultant", location: "London / Remote", dept: "Sales" }
    ];

    return (
        <div className="subpage-root">
            <header className="subpage-hero careers-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="subpage-icon-box"
                    >
                        <Users size={32} />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Join the <span className="text-gradient">HR Revolution</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="subpage-subtitle"
                    >
                        We're building the future of work. Come be a part of it.
                    </motion.p>
                </div>
            </header>

            <main className="container subpage-content">
                <section className="careers-section">
                    <h2 className="section-title">Why Work With Us?</h2>
                    <div className="careers-grid">
                        {benefits.map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="benefit-card"
                            >
                                <div className="benefit-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="careers-section">
                    <h2 className="section-title">Open Positions</h2>
                    <div className="jobs-list">
                        {jobs.map((job, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ x: 10 }}
                                className="job-item"
                            >
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <div className="job-meta">
                                        <span><MapPin size={14} /> {job.location}</span>
                                        <span><Briefcase size={14} /> {job.dept}</span>
                                    </div>
                                </div>
                                <button className="apply-btn">
                                    Apply Now <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <section className="subpage-cta">
                <div className="container">
                    <h2>Don't see a fit?</h2>
                    <p>Send us your resume anyway and we'll keep you in mind for future roles.</p>
                    <button className="cta-btn-primary" onClick={() => onNavigate('contact')}>Contact Us</button>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
