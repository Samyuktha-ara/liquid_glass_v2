import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  solid: `
    bg-brand-500 text-charcoal font-semibold
    shadow-lg shadow-brand-500/20
    hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30
  `,
  glass: `
    glass text-charcoal font-medium
    shadow-lg
    hover:bg-white/50 hover:shadow-xl
  `,
  outline: `
    border border-brand-500/40 text-charcoal font-medium
    bg-transparent
    hover:bg-brand-50 hover:border-brand-500/60
  `,
};

const MotionLink = motion.create(Link);

export default function Button({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
  href,
  to,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    rounded-2xl cursor-pointer
    transition-all duration-300 ease-out
    ${sizeClasses[size]}
    ${variants[variant]}
    ${className}
  `;

  let Component;
  if (to) {
    Component = MotionLink;
  } else if (href) {
    Component = motion.a;
  } else {
    Component = motion.button;
  }

  return (
    <Component
      {...(to ? { to } : {})}
      {...(href ? { href } : {})}
      className={baseClasses}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </Component>
  );
}
