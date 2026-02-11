import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../components/Button';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 bg-grid"
        style={{ y: gridY }}
      />

      {/* Floating Gradient Orb - Primary */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none"
        style={{ y: orbY, scale: orbScale }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-300/40 via-brand-500/25 to-brand-100/20 blur-3xl" />
      </motion.div>

      {/* Secondary Orb */}
      <motion.div
        className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-200/30 via-brand-400/15 to-transparent blur-3xl" />
      </motion.div>

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-20 h-20 rounded-2xl bg-brand-500/10 border border-brand-500/10 backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[8%] w-14 h-14 rounded-full bg-brand-400/10 border border-brand-400/10 backdrop-blur-sm"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-[40%] right-[12%] w-8 h-8 rounded-lg bg-brand-300/15 border border-brand-300/10 backdrop-blur-sm"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-500/15 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-sm font-medium text-charcoal/70">
                {data.badge}
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-charcoal"
          >
            {data.heading.line1}{' '}
            <br className="hidden md:block" />
            {data.heading.line2}{' '}
            <span className="text-gradient-brand">{data.heading.highlight}</span>{' '}
            <br className="hidden md:block" />
            {data.heading.line3}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg md:text-xl text-charcoal/60 max-w-2xl leading-relaxed font-light"
          >
            {data.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button variant="solid" size="lg" to="/get-started">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" to="/courses">
              <Play className="w-5 h-5" />
              Explore Courses
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-12"
          >
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-brand">
                  {stat.value}
                </div>
                <div className="text-sm text-charcoal/50 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
