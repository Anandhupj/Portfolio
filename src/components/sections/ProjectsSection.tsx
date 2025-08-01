import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "SaaS Dashboard Platform",
      description: "A comprehensive analytics dashboard with real-time data visualization, built with React, TypeScript, and D3.js. Features include custom charts, user management, and responsive design.",
      image: project1,
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Web Application"
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Modern mobile shopping experience with seamless checkout, wishlist functionality, and personalized recommendations. Built using React Native and integrated with Stripe payments.",
      image: project2,
      technologies: ["React Native", "Redux", "Stripe", "Firebase", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      description: "Machine learning platform for predictive analytics with interactive dashboards. Features automated insights, custom ML models, and real-time data processing.",
      image: project3,
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "Redis"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "AI/ML Platform"
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
                    <span className="glass px-3 py-1 text-xs font-medium text-accent rounded-full">
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