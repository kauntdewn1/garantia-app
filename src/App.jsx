import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import RequestForm from './components/RequestForm'
import Bullets from './components/Bullets'
import Features from './components/Features'
import Countdown from './components/Countdown'
import LeadMagnet from './components/LeadMagnet'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-servico" element={<TermsOfService />} />
          <Route path="/" element={
            <main>
              <Hero />
              <Bullets />
              <Features />
              <Countdown />
              <LeadMagnet />
              <RequestForm />
            </main>
          } />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;