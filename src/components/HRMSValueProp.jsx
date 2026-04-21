import React from 'react';
import { motion } from 'framer-motion';
import { 
    Clock, 
    Users, 
    BarChart3, 
    Lock, 
    Zap, 
    LayoutDashboard 
} from 'lucide-react';
import './HRMSValueProp.css';

const valueItems = [
    {
        icon: <Clock size={28} strokeWidth={1.5} />,
        title: "Save Time",
        description: "Automate repetitive HR tasks and focus on people.",
        iconBg: "rgba(245, 158, 11, 0.1)",
        glowColor: "#F59E0B"
    },
    {
        icon: <Users size={28} strokeWidth={1.5} />,
        title: "Improve Employee Experience",
        description: "Employees access info, leave, and payroll easily.",
        iconBg: "rgba(124, 58, 237, 0.1)",
        glowColor: "#7C3AED"
    },
    {
        icon: <BarChart3 size={28} strokeWidth={1.5} />,
        title: "Make Smarter Decisions",
        description: "Dashboards and reports deliver real-time insights.",
        iconBg: "rgba(245, 158, 11, 0.1)",
        glowColor: "#F59E0B"
    },
    {
        icon: <Lock size={28} strokeWidth={1.5} />,
        title: "Secure & Compliant",
        description: "Keep HR data safe and meet regulations.",
        iconBg: "rgba(124, 58, 237, 0.1)",
        glowColor: "#7C3AED"
    },
    {
        icon: <Zap size={28} strokeWidth={1.5} />,
        title: "Boost Productivity",
        description: "Reduce manual work and errors.",
        iconBg: "rgba(245, 158, 11, 0.1)",
        glowColor: "#F59E0B"
    },
    {
        icon: <LayoutDashboard size={28} strokeWidth={1.5} />,
        title: "Centralized Control",
        description: "Manage all HR operations in one place.",
        iconBg: "rgba(124, 58, 237, 0.1)",
        glowColor: "#7C3AED"
    }
];

const HRMSValueProp = () => {
    return (
        <section className="cardless-value-section">
            {/* Background Animations */}
            <div className="value-bg-decor">
                <div className="blob blob-amber"></div>
                <div className="blob blob-purple"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="value-header-wrapper">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="value-main-heading"
                    >
                        Empower Your <span className="gradient-text-alt">HR Team</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="value-description-sl"
                    >
                        Save time, simplify HR processes, and make smarter decisions — all from one platform.
                    </motion.p>
                </div>

                {/* Alternating Value Points */}
                <div className="value-points-container">
                    {valueItems.map((item, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <div key={index} className="value-point-row">
                                <motion.div 
                                    className={`value-point-content ${isEven ? 'row-reverse' : ''}`}
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "circOut" }}
                                >
                                    {/* Icon Column */}
                                    <div className="icon-column">
                                        <motion.div 
                                            className="value-icon-box"
                                            animate={{ 
                                                y: [0, -10, 0],
                                            }}
                                            transition={{ 
                                                duration: 4, 
                                                repeat: Infinity, 
                                                ease: "easeInOut" 
                                            }}
                                            style={{ backgroundColor: item.iconBg, color: item.glowColor }}
                                        >
                                            {item.icon}
                                            <div className="icon-pulse" style={{ backgroundColor: item.glowColor }}></div>
                                        </motion.div>
                                    </div>

                                    {/* Line Column (Connector) */}
                                    <div className="line-column">
                                        <div className="dot-anchor"></div>
                                        {index < valueItems.length - 1 && (
                                            <motion.div 
                                                className="vertical-connector"
                                                initial={{ height: 0, opacity: 0 }}
                                                whileInView={{ height: '100%', opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            ></motion.div>
                                        )}
                                    </div>

                                    {/* Text Column */}
                                    <div className="text-column">
                                        <div className="value-text-wrapper">
                                            <h3 className="value-point-title">{item.title}</h3>
                                            <p className="value-point-desc">{item.description}</p>
                                            <div className="text-bg-highlight"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HRMSValueProp;
