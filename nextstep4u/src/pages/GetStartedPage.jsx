import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import mockData from '../data/mockData.json';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import CTA from '../sections/CTA';

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

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-charcoal/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer group"
      >
        <span className="text-base md:text-lg font-semibold text-charcoal group-hover:text-brand-700 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-charcoal/30" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal/50 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <>
      {/* CTA Hero */}
      <CTA />

      {/* Pricing Section */}
      <SectionWrapper bg="white">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal"
          >
            Simple,{' '}
            <span className="text-gradient-brand">Transparent</span>{' '}
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-charcoal/50 max-w-2xl mx-auto"
          >
            Choose the plan that fits your goals. Upgrade or cancel
            anytime.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {mockData.pricing.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <GlassCard
                className={`p-8 h-full relative ${
                  plan.highlighted
                    ? 'ring-2 ring-brand-500/30 shadow-xl shadow-brand-500/10'
                    : ''
                }`}
                hover={false}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-500 text-white text-xs font-semibold shadow-lg shadow-brand-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-display font-semibold text-charcoal mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-charcoal/45">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-display font-bold text-charcoal">
                    {plan.price}
                  </span>
                  <span className="text-charcoal/40 ml-1 text-sm">
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-charcoal/60"
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? 'text-brand-500'
                            : 'text-brand-400'
                        }`}
                        strokeWidth={2.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'solid' : 'outline'}
                  size="md"
                  className="w-full justify-center"
                >
                  {plan.cta}
                  {plan.highlighted && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper bg="gradient">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-charcoal"
            >
              Frequently{' '}
              <span className="text-gradient-brand">Asked</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-10" hover={false}>
              {mockData.faq.map((item) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper bg="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl shadow-brand-500/[0.08] p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Still Have{' '}
              <span className="text-gradient-brand">Questions</span>?
            </h2>
            <p className="text-charcoal/50 mb-8 max-w-lg mx-auto">
              Our team is here to help. Reach out anytime and we will get
              back to you within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="solid" size="lg">
                Contact Support
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
