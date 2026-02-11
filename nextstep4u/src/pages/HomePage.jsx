import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import mockData from '../data/mockData.json';
import iconMap from '../data/iconMap';
import Hero from '../sections/Hero';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const features = mockData.features.map((f) => ({
  ...f,
  icon: iconMap[f.icon],
}));

const stats = mockData.platformStats.map((s) => ({
  ...s,
  icon: iconMap[s.icon],
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

export default function HomePage() {
  return (
    <>
      <Hero data={mockData.hero} />

      {/* Features Preview */}
      <SectionWrapper bg="gradient">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Platform Highlights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            Everything You Need to{' '}
            <span className="text-gradient-brand">Excel</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeUp}>
                <GlassCard className="p-8 h-full" glow>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 border border-brand-500/10`}
                  >
                    <Icon className="w-7 h-7 text-brand-700" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/50 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" to="/features">
            Explore All Features
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* Stats Bar */}
      <section className="relative py-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 via-transparent to-brand-500/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand-500" strokeWidth={1.8} />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <SectionWrapper bg="white">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Popular Courses
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            Learn From the{' '}
            <span className="text-gradient-brand">Best</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {mockData.courses.slice(0, 3).map((course) => (
            <motion.div key={course.title} variants={fadeUp}>
              <GlassCard className="p-0 overflow-hidden h-full" glow>
                <div
                  className={`h-44 bg-gradient-to-br ${course.gradient} relative overflow-hidden`}
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
                  <h3 className="text-lg font-display font-semibold text-charcoal mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-charcoal/50">
                    by {course.instructor}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" to="/courses">
            Browse All Courses
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* Testimonial Highlight */}
      <SectionWrapper bg="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            What Learners Say
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <GlassCard className="p-10 md:p-14" hover={false}>
              <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed font-light mb-8">
                &ldquo;{mockData.testimonials[0].content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={mockData.testimonials[0].avatar}
                  alt={mockData.testimonials[0].name}
                  className="w-12 h-12 rounded-full object-cover shadow-lg shadow-brand-500/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-charcoal">
                    {mockData.testimonials[0].name}
                  </div>
                  <div className="text-sm text-charcoal/50">
                    {mockData.testimonials[0].role}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Button variant="outline" to="/testimonials">
              Read More Stories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-charcoal/30 uppercase tracking-widest mb-10"
          >
            Trusted by professionals at
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6"
          >
            {mockData.partners.map((partner) => (
              <span
                key={partner}
                className="text-xl font-display font-semibold text-charcoal/15 hover:text-charcoal/30 transition-colors duration-300"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionWrapper bg="gradient">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl shadow-brand-500/[0.08] p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Ready to Take Your{' '}
              <span className="text-gradient-brand">Next Step</span>?
            </h2>
            <p className="text-charcoal/50 mb-8 max-w-lg mx-auto">
              Join thousands of learners who have transformed their careers.
              Start your free trial today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="solid" size="lg" to="/get-started">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg" to="/courses">
                Browse Courses
              </Button>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
