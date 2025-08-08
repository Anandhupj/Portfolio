import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import project1 from '@/assets/weather-app-project.png';
import project2 from '@/assets/e-commerce-project.png';
import project3 from '@/assets/gemini-ai-clone-project.png';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: " Real-Time Weather-App",
      description: "A sleek and responsive weather application built using React.js, Tailwind CSS, and the OpenWeather API. Users can search by city or country to view real-time weather data with dynamic visuals and a modern glassmorphism UI. Features include temperature display, weather conditions, and adaptive background based on weather type.",
      image: project1,
      technologies: ["React.js", "JavaScript", "OpenWeatherMap API", "Tailwind CSS"],
      githubUrl: "https://github.com/Anandhupj/Weather-app",
      liveUrl: "https://gemini-ai-clone-blond.vercel.app/",
      category: "Web Application"
    },
    {
      id: 2,
      title: " Sports & Fitness E-Commerce App",
      description: "This is a full-featured full-stack e-commerce platform built with the MERN stack, styled using Tailwind CSS, and powered by Redux Toolkit for efficient state management. Designed to offer a smooth shopping experience for sports and fitness enthusiasts. Users can easily browse, search, and filter products by name or price, The app includes secure login and authentication, image uploads with Cloudinary, and payment options using Stripe and Razorpay. Real-time feedback is handled with React Toastify, and the entire UI is fully responsive across devices.It also comes with a powerful admin dashboard that allows easy management of products, orders, and users through full CRUD operations.",
      image: project2,
      technologies: ["React.js", "Redux", "Stripe", "Razorpay","Tailwind CSS", "Node.js", "Experss.js", "MongoDB"],
      githubUrl: "https://github.com/Anandhupj/E-Commerce-app",
      liveUrl: "https://sports-and-fitness-collection.vercel.app/",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Gemini AI Clone",
      description: "A modern and interactive AI assistant web app inspired by Google’s Gemini. Built with React.js and styled using Tailwind CSS, this project lets users ask questions or give prompts and get smart, real-time responses using Google’s Generative AI API.It features a clean, intuitive interface and securely handles API keys with dotenv. Designed to feel simple, responsive, and helpful—just like a real AI assistant.",
      image: project3,
      technologies: ["React.js", "Tailwind CSS", "Google’s Generative AI API"],
      githubUrl: "https://github.com/Anandhupj/gemini-ai-clone",
      liveUrl: "https://gemini-ai-clone-blond.vercel.app/",
      category: "AI assistant Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className="glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform-gpu"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass p-3 rounded-full hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-6 h-6 text-foreground" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass p-3 rounded-full hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-6 h-6 text-foreground" />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className=" px-3 py-1 text-xs font-medium text-accent rounded-full bg-accent text-accent-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <motion.h3
                    className="text-xl font-bold text-foreground group-hover:text-accent transition-colors"
                    layoutId={`title-${project.id}`}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-border hover:bg-muted transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-primary text-white transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="gradient-btn px-8 py-4 text-white font-semibold rounded-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;