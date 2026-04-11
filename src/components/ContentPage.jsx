import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SubPagesData } from '../data/SubPagesData';
import './ContentPage.css';

const ContentPage = ({ pageId, onBack, onNavigate }) => {
    const page = SubPagesData[pageId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageId]);

    if (!page) return <div>Page not found</div>;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="content-page-root"
        >
            {/* 1. Immersive Header */}
            <header className="page-header" style={{ background: page.headerGradient }}>
                <div className="header-orb header-orb-1" />
                <div className="header-orb header-orb-2" />
                
                <div className="container px-6 mx-auto relative z-10">


                    <div className="max-w-4xl mt-12">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="page-icon-wrapper"
                        >
                            {page.icon && <page.icon size={24} />}
                        </motion.div>
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="page-title"
                        >
                            {page.title}
                        </motion.h1>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="page-subtitle"
                        >
                            {page.subtitle}
                        </motion.p>
                    </div>
                </div>
            </header>

            {/* 2. Dynamic Content Sections */}
            <main className="container px-6 mx-auto py-20">
                {page.sections.map((section, idx) => (
                    <section key={idx} className="content-section mb-20">
                        <h2 className="section-heading mb-12">{section.title}</h2>
                        
                        {section.type === 'grid' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {section.items.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -10 }}
                                        className="glass-card-premium"
                                    >
                                        <div className="card-icon-box">
                                            {item.icon && <item.icon className={item.iconColor} />}
                                        </div>
                                        <h3 className="card-title-sub">{item.title}</h3>
                                        <p className="card-desc-sub">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {section.type === 'list' && (
                            <div className="flex flex-col gap-4">
                                {section.items.map((item, i) => (
                                    <div key={i} className="list-item-premium">
                                        <div>
                                            <h4 className="item-title-main">{item.title}</h4>
                                            <div className="flex gap-4 text-xs font-semibold text-gray-500 uppercase mt-1">
                                                <span>{item.dept}</span>
                                                <span className="text-gray-300">|</span>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                        <button className="apply-btn">Apply Now <ArrowRight size={14} /></button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'blog-grid' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, i) => (
                                    <div key={i} className="blog-card-premium">
                                        <div className="blog-img-placeholder" style={{ background: page.headerGradient }} />
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                                <Calendar size={12} /> {item.date}
                                            </div>
                                            <h3 className="blog-title-card">{item.title}</h3>
                                            <div className="flex items-center gap-2 mt-4 text-sm font-bold text-gray-600">
                                                <User size={14} /> {item.author}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </main>

        </motion.div>
    );
};

export default ContentPage;
