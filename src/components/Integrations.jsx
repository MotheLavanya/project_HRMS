import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Slack,
    Github,
    Video,
    Database,
    Shield,
    FileText,
    MessageSquare,
    ArrowRight,
    CircleDashed,
    Cpu,
    Calendar,
    Layout,
    Globe,
    CreditCard,
    Briefcase
} from 'lucide-react';
import './Integrations.css';



const allNodes = [
    { icon: <Slack size={18} />, name: "Slack", color: "#4A154B", id: 'slack', category: "Chat" },
    { icon: <MessageSquare size={18} />, name: "MS Teams", color: "#6264A7", id: 'teams', category: "Chat" },
    { icon: <Calendar size={18} />, name: "Google Cal", color: "#4285F4", id: 'gcal', category: "Events" },
    { icon: <Video size={18} />, name: "Zoom", color: "#2D8CFF", id: 'zoom', category: "Meetings" },
    { icon: <Github size={18} />, name: "GitHub", color: "#181717", id: 'github', category: "Engine" },
    { icon: <Layout size={18} />, name: "Notion", color: "#000000", id: 'notion', category: "Knowledge" },
    { icon: <Briefcase size={18} />, name: "Greenhouse", color: "#11C111", id: 'greenhouse', category: "ATS" },
    { icon: <Globe size={18} />, name: "Deel", color: "#153139", id: 'deel', category: "Global" },
    { icon: <CreditCard size={18} />, name: "Stripe", color: "#635BFF", id: 'stripe', category: "Payroll" },
    { icon: <Shield size={18} />, name: "Okta", color: "#007DC1", id: 'okta', category: "Identity" },
];

const Integrations = () => {
    const [hoveredNode, setHoveredNode] = useState(null);
    const RADIUS = 300;

    // Calculate positions for each node
    const positionedNodes = allNodes.map((node, index) => {
        const angle = (index * 2 * Math.PI) / allNodes.length - Math.PI / 2;
        return {
            ...node,
            x: Math.cos(angle) * RADIUS,
            y: Math.sin(angle) * RADIUS
        };
    });

    return (
        <section className="nexgen-integrations-section" id="integrations">
            {/* Mesh Gradient and Grid Overlay */}
            <div className="nexgen-mesh-bg">
                <div className="mesh-orb orb-1"></div>
                <div className="mesh-orb orb-2"></div>
                <div className="mesh-orb orb-3"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="header-center-wrapper mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="nexgen-status-badge"
                    >
                        <Cpu className="animate-pulse" size={14} />
                        <span>System Sync Active</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="nexgen-heading"
                    >
                        Connect Your HRMS with the <span className="nexgen-gradient">Tools Your Team Uses</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="nexgen-subheading"
                    >
                        Experience real-time data orchestration. Our platform connects your critical tools
                        into a single, high-performance HR infrastructure.
                    </motion.p>
                </div>

                <div className="nexgen-diagram-viewport">
                    {/* SVG Data Infrastructure */}
                    <svg className="nexgen-svg-layer" viewBox="0 0 800 600">
                        {/* Orbital Ring Base */}
                        <circle
                            cx="400"
                            cy="300"
                            r={RADIUS}
                            className="orbital-ring"
                        />

                        {positionedNodes.map((item, idx) => (
                            <React.Fragment key={`sync-path-${item.id}`}>
                                {/* Connection Line */}
                                <path
                                    d={`M 400 300 L ${400 + item.x} ${300 + item.y}`}
                                    className={`infrastructure-path ${hoveredNode === item.id ? 'active' : ''}`}
                                />

                                {/* Data Particles (Droplets) */}
                                {[0, 0.33, 0.66].map((offset) => (
                                    <motion.circle
                                        key={`particle-${item.id}-${offset}`}
                                        r="2"
                                        fill={item.color}
                                        initial={{ offsetDistance: "0%" }}
                                        animate={{ offsetDistance: "100%" }}
                                        transition={{
                                            duration: hoveredNode === item.id ? 1 : 2.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: offset * 2.5
                                        }}
                                        style={{
                                            offsetPath: `path('M 400 300 L ${400 + item.x} ${300 + item.y}')`,
                                            filter: `drop-shadow(0 0 6px ${item.color})`
                                        }}
                                        className="data-droplet"
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </svg>

                    {/* Core HR Engine */}
                    <div className="nexgen-core-engine">
                        <motion.div
                            className="engine-outer-ring"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        ></motion.div>
                        <motion.div
                            className="engine-inner-glass"
                            animate={{
                                boxShadow: hoveredNode
                                    ? `0 0 40px rgba(124,58,237,0.3)`
                                    : `0 0 20px rgba(124,58,237,0.1)`
                            }}
                        >
                            <div className="engine-content-v2">
                                <Shield size={32} className="engine-icon-v2" />
                                <span className="engine-label-v2">ENTERPRISE CORE</span>
                            </div>
                            <div className="pulse-wave"></div>
                        </motion.div>
                    </div>

                    {/* Integration Node Cards */}
                    {positionedNodes.map((node, nIdx) => (
                        <motion.div
                            key={`node-${node.id}`}
                            className="nexgen-node-wrapper"
                            style={{
                                left: `calc(50% + ${node.x}px)`,
                                top: `calc(50% + ${node.y}px)`
                            }}
                            onMouseEnter={() => setHoveredNode(node.id)}
                            onMouseLeave={() => setHoveredNode(null)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (nIdx * 0.05) }}
                        >
                            <motion.div
                                className={`hyper-glass-card ${hoveredNode === node.id ? 'hovered' : ''}`}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <div className="node-icon-box" style={{ color: node.color }}>
                                    {node.icon}
                                </div>
                                <div className="node-info">
                                    <span className="node-name">{node.name}</span>
                                    <span className="node-category">{node.category}</span>
                                </div>
                                <div className="node-internal-glow" style={{ "--glow-color": node.color }}></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Nex-Gen Marketplace CTA */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <button className="nexgen-cta-btn">
                        <span>Open Integration Hub</span>
                        <ArrowRight size={20} className="cta-arrow" />
                    </button>
                    <div className="mt-8 flex items-center justify-center gap-6 text-xs font-bold text-gray-400">
                        <span className="flex items-center gap-2"><CircleDashed size={12} className="text-purple-500" /> SECURE TUNNEL</span>
                        <span className="flex items-center gap-2"><CircleDashed size={12} className="text-amber-500" /> 256-BIT ENCRYPTION</span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Integrations;
