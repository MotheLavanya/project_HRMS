import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronDown,
    Users, Clock, Calendar, BadgeDollarSign,
    BarChart3, UserCheck, ShieldCheck, Bell,
    BookOpen, GraduationCap, Briefcase,
    MessageSquare, HelpCircle, Star, FileText, ArrowRight
} from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onDemoClick, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const megaMenus = {
        platform: {
            columns: [
                {
                    title: "Core Features",
                    items: [
                        { name: "Employee Management", icon: <Users size={18} />, id: "features", desc: "Centralize employee data." },
                        { name: "Attendance Tracking", icon: <Clock size={18} />, id: "features", desc: "Real-time clock-in/out." },
                        { name: "Leave Management", icon: <Calendar size={18} />, id: "features", desc: "Automate leave workflows." },
                        { name: "Payroll Management", icon: <BadgeDollarSign size={18} />, id: "features", desc: "Error-free salary processing." },
                    ]
                },
                {
                    title: "HR Tools",
                    items: [
                        { name: "Performance Management", icon: <Star size={18} />, id: "solutions", desc: "Track growth and KPIs." },
                        { name: "Employee Self-Service", icon: <UserCheck size={18} />, id: "solutions", desc: "Empower your workforce." },
                        { name: "Reports & Analytics", icon: <BarChart3 size={18} />, id: "solutions", desc: "Data-driven HR insights." },
                        { name: "Notifications", icon: <Bell size={18} />, id: "solutions", desc: "Real-time alert system." },
                    ]
                }
            ],
            overview: {
                title: "Platform Overview",
                desc: "Manage employees, automate payroll, track attendance, and gain HR insights with our all-in-one HRMS platform.",
                id: "features"
            }
        },
        resources: {
            columns: [
                {
                    title: "Success Stories",
                    items: [
                        { name: "Testimonials", icon: <Star size={18} />, id: "testimonials", desc: "What our clients say about us." }
                        // { name: "Case Studies", icon: <Briefcase size={18} />, id: "testimonials", desc: "Real-world HR impact." },
                    ]
                },
                {
                    title: "Knowledge Hub",
                    items: [
                        { name: "Blog", icon: <BookOpen size={18} />, id: "blog", desc: "Latest HR trends & insights." }
                        // { name: "HR Guides", icon: <GraduationCap size={18} />, id: "api", desc: "Step-by-step masterclasses." },
                    ]
                },
                {
                    title: "Support",
                    items: [
                        { name: "FAQs", icon: <HelpCircle size={18} />, id: "faq", desc: "Quick answers to common questions." }
                        // { name: "Help Center", icon: <MessageSquare size={18} />, id: "contact", desc: "Get 24/7 priority support." },
                    ]
                }
            ]
        }
    };

    const handleNavigate = (id) => {
        onNavigate(id);
        setActiveMenu(null);
        setIsOpen(false);
    };

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="navbar-container">
                {/* Logo */}
                <div onClick={() => handleNavigate('home')} className="nav-brand" style={{ cursor: 'pointer' }}>
                    <div className="nav-logo-icon">H</div>
                    <span className="nav-logo-text">
                        HR<span className="logo-accent">MS</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="nav-desktop-links">
                    <button className="nav-link-btn" onClick={() => handleNavigate('home')}>Home</button>
                    <button className="nav-link-btn" onClick={() => handleNavigate('features')}>Features</button>
                    <button className="nav-link-btn" onClick={() => handleNavigate('pricing')}>Pricing</button>
                    <button className="nav-link-btn" onClick={() => handleNavigate('about')}>About</button>

                    <div
                        className="mega-menu-trigger"
                        onMouseEnter={() => setActiveMenu('resources')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className={`nav-link-btn ${activeMenu === 'resources' ? 'active' : ''}`}>
                            Resources <ChevronDown size={14} className={`chevron ${activeMenu === 'resources' ? 'open' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {activeMenu === 'resources' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="dropdown-menu-panel simple-dropdown"
                                >
                                    <div className="dropdown-inner">
                                        <div className="simple-menu-list">
                                            {megaMenus.resources.columns.map((col) => (
                                                col.items.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="simple-menu-item"
                                                        onClick={() => handleNavigate(item.id)}
                                                    >
                                                        <div className="simple-menu-icon">{item.icon}</div>
                                                        <div className="simple-menu-content">
                                                            <span className="simple-menu-name">{item.name}</span>
                                                        </div>
                                                    </div>
                                                ))
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button className="nav-link-btn" onClick={() => handleNavigate('contact')}>Contact</button>

                    <button className="nav-button luxury-btn" onClick={onDemoClick}>
                        Book a Demo
                        <div className="btn-shine"></div>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-links">
                            <button onClick={() => handleNavigate('home')} className="mobile-link">Home</button>
                            <button onClick={() => handleNavigate('features')} className="mobile-link">Features</button>
                            <button onClick={() => handleNavigate('pricing')} className="mobile-link">Pricing</button>
                            <button onClick={() => handleNavigate('about')} className="mobile-link">About Us</button>
                            <button onClick={() => handleNavigate('faq')} className="mobile-link">FAQs & Help</button>
                            <button onClick={() => handleNavigate('contact')} className="mobile-link">Contact</button>
                            <hr className="mobile-divider" />
                            <button className="mobile-link login-link">Login</button>
                            <button className="nav-button mobile-cta" onClick={() => { setIsOpen(false); onDemoClick(); }}>
                                Book a Demo
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
