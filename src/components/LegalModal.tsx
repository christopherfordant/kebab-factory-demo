import React, { useState } from 'react';
import { X, ShieldCheck, Scale, FileText, ExternalLink } from 'lucide-react';
import { useModalTrap } from '../hooks/useModalTrap';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'mentions' | 'privacy';
  triggerElement?: HTMLElement | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'mentions',
  triggerElement,
}) => {
  const [activeTab, setActiveTab] = useState<'mentions' | 'privacy'>(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const modalRef = useModalTrap({
    isOpen,
    onClose,
    triggerElement,
  });

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] sm:max-h-[85vh] bg-[#1a1a1a] border border-stone-800 rounded-xl flex flex-col text-[#fcfbf9] shadow-2xl relative overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between shrink-0 bg-[#1e1e1e]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-950/60 border border-orange-700/50 flex items-center justify-center text-orange-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase">
                Transparence & Cadre Légal
              </span>
              <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold font-display text-white">
                Mentions Légales & Confidentialité
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la modale juridique"
            className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-stone-800/80 flex gap-2 bg-stone-900/60 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('mentions')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'mentions'
                ? 'bg-orange-700 hover:bg-orange-800 text-white shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            Mentions Légales
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-orange-700 hover:bg-orange-800 text-white shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Confidentialité & Données
          </button>
        </div>

        {/* Scrollable content with touch scroll */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-stone-300 leading-relaxed">
          {activeTab === 'mentions' ? (
            <>
              <div className="p-3.5 rounded-lg bg-orange-950/30 border border-orange-800/40 text-xs text-orange-200">
                <strong className="text-white">Avertissement explicite :</strong> Ce site web est un démonstrateur technique pour un restaurant totalement imaginaire. L'enseigne « Kebab Factory » n'a aucune existence commerciale réelle.
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">1. Éditeur de la démonstration</h3>
                <p>
                  Ce site est conçu comme un projet vitrine démontrant une architecture front-end statique moderne en React et Tailwind CSS.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-stone-300 list-disc list-inside">
                  <li><strong>Nom du projet :</strong> Kebab Factory (Restaurant Fictif)</li>
                  <li><strong>Adresse fictive :</strong> 12 rue de la Braise, Ville Démo</li>
                  <li><strong>Courriel officiel de contact :</strong> bonjour@kebab-factory.example</li>
                  <li><strong>Téléphonie :</strong> Aucun numéro réel. Les boutons d'appel ouvrent un avertissement pédagogique sans composer de numéro.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">2. Absence de transactions commerciales</h3>
                <p>
                  Le site ne propose aucune commande en ligne, aucun système de panier avec paiement, aucune livraison ni collecte bancaire. Les montants affichés sur la carte sont des prix fictifs de démonstration.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">3. Propriété intellectuelle & Médias générés</h3>
                <p>
                  Les visuels photographiques culinaires illustrant ce site ont été générés dans Google AI Studio (modèle Imagen) spécifiquement pour cette maquette, sans reproduction de marques ou d'établissements existants. Leur utilisation relève des{' '}
                  <a
                    href="https://ai.google.dev/gemini-api/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline hover:text-orange-300 inline-flex items-center gap-0.5"
                  >
                    conditions d'utilisation officielles Google AI Studio
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  . Aucune licence Creative Commons spécifique ni garantie d'absence de droits tiers n'est stipulée. Consultez le fichier public{' '}
                  <a href="/ASSETS.md" target="_blank" className="text-orange-400 underline hover:text-orange-300">
                    /ASSETS.md
                  </a>{' '}
                  pour l'inventaire exhaustif.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">4. Hébergement technique</h3>
                <p>
                  Ce site est un ensemble de fichiers statiques (HTML, CSS, JavaScript) précompilés pouvant être hébergés sur toute infrastructure de distribution web (Netlify, Vercel, Cloudflare Pages, etc.).
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-800 text-xs text-stone-300">
                <strong className="text-white">Transparence technique :</strong> Ce site ne met en œuvre aucun cookie publicitaire, aucun outil de pistage intersite et aucune vente de données.
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">1. Données personnelles et formulaires</h3>
                <p>
                  Le site ne comporte aucun formulaire serveur envoyant des données à une base de données ou un CRM. Aucune information nominative n'est collectée pour du profilage marketing ou de la revente.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">2. Cookies et traceurs tiers</h3>
                <p>
                  Aucun cookie de suivi publicitaire (Meta Pixel, Google Ads, TikTok), aucun script d'analyse d'audience comportementale (Google Analytics) et aucun cookie tiers n'est déposé sur votre terminal.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">3. Journaux techniques d'infrastructure</h3>
                <p>
                  Conformément au fonctionnement standard de tout réseau de diffusion de contenu (CDN) ou hébergeur web statique, le serveur d'hébergement peut enregistrer des journaux techniques minimaux (adresse IP de connexion, horodatage, agent utilisateur HTTP). Ces données techniques sont gérées directement par l'hébergeur pour la sécurité du réseau et la transmission technique des requêtes (intérêt légitime technique).
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display">4. Contact</h3>
                <p>
                  Pour toute question relative au fonctionnement de cette maquette, vous pouvez écrire à{' '}
                  <span className="text-orange-400 font-mono">bonjour@kebab-factory.example</span>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-stone-900 border-t border-stone-800 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
