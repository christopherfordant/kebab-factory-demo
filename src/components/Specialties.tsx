import React from 'react';
import { ArrowUpRight, Flame, Award } from 'lucide-react';
import berlinerImg from '../assets/images/specialite_berliner_kebab_1792442873014.jpg';
import tacosImg from '../assets/images/specialite_french_tacos_1792442873227.jpg';
import burgerImg from '../assets/images/specialite_smash_burger_1792442874307.jpg';

interface SpecialtiesProps {
  onSelectCategory: (category: 'kebabs' | 'tacos' | 'burgers') => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectCategory }) => {
  const specialties = [
    {
      id: 'berliner',
      title: 'Le Berliner Authentique',
      category: 'kebabs' as const,
      categoryLabel: 'Kebab Signature',
      price: '9,50 €',
      tagline: 'L\'esprit des maîtres brocheurs berlinois, sublimé par des ingrédients nobles.',
      image: berlinerImg,
      alt: 'Kebab style berlinois garni de féta émiettée, légumes frais et sauce aux herbes',
      highlights: ['Veau mariné 24h', 'Féta de brebis AOP', 'Pain sésame chaud', 'Sauce ail doux & menthe'],
      badge: 'Recette signature',
    },
    {
      id: 'tacos',
      title: 'French Tacos Gratiné Comté',
      category: 'tacos' as const,
      categoryLabel: 'Tacos d\'Exception',
      price: '10,90 €',
      tagline: 'L\'iconique recette street-food réinventée avec un Comté fermier 18 mois d\'affinage.',
      image: tacosImg,
      alt: 'French tacos artisanal croustillant gratiné au Comté fondant',
      highlights: ['Sauce fromagère Comté AOP', 'Tenders croustillants', 'Frites fraîches', 'Gratiné au four'],
      badge: 'Four à pierre',
    },
    {
      id: 'burger',
      title: 'Double Smash Cheddar Affiné',
      category: 'burgers' as const,
      categoryLabel: 'Smash Burger',
      price: '11,50 €',
      tagline: 'Croûte ultra-caramélisée, viande limousin juteuse et véritable cheddar anglais mature.',
      image: burgerImg,
      alt: 'Double smash burger brioché avec cheddar coulant et oignons caramélisés',
      highlights: ['Bœuf français limousin', 'Bun brioché artisanal', 'Double cheddar affiné', 'Sauce Factory'],
      badge: 'Saisie plancha minute',
    },
  ];

  return (
    <section id="specialites" className="py-20 lg:py-28 bg-[#141414] border-b border-stone-800/80 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400 mb-2">
            <Flame className="w-4 h-4" />
            <span>Recettes Phares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white [text-wrap:balance]">
            Nos 3 Créations Signature
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Chaque recette a été patiemment élaborée dans notre atelier pour magnifier le mariage
            entre le croustillant de la braise, la fraîcheur des herbes aromatiques et l'onctuosité de nos sauces maison.
          </p>
        </div>

        {/* 3 Signature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-[#1c1c1c] rounded-2xl border border-stone-800/90 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Image Frame (4:3 ratio) */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
                />
                
                {/* Clean unboxed price tag */}
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-stone-950/90 backdrop-blur-md rounded-md border border-stone-800 text-sm font-bold text-orange-400 tabular-nums">
                  {item.price}
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-stone-950/80 backdrop-blur-sm rounded border border-stone-800/80 text-[11px] font-semibold text-stone-300">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-semibold tracking-wider text-orange-400 mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Highlights list with clean dot separators */}
                  <div className="mt-4 pt-4 border-t border-stone-800/80">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                      Points Clés
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1.5">
                      {item.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" aria-hidden="true" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-stone-800/80">
                  <a
                    href="#carte"
                    onClick={() => onSelectCategory(item.category)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 group/link"
                  >
                    <span>Voir dans la carte</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
