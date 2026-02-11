import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import mockData from '../data/mockData.json';
import iconMap from '../data/iconMap';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const stats = mockData.platformStats.map((s) => ({
  ...s,
  icon: iconMap[s.icon],
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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

export default function TestimonialsPage() {
  const featured = mockData.testimonials[0];
  const rest = mockData.testimonials.slice(1);

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-brand-50/40 via-white to-white overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-brand-200/20 to-transparent blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6"
          >
            Voices of{' '}
            <span className="text-gradient-brand">Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/50 max-w-2xl mx-auto"
          >
            Hear from learners who have transformed their careers with
            NextStep4U. Their stories speak louder than anything we could
            say.
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <SectionWrapper bg="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-10 md:p-14 relative" hover={false}>
            <Quote
              className="absolute top-6 right-8 w-16 h-16 text-brand-500/10"
              strokeWidth={1}
            />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-charcoal/70 leading-relaxed font-light mb-10">
                &ldquo;{featured.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={featured.avatar}
                  alt={featured.name}
                  className="w-14 h-14 rounded-full object-cover shadow-lg shadow-brand-500/20"
                />
                <div>
                  <div className="text-lg font-semibold text-charcoal">
                    {featured.name}
                  </div>
                  <div className="text-sm text-charcoal/50">
                    {featured.role}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </SectionWrapper>

      {/* Testimonials Grid */}
      <SectionWrapper bg="gradient">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            More{' '}
            <span className="text-gradient-brand">Stories</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeUp}>
              <GlassCard className="p-8 h-full" hover={false}>
                <Quote
                  className="w-8 h-8 text-brand-500/15 mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-charcoal/60 leading-relaxed mb-6 text-[15px]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover shadow-md shadow-brand-500/15"
                  />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-charcoal/45">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Stats */}
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
                    <Icon
                      className="w-6 h-6 text-brand-500"
                      strokeWidth={1.8}
                    />
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
              Write Your Own{' '}
              <span className="text-gradient-brand">Success Story</span>
            </h2>
            <p className="text-charcoal/50 mb-8 max-w-lg mx-auto">
              Join thousands of learners who have transformed their
              careers. Start your free trial today.
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
