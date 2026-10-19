/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CategoryId } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { HoursSection } from './components/HoursSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoCallModal } from './components/DemoCallModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [callTriggerEl, setCallTriggerEl] = useState<HTMLElement | null>(null);

  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'mentions' | 'privacy'>('mentions');
  const [legalTriggerEl, setLegalTriggerEl] = useState<HTMLElement | null>(null);

  const handleOpenLegal = (tab: 'mentions' | 'privacy', e: React.MouseEvent<HTMLButtonElement>) => {
    setLegalTriggerEl(e.currentTarget);
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleOpenCallDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCallTriggerEl(e.currentTarget);
    setIsCallModalOpen(true);
  };

  const handleSelectSpecialtyCategory = (cat: 'kebabs' | 'tacos' | 'burgers') => {
    setSelectedCategory(cat);
    const carteElem = document.getElementById('carte');
    if (carteElem) {
      carteElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const carteElem = document.getElementById('carte');
    if (carteElem) {
      carteElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#fcfbf9] flex flex-col selection:bg-orange-600 selection:text-white">
      {/* 1. Header with persistent disclaimer banner and 3-zone contract */}
      <Header onOpenCallDemo={handleOpenCallDemo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Accueil Hero Spectaculaire */}
        <Hero onExploreMenu={handleExploreMenu} />

        {/* 2. Spécialités Signature */}
        <Specialties onSelectCategory={handleSelectSpecialtyCategory} />

        {/* 3. Carte avec Catégories (kebabs, tacos, burgers, menus) & Filtres */}
        <MenuSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 4. Galerie & L'Atelier de Cuisson */}
        <GallerySection />

        {/* 5. Horaires d'Ouverture Fictifs */}
        <HoursSection />

        {/* 6. Adresse & Localisation Fictive (Schéma décoratif sans API Maps) */}
        <LocationSection />

        {/* 7. Contact avec Bouton d'Appel de Démonstration */}
        <ContactSection onOpenCallDemo={handleOpenCallDemo} />
      </main>

      {/* 8. Pied de Page & Mentions d'Accès */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenCallDemo={handleOpenCallDemo}
      />

      {/* Modals & Dialogs with Focus Trap and Return Focus */}
      <DemoCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        triggerElement={callTriggerEl}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalModalTab}
        triggerElement={legalTriggerEl}
      />
    </div>
  );
}
