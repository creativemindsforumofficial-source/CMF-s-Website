/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomScroller from './components/CustomScroller';
import AIAuditModal, { BIODATA_BANNER_DISMISSED_KEY } from './components/AIAuditModal';

import Home from './pages/Home';
import Audacity from './pages/Audacity';
import About from './pages/About';
import MyPenSpeaks from './pages/MyPenSpeaks';
import Newsletter from './pages/Newsletter';
import Team from './pages/Team';
import AISymposium from './pages/AISymposium';
import Programs from './pages/Programs';
import Join from './pages/Join';
import CommunityOnboarding from './pages/CommunityOnboarding';
import AIAudit from './pages/AIAudit';
import NotFound from './pages/NotFound';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    // Trigger announcement pop-up promptly after 400ms
    const hasDismissed = sessionStorage.getItem(BIODATA_BANNER_DISMISSED_KEY);
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsAuditModalOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomScroller />
      <div className="min-h-screen bg-[var(--color-cmf-black)] text-[var(--color-cmf-white)] selection:bg-[var(--color-cmf-accent)] selection:text-white flex flex-col antialiased tracking-tight text-sm lg:text-base relative overflow-x-hidden">
        <Helmet>
          <title>Creative Minds' Forum</title>
          <meta name="description" content="Redefining creativity by instilling the God factor, inspiring a generation via infallible truths, and equipping global creatives with tech and resilience." />
          <meta property="og:site_name" content="Creative Minds' Forum" />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#000000" />
        </Helmet>

        <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} />
        <AIAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audacity" element={<Audacity />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-pen-speaks" element={<MyPenSpeaks />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/team" element={<Team />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/our-programs" element={<Programs />} />
          <Route path="/ai-symposium" element={<AISymposium />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join/bio-data" element={<CommunityOnboarding />} />
          <Route path="/bio-data" element={<CommunityOnboarding />} />
          <Route path="/community" element={<Join />} />
          <Route path="/ai-audit" element={<AIAudit />} />
          <Route path="/fluency-audit" element={<AIAudit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
