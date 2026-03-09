import { SectionReveal } from './SectionReveal';
import { Countdown } from './Countdown';

/**
 * Sección de cuenta regresiva, ubicada debajo de Celebración.
 * Estilo similar al ejemplo: "Faltan" + números en columnas con divisores.
 */
export function CountdownSection() {
  return (
    <SectionReveal className="py-16 px-4 bg-[#e8f4f8]">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-script text-3xl sm:text-4xl text-[#2c4a5e] mb-8">
          Faltan
        </h2>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <Countdown />
        </div>
      </div>
    </SectionReveal>
  );
}
