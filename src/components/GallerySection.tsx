import React, { useState } from 'react';
import { Camera, Eye, X, Flame } from 'lucide-react';
import braiseImg from '../assets/images/galerie_braise_rotisserie_1792442875861.jpg';
import breadImg from '../assets/images/galerie_fresh_flatbread_1792442875584.jpg';
import { useModalTrap } from '../hooks/useModalTrap';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const photos: GalleryItem[] = [
    {
      id: 'braise',
      title: 'La Cuisson aux Braises de Bois Naturel',
      subtitle: 'La flamme & la patience',
      description: 'Chaque matin, nos maîtres rôtisseurs allument les braises incandescentes. La viande y est saisie en surface tout en conservant une tendreté et un moelleux incomparables à cœur.',
      image: braiseImg,
      alt: 'Broche de viande artisanale rôtissant au-dessus des braises ardentes avec étincelles dorées',
    },
    {
      id: 'four',
      title: 'L\'Atelier de Panification & Cuisson au Four',
      subtitle: 'Farines brutes & fermentation longue',
      description: 'Pas de pain industriel prédécoupé chez Kebab Factory : notre pâte lève 24 heures avant d\'être étirée à la main puis saisie sur sole de pierre réfractaire.',
      image: breadImg,
      alt: 'Artisan sortant un pain plat chaud et alvéolé du four à bois traditionnel avec une pelle en bois',
    },
  ];

  const handleOpenPhoto = (photo: GalleryItem, e: React.MouseEvent<HTMLDivElement>) => {
    setTriggerEl(e.currentTarget);
    setActivePhoto(photo);
  };

  const handleClosePhoto = () => {
    setActivePhoto(null);
  };

  const lightboxRef = useModalTrap({
    isOpen: activePhoto !== null,
    onClose: handleClosePhoto,
    triggerElement: triggerEl,
  });

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-[#141414] border-b border-stone-800/80 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400 mb-2">
            <Camera className="w-4 h-4" />
            <span>Immersion Visuelle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            L'Atelier & La Flamme
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Plongez dans les coulisses de notre atelier. Du crépitement du charbon au parfum du pain tout juste doré.
          </p>
        </div>

        {/* 2-Card Large Editorial Photography Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              tabIndex={0}
              role="button"
              aria-label={`Agrandir la photo : ${photo.title}`}
              onClick={(e) => handleOpenPhoto(photo, e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setTriggerEl(e.currentTarget);
                  setActivePhoto(photo);
                }
              }}
              className="group relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-900 relative">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
                />

                {/* Hover overlay hint */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-stone-950/80 border border-stone-800 text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-orange-400" />
                </div>

                {/* Bottom text banner */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-orange-400 font-semibold mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{photo.subtitle}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {photo.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md"
          onClick={handleClosePhoto}
        >
          <div
            ref={lightboxRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[85vh] bg-[#1a1a1a] border border-stone-800 rounded-2xl overflow-y-auto shadow-2xl relative"
          >
            <button
              type="button"
              onClick={handleClosePhoto}
              aria-label="Fermer la vue agrandie"
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors border border-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-8 bg-[#181818] border-t border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                {activePhoto.subtitle}
              </span>
              <h3 id="lightbox-title" className="text-lg sm:text-2xl font-bold font-display text-white mt-1">
                {activePhoto.title}
              </h3>
              <p className="mt-3 text-stone-300 text-xs sm:text-base leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
