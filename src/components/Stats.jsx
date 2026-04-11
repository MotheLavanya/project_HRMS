import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const StatItem = ({ end, label, suffix = "", duration = 2.5, delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        let animationFrame;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

            const currentCount = Math.floor(progress * end);
            setCount(currentCount);

            if (progress < 1) {
                animationFrame = window.requestAnimationFrame(step);
            } else {
                setCount(end); // Ensure we end exactly at the target
            }
        };

        // Use a small delay before starting to sync with scroll animation
        const timeout = setTimeout(() => {
            animationFrame = window.requestAnimationFrame(step);
        }, delay * 1000);

        return () => {
            clearTimeout(timeout);
            if (animationFrame) window.cancelAnimationFrame(animationFrame);
        };
    }, [end, duration, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="stat-item"
        >
            <div className="stat-value-wrapper">
                {count.toLocaleString()}
                <span className="stat-suffix">{suffix}</span>
            </div>
            <div className="stat-label">{label}</div>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        { value: 2500, label: "Companies", suffix: "+", delay: 0 },
        { value: 150, label: "Employees Managed", suffix: "k", delay: 0.2 },
        { value: 99, label: "Uptime", suffix: ".9%", delay: 0.4 },
        { value: 10, label: "Tasks Automated", suffix: "M+", delay: 0.6 },
    ];

    return (
        <section className="stats-section">
            <div className="stats-bg-glow-1" />
            <div className="stats-bg-glow-2" />

            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, idx) => (
                        <StatItem
                            key={idx}
                            end={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            delay={stat.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
