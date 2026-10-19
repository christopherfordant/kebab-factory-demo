# Kebab Factory — Site Vitrine Français Premium (Restaurant Fictif)

Site vitrine responsive réalisé en **React 19**, **Vite** et **Tailwind CSS**.
Ce projet est un démonstrateur technique pour un concept de restauration artisanale ("Kebab Factory"). L'établissement et tous ses attributs sont strictement fictifs.

---

## 📋 Caractéristiques Techniques & Design

- **Architecture 100% Statique** : Aucune dépendance backend, aucun serveur applicatif (Express retiré), aucune base de données, aucune clé API ni appel IA.
- **Direction Artistique** : Palette anthracite (`#141414`), orange braise contrasté et blanc cassé. Pile typographique système fluide sans requêtes vers des serveurs tiers de polices.
- **Accessibilité & WCAG AA** :
  - Ratios de contraste vérifiés $\ge 4.5:1$ pour tous les textes normaux et boutons d'action.
  - Modales accessibles (Appel démo, Mentions légales, Détail de recette, Lightbox) avec piégeage de focus (`Tab` / `Shift+Tab`), fermeture à l'appui sur `Échap`, restitution du focus au déclencheur et blocage du défilement d'arrière-plan.
  - Défilement interne des modales adapté aux écrans mobiles `360 × 640 px`.
  - Marges d'ancrage (`scroll-margin-top`) calculées pour garder les titres visibles sous la barre supérieure fixe.
- **8 Contenus Intégrés** :
  1. *Accueil Hero* spectaculaire avec CTA vers la carte.
  2. *Carte Complète* avec filtres fonctionnels (Tous, Kebabs, Tacos, Burgers, Menus) et modale de détail.
  3. *Spécialités Signature* détaillant les 3 créations phares (recettes artisanales).
  4. *Galerie Visuelle* avec visionneuse accessible sur les coulisses de la cuisson au feu de bois et braise.
  5. *Horaires Fictifs* sous forme de tableau clair midi/soir.
  6. *Localisation Fictive Décorative* : Schéma vectoriel SVG sur-mesure (sans API Google Maps ni pointage vers un commerce existant).
  7. *Module de Contact & Appel Démo* : Bouton d'appel ouvrant une explication sans composer de numéro réel, courriel officiel `bonjour@kebab-factory.example`.
  8. *Mentions Légales & Confidentialité* : Transparence sur le statut de démonstration, absence de traceurs publicitaires et mention des journaux techniques standards d'hébergement.

---

## 🖼️ Documentation des Images

Les six visuels culinaires sont importés explicitement via Vite pour être émis de manière autonome dans le répertoire de distribution `dist/assets/`.
L'inventaire complet des visuels et les conditions d'utilisation officielles Google AI Studio sont documentés dans le fichier public accessible sur `/ASSETS.md`.

---

## 🛠️ Commandes Locales

```bash
# Installation des dépendances minimales
npm install

# Lancement du serveur de développement
npm run dev

# Vérification du typage
npm run lint

# Compilation pour export statique de production
npm run build
```

Le build est généré dans le répertoire `dist/` et peut être déployé directement sur Netlify, Vercel, Cloudflare Pages ou tout serveur HTTP statique.
