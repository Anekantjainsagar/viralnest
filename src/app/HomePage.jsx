'use client';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import WhyChooseSection from './WhyChooseSection';
import ServicesSection from './ServicesSection';
import FeaturedProjectsSection from './FeaturedProjectsSection';
import TechnologiesSection from './TechnologiesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import TeamsSection from './TeamsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(270deg,#1f2937_0%,#183763_50%,#000000_100%)]">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyChooseSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <TechnologiesSection />
        <TeamsSection /> {/* <-- Added here */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
