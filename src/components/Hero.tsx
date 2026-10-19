import React from 'react';
import { ArrowRight, Sparkles, ChefHat, Flame, Wheat, UtensilsCrossed } from 'lucide-react';
import heroKebabImg from '../assets/images/hero_kebab_gourmet_1792442872661.jpg';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-800/80">
      {/* Background ambient glow (subtle, pure dark theme) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Street food artisanale de caractère</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              La braise, le pain chaud & l'exigence du goût.
            </h1>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Bienvenue chez <strong className="text-white font-semibold">Kebab Factory</strong>.
              Nos viandes sélectionnées marinent 24h avant d'être rôties à la flamme,
              nos pains sont façonnés et enfournés à la commande, et nos sauces signature sont mijotées
              selon des recettes exclusives maison.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#carte"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm rounded-lg transition-all shadow-lg shadow-orange-950/40 hover:shadow-orange-900/50 group cursor-pointer"
              >
                <span>Voir la carte</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#specialites"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-800 font-semibold text-sm rounded-lg transition-colors"
              >
                <span>Nos spécialités</span>
              </a>
            </div>

            {/* Quiet metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-400">
              <span>Pain cuit au four</span>
              <span aria-hidden="true">·</span>
              <span>Viandes françaises marinées</span>
              <span aria-hidden="true">·</span>
              <span>Sauces maison</span>
              <span aria-hidden="true">·</span>
              <span>Frites fraîches</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl group">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden bg-stone-900">
                <img
                  src={heroKebabImg}
                  alt="Kebab gourmet artisanal au pain chaud et légumes grillés garni de viande rôtie et sauce blanche"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold mb-1">
                    Signature de la Maison
                  </div>
                  <div className="text-base sm:text-lg font-bold font-display text-white">
                    Le Kebab Artisanal à la Braise
                  </div>
                  <p className="text-xs text-stone-300 line-clamp-1">
                    Pain pide sésame chaud, veau braisé, féta émiettée, sumac et sauce aux herbes fraîches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quality Pillars Strip */}
        <div className="mt-14 pt-10 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-900/50 border border-stone-850">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white font-display">Broche Rôtie Minute</h2>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Cuisson lente aux braises naturelles pour une viande juteuse et croustillante.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-900/50 border border-stone-850">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
              <Wheat className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white font-display">Pain Fait Maison</h2>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Farine de meule, fermentation longue et cuisson au four pierre sous vos yeux.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-900/50 border border-stone-850">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white font-display">Sauces Secrètes</h2>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Sauce fromagère au Comté AOP, sauce blanche menthe-ail et samouraï fumée.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-900/50 border border-stone-850">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white font-display">Frites au Couteau</h2>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Pommes de terre fraîches coupées chaque matin et frites en deux bains traditionnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
