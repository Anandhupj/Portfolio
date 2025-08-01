import { useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ParticlesBackground from '@/components/ParticlesBackground';
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import SocialSection from '@/components/sections/SocialSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Elements */}
        <ParticlesBackground />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        {/* Social Links & Footer */}
        <SocialSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;
