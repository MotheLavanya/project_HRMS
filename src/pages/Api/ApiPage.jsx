import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Globe, 
    FileText, 
    Zap, 
    ShieldCheck
} from 'lucide-react';
import './ApiPage.css';

const ApiPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        { title: "Authentication Guide", dept: "Security", location: "v2.0" },
        { title: "Employee Webhooks", dept: "Real-time", location: "v2.1" },
        { title: "Payroll API Reference", dept: "Finance", location: "v1.8" }
    ];

    return (
        <div className="subpage-root">
            <header className="subpage-hero api-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="subpage-icon-box api-icon"
                    >
                        <Globe size={32} />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Developer <span className="text-gradient">Portal</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="subpage-subtitle"
                    >
                        Build custom workflows with our robust API.
                    </motion.p>
                </div>
            </header>

            <main className="container subpage-content">
                <div className="api-list">
                    {sections.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ x: 10 }}
                            className="api-item"
                        >
                            <div className="api-info">
                                <h3>{item.title}</h3>
                                <div className="api-meta">
                                    <span>{item.dept}</span>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                            <button className="docs-btn">View Docs</button>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ApiPage;
