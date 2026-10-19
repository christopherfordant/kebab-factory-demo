# Documentation des Images — Kebab Factory (Maquette Démo)

Ce document répertorie l'ensemble des médias photographiques utilisés sur le site vitrine de démonstration **Kebab Factory**.

Les images culinaires ont été générées via l'outil de génération d'images intégré de Google AI Studio (modèle Imagen) spécifiquement pour illustrer cette maquette conceptuelle de restaurant.

Leur utilisation est régie par les conditions d'utilisation officielles de l'API et des outils Google AI Studio :
🔗 **Conditions d'utilisation officielles :** https://ai.google.dev/gemini-api/terms

Ces images sont destinées exclusivement à la présentation de cette maquette de démonstration. Aucune licence Creative Commons ou garantie spécifique sur des droits tiers n'est revendiquée.

---

## 1. Inventaire des Fichiers

### 1.1 Hero — Le Kebab Signature
- **Fichier source dans le projet :** `src/assets/images/hero_kebab_gourmet_1792442872661.jpg`
- **Emplacement compilé (dist) :** Émis dans `dist/assets/` via import direct Vite
- **Rôle :** Image principale de la section d'accueil
- **Génération :** Invite textuelle soumise à Imagen dans Google AI Studio décrivant un kebab gourmet sur pain turc et ardoise sombre.

### 1.2 Spécialité 1 — Le Berliner Authentique
- **Fichier source dans le projet :** `src/assets/images/specialite_berliner_kebab_1792442873014.jpg`
- **Emplacement compilé (dist) :** Émis dans `dist/assets/`
- **Rôle :** Illustration de la recette Berliner (carte et spécialités)
- **Génération :** Image générée dans Google AI Studio représentant un sandwich kebab style berlinois avec féta et légumes.

### 1.3 Spécialité 2 — French Tacos Artisanal
- **Fichier source dans le projet :** `src/assets/images/specialite_french_tacos_1792442873227.jpg`
- **Emplacement compilé (dist) :** Émis dans `dist/assets/`
- **Rôle :** Illustration du French Tacos gratiné
- **Génération :** Image générée dans Google AI Studio représentant un tacos français garni et gratiné.

### 1.4 Spécialité 3 — Le Double Smash Burger
- **Fichier source dans le projet :** `src/assets/images/specialite_smash_burger_1792442874307.jpg`
- **Emplacement compilé (dist) :** Émis dans `dist/assets/`
- **Rôle :** Illustration du double smash burger
- **Génération :** Image générée dans Google AI Studio représentant un smash burger au cheddar sur bun brioché.

### 1.5 Galerie 1 — La Cuisson à la Braise
- **Fichier source dans le projet :** `src/assets/images/galerie_braise_rotisserie_1792442875861.jpg`
- **Emplacement compilé (dist) :** Émis dans `dist/assets/`
- **Rôle :** Photo de l'atelier rôtisserie à la braise
- **Génération :** Image générée dans Google AI Studio représentant une broche au-dessus de braises ardentes.

### 1.6 Galerie 2 — Le Pain au Four à Bois
- **Fichier source dans le projet :** `src/assets/images/galerie_fresh_flatbread_1792442875584.jpg`
- **Emplacement compilé (dist) :** Émis dans `dist/assets/`
- **Rôle :** Photo de la sortie de pain plat au four à bois
- **Génération :** Image générée dans Google AI Studio représentant un four à bois et une pelle à pain.

---

## 2. Iconographie et Typographie

- **Icônes :** Composants vectoriels de la bibliothèque open-source `lucide-react` (licence ISC).
- **Typographie :** Piles de polices système locales (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, etc.) garantissant zéro requête réseau vers des serveurs tiers.
- **Cartographie :** Schéma vectoriel SVG sur mesure purement décoratif, sans recours à Google Maps ou autre service de cartographie externe.
