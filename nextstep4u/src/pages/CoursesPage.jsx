import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import mockData from '../data/mockData.json';
import iconMap from '../data/iconMap';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import CoursesPreview from '../sections/CoursesPreview';

const learningPaths = mockData.learningPaths.map((p) => ({
  ...p,
  icon: iconMap[p.icon],
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? mockData.courses
      : mockData.courses.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-brand-50/40 via-white to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-300/20 to-transparent blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Course Catalog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6"
          >
            Learn From the{' '}
            <span className="text-gradient-brand">Best</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/50 max-w-2xl mx-auto"
          >
            World-class courses crafted by industry experts to help you
            master in-demand skills and advance your career.
          </motion.p>
        </div>
      </section>

      {/* Category Filter + Course Grid */}
      <SectionWrapper bg="white">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {mockData.courseCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-white/60 backdrop-blur-sm border border-white/30 text-charcoal/60 hover:bg-white/80 hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Course Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((course) => (
              <GlassCard
                key={course.title}
                className="p-0 overflow-hidden h-full"
                glow
              >
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
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-charcoal mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-charcoal/50 mb-4">
                    by {course.instructor}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-charcoal/40">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal/40">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">
                        {course.students} students
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-charcoal/50">
                        Progress
                      </span>
                      <span className="text-xs font-semibold text-brand-700">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-brand-100/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>

      {/* Learning Paths */}
      <SectionWrapper bg="gradient">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Guided Paths
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            Structured{' '}
            <span className="text-gradient-brand">Learning Paths</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-charcoal/50 max-w-2xl mx-auto"
          >
            Follow a curated sequence of courses designed to take you from
            beginner to job-ready in your chosen field.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {learningPaths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.div key={path.title} variants={fadeUp}>
                <GlassCard className="p-8 h-full" glow>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400/20 to-brand-200/10 flex items-center justify-center mb-6 border border-brand-500/10">
                    <Icon
                      className="w-7 h-7 text-brand-700"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-2">
                    {path.title}
                  </h3>
                  <p className="text-charcoal/50 leading-relaxed text-[15px] mb-6">
                    {path.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-charcoal/40">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {path.duration}
                    </span>
                    <span>{path.courses} courses</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl shadow-brand-500/[0.08] p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Start Learning{' '}
              <span className="text-gradient-brand">Today</span>
            </h2>
            <p className="text-charcoal/50 mb-8 max-w-lg mx-auto">
              Unlock all courses with a free 14-day Pro trial. No credit
              card required.
            </p>
            <Button variant="solid" size="lg" to="/get-started">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
