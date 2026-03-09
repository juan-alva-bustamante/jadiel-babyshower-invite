import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { invitation } from '../data/invitation';

/** Fecha del evento para el countdown (editar en src/data/invitation.ts) */
const TARGET_DATE = new Date(invitation.eventDateISO);

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isPast: false,
  };
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.span
        key={value}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        className="font-display text-3xl sm:text-4xl font-bold text-[#2c4a5e] tabular-nums"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-xs sm:text-sm text-[#5a9fc4] mt-1 font-medium">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TARGET_DATE));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(TARGET_DATE)), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isPast) {
    return (
      <p className="font-script text-2xl text-[#2c4a5e]">
        ¡Gracias por celebrar con nosotros!
      </p>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-6 justify-center items-stretch">
      <CountdownUnit value={timeLeft.days} label="días" />
      <div className="w-px bg-[#b8d4e3]/60" aria-hidden />
      <CountdownUnit value={timeLeft.hours} label="horas" />
      <div className="w-px bg-[#b8d4e3]/60" aria-hidden />
      <CountdownUnit value={timeLeft.minutes} label="min" />
      <div className="w-px bg-[#b8d4e3]/60" aria-hidden />
      <CountdownUnit value={timeLeft.seconds} label="seg" />
    </div>
  );
}
