import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, animate, AnimatePresence } from 'framer-motion';
import {
    Users, Target, Globe, Clock,
    ShieldCheck, TrendingUp, Sparkles, Building2,
    Smile, Handshake, Rocket, PieChart, Heart, Zap, ArrowRight, Stars,
    CheckCircle2, Award, Lightbulb, Users2, BarChart3, Search, CreditCard, Calendar,
    Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import './AboutPage.css';

// 1. Counter Sub-component for Pro Stats
const ProCounter = ({ value, duration = 2.5 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const controls = animate(0, numValue, {
                duration: duration,
                onUpdate: (latest) => setCount(Math.floor(latest)),
                ease: [0.16, 1, 0.3, 1]
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {value.includes('+') ? '+' : (value.includes('%') ? '%' : '')}
        </span>
    );
};

const AboutPage = () => {
    const [showDemoModal, setShowDemoModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeWhyIndex, setActiveWhyIndex] = useState(0);

    const whyNexusFeatures = [
        { 
            text: "Easy to Use", 
            icon: <Smile size={20} />,
            image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800",
            desc: "Intuitive interface designed for every team member, reducing training time and increasing adoption."
        },
        { 
            text: "Secure & Reliable", 
            icon: <ShieldCheck size={20} />,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            desc: "Enterprise-grade security and 99.9% uptime ensure your people data is always safe and accessible."
        },
        { 
            text: "Scalable Growth", 
            icon: <Rocket size={20} />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            desc: "From startup to enterprise, our modular platform scales effortlessly alongside your organization."
        },
        { 
            text: "Real-Time Insights", 
            icon: <TrendingUp size={20} />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            desc: "Make data-driven decisions with instant access to analytics across every HR function."
        },
        { 
            text: "24/7 Expert Support", 
            icon: <Heart size={20} />,
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
            desc: "Our dedicated specialists are always on standby to ensure your HR ecosystem runs flawlessly."
        }
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax Transforms for different sections
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 5]);

    const offers = [
        { icon: <Users2 size={40} />, title: "Employee Management" },
        { icon: <Clock size={40} />, title: "Attendance Tracking" },
        { icon: <CreditCard size={40} />, title: "Payroll Automation" },
        { icon: <Calendar size={40} />, title: "Leave Management" },
        { icon: <BarChart3 size={40} />, title: "Performance Analytics" },
        { icon: <Search size={40} />, title: "Recruitment Management" }
    ];

    const team = [
        { name: "Rohit Sharma", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
        { name: "Sanya Malhotra", role: "Head of Product", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { name: "Aryan Khan", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { name: "Ishita Gupta", role: "Customer Success", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="about-pro-root">
            <AnimatePresence>
                {showDemoModal && (
                    <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
                        <motion.div 
                            className="demo-modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: '#111827', fontWeight: 800 }}>Book a Demo</h3>
                            <p style={{ color: '#4B5563', marginBottom: '24px', fontSize: '1.1rem', lineHeight: 1.5 }}>See how our HRMS platform can transform your workflow. Our team will get in touch shortly.</p>
                            
                            <form onSubmit={(e) => { 
                                e.preventDefault(); 
                                setShowDemoModal(false); 
                            }}>
                                <input type="email" placeholder="Enter your work email" required className="demo-input" />
                                <div className="demo-modal-actions">
                                    <button type="button" className="demo-cancel-btn" onClick={() => setShowDemoModal(false)}>Cancel</button>
                                    <button type="submit" className="demo-submit-btn">Get Started</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* 0. Scroll Progress Bar */}
            <motion.div className="scroll-progress" style={{ scaleX }} />

            {/* 1. Hero Section - Modern Design Guide */}
            <section
                className="hero-pro"
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.setProperty('--mouse-x', x);
                    e.currentTarget.style.setProperty('--mouse-y', y);
                }}
            >
                {/* Vibrant Gradient Background and Particles */}
                <div
                    className="hero-vortex-bg"
                    style={{ transform: 'translate(calc(var(--mouse-x, 0) * 30px), calc(var(--mouse-y, 0) * 30px))' }}
                ></div>

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${10 + Math.random() * 5}s`
                        }}
                    ></div>
                ))}

                <motion.div
                    className="hero-pro-content"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    initial="hidden"
                    animate="visible"
                    style={{ transform: 'translate(calc(var(--mouse-x, 0) * -15px), calc(var(--mouse-y, 0) * -15px))' }}
                >
                    {/* Badge */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="hero-badge"
                    >
                        Trusted by 500+ Companies
                    </motion.div>

                    {/* Big Heading */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        Empowering Workplaces with <br />
                        <span>Smart HR Solutions</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="desc"
                    >
                        Our HRMS platform simplifies employee management, automates workflows, and delivers real-time insights to help businesses grow faster, smarter, and more efficiently.
                    </motion.p>

                    {/* Dual Buttons */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="hero-btn-group"
                    >
                        <button
                            className="btn-primary-pro"
                            onClick={() => setShowDemoModal(true)}
                        >
                            👉 Book a Demo
                        </button>
                        <button
                            className="btn-secondary-pro"
                            onClick={() => {
                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                            }}
                        >
                            👉 Learn More
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. Our Story Section */}
            <section className="section-pro" style={{ background: '#fff' }}>
                <div className="container-pro">
                    <div className="grid-pro-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title-pro">Our Journey</h2>
                            <p className="section-text-pro">
                                We started with a simple vision — to make HR processes effortless and efficient for businesses of all sizes.
                                Traditional HR systems were complex, time-consuming, and often frustrating.
                                <br /><br />
                                So, we built a solution that is intuitive, scalable, and designed for modern workplaces.
                                Today, our platform helps organizations manage their workforce seamlessly while improving productivity and employee satisfaction.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-img-wrapper"
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Team" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision - Immersive Splitscreen Portals */}
            <section className="mission-vision-wrapper">
                <div className="mission-vision-panes">
                    {/* Mission Pane */}
                    <motion.div 
                        className="pane mission-pane"
                        initial={{ flex: 1 }}
                        whileHover={{ flex: 1.3 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="pane-particles"></div>
                        <div className="pane-bg-overlay"></div>
                        <div className="pane-content">
                            <motion.div 
                                className="pane-icon-massive"
                                initial={{ opacity: 0.1, x: -50 }}
                                whileInView={{ opacity: 0.1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Target size={280} strokeWidth={1} />
                            </motion.div>
                            
                            <div className="pane-text-area">
                                <motion.div 
                                    className="pane-badge"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Our Purpose
                                </motion.div>
                                <motion.h2 
                                    className="pane-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    The Mission
                                </motion.h2>
                                <motion.p 
                                    className="pane-desc"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    To simplify HR operations through smart automation 
                                    and user-friendly technology, allowing teams to 
                                    focus on what truly matters.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated Portal Line */}
                    <div className="portal-line">
                        <div className="portal-line-glow"></div>
                    </div>

                    {/* Vision Pane */}
                    <motion.div 
                        className="pane vision-pane"
                        initial={{ flex: 1 }}
                        whileHover={{ flex: 1.3 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="pane-particles"></div>
                        <div className="pane-bg-overlay"></div>
                        <div className="pane-content">
                            <motion.div 
                                className="pane-icon-massive"
                                initial={{ opacity: 0.1, x: 50 }}
                                whileInView={{ opacity: 0.1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Rocket size={280} strokeWidth={1} />
                            </motion.div>

                            <div className="pane-text-area">
                                <motion.div 
                                    className="pane-badge"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Our Aspiration
                                </motion.div>
                                <motion.h2 
                                    className="pane-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    The Vision
                                </motion.h2>
                                <motion.p 
                                    className="pane-desc"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    To become the world's most trusted HR partner, 
                                    delivering innovative and scalable solutions that 
                                    power global growth.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. What We Offer - Liquid Glass Ecosystem */}
            <section className="offer-section-pro">
                {/* Background Decorations */}
                <div className="offer-bg-visuals">
                    <div className="mesh-gradient"></div>
                    <div className="glass-orb orb-1"></div>
                    <div className="glass-orb orb-2"></div>
                </div>

                <div className="container-pro relative z-10">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title-pro">What We Offer</h2>
                        <p className="section-text-pro" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            All tools are integrated into one powerful system, eliminating manual work and improving efficiency.
                        </p>
                    </div>
                    <div className="offer-grid-pro">
                        {offers.map((offer, i) => (
                            <motion.div
                                key={i}
                                className="pulse-tile"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--shimmer-x', `${x}px`);
                                    e.currentTarget.style.setProperty('--shimmer-y', `${y}px`);
                                }}
                            >
                                <div className="tile-border"></div>
                                <div className="tile-shimmer"></div>
                                <div className="pulse-icon-box">
                                    {offer.icon}
                                    <div className="icon-aura"></div>
                                </div>
                                <h3 className="pulse-title">{offer.title}</h3>
                                <p className="pulse-desc">
                                    Streamline your workflows with our advanced {offer.title.toLowerCase()} suite.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Us - Interactive Nexus */}
            <section className="section-pro why-nexus-section">
                <div className="container-pro">
                    {/* Standalone Header for Perfect Alignment */}
                    <motion.div 
                        className="why-nexus-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title-pro">Why Choose Us</h2>
                        <p className="section-text-pro">
                            We combine human-centric design with powerful automation to deliver 
                            an HR experience that teams actually love using.
                        </p>
                    </motion.div>

                    <div className="why-nexus-container">
                        <motion.div
                            className="why-nexus-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="value-pill-stack">
                                {whyNexusFeatures.map((pill, i) => (
                                    <motion.div
                                        key={i}
                                        className={`value-pill ${activeWhyIndex === i ? 'active' : ''}`}
                                        onClick={() => setActiveWhyIndex(i)}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <div className="value-pill-icon">
                                            {pill.icon}
                                        </div>
                                        <div className="value-pill-info">
                                            <span className="value-pill-text">{pill.text}</span>
                                            {activeWhyIndex === i && (
                                                <motion.p 
                                                    className="value-pill-desc-inline"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                >
                                                    {pill.desc}
                                                </motion.p>
                                            )}
                                        </div>
                                        <div className="value-pill-sweep"></div>
                                        {activeWhyIndex === i && (
                                            <motion.div 
                                                className="active-indicator"
                                                layoutId="pill-indicator"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="why-nexus-visual">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeWhyIndex}
                                    className="nexus-image-container"
                                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div className="nexus-image-frame">
                                        <img 
                                            src={whyNexusFeatures[activeWhyIndex].image} 
                                            alt={whyNexusFeatures[activeWhyIndex].text} 
                                        />
                                        <div className="nexus-glass-overlay"></div>
                                    </div>
                                    {/* Decorative floating elements */}
                                    <motion.div 
                                        className="floating-card-pro fc-1"
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 6, repeat: Infinity }}
                                    >
                                        <div className="fc-icon"><ShieldCheck size={16} /></div>
                                        <span>Verified Secure</span>
                                    </motion.div>
                                    <motion.div 
                                        className="floating-card-pro fc-2"
                                        animate={{ y: [0, 15, 0] }}
                                        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                                    >
                                        <div className="fc-icon"><TrendingUp size={16} /></div>
                                        <span>+24% Productivity</span>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. High Impact Stats */}
            <section className="stats-dark-pro">
                <div className="container-pro">
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
                        {[
                            { val: "10,000+", label: "Employees Managed" },
                            { val: "500+", label: "Companies Trust Us" },
                            { val: "99.9%", label: "System Uptime" },
                            { val: "24/7", label: "Customer Support" }
                        ].map((stat, i) => (
                            <div className="stat-item-pro" key={i}>
                                <div className="num"><ProCounter value={stat.val} /></div>
                                <div className="label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Pro Team */}
            <section className="section-pro" style={{ background: '#fff' }}>
                <div className="container-pro">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 className="section-title-pro">Meet Our Team</h2>
                        <p className="section-text-pro" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Our team is made up of passionate professionals dedicated to building solutions that make HR easier and smarter.
                        </p>
                    </div>
                    <div className="team-grid-pro">
                        {team.map((member, i) => (
                            <motion.div
                                className="team-item-pro"
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="team-avatar-pro">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '5px' }}>{member.name}</h3>
                                <p style={{ color: '#6366F1', fontWeight: 600 }}>{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 9. Final CTA */}
            {/* <section className="cta-pro">
                <div className="container-pro">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '24px' }}>Ready to Transform Your HR?</h2>
                        <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '48px' }}>Join hundreds of businesses using our HRMS platform to simplify their operations.</p>
                        <motion.button 
                            className="btn-pro-hero"
                            whileHover={{ scale: 1.1, boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: '#6366F1' }}
                        >
                            👉 Get Started Today
                        </motion.button>
                    </motion.div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;
