import React from 'react';
import { PhoneCall, Mail, MapPin, ShieldAlert } from 'lucide-react';

interface ContactSectionProps {
  onOpenCallDemo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCallDemo }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#181818] border-b border-stone-800/80 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-orange-400 mb-2">
            <Mail className="w-4 h-4" />
            <span>Contact & Démonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Nous Contacter
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Kebab Factory est une vitrine de démonstration technique. Retrouvez ici les coordonnées fictives et testez le comportement sécurisé du bouton d'appel.
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Démo Bouton d'Appel */}
          <div className="bg-[#1e1e1e] border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-950/60 border border-orange-700/50 flex items-center justify-center text-orange-400">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Bouton d'Appel (Démo)
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Ce bouton est un composant de démonstration interactif. Conformément à notre charte éthique, aucun numéro réel n'est composé et une modale explicative détaillée s'ouvre à chaque clic.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800">
              <button
                type="button"
                onClick={onOpenCallDemo}
                className="w-full py-3.5 px-5 bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-950/40"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Tester le Bouton d'Appel (Démo)</span>
              </button>
              <div className="mt-2.5 text-center text-xs text-stone-400">
                Action sécurisée · Aucun appel téléphonique émis
              </div>
            </div>
          </div>

          {/* Card 2: Coordonnées Fictives & Email */}
          <div className="bg-[#1e1e1e] border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Adresse Postale (Fictive)</span>
                </div>
                <div className="text-white font-display text-lg font-bold">
                  12 rue de la Braise, Ville Démo
                </div>
                <p className="text-xs text-stone-400">
                  Adresse imaginaire conçue pour la présentation du site. Ne correspond à aucun local réel.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wide">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>Courriel de Démonstration</span>
                </div>
                <div>
                  <a
                    href="mailto:bonjour@kebab-factory.example"
                    className="text-white hover:text-orange-400 font-mono text-sm sm:text-base font-semibold underline underline-offset-4 decoration-orange-600/60 hover:decoration-orange-400 transition-colors"
                  >
                    bonjour@kebab-factory.example
                  </a>
                </div>
                <p className="text-xs text-stone-400">
                  Courriel réservé aux échanges relatifs à cette maquette web.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-800 flex items-start gap-2.5 text-xs text-stone-300">
              <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                Aucune collecte de données, inscription ou téléprospection commerciale.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
