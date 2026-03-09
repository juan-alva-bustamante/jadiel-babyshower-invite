# Invitación Digital Baby Shower

Invitación digital elegante y responsiva para Baby Shower, inspirada en el estilo Eventia. **Mobile First**, una sola página (SPA) con secciones que se revelan al hacer scroll.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** (build y dev)
- **Tailwind CSS 4** (estilos)
- **Framer Motion** (animaciones y revelado al scroll)

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173). Para producción:

```bash
npm run build
npm run preview
```

## Dónde cambiar los datos personales

**Todo se edita en un solo archivo:** `src/data/invitation.ts`

Ahí puedes cambiar:

- Nombres de los papás y del bebé
- Fecha, hora y lugar del evento
- Enlace de Google Maps
- Enlaces de mesa de regalos
- Datos bancarios (sobre / transferencia)
- Frase emotiva
- URLs de las imágenes (Hero y galería)

Las imágenes actuales son placeholders de Unsplash. Sustituye las URLs por tus propias fotos (ecografía, padres, fondos pasteles).

## Estructura de la invitación (scroll)

1. **Hero**: fondo con transición de imágenes, nombre del bebé (Jadiel), Juan y Valeria, y cuenta regresiva.
2. **Detalles**: fecha (Sábado 9 de Mayo), hora y lugar (Jardin Violeta) con iconos.
3. **Ubicación**: botón “Abrir en Google Maps”.
4. **Mesa de regalos**: botones a lista de regalos y datos bancarios.
5. **Galería / Frase**: frase emotiva y fotos (placeholders).

## Paleta y tipografía

- **Paleta**: Verde salvia y crema (variables en `src/index.css`, bloque `@theme`).
- **Títulos**: Cormorant Garamond (serif).
- **Cuerpo**: DM Sans (sans-serif).

Si quieres otra paleta (rosa y dorado, azul pastel, etc.), cambia los colores en `src/index.css` y en las clases de los componentes.

## Licencia

Uso personal / privado. Librerías según sus propias licencias (MIT, etc.).
