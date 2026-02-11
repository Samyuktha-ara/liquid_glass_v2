import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white"
    >
      {/* Background Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-400/25 via-brand-500/20 to-brand-300/10 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-bl from-brand-200/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glass Container */}
          <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl shadow-brand-500/[0.08] p-12 md:p-20">
            {/* Glow edge */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/5 via-transparent to-brand-500/5 pointer-events-none" />
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/10 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/15 mb-8"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(255, 193, 7, 0)',
                    '0 0 30px rgba(255, 193, 7, 0.15)',
                    '0 0 0px rgba(255, 193, 7, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span className="text-sm font-semibold text-brand-700">
                  Start Your Journey Today
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal leading-tight">
                Ready to Take Your{' '}
                <span className="text-gradient-brand">Next Step</span>?
              </h2>

              <p className="mt-6 text-lg md:text-xl text-charcoal/50 max-w-2xl mx-auto leading-relaxed">
                Join thousands of learners who have transformed their careers with
                NextStep4U. Your future self will thank you.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button variant="solid" size="lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="lg" to="/courses">
                  View All Courses
                </Button>
              </div>

              <p className="mt-6 text-sm text-charcoal/35">
                No credit card required. Start learning in minutes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
