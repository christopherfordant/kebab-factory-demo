# Déploiement statique Netlify

Site généré et corrigé dans Google AI Studio. Les ajouts locaux portent uniquement sur la préparation technique de déploiement : configuration Netlify, verrouillage npm et compression des images du build.

- Node.js 24 ; installer avec `npm ci`.
- `npx tsc --noEmit` vérifie les types.
- `npm run build` compile Vite et optimise les JPEG de `dist/assets` avec sharp. Les originaux sont conservés.
- Netlify : branche `main`, commande `npm run build`, répertoire publié `dist`.
- Aucune variable d'environnement, clé API, fonction serveur ou base de données nécessaire.
- Le dossier `dist` peut aussi être envoyé manuellement à Netlify.
- Ne pas publier avant l'accord explicite du propriétaire.

Vérifications du 19 octobre 2026 : build et TypeScript réussis, tests Playwright du build à sept largeurs entre 360 et 1440 px, filtres et navigation, fenêtres au clavier et images locales. Les preuves complètes et captures sont conservées dans le workspace parent, dossiers docs et artifacts.

L'intégration Netlify GitHub doit être autorisée pour ce dépôt privé si celui-ci n'apparaît pas dans la liste d'import. Ne pas sélectionner un autre dépôt.
