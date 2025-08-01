import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Layers,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 88 },
        { name: "GraphQL", level: 82 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Design",
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Framer", level: 78 },
        { name: "Blender", level: 70 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Webpack", level: 82 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for bringing ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Stack */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'TypeScript',
              'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS',
              'GraphQL', 'REST APIs', 'Microservices', 'Serverless'
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="glass px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-white/20 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;