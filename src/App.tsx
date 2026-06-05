/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Audacity from './pages/Audacity';
import About from './pages/About';
import MyPenSpeaks from './pages/MyPenSpeaks';
import Newsletter from './pages/Newsletter';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-cmf-black)] text-[var(--color-cmf-white)] selection:bg-[var(--color-cmf-accent)] selection:text-white flex flex-col antialiased relative overflow-x-hidden">
        <AnnouncementBar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audacity" element={<Audacity />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-pen-speaks" element={<MyPenSpeaks />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
