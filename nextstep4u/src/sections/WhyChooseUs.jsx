import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs({ reasons }) {
  return (
    <SectionWrapper id="why-us" bg="gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side - Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6"
          >
            The Smarter Way to{' '}
            <span className="text-gradient-brand">Learn</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal/50 leading-relaxed"
          >
            We combine cutting-edge technology with proven pedagogical methods
            to create learning experiences that truly transform careers.
          </motion.p>
        </div>

        {/* Right Side - Reasons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-5"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex gap-4 p-5 rounded-2xl hover:bg-white/50 transition-colors duration-300 group"
            >
              <div className="flex-shrink-0 mt-0.5">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <CheckCircle
                    className="w-6 h-6 text-brand-500 group-hover:text-brand-600 transition-colors"
                    strokeWidth={2}
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-charcoal mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorative shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-200/20 to-brand-100/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-brand-300/15 to-transparent blur-3xl pointer-events-none" />
    </SectionWrapper>
  );
}
