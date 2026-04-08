import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import RequestForm from './components/RequestForm'
import Bullets from './components/Bullets'
import Features from './components/Features'
import Countdown from './components/Countdown'
import LeadMagnet from './components/LeadMagnet'
import TrustIndicators from './components/TrustIndicators'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import WhatsAppButton from './components/WhatsAppButton'  

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    // Scroll suave para o formulário
    setTimeout(() => {
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header onShowForm={handleShowForm} />
        <Routes>
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-servico" element={<TermsOfService />} />
          <Route path="/" element={
            <main>
              <Hero onShowForm={handleShowForm} />
              {showForm && <RequestForm />}
              <Bullets />
              <Features />
              <Countdown />
              <LeadMagnet />
              <TrustIndicators />
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