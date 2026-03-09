/**
 * ============================================
 * DATOS DE LA INVITACIÓN - Cambia aquí todos los datos personales
 * ============================================
 */

export const invitation = {
  /** Nombres de los papás */
  parents: 'Juan y Valeria',

  /** Nombre del bebé */
  babyName: 'Jadiel',

  /** Fecha y hora del evento (formato corto para hero: "9 may 2026") */
  eventDateShort: '9 may 2026',
  eventDate: 'Sábado 9 de Mayo',
  eventTime: '12:00',
  /** Fecha ISO para el countdown (año-mes-día hora:minuto) */
  eventDateISO: '2026-05-09T12:00:00',

  /** Nombre del lugar */
  placeName: 'Jardin Violeta',

  /** Enlace de Google Maps */
  mapsUrl: 'https://maps.app.goo.gl/hJSXzARCFNT3bLMGA',

  /** Mesa de regalos: enlaces (label + href) */
  giftLinks: [
    { label: 'Lista de regalos (ejemplo)', href: 'https://www.amazon.com/baby-reg', icon: '🎁' },
    { label: 'Datos para sobre / transferencia', href: '#datos-bancarios', icon: '💝' },
  ],

  /** Datos bancarios (para sobre / transferencia) */
  bankDetails: {
    titular: 'Juan / Valeria',
    banco: '[Nombre del banco]',
    cuenta: '[Número de cuenta o CLABE]',
  },

  /** Frase emotiva en la sección galería */
  quote: 'Un bebé llena un lugar en tu corazón que nunca supiste que estaba vacío.',

  /** URLs de imágenes de fondo (Hero) - sustituir por tus fotos */
  heroImages: [
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  ],

  /** Galería: fotos (ecografía, padres, etc.) */
  galleryImages: [
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80',
  ],
} as const;
