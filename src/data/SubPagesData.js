import { 
    Users, 
    Clock, 
    Calendar, 
    BadgeDollarSign, 
    TrendingUp, 
    UserCheck, 
    BarChart3, 
    Bell,
    Heart,
    Briefcase,
    Zap,
    Globe,
    Rocket,
    BookOpen,
    MessageSquare,
    HelpCircle,
    FileText,
    Github,
    Mail,
    Star,
    ShieldCheck
} from 'lucide-react';

export const SubPagesData = {
    careers: {
        title: "Join the HR Revolution",
        subtitle: "We're building the future of work. Come be a part of it.",
        icon: Users,
        headerGradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        sections: [
            {
                type: "grid",
                title: "Why Work With Us?",
                items: [
                    { icon: Heart, iconColor: "text-pink-500", title: "People First", desc: "Wellness programs and mental health support." },
                    { icon: Globe, iconColor: "text-blue-500", title: "Remote First", desc: "Work from anywhere in the world." },
                    { icon: Zap, iconColor: "text-amber-500", title: "Equity", desc: "Everyone is an owner with our ESOP program." }
                ]
            },
            {
                type: "list",
                title: "Open Positions",
                items: [
                    { title: "Senior Frontend Engineer", location: "Remote / Bengaluru", dept: "Engineering" },
                    { title: "Product Designer (UX/UI)", location: "Remote", dept: "Product" },
                    { title: "HR Transformation Consultant", location: "London / Remote", dept: "Sales" }
                ]
            }
        ]
    },
    blog: {
        title: "HR Insights & Innovation",
        subtitle: "Stay ahead with the latest trends in workforce management.",
        icon: BookOpen,
        headerGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        sections: [
            {
                type: "blog-grid",
                title: "Recent Articles",
                items: [
                    { date: "March 15, 2024", title: "The Rise of AI in Payroll Automation", author: "Sarah Jenkins" },
                    { date: "March 10, 2024", title: "5 Ways to Boost Employee Retention in 2024", author: "David Chen" },
                    { date: "March 05, 2024", title: "Navigating Hybrid Work Compliance", author: "Elena Rodriguez" }
                ]
            }
        ]
    },
    solutions: {
        title: "Tailored for Your Industry",
        subtitle: "Specialized HR tools for specialized business needs.",
        icon: Briefcase,
        headerGradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
        sections: [
            {
                type: "grid",
                title: "Vertical Solutions",
                items: [
                    { icon: Star, iconColor: "text-yellow-500", title: "Healthcare", desc: "Roster management and credential tracking." },
                    { icon: TrendingUp, iconColor: "text-green-500", title: "Retail & Hospitality", desc: "Shift swapping and seasonal workforce scaling." },
                    { icon: Rocket, iconColor: "text-purple-500", title: "Tech & SaaS", desc: "Global talent hiring and ESOP management." }
                ]
            }
        ]
    },
    features: {
        title: "HRMS Features",
        subtitle: "Our HRMS platform provides powerful tools to manage employees, track attendance, automate payroll, and gain valuable HR insights — all in one place.",
        icon: Zap,
        headerGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        sections: [
            {
                type: "grid",
                title: "Powerful HR Tools",
                items: [
                    { 
                        icon: Users, 
                        iconColor: "text-blue-500", 
                        title: "Employee Management", 
                        desc: "Manage employee profiles, departments, roles, and important documents from one dashboard." 
                    },
                    { 
                        icon: Clock, 
                        iconColor: "text-indigo-500", 
                        title: "Attendance Tracking", 
                        desc: "Track employee attendance, working hours, shifts, and overtime automatically." 
                    },
                    { 
                        icon: Calendar, 
                        iconColor: "text-purple-500", 
                        title: "Leave Management", 
                        desc: "Easily manage leave requests, approvals, leave balances, and holiday calendars." 
                    },
                    { 
                        icon: BadgeDollarSign, 
                        iconColor: "text-green-500", 
                        title: "Payroll Management", 
                        desc: "Automate salary calculations, deductions, bonuses, and generate payslips." 
                    },
                    { 
                        icon: TrendingUp, 
                        iconColor: "text-orange-500", 
                        title: "Performance Management", 
                        desc: "Monitor employee goals, performance reviews, and feedback." 
                    },
                    { 
                        icon: UserCheck, 
                        iconColor: "text-cyan-500", 
                        title: "Employee Self-Service", 
                        desc: "Allow employees to update details, apply for leave, and view payslips." 
                    },
                    { 
                        icon: BarChart3, 
                        iconColor: "text-blue-600", 
                        title: "Reports & Analytics", 
                        desc: "Access HR reports, attendance summaries, and workforce insights." 
                    },
                    { 
                        icon: Bell, 
                        iconColor: "text-red-500", 
                        title: "Notifications & Alerts", 
                        desc: "Get updates on leave approvals, attendance reminders, and payroll alerts." 
                    }
                ]
            }
        ]
    },
    integrations: {
        title: "Connected Ecosystem",
        subtitle: "Sync with your favorite tools in seconds.",
        icon: Zap,
        headerGradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
        sections: [
            {
                type: "grid",
                title: "Popular Connectors",
                items: [
                    { icon: MessageSquare, iconColor: "text-purple-500", title: "Slack", desc: "Real-time notifications for HR events." },
                    { icon: Github, iconColor: "text-gray-800", title: "GitHub", desc: "Sync technical recruitment pipelines." },
                    { icon: HelpCircle, iconColor: "text-blue-400", title: "Zoom", desc: "Auto-schedule interviews and meetings." }
                ]
            }
        ]
    },
    api: {
        title: "Developer Portal",
        subtitle: "Build custom workflows with our robust API.",
        icon: Globe,
        headerGradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
        sections: [
            {
                type: "list",
                title: "Documentation Overview",
                items: [
                    { title: "Authentication Guide", dept: "Security", location: "v2.0" },
                    { title: "Employee Webhooks", dept: "Real-time", location: "v2.1" },
                    { title: "Payroll API Reference", dept: "Finance", location: "v1.8" }
                ]
            }
        ]
    },
    contact: {
        title: "Get in Touch",
        subtitle: "Our team is here to help you scale your people operations.",
        icon: Heart,
        headerGradient: "linear-gradient(135deg, #ee4444 0%, #f59e0b 100%)",
        sections: [
            {
                type: "grid",
                title: "Contact Channels",
                items: [
                    { icon: Mail, iconColor: "text-red-500", title: "Sales Inquiry", desc: "sales@hrms.platform" },
                    { icon: MessageSquare, iconColor: "text-blue-500", title: "Technical Support", desc: "support@hrms.platform" },
                    { icon: HelpCircle, iconColor: "text-gray-500", title: "Media & Press", desc: "press@hrms.platform" }
                ]
            }
        ]
    },
    partners: {
        title: "Partner Network",
        subtitle: "Join forces with the world's most innovative HR platforms.",
        icon: Rocket,
        headerGradient: "linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%)",
        sections: [
            {
                type: "grid",
                title: "Partner Benefits",
                items: [
                    { icon: TrendingUp, iconColor: "text-teal-500", title: "Co-Marketing", desc: "Reach our global customer base." },
                    { icon: Zap, iconColor: "text-yellow-500", title: "API Early Access", desc: "Beta test new platform features." },
                    { icon: BadgeDollarSign, iconColor: "text-emerald-500", title: "Revenue Share", desc: "Tiered commission on referrals." }
                ]
            }
        ]
    },
    pricing: {
        title: "Simple, Transparent Pricing",
        subtitle: "Plans designed to scale with your organization's growth.",
        icon: BadgeDollarSign,
        headerGradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
        sections: [
            {
                type: "grid",
                title: "Available Tiers",
                items: [
                    { icon: Zap, iconColor: "text-pink-500", title: "Starter", desc: "Up to 50 employees. All core features included." },
                    { icon: Rocket, iconColor: "text-orange-500", title: "Growth", desc: "Up to 250 employees. Advanced analytics & AI modules." },
                    { icon: Globe, iconColor: "text-blue-600", title: "Enterprise", desc: "Unlimited power. Custom integrations & 24/7 support." }
                ]
            }
        ]
    }
};
