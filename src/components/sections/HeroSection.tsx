import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scene3D from '@/components/3D/Scene3D';
// import heroImage from '@/assets/hero-anandhu-portfolio-img.jpg';
import heroImageLight from '@/assets/heropic-portrait-removebg-preview.png';
import heroImageDark from '@/assets/hero-anandhu-portfolio-img.jpg';
import { useTheme } from '@/contexts/ThemeContext';


const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center section-bg overflow-hidden">
      {/* 3D Background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20 hidden lg:block">
        <Scene3D enableControls />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <motion.p 
                className="text-accent text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                className="text-6xl lg:text-7xl font-black gradient-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Ananda Narayanan P J
              </motion.h1>
              
              <motion.h2
                className="text-2xl lg:text-3xl text-muted-foreground font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Full-Stack Developer
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I craft digital experiences that bridge the gap between design and functionality. 
              Passionate about creating intuitive, performant applications that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="gradient-btn px-8 py-4 text-white font-semibold rounded-2xl flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </motion.button>
              
              <motion.a
                href='/Ananda_Narayanan_P_J-[resume]_.pdf'
                className="glass px-8 py-4 text-foreground font-semibold rounded-2xl flex items-center gap-3 justify-center hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            data-aos="fade-up"
            data-aos-delay="400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 animate-pulse-glow" ></div>
              <img
                src={theme === 'dark' ? heroImageDark : heroImageLight}
                 alt="Ananda Narayanan P J"
                className="relative z-10 w-full h-full object-cover glass float-animation"
                // loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;