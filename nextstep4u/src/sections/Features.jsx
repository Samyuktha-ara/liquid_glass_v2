import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features({ features }) {
  return (
    <SectionWrapper id="features" bg="gradient">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
        >
          Features
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal"
        >
          Everything You Need to{' '}
          <span className="text-gradient-brand">Excel</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-charcoal/50 max-w-2xl mx-auto"
        >
          A complete ecosystem designed to accelerate your learning journey from
          start to mastery.
        </motion.p>
      </div>

      {/* Feature Cards */}
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
            <motion.div key={feature.title} variants={cardVariants}>
              <GlassCard className="p-8 h-full" glow>
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 border border-brand-500/10`}
                >
                  <Icon
                    className="w-7 h-7 text-brand-700"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
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
    </SectionWrapper>
  );
}
