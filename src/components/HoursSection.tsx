import React from 'react';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { SCHEDULE } from '../data/menu';

export const HoursSection: React.FC = () => {
  return (
    <section id="horaires" className="py-20 lg:py-28 bg-[#181818] border-b border-stone-800/80 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400">
              <Clock className="w-4 h-4" />
              <span>Service & Disponibilités</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white [text-wrap:balance]">
              Horaires d'Ouverture de l'Atelier
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Nous vous accueillons 7 jours sur 7 dans un cadre chaleureux et convivial.
              Les cuissons de pain frais et de viande rôtie se déroulent en continu sur les plages de service.
            </p>

            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" />
                <span>Modalités de Service</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Repas sur place dans notre salle climatisée ou vente à emporter soignée dans des emballages kraft recyclables et thermoscellés.
              </p>
            </div>

            <div className="text-xs text-stone-400 italic">
              * Horaires de démonstration simulés pour la présentation de ce concept vitrine.
            </div>
          </div>

          {/* Right Tabular Schedule */}
          <div className="lg:col-span-7">
            <div className="bg-[#1e1e1e] border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>Planning Hebdomadaire Fictif</span>
                </div>
                <span className="text-xs font-medium text-stone-400">Ville Démo</span>
              </div>

              <div className="divide-y divide-stone-800/80">
                {SCHEDULE.map((item, index) => (
                  <div
                    key={index}
                    className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm hover:bg-stone-900/40 px-2 rounded-lg transition-colors"
                  >
                    <span className="font-semibold text-white w-28 shrink-0">
                      {item.day}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-stone-300 tabular-nums">
                      <span className="text-stone-400 text-xs">Midi : <strong className="text-stone-200 font-medium">{item.lunch}</strong></span>
                      <span className="text-stone-400 text-xs">Soir : <strong className="text-stone-200 font-medium">{item.dinner}</strong></span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <span>Dernière commande : 15 min avant la fermeture</span>
                <span className="text-orange-400 font-medium">Service continu le samedi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
