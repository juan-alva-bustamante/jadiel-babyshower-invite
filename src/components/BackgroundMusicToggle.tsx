import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Botón flotante para reproducir/pausar música de fondo.
 *
 * CAMBIAR: ID del video de YouTube si usas otro audio.
 * Solo se reproduce cuando el usuario pulsa el botón (cumple políticas de autoplay).
 */
const YOUTUBE_VIDEO_ID = 'FH2QjX9UqOA';

export function BackgroundMusicToggle() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const playerWindow = iframeRef.current?.contentWindow;
    if (!playerWindow) return;

    const command = isPlaying ? 'pauseVideo' : 'playVideo';

    // Control simple del iframe de YouTube vía postMessage
    playerWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: command,
        args: [],
      }),
      '*',
    );

    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Iframe oculto solo para audio */}
      <iframe
        ref={iframeRef}
        title="Música de fondo"
        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&playsinline=1&controls=0&rel=0`}
        allow="autoplay"
        style={{ display: 'none' }}
      />

      {/* Botón flotante de play/pausa */}
      <motion.button
        type="button"
        onClick={handleToggle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#5a9fc4] px-4 py-2 text-sm sm:text-base font-medium text-white shadow-lg shadow-black/20 hover:bg-[#3d7a9e]"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-base">
          {isPlaying ? '⏸' : '🎵'}
        </span>
        <span>{isPlaying ? 'Pausar música' : 'Reproducir música'}</span>
      </motion.button>
    </>
  );
}

