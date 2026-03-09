import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '../data/invitation';

/**
 * Hero estilo Eventia: Baby shower cursiva, nombre en mayúsculas bold,
 * fecha corta "- 9 may 2026 -", "nos gustaría contar con", padres cursiva.
 * Sin countdown (está debajo de Celebración).
 */
export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % invitation.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fondos con transición */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${invitation.heroImages[currentIndex]})` }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(44,74,94,0.35) 0%, rgba(44,74,94,0.55) 100%)',
          }}
        />
      </div>

      {/* Contenido centrado - estilo Eventia */}
      <div className="relative z-10 px-6 py-24 text-center max-w-xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-script text-5xl sm:text-4xl text-white italic mb-10"
          >
            Baby shower
          </motion.p>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="font-script text-2xl sm:text-3xl text-white italic mt-2"
        >
          {invitation.parents}
        </motion.p> */}

        <div className="h-px w-70 bg-white/100 mx-auto mb-4" />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wide uppercase drop-shadow-lg"
          >
            {invitation.babyName}
          </motion.h1>
        <div className="h-px w-70 bg-white/100 mx-auto mt-3 mb-10" />

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-white/95 mt-8 text-base sm:text-lg mb-7"
          >
            Te invitamos a celebrar con nosotros el nacimiento de nuestro bebé
          </motion.p>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/80"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-8 rounded-full border-2 border-white/60 flex items-start justify-center p-2"
        >
          <div className="w-1 h-1 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
