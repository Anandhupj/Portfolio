import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com',
      color: 'hover:text-white hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
      color: 'hover:text-white hover:bg-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:alex.johnson@example.com',
      color: 'hover:text-white hover:bg-red-500'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/15551234567',
      color: 'hover:text-white hover:bg-green-500'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Social Links - Desktop */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`glass p-3 rounded-full transition-all duration-300 group ${link.color}`}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + index * 0.1 }}
          >
            <motion.div
              className="text-foreground group-hover:text-current transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {link.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Section */}
      <footer className="relative py-12 section-bg border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Social Links - Mobile/Tablet */}
            <motion.div
              className="flex lg:hidden gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`glass p-4 rounded-full transition-all duration-300 ${link.color}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                "Code is poetry written in logic"
              </h3>
              <p className="text-muted-foreground">
                Every line of code is an opportunity to create something beautiful and meaningful.
              </p>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-sm">
                © 2024 Alex Johnson. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 glass p-3 rounded-full hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5 }}
        >
          <ArrowUp className="w-6 h-6 text-foreground" />
        </motion.button>
      </footer>
    </>
  );
};

export default SocialSection;