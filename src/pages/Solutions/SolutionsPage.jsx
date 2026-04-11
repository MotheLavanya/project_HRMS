import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, 
    Star, 
    TrendingUp, 
    Rocket,
    ArrowRight
} from 'lucide-react';
import './SolutionsPage.css';

const SolutionsPage = ({ onDemoClick }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const verticals = [
        { icon: <Star className="text-yellow-500" />, title: "Healthcare", desc: "Roster management and credential tracking for medical professionals." },
        { icon: <TrendingUp className="text-green-500" />, title: "Retail & Hospitality", desc: "Shift swapping and seasonal workforce scaling at your fingertips." },
        { icon: <Rocket className="text-purple-500" />, title: "Tech & SaaS", desc: "Global talent hiring and ESOP management for high-growth startups." }
    ];

    return (
        <div className="subpage-root">
            <header className="subpage-hero solutions-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="subpage-icon-box solutions-icon"
                    >
                        <Briefcase size={32} />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Tailored for Your <span className="text-gradient">Industry</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="subpage-subtitle"
                    >
                        Specialized HR tools for specialized business needs.
                    </motion.p>
                </div>
            </header>

            <main className="container subpage-content">
                <div className="solutions-grid">
                    {verticals.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="solution-card"
                        >
                            <div className="solution-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button className="learn-more-btn" onClick={onDemoClick}>
                                Request industry demo <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SolutionsPage;
