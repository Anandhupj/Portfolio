import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2024 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ users",
        "Mentored junior developers and established best practices",
        "Improved application performance by 40% through optimization",
        "Collaborated with design team to implement new UI/UX standards"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Frontend Lead Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2022 - 2024",
      description: [
        "Spearheaded frontend development for 5+ client projects",
        "Implemented responsive design system used across multiple products",
        "Reduced development time by 30% through component reusability",
        "Coordinated with cross-functional teams for seamless delivery"
      ],
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Figma", "Git"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: [
        "Built MVP from concept to launch in 6 months",
        "Developed RESTful APIs and integrated third-party services",
        "Implemented automated testing reducing bugs by 50%",
        "Participated in agile development and sprint planning"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Jest", "Heroku"]
    },
    {
      title: "Junior Web Developer",
      company: "WebCorp Agency",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: [
        "Created responsive websites for small to medium businesses",
        "Collaborated with designers to implement pixel-perfect layouts",
        "Optimized websites for SEO and performance",
        "Provided ongoing maintenance and support for client websites"
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My journey through various roles and responsibilities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-primary opacity-30"></div>
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 mt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <motion.h3
                      className="text-2xl font-bold text-foreground mb-2"
                      layoutId={`title-${index}`}
                    >
                      {experience.title}
                    </motion.h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-accent" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-muted-foreground flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;