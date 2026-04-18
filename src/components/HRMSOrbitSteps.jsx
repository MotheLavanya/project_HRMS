import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    UserPlus, 
    Clock, 
    CreditCard, 
    CalendarCheck, 
    TrendingUp, 
    BarChart,
    Sparkles
} from 'lucide-react';
import './HRMSOrbitSteps.css';

const steps = [
    {
        id: 1,
        title: "Add Employees",
        description: "Store profiles, documents, and roles",
        icon: <UserPlus size={28} />,
        angle: 0
    },
    {
        id: 2,
        title: "Track Attendance",
        description: "Monitor hours and shifts automatically",
        icon: <Clock size={28} />,
        angle: 60
    },
    {
        id: 3,
        title: "Manage Payroll",
        description: "Generate salaries and payslips seamlessly",
        icon: <CreditCard size={28} />,
        angle: 120
    },
    {
        id: 4,
        title: "Approve Leaves",
        description: "Approve/reject leave requests quickly",
        icon: <CalendarCheck size={28} />,
        angle: 180
    },
    {
        id: 5,
        title: "Monitor Performance",
        description: "Track goals, KPIs, and progress",
        icon: <TrendingUp size={28} />,
        angle: 240
    },
    {
        id: 6,
        title: "Gain Insights",
        description: "Access reports and dashboards",
        icon: <BarChart size={28} />,
        angle: 300
    }
];

const HRMSOrbitSteps = () => {
    const { scrollYProgress } = useScroll();
    
    // Rotate the entire orbit container based on scroll
    const orbitRotation = useTransform(scrollYProgress, [0.3, 0.7], [0, 45]);
    const orbitScale = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0.8, 1, 1, 0.9]);

    return (
        <section className="orbit-steps-section">
            {/* Moving Gradient Background */}
            <div className="orbit-bg-glow">
                <div className="orbit-blob blob-1"></div>
                <div className="orbit-blob blob-2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-10 value-header-wrapper">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="orbit-main-heading animate-gradient"
                    >
                        See HR Management in Action
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="orbit-subheading"
                    >
                        From onboarding to insights, manage all HR processes effortlessly in a few simple steps.
                    </motion.p>
                </div>

                {/* Orbit Visual Area */}
                <div className="orbit-container-wrapper">
                    <motion.div 
                        style={{ rotate: orbitRotation, scale: orbitScale }}
                        className="orbit-main-stage"
                    >
                        {/* Central Hub */}
                        <div className="orbit-center-hub">
                            <div className="hub-inner-glass">
                                <Sparkles className="hub-sparkle" size={60} />
                                <div className="hub-glow-ring"></div>
                            </div>
                        </div>

                        {/* Steps Orbiting */}
                        {steps.map((step) => {
                            const radian = (step.angle * Math.PI) / 180;
                            const x = Math.cos(radian) * 210; // Reduced Radius
                            const y = Math.sin(radian) * 210;

                            return (
                                <motion.div
                                    key={step.id}
                                    className="orbit-step-point"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: step.id * 0.1 }}
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                    }}
                                >
                                    <motion.div 
                                        className="orbit-step-content"
                                        style={{ rotate: useTransform(orbitRotation, r => -r) }} // Counter-rotate text
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        <div className="orbit-step-icon">
                                            {step.icon}
                                            <div className="icon-orbit-glow"></div>
                                        </div>
                                        <div className="orbit-step-text">
                                            <h4>{step.title}</h4>
                                            <p>{step.description}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HRMSOrbitSteps;
