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
import DemoPage from './pages/Demo/DemoPage'
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
  const [view, setView] = useState('home'); // home, demo, or any ID from SubPagesData

  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar 
        onDemoClick={() => navigateTo('demo')} 
        onNavigate={navigateTo}
      />
      
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <main key="home">
            <Hero />
            <HRMSValueProp />
            <HRMSOrbitSteps />
            <NexusFeatures />
            <Stats />
            <Integrations />
            {/* <Testimonials /> */}
            {/* <FAQ /> */}
          </main>
        )}
                {view === 'demo' && (
                    <motion.div key="demo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <DemoPage />
                    </motion.div>
                )}
                {view === 'features' && (
                    <motion.div key="features" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FeaturesPage onNavigate={navigateTo} onDemoClick={() => navigateTo('demo')} />
                    </motion.div>
                )}
                {view === 'about' && (
                    <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <AboutPage />
                    </motion.div>
                )}
                {view === 'careers' && (
                    <motion.div key="careers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <CareersPage onNavigate={navigateTo} onDemoClick={() => navigateTo('demo')} />
                    </motion.div>
                )}
                {view === 'blog' && (
                    <motion.div key="blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <BlogPage />
                    </motion.div>
                )}
                {view === 'solutions' && (
                    <motion.div key="solutions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <SolutionsPage onDemoClick={() => navigateTo('demo')} onNavigate={navigateTo} />
                    </motion.div>
                )}
                {view === 'integrations' && (
                    <motion.div key="integrations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <IntegrationsPage />
                    </motion.div>
                )}
                {view === 'pricing' && (
                    <motion.div key="pricing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <PricingPage onDemoClick={() => navigateTo('demo')} onNavigate={navigateTo} />
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

            <CTA onDemoClick={() => navigateTo('demo')} />
            <Footer onNavigate={navigateTo} onDemoClick={() => navigateTo('demo')} />
        </div>
    )
}

export default App
