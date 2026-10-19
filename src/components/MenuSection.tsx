import React, { useState, useRef } from 'react';
import { CategoryId, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menu';
import { Utensils, Info, Check, Sparkles, X } from 'lucide-react';
import { useModalTrap } from '../hooks/useModalTrap';

interface MenuSectionProps {
  selectedCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [selectedItemForDetails, setSelectedItemForDetails] = useState<MenuItem | null>(null);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const categories: { id: CategoryId; label: string; count: number }[] = [
    { id: 'all', label: 'Toute la carte', count: MENU_ITEMS.length },
    { id: 'kebabs', label: 'Kebabs & Rolls', count: MENU_ITEMS.filter((i) => i.category === 'kebabs').length },
    { id: 'tacos', label: 'French Tacos', count: MENU_ITEMS.filter((i) => i.category === 'tacos').length },
    { id: 'burgers', label: 'Smash Burgers', count: MENU_ITEMS.filter((i) => i.category === 'burgers').length },
    { id: 'menus', label: 'Menus Complets', count: MENU_ITEMS.filter((i) => i.category === 'menus').length },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenDetails = (item: MenuItem, e: React.MouseEvent<HTMLButtonElement>) => {
    setTriggerEl(e.currentTarget);
    setSelectedItemForDetails(item);
  };

  const handleCloseDetails = () => {
    setSelectedItemForDetails(null);
  };

  const detailModalRef = useModalTrap({
    isOpen: selectedItemForDetails !== null,
    onClose: handleCloseDetails,
    triggerElement: triggerEl,
  });

  return (
    <section id="carte" className="py-20 lg:py-28 bg-[#181818] border-b border-stone-800/80 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400 mb-2">
              <Utensils className="w-4 h-4" />
              <span>Carte Artisanale</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              Nos Recettes & Menus
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Découvrez nos recettes faites maison à base de produits frais, préparées chaque jour à l'atelier.
            </p>
          </div>

          {/* Clean disclaimer note */}
          <div className="p-3 bg-stone-900 border border-stone-800 rounded-lg text-xs text-stone-300 flex items-center gap-2 shrink-0">
            <Info className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Prix indicatifs de démonstration · Aucun paiement en ligne</span>
          </div>
        </div>

        {/* Functional Segmented Filter Controls with accessible contrast */}
        <div className="mb-10 p-1.5 bg-stone-900 border border-stone-800 rounded-xl flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(cat.id)}
                aria-pressed={isActive}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-orange-700 hover:bg-orange-800 text-white shadow-md shadow-orange-950/40'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 text-xs tabular-nums ${isActive ? 'text-white font-bold' : 'text-stone-400'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-[#1e1e1e] border border-stone-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-stone-700 transition-colors group"
            >
              <div>
                {/* Header row: Title & Price */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-base font-bold text-orange-400 font-display tabular-nums whitespace-nowrap shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Quiet unboxed text metadata */}
                <div className="flex items-center gap-2 text-xs text-stone-300 mb-3">
                  <span className="capitalize">{item.category}</span>
                  {item.badge && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-orange-300 font-medium">{item.badge}</span>
                    </>
                  )}
                  {item.isVegetarian && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-medium">Végétarien</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Ingredients preview */}
                <div className="pt-3 border-t border-stone-800/80">
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2">
                    Composition
                  </div>
                  <ul className="text-xs text-stone-300 space-y-1">
                    {item.ingredients.slice(0, 3).map((ing, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span className="truncate">{ing}</span>
                      </li>
                    ))}
                    {item.ingredients.length > 3 && (
                      <li className="text-[11px] text-stone-400 italic">
                        + {item.ingredients.length - 3} autres ingrédients
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => handleOpenDetails(item, e)}
                  className="text-xs font-semibold text-stone-300 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <Info className="w-3.5 h-3.5 text-orange-400" />
                  <span>Détails & Ingrédients</span>
                </button>

                <span className="text-[11px] text-stone-400">Service en salle & à emporter</span>
              </div>
            </article>
          ))}
        </div>

        {/* Allergen & Origin notice */}
        <div className="mt-12 p-6 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-300">
          <div>
            <strong className="text-white">Informations & Origines des viandes :</strong>{' '}
            Bœuf d'origine France (race Limousine), veau né et élevé en France, volaille fermière française.
            Cheddar maturé du Somerset, Comté AOP du Jura.
          </div>
          <div className="text-stone-400 shrink-0">
            Carte fictive sous réserve de disponibilité des produits de saison.
          </div>
        </div>
      </div>

      {/* Accessible Item Detail Modal with Focus Trap & Screen bounds */}
      {selectedItemForDetails && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleCloseDetails}
        >
          <div
            ref={detailModalRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg max-h-[85vh] bg-[#1c1c1c] border border-stone-800 rounded-xl p-5 sm:p-6 text-[#fcfbf9] shadow-2xl relative overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-4 pr-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  {selectedItemForDetails.category}
                </span>
                <h4 id="dish-modal-title" className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">
                  {selectedItemForDetails.name}
                </h4>
              </div>
              <span className="text-base sm:text-lg font-bold text-orange-400 tabular-nums">
                {selectedItemForDetails.price}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCloseDetails}
              aria-label="Fermer les détails du plat"
              className="absolute top-4 right-4 p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
              {selectedItemForDetails.description}
            </p>

            <div className="space-y-4">
              <div>
                <h5 className="text-xs uppercase font-semibold text-stone-300 tracking-wider mb-2">
                  Tous les ingrédients & préparations
                </h5>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300 bg-stone-900 p-3.5 rounded-lg border border-stone-800">
                  {selectedItemForDetails.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedItemForDetails.meatOptions && (
                <div>
                  <h5 className="text-xs uppercase font-semibold text-stone-300 tracking-wider mb-2">
                    Variations possibles
                  </h5>
                  <div className="flex flex-wrap gap-2 text-xs text-stone-300">
                    {selectedItemForDetails.meatOptions.map((opt, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700/60">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex justify-end">
              <button
                type="button"
                onClick={handleCloseDetails}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
