import { motion } from 'framer-motion';
import { SectionReveal } from './SectionReveal';
import { invitation } from '../data/invitation';

const INTRO_TEXT =
  'Si queréis regalar algo más que vuestra presencia, os dejamos estas opciones.';

export function GiftsSection() {
  return (
    <SectionReveal className="py-16 px-4 bg-[#f0f8fb]">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e8f4f8] text-2xl mb-6"
        >
          🎁
        </motion.div>
        <h2 className="font-script text-3xl sm:text-4xl text-[#2c4a5e] mb-4">
          Regalos
        </h2>
        <p className="text-[#5a9fc4] text-sm sm:text-base mb-8 max-w-sm mx-auto">
          {INTRO_TEXT}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {invitation.giftLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#5a9fc4] text-[#2c4a5e] font-medium hover:bg-[#5a9fc4] hover:text-white transition-colors"
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Placeholder: sección de datos bancarios (mostrar aquí o en modal) */}
        <div id="datos-bancarios" className="mt-8 p-4 rounded-xl bg-[#e8f4f8]/80 text-left text-sm text-[#2c4a5e] border border-[#d1e8f0]/80">
          <p className="font-medium text-[#5a9fc4] mb-2">Datos para sobre / transferencia</p>
          <p className="opacity-90">
            Titular: {invitation.bankDetails.titular}<br />
            Banco: {invitation.bankDetails.banco}<br />
            Cuenta: {invitation.bankDetails.cuenta}
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
