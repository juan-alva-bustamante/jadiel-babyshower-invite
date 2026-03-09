import { SectionReveal } from './SectionReveal';

import { invitation } from '../data/invitation';

export function LocationSection() {
  return (
    <SectionReveal className="py-12 px-4 bg-[#e8f4f8]">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-6 text-center border border-[#d1e8f0]/80">
          <p className="text-[#2c4a5e] font-medium mb-4">¿Cómo llegar?</p>
          <a
            href={invitation.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5a9fc4] text-white font-medium hover:bg-[#3d7a9e] transition-colors"
          >
            <MapIcon />
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  );
}
