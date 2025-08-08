import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aadi Prakash",
      role: "Frontend Developer",
      company: "ZedeXeL.",
      content: "Collaborating with Anandhu on React projects has always been seamless. He’s the kind of full stack developer who understands the nuances of frontend performance, component structuring, and state management. His clean code and attention to detail made integration effortless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b417?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anat Alphones",
      role: "Python/Django Developer ",
      company: "Ekaksha Technologies.",
      content: "Working alongside Ananda on an API-heavy project was a great experience. His ability to structure the frontend to work efficiently with RESTful endpoints, and his Node/Express knowledge, added a lot of value to the project. He’s proactive, skilled, and always willing to learn.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658f4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Varsha",
      role: "UI/UX Designer",
      company: "Ekaksha Technologies",
      content: "Anandhu transforms designs into pixel-perfect, responsive interfaces with ease. His use of Tailwind CSS and understanding of user flow brought my prototypes to life exactly as envisioned. He always respects design consistency while offering smart suggestions to enhance usability.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-143876681033-6461ffd8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Swathi",
      role: "Web Developer",
      company: "Ekaksha Technologies",
      content: "I’ve collaborated with Anandhu on full-cycle web projects and have seen firsthand how well he balances frontend finesse with backend robustness. Whether it's building with React, styling with Tailwind, or deploying a Node app, he always delivers high-quality, scalable solutions.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-150700321169-0a1d7228f2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Feedback from colleagues, clients, and partners
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={activeTestimonial}
            className="glass p-8 lg:p-12 rounded-3xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Icon */}
            <motion.div
              className="inline-flex p-4 rounded-full bg-gradient-primary mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            {/* Rating */}
            <motion.div
              className="flex justify-center gap-1 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[...Array(testimonials[activeTestimonial].rating)].map((_, index) => (
                <Star key={index} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </motion.div>

            {/* Content */}
            <motion.blockquote
              className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "{testimonials[activeTestimonial].content}"
            </motion.blockquote>

            {/* Author */}
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-accent"
              />
              <div className="text-left">
                <h4 className="font-bold text-foreground text-lg">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-accent text-sm">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="glass p-3 rounded-full hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-gradient-primary scale-125'
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="glass p-3 rounded-full hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Testimonial Grid - Mobile Alternative */}
          <div className="lg:hidden mt-12 grid gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;