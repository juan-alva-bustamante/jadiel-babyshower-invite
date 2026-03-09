import { SectionReveal } from './SectionReveal';
import { invitation } from '../data/invitation';

/**
 * Celebración estilo Eventia: título "Celebración", Día y Lugar con iconos.
 * Layout como ejemplo: bloques con etiqueta + valor. Iconos estáticos (listos para animar después).
 */
export function DetailsSection() {
  return (
    <SectionReveal className="py-16 px-4 bg-[#f0f8fb]">
      <div className="max-w-md mx-auto">
        <h2 className="font-script text-3xl sm:text-4xl text-[#2c4a5e] text-center mb-10">
          Celebración
        </h2>

        <div className="space-y-6">
          {/* Día - bloque con icono */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#d1e8f0]/80">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f4f8] flex items-center justify-center text-[#5a9fc4]">
                <CalendarIcon />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5a9fc4] font-semibold mb-1">
                  Día
                </p>
                <p className="text-[#2c4a5e] font-medium">
                  {invitation.eventDate} - {invitation.eventTime}
                </p>
              </div>
            </div>
          </div>

          {/* Lugar - bloque con icono */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#d1e8f0]/80">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f4f8] flex items-center justify-center text-[#5a9fc4]">
                <LocationIcon />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5a9fc4] font-semibold mb-1">
                  Lugar
                </p>
                <p className="text-[#2c4a5e] font-medium">
                  {invitation.placeName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

/** Icono calendario - estático (cambiar por versión animada después) */
function CalendarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

/** Icono ubicación - estático (cambiar por versión animada después) */
function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
