import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Code2, LineChart, Briefcase, Zap } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            content: "This HRMS has completely simplified our payroll and attendance process. It saves us hours every week.",
            author: "Priya Sharma",
            role: "HR Manager, TechCorp",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "The dashboard insights are incredibly useful. We can now make faster and better HR decisions.",
            author: "Rahul Verma",
            role: "Operations Head, GlobaLink",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "The API integration is robust. We synced our existing ERP with this HRMS in under 48 hours.",
            author: "Arjun Mehta",
            role: "Engineering Manager, DevScale",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "Easy to use, reliable, and efficient. Our entire HR workflow is now streamlined in one place.",
            author: "Anjali Mehta",
            role: "Founder, Mehta Associates",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "Clear visibility into payroll costs and tax compliances. The ROI was evident within the first quarter.",
            author: "Sneha Kapoor",
            role: "CFO, FinanceHub",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "Even for a non-tech team, the onboarding was a breeze. Highly recommended for fast-scaling startups.",
            author: "Vikram Singh",
            role: "Sales Director, GrowthX",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "The recruitment module is a game changer. Our time-to-hire has dropped by 40%.",
            author: "Kavita Rao",
            role: "Talent Acquisition, PeopleFirst",
            rating: 5,
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
        },
        {
            content: "Managing multi-location workforce used to be a nightmare. This platform made it effortless.",
            author: "Sanjay Gupta",
            role: "VP Operations, OmniRetail",
            rating: 5,
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
        }
    ];

    const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
    const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

    const TrustIcon = ({ icon: Icon, label }) => (
        <div className="trust-icon-box">
            <Icon size={24} strokeWidth={1.5} />
            <span>{label}</span>
        </div>
    );

    return (
        <section className="testimonials-modern-section" id="testimonials">
            <div className="aurora-bg-mesh"></div>
            
            <div className="modern-testimonials-container">
                <div className="modern-testimonials-header">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="modern-testimonials-tagline"
                    >
                        Customer Success
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="modern-testimonials-title"
                    >
                        The Operating System for <span className="text-secondary">Modern HR</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="modern-testimonials-desc"
                    >
                        Join 500+ forward-thinking teams that use our HRMS to build better workplaces.
                    </motion.p>
                </div>

                <div className="trust-bar">
                    <TrustIcon icon={Code2} label="TechScale" />
                    <TrustIcon icon={LineChart} label="DataLink" />
                    <TrustIcon icon={Briefcase} label="CoreBiz" />
                    <TrustIcon icon={Zap} label="FastTrack" />
                </div>

                <div className="sliding-rows-container">
                    {/* Row 1: Sliding Left */}
                    <div className="modern-testimonials-slider-viewport">
                        <motion.div 
                            className="modern-testimonials-track"
                            animate={{ x: [0, -((row1.length/2) * 390)] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            {row1.map((item, idx) => (
                                <TestimonialCard key={`row1-${idx}`} item={item} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Sliding Right */}
                    <div className="modern-testimonials-slider-viewport">
                        <motion.div 
                            className="modern-testimonials-track"
                            animate={{ x: [-((row2.length/2) * 390), 0] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            {row2.map((item, idx) => (
                                <TestimonialCard key={`row2-${idx}`} item={item} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ item }) => (
    <div className="modern-testimonial-card shadow-premium aurora-glass">
        <div className="card-liquid-border"></div>
        <div className="testimonial-stars">
            {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#6366F1" color="#6366F1" />
            ))}
        </div>
        <Quote size={40} className="testimonial-quote-bg" />
        <p className="testimonial-content">"{item.content}"</p>
        <div className="testimonial-user">
            <div className="user-avatar-container">
                <img src={item.image} alt={item.author} className="user-avatar" />
            </div>
            <div className="user-details">
                <h4 className="user-name">{item.author}</h4>
                <span className="user-role">{item.role}</span>
            </div>
        </div>
        <div className="card-shine"></div>
    </div>
);

export default Testimonials;
