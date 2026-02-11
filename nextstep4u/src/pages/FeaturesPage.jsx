import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import mockData from '../data/mockData.json';
import iconMap from '../data/iconMap';
import Features from '../sections/Features';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const features = mockData.features.map((f) => ({
  ...f,
  icon: iconMap[f.icon],
}));

const detailed = mockData.featuresDetailed.map((f) => ({
  ...f,
  icon: iconMap[f.icon],
}));

const benefits = mockData.featuresBenefits.map((b) => ({
  ...b,
  icon: iconMap[b.icon],
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

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-brand-50/40 via-white to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-300/20 to-transparent blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Features
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6"
          >
            Built for{' '}
            <span className="text-gradient-brand">Serious</span> Learners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/50 max-w-2xl mx-auto"
          >
            Every feature is designed to accelerate your learning, track your
            progress, and connect you with the skills that matter.
          </motion.p>
        </div>
      </section>

      {/* Core Features Grid */}
      <Features features={features} />

      {/* Detailed Feature Breakdown */}
      <SectionWrapper bg="white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            Under the{' '}
            <span className="text-gradient-brand">Hood</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-charcoal/50 max-w-2xl mx-auto"
          >
            Deep dives into the technology that powers your learning experience.
          </motion.p>
        </div>

        <div className="space-y-8">
          {detailed.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="p-8 md:p-10" hover={false}>
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                    <div className="flex-1">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400/20 to-brand-200/10 flex items-center justify-center mb-5 border border-brand-500/10">
                        <Icon className="w-7 h-7 text-brand-700" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-charcoal mb-3">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/50 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <ul className="space-y-2.5">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3 text-sm text-charcoal/60">
                            <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" strokeWidth={2} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-brand-200/20">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Benefits Grid */}
      <SectionWrapper bg="gradient">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            Why It{' '}
            <span className="text-gradient-brand">Works</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={benefit.title} variants={fadeUp}>
                <div className="flex gap-4 p-6 rounded-2xl hover:bg-white/40 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-charcoal/50 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
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
              See It in{' '}
              <span className="text-gradient-brand">Action</span>
            </h2>
            <p className="text-charcoal/50 mb-8 max-w-lg mx-auto">
              Experience every feature with a free 14-day Pro trial.
              No credit card required.
            </p>
            <Button variant="solid" size="lg" to="/get-started">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
