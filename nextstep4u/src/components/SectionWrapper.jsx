import { motion } from 'framer-motion';

export default function SectionWrapper({
  children,
  id,
  className = '',
  bg = 'white',
}) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-soft-gray',
    gradient: 'bg-gradient-to-b from-white via-brand-50/30 to-white',
  };

  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${bgClasses[bg] || bgClasses.white} ${className}`}
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
