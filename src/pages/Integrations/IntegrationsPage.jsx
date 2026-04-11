import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    MessageSquare, 
    Github, 
    HelpCircle
} from 'lucide-react';
import './IntegrationsPage.css';

const IntegrationsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const items = [
        { icon: <MessageSquare className="text-purple-500" />, title: "Slack", desc: "Real-time notifications for HR events directly in your channels." },
        { icon: <Github className="text-gray-800" />, title: "GitHub", desc: "Sync technical recruitment pipelines and developer performance data." },
        { icon: <HelpCircle className="text-blue-400" />, title: "Zoom", desc: "Auto-schedule interviews and meetings with one click." }
    ];

    return (
        <div className="subpage-root">
            <header className="subpage-hero integrations-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="subpage-icon-box integrations-icon"
                    >
                        <Zap size={32} />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Connected <span className="text-gradient">Ecosystem</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="subpage-subtitle"
                    >
                        Sync with your favorite tools in seconds.
                    </motion.p>
                </div>
            </header>

            <main className="container subpage-content">
                <div className="integrations-grid">
                    {items.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="integration-card"
                        >
                            <div className="integration-icon-wrap">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button className="connect-btn">Connect</button>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default IntegrationsPage;
