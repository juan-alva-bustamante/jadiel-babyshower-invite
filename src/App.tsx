/**
 * Invitación digital Baby Shower - SPA de una sola página.
 * Todas las secciones se muestran al hacer scroll (sin rutas ni navegación).
 *
 * Para cambiar datos personales (nombre, fecha, links), busca en cada componente
 * los comentarios "CAMBIAR:" o el archivo src/data/invitation.ts
 */
import { HeroSection } from './components/HeroSection';
import { DetailsSection } from './components/DetailsSection';
import { CountdownSection } from './components/CountdownSection';
import { LocationSection } from './components/LocationSection';
import { GiftsSection } from './components/GiftsSection';
import { GallerySection } from './components/GallerySection';
import { BackgroundMusicToggle } from './components/BackgroundMusicToggle';

function App() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <DetailsSection />
        <LocationSection />
        <CountdownSection />
        <GiftsSection />
        <GallerySection />
      </main>
      <BackgroundMusicToggle />
    </>
  );
}

export default App;
