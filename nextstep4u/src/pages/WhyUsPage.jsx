import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import mockData from '../data/mockData.json';
import iconMap from '../data/iconMap';
import WhyChooseUs from '../sections/WhyChooseUs';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

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

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-brand-50/40 via-white to-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-brand-300/15 to-transparent blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Why NextStep4U
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6"
          >
            The Smarter Way to{' '}
            <span className="text-gradient-brand">Learn</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/50 max-w-2xl mx-auto"
          >
            We combine cutting-edge AI technology with proven pedagogical
            methods to create learning experiences that truly transform
            careers.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs reasons={mockData.whyChooseUs} />

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

      {/* Trusted Partners */}
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

      {/* Testimonial Highlight */}
      <SectionWrapper bg="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-10 md:p-14" hover={false}>
              <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed font-light mb-8">
                &ldquo;{mockData.testimonials[1].content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={mockData.testimonials[1].avatar}
                  alt={mockData.testimonials[1].name}
                  className="w-12 h-12 rounded-full object-cover shadow-lg shadow-brand-500/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-charcoal">
                    {mockData.testimonials[1].name}
                  </div>
                  <div className="text-sm text-charcoal/50">
                    {mockData.testimonials[1].role}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
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
              Experience the{' '}
              <span className="text-gradient-brand">Difference</span>
            </h2>
            <p className="text-charcoal/50 mb-8 max-w-lg mx-auto">
              See why thousands of learners choose NextStep4U. Start your
              free trial today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="solid" size="lg" to="/get-started">
                Start Free Trial
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
