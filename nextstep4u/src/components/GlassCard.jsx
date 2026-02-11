import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-3xl
        bg-white/30 backdrop-blur-lg
        border border-white/20
        shadow-lg shadow-black/[0.04]
        ${glow ? 'glow-yellow' : ''}
        ${className}
      `}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              boxShadow: '0 25px 60px rgba(255, 193, 7, 0.12), 0 10px 30px rgba(0,0,0,0.06)',
            }
          : {}
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      {...props}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
