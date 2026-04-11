import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './CTA.css';

const CTA = ({ onDemoClick }) => {
    return (
        <section className="cta-section" id="cta">
            <div className="cta-inner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="cta-content"
                >
                    <div className="cta-text">
                        <h2 className="cta-heading">
                            Ready to <span className="cta-accent">Transform</span> Your HR?
                        </h2>
                        <p className="cta-sub">
                            Join 2,500+ companies automating their HR operations seamlessly.
                        </p>
                    </div>

                    <div className="cta-right">
                        <div className="cta-actions">
                            <button className="cta-btn-primary" onClick={onDemoClick}>
                                Start Free Trial <ArrowRight size={16} />
                            </button>
                            <button className="cta-btn-secondary" onClick={onDemoClick}>
                                Book a Demo
                            </button>
                        </div>
                        <div className="cta-trust">
                            <CheckCircle2 size={13} />
                            <span>14-day free trial</span>
                            <span className="cta-dot">·</span>
                            <CheckCircle2 size={13} />
                            <span>No credit card</span>
                            <span className="cta-dot">·</span>
                            <CheckCircle2 size={13} />
                            <span>Quick setup</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
