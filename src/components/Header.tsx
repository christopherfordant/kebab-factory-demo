import React, { useState } from 'react';
import { Menu, X, PhoneCall, Flame } from 'lucide-react';

interface HeaderProps {
  onOpenCallDemo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCallDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Persistent Banner: Site de démonstration — restaurant fictif */}
      <aside
        aria-label="Avertissement de démonstration"
        className="bg-stone-900 border-b border-stone-800 text-stone-300 text-xs px-4 py-1.5 text-center flex items-center justify-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 inline-block shrink-0" aria-hidden="true" />
        <span className="font-semibold text-stone-200">Site de démonstration — restaurant fictif</span>
        <span className="hidden sm:inline text-stone-400" aria-hidden="true">·</span>
        <span className="hidden sm:inline text-stone-300">Aucune commande réelle · Établissement imaginaire</span>
      </aside>

      {/* Main Top Bar strictly respecting the 3-zone contract */}
      <header className="sticky top-0 z-40 bg-[#141414]/95 backdrop-blur-md border-b border-stone-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 text-lg sm:text-2xl font-black tracking-tighter text-white font-display whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-700 flex items-center justify-center text-white shadow-md shadow-orange-950/60 group-hover:bg-orange-600 transition-colors shrink-0">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            </span>
            <span className="text-base sm:text-2xl">
              KEBAB <span className="text-orange-500 font-extrabold">FACTORY</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links (visible at lg >= 1024px) */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-200"
          >
            <a
              href="#carte"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-orange-400"
            >
              La Carte
            </a>
            <a
              href="#specialites"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-orange-400"
            >
              Spécialités
            </a>
            <a
              href="#galerie"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-orange-400"
            >
              L'Atelier
            </a>
            <a
              href="#horaires"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-orange-400"
            >
              Horaires
            </a>
            <a
              href="#contact"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-orange-400"
            >
              Accès & Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenCallDemo}
              className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-bold text-white bg-orange-700 hover:bg-orange-800 rounded-lg transition-colors shadow-sm shadow-orange-950/50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Appel (Démo)</span>
            </button>

            {/* Mobile menu hamburger button (visible below lg < 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-stone-200 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer (active below lg) */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden bg-[#181818] border-b border-stone-800 px-5 pt-3 pb-6 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-3 text-base font-medium text-stone-200">
              <a
                href="#carte"
                onClick={closeMenu}
                className="py-2 hover:text-orange-400 border-b border-stone-800/60"
              >
                La Carte
              </a>
              <a
                href="#specialites"
                onClick={closeMenu}
                className="py-2 hover:text-orange-400 border-b border-stone-800/60"
              >
                Spécialités Signature
              </a>
              <a
                href="#galerie"
                onClick={closeMenu}
                className="py-2 hover:text-orange-400 border-b border-stone-800/60"
              >
                L'Atelier & Galerie
              </a>
              <a
                href="#horaires"
                onClick={closeMenu}
                className="py-2 hover:text-orange-400 border-b border-stone-800/60"
              >
                Horaires d'Ouverture
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="py-2 hover:text-orange-400"
              >
                Accès & Contact
              </a>
            </nav>

            <div className="pt-2">
              <button
                type="button"
                onClick={(e) => {
                  closeMenu();
                  onOpenCallDemo(e);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-orange-700 hover:bg-orange-800 rounded-lg transition-colors shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Bouton d'Appel (Démo)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
