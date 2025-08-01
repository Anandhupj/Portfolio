import { motion } from 'framer-motion';
import { Code, Palette, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const strengths = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Building fast, scalable applications"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Passionate Developer & Designer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 5 years of experience in web development, I specialize in creating 
                exceptional digital experiences that combine cutting-edge technology with 
                thoughtful design.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey started with a curiosity about how things work behind the scenes, 
                which led me to explore everything from pixel-perfect designs to complex 
                backend architectures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or mentoring aspiring developers.
              </p>
            </motion.div>
          </motion.div>

          {/* Strengths Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <div className="text-accent mb-4">
                  {strength.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">
            My Journey
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary rounded-full"></div>
            
            {/* Timeline items */}
            {[
              { year: "2024", title: "Senior Full-Stack Developer", company: "Tech Innovations Inc." },
              { year: "2022", title: "Frontend Lead", company: "Digital Solutions Ltd." },
              { year: "2020", title: "Full-Stack Developer", company: "StartupXYZ" },
              { year: "2019", title: "Junior Developer", company: "WebCorp" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`glass p-6 rounded-2xl max-w-md ${
                  index % 2 === 0 ? 'lg:mr-auto lg:ml-0 ml-8' : 'lg:ml-auto lg:mr-0 ml-8'
                }`}>
                  <div className="text-accent font-bold text-lg">{item.year}</div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;