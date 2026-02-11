import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

export default function Testimonials({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      filter: 'blur(8px)',
    }),
  };

  return (
    <SectionWrapper id="testimonials" bg="white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal"
        >
          Voices of{' '}
          <span className="text-gradient-brand">Success</span>
        </motion.h2>
      </div>

      {/* Testimonial Slider */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Glass container */}
          <div className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl shadow-black/[0.04] p-10 md:p-14 min-h-[320px] flex items-center">
            {/* Decorative quote */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-500/10" strokeWidth={1} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed font-light mb-8">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-12 h-12 rounded-full object-cover shadow-lg shadow-brand-500/20"
                  />
                  <div>
                    <div className="font-semibold text-charcoal">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-charcoal/50">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full glass hover:bg-white/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal/60" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? 'bg-brand-500 w-6'
                      : 'bg-charcoal/15 hover:bg-charcoal/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-3 rounded-full glass hover:bg-white/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-charcoal/60" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
