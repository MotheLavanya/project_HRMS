import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Rocket, 
    TrendingUp, 
    Zap, 
    BadgeDollarSign
} from 'lucide-react';
import './PartnersPage.css';

const PartnersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        { icon: <TrendingUp className="text-teal-500" />, title: "Co-Marketing", desc: "Reach our global customer base through joint campaigns." },
        { icon: <Zap className="text-yellow-500" />, title: "API Early Access", desc: "Beta test new platform features before anyone else." },
        { icon: <BadgeDollarSign className="text-emerald-500" />, title: "Revenue Share", desc: "Tiered commission on referrals and integrations." }
    ];

    return (
        <div className="subpage-root">
            <header className="subpage-hero partners-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="subpage-icon-box partners-icon"
                    >
                        <Rocket size={32} />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Partner <span className="text-gradient">Network</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="subpage-subtitle"
                    >
                        Join forces with the world's most innovative HR platforms.
                    </motion.p>
                </div>
            </header>

            <main className="container subpage-content">
                <div className="partners-grid">
                    {benefits.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="partner-benefit-card"
                        >
                            <div className="partner-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PartnersPage;
