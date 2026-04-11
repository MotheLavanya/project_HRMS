import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Check, 
    Sparkles, 
    Zap, 
    Rocket, 
    Building2, 
    ArrowRight 
} from 'lucide-react';
import './PricingPage.css';

const PricingPage = ({ onBack, onDemoClick, onNavigate }) => {
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const plans = [
        {
            name: "Starter",
            tagline: "Small teams",
            price: isYearly ? 7.2 : 9, // 20% savings if yearly
            period: "/ employee / month",
            description: "Essential HR tools for growing teams.",
            features: [
                "Employee Management",
                "Attendance Tracking",
                "Leave Management",
                "Basic Reports"
            ],
            buttonText: "Start Free Trial",
            buttonAction: () => onNavigate('signup'), // Placeholder signup route
            icon: <Zap size={24} />,
            color: "#6366F1"
        },
        {
            name: "Professional",
            tagline: "Most Popular",
            price: isYearly ? 15.2 : 19,
            period: "/ employee / month",
            description: "Advanced automation and depth for mid-sized teams.",
            features: [
                "Payroll Management",
                "Performance Management",
                "Advanced Reports",
                "Integrations"
            ],
            buttonText: "Book a Demo",
            buttonAction: onDemoClick,
            popular: true,
            icon: <Rocket size={24} />,
            color: "#7C3AED"
        },
        {
            name: "Enterprise",
            tagline: "Large companies",
            price: "Custom",
            period: "Pricing",
            description: "Full-scale enterprise HRMS suite with dedicated support.",
            features: [
                "Full HRMS Suite",
                "Advanced Analytics",
                "Custom Integrations",
                "Dedicated Support"
            ],
            buttonText: "Contact Sales",
            buttonAction: () => onNavigate('contact'),
            icon: <Building2 size={24} />,
            color: "#1E293B"
        }
    ];

    return (
        <div className="pricing-page-root">
            {/* Background Decorations */}
            <div className="pricing-bg-pattern"></div>
            <div className="pricing-bg-blur top-left"></div>
            <div className="pricing-bg-blur bottom-right"></div>

            <main className="pricing-container">
                {/* Header Section */}
                <header className="pricing-header">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pricing-badge"
                    >
                        <span>PRICING</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Simple & Transparent Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pricing-intro"
                    >
                        Choose the plan that fits your business<br />
                        and scale your HR operations easily.
                    </motion.p>

                    {/* Toggle Switch */}
                    <div className="pricing-toggle-wrapper">
                        <span className={!isYearly ? 'active' : ''}>Monthly</span>
                        <div 
                            className="pricing-toggle-switch"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <motion.div 
                                className="toggle-handle"
                                animate={{ x: isYearly ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={isYearly ? 'active' : ''}>
                            Yearly <span className="save-badge">Save 20%</span>
                        </span>
                    </div>
                </header>

                {/* Pricing Grid */}
                <div className="pricing-grid-modern">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`pricing-card-modern ${plan.popular ? 'popular-highlight' : ''}`}
                        >
                            {plan.popular && (
                                <div className="popular-ribbon">
                                    <Sparkles size={14} />
                                    Most Popular
                                </div>
                            )}

                            <div className="card-header">
                                <span className="plan-tagline">{plan.tagline}</span>
                                <div className="plan-title-flex">
                                    <div className="plan-icon-modern" style={{ color: plan.color }}>
                                        {plan.icon}
                                    </div>
                                    <h3>{plan.name}</h3>
                                </div>
                                <div className="plan-price-modern">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={plan.price}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="price-amount"
                                        >
                                            {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                                        </motion.span>
                                    </AnimatePresence>
                                    <span className="price-period">{plan.period}</span>
                                </div>
                                <p className="plan-desc-modern">{plan.description}</p>
                            </div>

                            <ul className="plan-features-modern">
                                {plan.features.map((feature, fIndex) => (
                                    <motion.li 
                                        key={fIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + fIndex * 0.1 }}
                                    >
                                        <div className="check-box-modern">
                                            <Check size={14} />
                                        </div>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`pricing-btn-modern ${plan.popular ? 'btn-popular' : ''}`}
                                onClick={plan.buttonAction}
                            >
                                {plan.buttonText}
                                <ArrowRight size={18} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Note */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pricing-trust-note"
                >
                    <p>No hidden fees. Cancel anytime.</p>
                </motion.div>
            </main>
        </div>
    );
};

export default PricingPage;
