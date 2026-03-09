import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Envuelve cada sección para animar su aparición al hacer scroll.
 * Ajusta delay/duration si quieres que el efecto sea más o menos notable.
 */
export function SectionReveal({ children, className = '' }: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
