import React, { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
    Users, 
    Clock, 
    CreditCard, 
    BarChart3, 
    Building2, 
    Users2, 
    ShieldCheck 
} from 'lucide-react';
import './Hero.css';

const StatCounter = ({ value, suffix = "" }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => setDisplayValue(Math.floor(latest))
        });
        return () => controls.stop();
    }, [value]);

    return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

const Hero = ({ onDemoClick, onNavigate }) => {
    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const featureCards = [
        { 
            icon: <Users size={20} />, 
            title: "Employee Management", 
            pos: "sl-pos-1"
        },
        { 
            icon: <Clock size={20} />, 
            title: "Attendance Tracking", 
            pos: "sl-pos-2"
        },
        { 
            icon: <CreditCard size={20} />, 
            title: "Payroll Automation", 
            pos: "sl-pos-3"
        },
        { 
            icon: <BarChart3 size={20} />, 
            title: "HR Analytics", 
            pos: "sl-pos-4"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="hero-section-sl">
            <div className="hero-bg-sl"></div>

            <div className="hero-container">
                <motion.div
                    className="hero-content-sl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="hero-badge-sl">
                        <span>✨ Smart HR Technology</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="hero-title-sl">
                        Simplify Workforce Management with an <br />
                        <span className="text-purple-sl">Intelligent HRMS Platform</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-description-sl">
                        Manage employees, automate payroll, track attendance, and gain real-time HR insights 
                        from one powerful platform designed to simplify HR operations for modern organizations.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions-sl">
                        <button className="btn-sl-primary" onClick={() => onNavigate('pricing')}>Start Free Trial</button>
                        <button className="btn-sl-secondary" onClick={onDemoClick}>Request Demo</button>
                    </motion.div>

                    {/* Trust Text & Statistics - Premium Redesign */}
                    <motion.div variants={itemVariants} className="hero-stats-sl">
                        <div className="trust-row-sl">
                            <div className="avatar-stack-sl">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User 1" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="User 2" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User 3" />
                                <div className="avatar-plus-sl">+500</div>
                            </div>
                            <div className="trust-stack-sl">
                                <div className="trust-stack-line-sl">
                                    <span className="trust-highlight-sl">500+</span> Companies World Wide
                                </div>
                                <div className="trust-stack-line-sl">
                                    <span className="trust-highlight-sl">50,000+</span> Employees Managed
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="hero-visual-sl">
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="dashboard-3d-wrapper"
                    >
                        <div className="dashboard-frame-enhanced">
                            {/* Premium HRMS Dashboard Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                                alt="Premium HRMS Dashboard" 
                                className="dashboard-img-enhanced"
                            />
                            
                            {/* Visual Overlays */}
                            <div className="dashboard-beam"></div>
                            <div className="dashboard-pulse-dot dot-1"></div>
                            <div className="dashboard-pulse-dot dot-2"></div>
                            <div className="dashboard-progress-mock">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "70%" }}
                                    transition={{ duration: 2, delay: 1.5 }}
                                    className="progress-fill"
                                ></motion.div>
                            </div>
                        </div>

                        {/* Floating Feature Cards linked to tilt */}
                        {featureCards.map((mod, i) => (
                            <motion.div
                                key={i}
                                style={{ transformStyle: "preserve-3d", translateZ: "50px" }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    y: [0, i % 2 === 0 ? -12 : 12, 0]
                                }}
                                transition={{ 
                                    opacity: { delay: 1.2 + (i * 0.15), duration: 0.5 },
                                    y: { 
                                        duration: 5, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: i * 0.4
                                    }
                                }}
                                className={`feature-card-sl ${mod.pos}`}
                            >
                                <div className="sl-card-icon">
                                    {mod.icon}
                                </div>
                                <div className="sl-card-info">
                                    <span className="sl-card-title">{mod.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="sl-glow-1"></div>
                    <div className="sl-glow-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
