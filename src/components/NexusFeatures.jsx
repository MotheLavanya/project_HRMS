import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, 
    Clock, 
    CreditCard, 
    CalendarDays, 
    TrendingUp, 
    PieChart,
    Sparkles,
    Check
} from 'lucide-react';
import './NexusFeatures.css';

const featuresData = [
    {
        id: "employee",
        title: "Employee Management",
        description: "Manage employee records, documents, and profiles from a centralized system designed for modern HR teams.",
        features: ["Employee database", "Document storage", "Role management", "Employee profiles"],
        icon: <Users size={22} />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "attendance",
        title: "Attendance Tracking",
        description: "Monitor attendance, working hours, and shifts with automated tracking tools.",
        features: ["Attendance reports", "Shift scheduling", "Work hour tracking", "Real-time monitoring"],
        icon: <Clock size={22} />,
        image: "https://images.unsplash.com/photo-1434144893279-2a9fc14e9337?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "payroll",
        title: "Payroll Automation",
        description: "Process payroll efficiently with automated salary calculations, deductions, and payslip generation.",
        features: ["Auto tax calculation", "Direct deposit", "Salary history", "Digital payslips"],
        icon: <CreditCard size={22} />,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "leave",
        title: "Leave Management",
        description: "Manage leave requests, approvals, and balances through a simple and transparent system.",
        features: ["Leave policies", "Approval workflows", "Balance tracking", "Holiday calendar"],
        icon: <CalendarDays size={22} />,
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "performance",
        title: "Performance Tracking",
        description: "Track employee goals, feedback, and performance metrics to improve workforce productivity.",
        features: ["Goal setting", "Feedback loops", "Performance reviews", "Succession planning"],
        icon: <TrendingUp size={22} />,
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "analytics",
        title: "HR Analytics",
        description: "Generate detailed reports and workforce insights to support data-driven HR decisions.",
        features: ["Headcount analysis", "Turnover rates", "Diversity metrics", "Custom reports"],
        icon: <PieChart size={22} />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    }
];

const NexusFeatures = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="nexus-features-tabbed" id="features">
            {/* Background Blur Decorations */}
            <div className="tabbed-bg-blur top-right"></div>
            <div className="tabbed-bg-blur bottom-left"></div>

            <div className="tabbed-container">
                {/* Section Header */}
                <div className="tabbed-header">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="tabbed-badge"
                    >
                        <Sparkles size={16} />
                        <span>Platform Features</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="tabbed-title"
                    >
                        Powerful <span className="text-orange-highlight">HR Features</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="tabbed-desc"
                    >
                        Simplify HR tasks like employee management, attendance tracking, payroll automation, and reporting.
                    </motion.p>
                </div>

                {/* Main Content Area */}
                <div className="tabbed-main-grid">
                    {/* Left: Sticky Navigation */}
                    <div className="tabbed-nav">
                        <div className="nav-items-wrapper">
                            {featuresData.map((feature, index) => (
                                <button
                                    key={feature.id}
                                    className={`nav-item-btn ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {activeTab === index && (
                                        <motion.div 
                                            layoutId="active-indicator"
                                            className="nav-indicator-bar"
                                        />
                                    )}
                                    <span className="nav-item-text">{feature.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Feature Display */}
                    <div className="tabbed-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="feature-panel"
                            >
                                <div className="feature-panel-text">
                                    <h3>{featuresData[activeTab].title}</h3>
                                    <p className="feature-panel-desc">{featuresData[activeTab].description}</p>
                                    
                                    <div className="features-included">
                                        <h4>Features included</h4>
                                        <ul className="features-list">
                                            {featuresData[activeTab].features.map((f, i) => (
                                                <li key={i}>
                                                    <div className="check-icon"><Check size={14} /></div>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <motion.div 
                                    className="feature-panel-visual"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="visual-image-wrapper">
                                        <img 
                                            src={featuresData[activeTab].image} 
                                            alt={featuresData[activeTab].title} 
                                            className="feature-preview-img"
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Transition to Next Section */}
                <div className="tabbed-footer-divider">
                    <div className="footer-divider-pill">
                        <span>Powerful HR Insights from One Intelligent Dashboard</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NexusFeatures;
