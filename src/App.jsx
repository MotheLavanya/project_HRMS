import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HRMSValueProp from './components/HRMSValueProp'
import HRMSOrbitSteps from './components/HRMSOrbitSteps'
import NexusFeatures from './components/NexusFeatures'
import Stats from './components/Stats'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal' // Import DemoModal
import FeaturesPage from './pages/Features/FeaturesPage'
import CareersPage from './pages/Careers/CareersPage'
import BlogPage from './pages/Blog/BlogPage'
import SolutionsPage from './pages/Solutions/SolutionsPage'
import IntegrationsPage from './pages/Integrations/IntegrationsPage'
import PricingPage from './pages/Pricing/PricingPage'
import ContactPage from './pages/Contact/ContactPage'
import FAQPage from './pages/FAQ/FAQPage'
import PartnersPage from './pages/Partners/PartnersPage'
import TestimonialsPage from './pages/Testimonials/TestimonialsPage'
import ApiPage from './pages/Api/ApiPage'
import PrivacyPage from './pages/Privacy/PrivacyPage'
import TermsPage from './pages/Terms/TermsPage'
import SecurityPage from './pages/Security/SecurityPage'
import AboutPage from './pages/About/AboutPage';
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [view, setView] = useState('home'); // home, or any ID from SubPagesData
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); // Add modal state

  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar 
        onDemoClick={handleDemoClick} 
        onNavigate={navigateTo}
      />
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />

            <AnimatePresence mode="wait">
                {view === 'home' && (
                    <main key="home">
                        <Hero onDemoClick={handleDemoClick} onNavigate={navigateTo} />
                        <HRMSValueProp />
                        <HRMSOrbitSteps />
                        <NexusFeatures />
                        <Stats />
                        <Integrations />
                        {/* <Testimonials /> */}
                        {/* <FAQ /> */}
                    </main>
                )}
                {view === 'login' && (
                    <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                            <h2 className="text-3xl font-bold mb-4 text-white">Welcome Back</h2>
                            <p className="text-gray-400 mb-8">Login functionality coming soon. Stay tuned!</p>
                            <button onClick={() => navigateTo('home')} className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                                Back to Home
                            </button>
                        </div>
                    </motion.div>
                )}
                {view === 'features' && (
                    <motion.div key="features" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FeaturesPage onNavigate={navigateTo} onDemoClick={handleDemoClick} />
                    </motion.div>
                )}
                {view === 'about' && (
                    <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <AboutPage />
                    </motion.div>
                )}
                {view === 'careers' && (
                    <motion.div key="careers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <CareersPage onNavigate={navigateTo} onDemoClick={handleDemoClick} />
                    </motion.div>
                )}
                {view === 'blog' && (
                    <motion.div key="blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <BlogPage />
                    </motion.div>
                )}
                {view === 'solutions' && (
                    <motion.div key="solutions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <SolutionsPage onDemoClick={handleDemoClick} onNavigate={navigateTo} />
                    </motion.div>
                )}
                {view === 'integrations' && (
                    <motion.div key="integrations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <IntegrationsPage />
                    </motion.div>
                )}
                {view === 'pricing' && (
                    <motion.div key="pricing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <PricingPage onDemoClick={handleDemoClick} onNavigate={navigateTo} />
                    </motion.div>
                )}
                {view === 'faq' && (
                    <motion.div key="faq" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FAQPage onNavigate={navigateTo} />
                    </motion.div>
                )}
                {view === 'testimonials' && (
                    <motion.div key="testimonials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <TestimonialsPage onNavigate={navigateTo} />
                    </motion.div>
                )}
                {view === 'contact' && (
                    <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <ContactPage />
                    </motion.div>
                )}
                {view === 'partners' && (
                    <motion.div key="partners" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <PartnersPage />
                    </motion.div>
                )}
                {view === 'api' && (
                    <motion.div key="api" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <ApiPage />
                    </motion.div>
                )}
                {view === 'privacy' && (
                    <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <PrivacyPage />
                    </motion.div>
                )}
                {view === 'terms' && (
                    <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <TermsPage />
                    </motion.div>
                )}
                {view === 'security' && (
                    <motion.div key="security" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <SecurityPage />
                    </motion.div>
                )}
            </AnimatePresence>

            <CTA onDemoClick={handleDemoClick} />
            <Footer onNavigate={navigateTo} onDemoClick={handleDemoClick} />
        </div>
    )
}

export default App
