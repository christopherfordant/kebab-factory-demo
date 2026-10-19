import React from 'react';
import { Phone, X, ShieldAlert, Mail, MapPin } from 'lucide-react';
import { useModalTrap } from '../hooks/useModalTrap';

interface DemoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const DemoCallModal: React.FC<DemoCallModalProps> = ({ isOpen, onClose, triggerElement }) => {
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
      aria-labelledby="demo-call-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[85vh] bg-[#1a1a1a] border border-stone-800 rounded-xl p-5 sm:p-7 text-[#fcfbf9] shadow-2xl relative overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre d'information"
          className="absolute top-4 right-4 p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5 pr-8">
          <div className="w-11 h-11 rounded-lg bg-orange-950/60 border border-orange-700/50 flex items-center justify-center text-orange-400 shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase">
              Action de Démonstration
            </span>
            <h2 id="demo-call-title" className="text-lg sm:text-xl font-bold font-display text-white">
              Appel Téléphonique Simulé
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-stone-300 text-xs sm:text-sm leading-relaxed">
          <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-800 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <p className="text-stone-300 text-xs sm:text-sm">
              <strong className="text-white font-semibold">Aucun appel n'est émis :</strong> Kebab Factory est un concept de restaurant fictif créé comme vitrine technique de design web.
            </p>
          </div>

          <p>
            Par souci de transparence,{' '}
            <strong className="text-white">aucun numéro de téléphone réel</strong> n'est affiché ni sollicité sur cette maquette.
          </p>

          <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-stone-300">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Adresse fictive : 12 rue de la Braise, Ville Démo</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Courriel officiel de contact : bonjour@kebab-factory.example</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-orange-700 hover:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
};
