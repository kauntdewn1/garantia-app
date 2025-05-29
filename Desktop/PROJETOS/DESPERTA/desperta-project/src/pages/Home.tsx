import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import ManifestoSection from '../components/sections/ManifestoSection';
import ValuesSection from '../components/sections/ValuesSection';
import FacilitatorsSection from '../components/sections/FacilitatorsSection';
import AgendaSection from '../components/sections/AgendaSection';
import TrailsSection from '../components/sections/TrailsSection';
import CommunitySection from '../components/sections/CommunitySection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/sections/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ManifestoSection />
      <ValuesSection />
      <CommunitySection />
      <FacilitatorsSection />
      <AgendaSection />
      <TrailsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;