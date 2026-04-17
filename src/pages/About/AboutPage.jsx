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

            {/* 3. Mission & Vision */}
            <section className="section-pro">
                <div className="container-pro">
                    <div className="mission-grid-pro">
                        <motion.div
                            className="mission-card-pro"
                            whileHover={{ y: -20 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-box-pro"><Target /></div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Mission</h3>
                            <p className="section-text-pro">To simplify HR operations through smart automation and user-friendly technology.</p>
                        </motion.div>
                        <motion.div
                            className="mission-card-pro"
                            whileHover={{ y: -20 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="icon-box-pro"><Rocket /></div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Vision</h3>
                            <p className="section-text-pro">To become a trusted HR partner for businesses worldwide by delivering innovative and scalable solutions.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. What We Offer - Compact Aura Pulse */}
            <section className="offer-section-pro">
                <div className="container-pro">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--shimmer-x', `${x}px`);
                                    e.currentTarget.style.setProperty('--shimmer-y', `${y}px`);
                                }}
                            >
                                <div className="tile-shimmer"></div>
                                <div className="pulse-icon-box">
                                    {offer.icon}
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

            {/* 5. Why Choose Us - Nexus of Excellence */}
            <section className="section-pro">
                <div className="container-pro">
                    <div className="why-nexus-container">
                        <motion.div
                            className="why-nexus-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title-pro">Why Choose Us</h2>
                            <p className="section-text-pro">
                                We focus on delivering value through innovation, reliability, and absolute customer satisfaction.
                                Our platform is architected to evolve with your organization.
                            </p>

                            <div className="value-pill-stack">
                                {[
                                    { text: "Easy to Use", icon: <Smile size={20} /> },
                                    { text: "Secure & Reliable", icon: <ShieldCheck size={20} /> },
                                    { text: "Scalable for Growing Teams", icon: <Rocket size={20} /> },
                                    { text: "Real-Time Insights", icon: <TrendingUp size={20} /> },
                                    { text: "24/7 Support", icon: <Heart size={20} /> }
                                ].map((pill, i) => (
                                    <motion.div
                                        key={i}
                                        className="value-pill"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <div className="value-pill-icon">
                                            {pill.icon}
                                        </div>
                                        <span className="value-pill-text">{pill.text}</span>
                                        <div className="value-pill-sweep"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="ui-composite-pro">
                            <motion.div
                                className="ui-layer layer-1"
                                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                                whileInView={{ opacity: 1, scale: 1, x: -80 }}
                                transition={{ duration: 1 }}
                            >
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Analytics" />
                            </motion.div>
                            <motion.div
                                className="ui-layer layer-2"
                                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                whileInView={{ opacity: 1, scale: 1, x: 80 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" alt="Dashboard" />
                            </motion.div>
                            <motion.div
                                className="ui-layer layer-3"
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 0.7, y: 120 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <img src="https://images.unsplash.com/photo-1504868584819-f8e90526ef7d?auto=format&fit=crop&q=80&w=800" alt="Data" />
                            </motion.div>
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
