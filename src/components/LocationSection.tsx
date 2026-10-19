import React from 'react';
import { MapPin, Navigation, Bus, Bike, Car, ShieldAlert } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="acces" className="py-20 lg:py-28 bg-[#141414] border-b border-stone-800/80 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Adresse & Itinéraire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Où Nous Trouver
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Situé au cœur du quartier gourmand de notre ville imaginaire, dans un espace moderne et chaleureux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Stylized Architectural Vector Map (Zero External Maps API, 100% Fictional) */}
          <div className="lg:col-span-7 bg-[#1b1b1b] border border-stone-800 rounded-2xl overflow-hidden shadow-xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-white font-display">
                <Navigation className="w-4 h-4 text-orange-500" />
                <span>Plan de Quartier Décoratif Fictif</span>
              </div>
              <span className="text-[11px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                Sans API Maps externe
              </span>
            </div>

            {/* Custom SVG Stylized Map */}
            <div className="relative w-full aspect-[16/10] bg-stone-900/90 rounded-xl border border-stone-800/80 overflow-hidden flex items-center justify-center">
              <svg
                viewBox="0 0 600 380"
                className="w-full h-full"
                aria-label="Schéma décoratif du plan de quartier imaginaire"
              >
                {/* Background grid representing blocks */}
                <rect width="600" height="380" fill="#171717" />
                <rect x="30" y="30" width="160" height="100" rx="8" fill="#202020" stroke="#2c2c2c" strokeWidth="1.5" />
                <rect x="230" y="30" width="340" height="100" rx="8" fill="#202020" stroke="#2c2c2c" strokeWidth="1.5" />
                <rect x="30" y="170" width="160" height="170" rx="8" fill="#202020" stroke="#2c2c2c" strokeWidth="1.5" />
                <rect x="230" y="240" width="340" height="100" rx="8" fill="#202020" stroke="#2c2c2c" strokeWidth="1.5" />

                {/* Park / Place space */}
                <rect x="40" y="180" width="140" height="70" rx="6" fill="#1b241e" stroke="#283a2d" strokeWidth="1" />
                <text x="110" y="220" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontFamily="sans-serif">
                  Square Fictif des Saveurs
                </text>

                {/* Main Avenues (Roads) */}
                {/* Horizontal Avenue */}
                <path d="M 0 145 L 600 145" stroke="#2e2e2e" strokeWidth="24" />
                <path d="M 0 145 L 600 145" stroke="#ff5400" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.4" />
                <text x="310" y="149" textAnchor="middle" fill="#888888" fontSize="11" fontWeight="600" fontFamily="sans-serif" letterSpacing="2">
                  BOULEVARD DES GOURMETS
                </text>

                {/* Vertical Street (Rue de la Braise) */}
                <path d="M 210 0 L 210 380" stroke="#383838" strokeWidth="26" />
                <path d="M 210 0 L 210 380" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="6 6" opacity="0.2" />
                <text
                  x="-180"
                  y="214"
                  transform="rotate(-90)"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  letterSpacing="1.5"
                >
                  RUE DE LA BRAISE
                </text>

                {/* Secondary Horizontal Street */}
                <path d="M 220 205 L 600 205" stroke="#282828" strokeWidth="16" />
                <text x="390" y="209" textAnchor="middle" fill="#777777" fontSize="9" fontFamily="sans-serif">
                  Allée du Pain Chaud
                </text>

                {/* The Restaurant Pin Landmark */}
                <g transform="translate(260, 160)">
                  {/* Subtle pulsing radar ring */}
                  <circle cx="0" cy="0" r="28" fill="#ff5400" fillOpacity="0.15" />
                  <circle cx="0" cy="0" r="14" fill="#ff5400" />
                  <circle cx="0" cy="0" r="6" fill="#ffffff" />
                  {/* Tooltip callout */}
                  <rect x="-85" y="-55" width="170" height="34" rx="6" fill="#141414" stroke="#ff5400" strokeWidth="1.5" />
                  <text x="0" y="-39" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    KEBAB FACTORY
                  </text>
                  <text x="0" y="-27" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="sans-serif">
                    12 rue de la Braise (Fictif)
                  </text>
                </g>

                {/* Fictional Bus Stop */}
                <g transform="translate(195, 120)">
                  <circle cx="0" cy="0" r="6" fill="#3b82f6" />
                  <text x="-12" y="4" textAnchor="end" fill="#93c5fd" fontSize="9" fontFamily="sans-serif">
                    Arrêt Bus Démo
                  </text>
                </g>

                {/* Fictional Parking */}
                <g transform="translate(480, 80)">
                  <rect x="-10" y="-10" width="20" height="20" rx="3" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    P
                  </text>
                  <text x="0" y="24" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="sans-serif">
                    Parking 1h Démo
                  </text>
                </g>
              </svg>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-stone-400">
              <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" />
              <span>
                Plan schématique vectoriel purement artistique : ne pointe vers aucun commerce ni lieu réel.
              </span>
            </div>
          </div>

          {/* Right: Address & Transportation Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1b1b1b] border border-stone-800 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                Coordonnées de Démonstration
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Kebab Factory Atelier
                </h3>
                <p className="text-stone-300 text-sm mt-1">
                  12 rue de la Braise, Ville Démo <span className="text-stone-400">(adresse fictive)</span>
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Code postal : 00000 · France Démo
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80">
                <div className="text-xs text-stone-400">Contact électronique officiel :</div>
                <div className="text-sm font-semibold text-orange-400 font-mono mt-0.5">
                  bonjour@kebab-factory.example
                </div>
              </div>
            </div>

            {/* Access points */}
            <div className="bg-[#1b1b1b] border border-stone-800 rounded-2xl p-6 space-y-4 text-xs sm:text-sm">
              <div className="text-xs font-semibold text-white font-display uppercase tracking-wider">
                Comment Venir (Simulation)
              </div>

              <div className="flex items-start gap-3 text-stone-300">
                <Bus className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Transports doux :</strong> Ligne de bus fictive B, arrêt « Braise Démo » à 1 minute à pied.
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-300">
                <Bike className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">À vélo :</strong> Piste cyclable dédiée et 8 arceaux à vélos abrités juste devant l'établissement.
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-300">
                <Car className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">En voiture :</strong> Parking souterrain public fictif « Place des Saveurs » à 50 mètres.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
