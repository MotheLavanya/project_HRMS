import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate, useSpring, useMotionValue } from 'framer-motion';
import {
    Users, Target, Globe, Layout, Clock,
    Cpu, ShieldCheck, TrendingUp, CheckCircle,
    ArrowRight, Search, PenTool, RefreshCw,
    Heart, Zap, Sparkles, Building2, Smile,
    Handshake, Rocket, PieChart, Star
} from 'lucide-react';
import './AboutPage.css';

// 1. Magnetic Wrapper Component
const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

// 2. 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
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

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

// 3. Counter Component for Stats
const Counter = ({ value, duration = 2.5 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, parseInt(value), {
                duration: duration,
                onUpdate: (latest) => setCount(Math.floor(latest)),
                ease: [0.33, 1, 0.68, 1] // Custom ease for smoother finish
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count.toLocaleString()}{value.includes('+') ? '+' : (value.includes('%') ? '%' : '')}</span>;
};

const AboutPage = () => {
    const rootRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: rootRef });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Parallax Transforms for Hero
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div className="about-root-ultra" ref={rootRef}>
            {/* 1. Ultra-Hero Section */}
            <section className="about-hero-ultra">
                <div className="hero-aurora-bg" />
                <motion.div style={{ y: y1, rotate }} className="parallax-shape p1" />
                <motion.div style={{ y: y2 }} className="parallax-shape p2" />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="parallax-shape p3"
                />

                <div className="about-container">
                    <motion.div
                        className="hero-ultra-content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="ultra-badge">
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                style={{ display: 'inline-block' }}
                            >
                                <Sparkles size={14} />
                            </motion.span> Next-Gen HRMS
                        </motion.div>
                        <motion.h1 variants={fadeInUp}>
                            Level Up Your <br />
                            <span className="text-glow-gradient">Human Potential</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-ultra-desc">
                            We're redefining the fabric of modern work. Our HRMS isn't just a tool; it's the intelligent backbone of your organization's success.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="hero-scroll-indicator">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="indicator-dot"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Our Story (Sophisticated Reveal) */}
            <section className="about-story-ultra">
                <div className="about-container">
                    <div className="story-ultra-grid">
                        <motion.div
                            className="story-ultra-visual"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "circOut" }}
                        >
                            <div className="story-img-mask">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Team" />
                                <div className="img-glass-overlay" />
                            </div>
                        </motion.div>
                        <motion.div
                            className="story-ultra-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="sub-title">The Origin</span>
                            <h2>Born from Choice, <br />Driven by Innovation.</h2>
                            <p>We saw a world where HR was buried in spreadsheets and manual chaos. We chose to build a bridge between technology and humanity.</p>
                            <p>Today, that bridge supports thousands of visionaries who prioritize their people above all else.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision (3D Tilt Cards) */}
            <section className="about-mv-ultra">
                <div className="about-container">
                    <div className="mv-ultra-grid">
                        <TiltCard className="mv-tilt-card mission-bg">
                            <div className="mv-internal-content">
                                <Target size={40} className="mv-glow-icon" />
                                <h3>Our Mission</h3>
                                <p>To architect a seamless future for HR where automation empowers every individual to excel.</p>
                            </div>
                        </TiltCard>
                        <TiltCard className="mv-tilt-card vision-bg">
                            <div className="mv-internal-content">
                                <Globe size={40} className="mv-glow-icon" />
                                <h3>Our Vision</h3>
                                <p>To be the global heartbeat of organizational growth, setting new standards for efficiency.</p>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </section>

            {/* 4. What We Do (Light-Beam List) */}
            <section className="about-wd-ultra">
                <div className="about-container">
                    <div className="ultra-header">
                        <h2>Core Ecosystem</h2>
                        <p>A unified suite designed for the modern workplace.</p>
                    </div>
                    <motion.div
                        className="wd-ultra-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            {
                                title: "Smart Records",
                                icon: <Users />,
                                color: "#3b82f6",
                                desc: "Centralized employee profiles with automated lifecycle tracking and secure document management."
                            },
                            {
                                title: "Flow Attendance",
                                icon: <Clock />,
                                color: "#10b981",
                                desc: "Real-time tracking with geofencing, intelligent shift scheduling, and seamless leave approvals."
                            },
                            {
                                title: "Vault Payroll",
                                icon: <ShieldCheck />,
                                color: "#8b5cf6",
                                desc: "Precise, bank-grade calculations for tax, benefits, and fully automated salary disbursements."
                            },
                            {
                                title: "Peak Analytics",
                                icon: <TrendingUp />,
                                color: "#f59e0b",
                                desc: "Deep data visualization to track performance levels, attrition trends, and organizational health."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="wd-ultra-card"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="card-light-beam" style={{ backgroundColor: item.color }} />
                                <div className="card-icon-main" style={{ color: item.color }}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p className="card-ultra-desc">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. Why Choose (Scroll Progress List) */}
            <section className="about-yc-ultra">
                <div className="about-container">
                    <div className="yc-ultra-split">
                        <div className="yc-sticky-side">
                            <h2>The <span className="blue-gradient-text">HRMS Edge</span></h2>
                            <p>Strategic advantages that set your business apart.</p>
                        </div>
                        <div className="yc-list-side">
                            {[
                                { t: "Intuitive Flow", d: "Designed for humans, not just machines." },
                                { t: "Unbreakable Security", d: "Bank-grade encryption for your most sensitive data." },
                                { t: "Real-time Intelligence", d: "Data-driven insights to fuel better decisions." },
                                { t: "Global Scalability", d: "Built to grow from 10 to 10,000+ employees." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="yc-step-final"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-50px" }}
                                >
                                    <div className="yc-dot-line">
                                        <div className="yc-dot"><CheckCircle size={16} /></div>
                                        {i < 3 && <div className="yc-line" />}
                                    </div>
                                    <div className="yc-step-content">
                                        <h4>{item.t}</h4>
                                        <p>{item.d}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Our Values (Magnetic Integration) */}
            <section className="about-values-ultra">
                <div className="about-container">
                    <div className="ultra-header">
                        <span className="sub-title">What Drives Us</span>
                        <h2>Unshakable Values</h2>
                    </div>
                    <div className="values-magnetic-grid">
                        {[
                            { 
                                n: "Radical Simplicity", 
                                i: <Smile />, 
                                d: "We strip away the noise to deliver an experience that is intuitive, fast, and effortlessly powerful.",
                                c: "rgba(59, 130, 246, 0.1)"
                            },
                            { 
                                n: "Relentless Innovation", 
                                i: <Zap />, 
                                d: "We don't just follow trends; we set them by integrating AI and automation at the core of HR.",
                                c: "rgba(16, 185, 129, 0.1)"
                            },
                            { 
                                n: "Total Transparency", 
                                i: <Handshake />, 
                                d: "Trust is our primary currency. We ensure open communication and secure, accessible data for all.",
                                c: "rgba(139, 92, 246, 0.1)"
                            },
                            { 
                                n: "People At Heart", 
                                i: <Heart />, 
                                d: "Technology is the tool, but humans are the mission. We design for the people who make businesses thrive.",
                                c: "rgba(236, 72, 153, 0.1)"
                            }
                        ].map((v, i) => (
                            <Magnetic key={i}>
                                <div className="value-ultra-card" style={{ '--glow-color': v.c }}>
                                    <div className="v-icon-wrap">{v.i}</div>
                                    <h4>{v.n}</h4>
                                    <p className="v-card-desc">{v.d}</p>
                                    <div className="v-hover-glow" />
                                </div>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Who We Serve (Dynamic Carousel) */}
            <section className="about-who-ultra">
                <div className="about-container">
                    <motion.div
                        className="who-serve-ultra"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2>Scaling with You</h2>
                        <div className="who-pills">
                            <div className="who-pill active">Startups</div>
                            <div className="who-pill">Growing SMEs</div>
                            <div className="who-pill">Global Enterprises</div>
                        </div>
                        <div className="who-icons-ultra">
                            <Rocket size={40} className="floating-i f1" />
                            <Building2 size={40} className="floating-i f2" />
                            <PieChart size={40} className="floating-i f3" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 8. Impact & Trust (Neon Stats) */}
            <section className="about-stats-ultra">
                <div className="about-container">
                    <div className="stats-ultra-wrap">
                        <div className="stat-unit">
                            <h3 className="neon-text"><Counter value="500+" /></h3>
                            <p>Global Partners</p>
                        </div>
                        <div className="stat-unit">
                            <h3 className="neon-text"><Counter value="12000+" /></h3>
                            <p>Active Users</p>
                        </div>
                        <div className="stat-unit">
                            <h3 className="neon-text"><Counter value="99.9%" /></h3>
                            <p>Uptime Precision</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Final CTA (Deep Space Glow) */}
            {/* <section className="about-cta-ultra">
                <div className="about-container">
                    <motion.div 
                        className="cta-ultra-card"
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="cta-particle-overlay" />
                        <h2>Experience the Future of Work</h2>
                        <p>Join the next generation of businesses who lead with technology and love.</p>
                        <Magnetic>
                            <button 
                                className="ultra-cta-btn"
                                onClick={() => window.location.href = '/demo'}
                            >
                                Launch Free Demo <ArrowRight size={18} />
                            </button>
                        </Magnetic>
                    </motion.div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;
