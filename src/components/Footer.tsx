import React from 'react';
import { Flame, ArrowUp, Scale, ShieldCheck, FileCode } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'mentions' | 'privacy', e: React.MouseEvent<HTMLButtonElement>) => void;
  onOpenCallDemo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenCallDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f0f0f] border-t border-stone-800 text-stone-300 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800/80">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="w-6 h-6 rounded bg-orange-700 flex items-center justify-center text-white">
                <Flame className="w-4 h-4 fill-white" />
              </span>
              <span>KEBAB <span className="text-orange-500">FACTORY</span></span>
            </div>
            <p className="text-stone-300 text-xs max-w-md leading-relaxed">
              Projet vitrine de restaurant artisanal de kebabs, tacos et smash burgers cuits à la flamme.
              Ce site web est un démonstrateur d'architecture front-end moderne.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-xs text-orange-400 font-semibold">
              <span>Site de démonstration — restaurant fictif</span>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a href="#carte" className="hover:text-orange-400 transition-colors">La Carte & Menus</a>
              </li>
              <li>
                <a href="#specialites" className="hover:text-orange-400 transition-colors">Nos Spécialités</a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-orange-400 transition-colors">L'Atelier de Cuisson</a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-orange-400 transition-colors">Horaires d'Ouverture</a>
              </li>
              <li>
                <a href="#acces" className="hover:text-orange-400 transition-colors">Plan d'Accès Décoratif</a>
              </li>
            </ul>
          </div>

          {/* Legal and compliance */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Cadre Légal & Éthique
            </div>
            <ul className="space-y-2 text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={(e) => onOpenLegal('mentions', e)}
                  className="hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 text-left text-stone-300"
                >
                  <Scale className="w-3.5 h-3.5 text-stone-400" />
                  <span>Mentions Légales</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => onOpenLegal('privacy', e)}
                  className="hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 text-left text-stone-300"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                  <span>Confidentialité & Données</span>
                </button>
              </li>
              <li>
                <a
                  href="/ASSETS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 text-left text-stone-300"
                >
                  <FileCode className="w-3.5 h-3.5 text-stone-400" />
                  <span>Documentation Visuels (ASSETS.md)</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCallDemo}
                  className="hover:text-orange-400 transition-colors text-left text-stone-300"
                >
                  Avertissement Téléphonique (Démo)
                </button>
              </li>
              <li className="text-xs text-stone-400 pt-1">
                Adresse fictive : 12 rue de la Braise, Ville Démo
              </li>
              <li className="text-xs text-stone-400">
                Contact : bonjour@kebab-factory.example
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Kebab Factory. Tous droits réservés — Concept & maquette de démonstration.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors group"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
