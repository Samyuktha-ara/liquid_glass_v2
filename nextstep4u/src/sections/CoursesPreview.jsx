import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Star } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';

function AnimatedProgress({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-charcoal/50">Progress</span>
        <span className="text-xs font-semibold text-brand-700">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-brand-100/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CoursesPreview({ courses }) {
  return (
    <SectionWrapper id="courses" bg="white">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
        >
          Courses
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal"
        >
          Learn From the{' '}
          <span className="text-gradient-brand">Best</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-charcoal/50 max-w-2xl mx-auto"
        >
          World-class courses crafted by industry experts to help you master
          in-demand skills.
        </motion.p>
      </div>

      {/* Course Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {courses.map((course) => (
          <motion.div key={course.title} variants={cardVariants}>
            <GlassCard className="p-0 overflow-hidden h-full" glow>
              {/* Course Image */}
              <div
                className={`h-48 bg-gradient-to-br ${course.gradient} relative overflow-hidden`}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-sm text-charcoal shadow-sm">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                  <Star className="w-3.5 h-3.5 text-brand-600 fill-brand-500" />
                  <span className="text-xs font-semibold text-charcoal">
                    {course.rating}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-charcoal mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-charcoal/50 mb-4">
                  by {course.instructor}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-1.5 text-charcoal/40">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal/40">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">{course.students}</span>
                  </div>
                </div>

                {/* Progress */}
                <AnimatedProgress value={course.progress} />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
