import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Play, Users, Globe, Award, TrendingUp, Star } from 'lucide-react';
import Testimonials from '../../components/Testimonials';
import './TestimonialsPage.css';

const TestimonialsPage = ({ onNavigate }) => {
    const stats = [
        { icon: Users, value: "500k+", label: "Employees Managed", color: "#6366F1" },
        { icon: Globe, value: "15+", label: "Countries Supported", color: "#8B5CF6" },
        { icon: Award, value: "98%", label: "Renewal Rate", color: "#EC4899" },
        { icon: TrendingUp, value: "40%", label: "Efficiency Boost", color: "#10B981" }
    ];

    return (
        <div className="testimonials-page-v2">
            <div className="tp-aurora-glow"></div>



            <header className="tp-hero-v2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="tp-label-badge"
                >
                    <Star size={14} fill="currentColor" />
                    <span>World-Class HR Standards</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="tp-hero-title"
                >
                    Powering the <span className="gradient-text">Future of People</span> Operations
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="tp-hero-subtitle"
                >
                    See why the world's most innovative companies trust our HRMS to automate
                    their workflows and empower their workforce.
                </motion.p>
            </header>

            <section className="tp-stats-grid-v2">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="tp-stat-card-v2"
                    >
                        <div className="tp-stat-icon-v2" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <stat.icon size={28} />
                        </div>
                        <div className="tp-stat-info-v2">
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            <main className="tp-main-content">
                {/* <div className="tp-section-label">Wall of Love</div> */}
                <Testimonials />
            </main>

            <section className="tp-video-section">
                <div className="tp-video-container">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                        alt="Team success"
                        className="tp-video-placeholder"
                    />
                    <div className="tp-video-overlay">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="tp-play-btn"
                        >
                            <Play size={32} fill="currentColor" />
                        </motion.button>
                        <h3>Watch the Success Story</h3>
                        <p>How MetaGlobal scaled from 100 to 1000 employees with HRMS.</p>
                    </div>
                </div>
            </section>

            {/* <footer className="tp-cta-v2">
                <h2>Ready to transform your workplace?</h2>
                <button onClick={() => onNavigate('demo')} className="tp-primary-btn">
                    Start Your Free Trial
                </button>
            </footer> */}
        </div>
    );
};

export default TestimonialsPage;
