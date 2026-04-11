import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, 
    ChevronRight, 
    Calendar, 
    Clock, 
    ArrowRight,
    TrendingUp,
    Shield,
    Users,
    Cpu
} from 'lucide-react';
import './BlogPage.css';

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ['All', 'Strategy', 'Technology', 'People', 'Compliance'];

    const posts = [
        { 
            id: 1, 
            category: "Strategy", 
            title: "Navigating the Future of Hybrid Work Culture", 
            excerpt: "How modern organizations are balancing remote flexibility with team cohesion and productivity standards.",
            date: "Mar 18, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            icon: <Users size={18} />
        },
        { 
            id: 2, 
            category: "Technology", 
            title: "Integrating AI into Modern Recruitment", 
            excerpt: "Discover how artificial intelligence is streamlining candidate sourcing while maintaining a human-centric approach.",
            date: "Mar 15, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            icon: <Cpu size={18} />
        },
        { 
            id: 3, 
            category: "Compliance", 
            title: "Global Compliance Check-list for 2024", 
            excerpt: "Stay ahead of changing international labor laws and digital nomad tax regulations with our expert guide.",
            date: "Mar 12, 2024",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
            icon: <Shield size={18} />
        },
        { 
            id: 4, 
            category: "People", 
            title: "Employee Wellbeing: The New Retention Metric", 
            excerpt: "Why mental health support and work-life balance are now the top priorities for world-class talent.",
            date: "Mar 10, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
            icon: <TrendingUp size={18} />
        },
        { 
            id: 5, 
            category: "Strategy", 
            title: "Scaling Your HR Infrastructure Efficiently", 
            excerpt: "Best practices for moving from manual spreadsheets to a unified, cloud-native HR management system.",
            date: "Mar 05, 2024",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
            icon: <Users size={18} />
        },
        { 
            id: 6, 
            category: "Technology", 
            title: "The Security of Cloud-Based Employee Data", 
            excerpt: "Understanding the encryption and privacy protocols that protect your sensitive organizational information.",
            date: "Feb 28, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1451187530220-4e2b1309e211?auto=format&fit=crop&q=80&w=800",
            icon: <Shield size={18} />
        }
    ];

    const filteredPosts = posts.filter(post => 
        (activeCategory === 'All' || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="minimal-blog-root">
            <div className="minimal-container">
                {/* Header Section */}
                <header className="minimal-header">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="header-content"
                    >
                        <span className="eyebrow">Insights & Resources</span>
                        <h1>Our <span className="text-gradient">Blog</span></h1>
                        <p>Stay informed with the latest trends, strategies, and innovations in Human Resource Management.</p>
                    </motion.div>

                    {/* Search & Filter Bar */}
                    <div className="filter-system">
                        <div className="search-wrap">
                            <Search size={20} className="search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="category-list">
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Grid Section */}
                <main className="posts-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, i) => (
                            <motion.article 
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="blog-card"
                            >
                                <div className="card-thumb">
                                    <img src={post.image} alt={post.title} />
                                    <div className="card-tag">{post.category}</div>
                                </div>
                                <div className="card-details">
                                    <div className="card-meta">
                                        <span><Calendar size={14} /> {post.date}</span>
                                        <span className="dot"></span>
                                        <span><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <button className="card-link">
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </main>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="empty-view"
                    >
                        <div className="empty-icon"><Search size={40} /></div>
                        <h3>No results found</h3>
                        <p>We couldn't find any articles matching "{searchQuery}". Try a different term or category.</p>
                        <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>Clear all filters</button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
