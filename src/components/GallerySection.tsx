import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from './SectionReveal';
import { invitation } from '../data/invitation';

const AUTO_INTERVAL_MS = 5000;

export function GallerySection() {
  const images = [...invitation.galleryImages];
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;

    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL_MS);

    return () => clearInterval(id);
  }, [total]);

  const goTo = (index: number) => {
    if (total === 0) return;
    const next = ((index % total) + total) % total;
    setCurrentIndex(next);
  };

  if (total === 0) return null;

  return (
    <SectionReveal className="py-16 px-4 bg-[#e8f4f8]">
      <div className="max-w-lg mx-auto">
        <h2 className="font-script text-3xl sm:text-4xl text-[#2c4a5e] text-center mb-8">
          Con amor
        </h2>
        <blockquote className="font-script text-xl sm:text-2xl text-[#2c4a5e] italic text-center mb-8 text-balance">
          "{invitation.quote}"
        </blockquote>

        {/* Carrusel de galería */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#d1e8f0]">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Galería ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Controles prev/next */}
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(currentIndex - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goTo(currentIndex + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Dots de navegación */}
          {total > 1 && (
            <div className="flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === i ? 'w-5 bg-[#5a9fc4]' : 'w-2 bg-[#b8d4e3]'
                  }`}
                  aria-label={`Ir a la foto ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-[#5a9fc4] text-sm mt-8 font-medium">
          {invitation.parents}
        </p>
      </div>
    </SectionReveal>
  );
}
