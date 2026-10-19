# Déploiement statique Netlify

Site publié après accord explicite : https://kebab-factory-demo.netlify.app/
Projet Netlify : c190d754-7cf8-4445-900c-52c743a62c41.
Déploiement de production vérifié : 6ad689fde9bde93e38d3425c.
Méthode : archive du build validé envoyée à l'API Netlify avec la connexion locale existante. Le dépôt reste privé et n'est pas relié au déploiement automatique.

Site généré et corrigé dans Google AI Studio. Les ajouts locaux portent uniquement sur la préparation technique de déploiement : configuration Netlify, verrouillage npm et compression des images du build.

- Node.js 24 ; installer avec `npm ci`.
- `npx tsc --noEmit` vérifie les types.
- `npm run build` compile Vite et optimise les JPEG de `dist/assets` avec sharp. Les originaux sont conservés.
- Netlify : branche `main`, commande `npm run build`, répertoire publié `dist`.
- Aucune variable d'environnement, clé API, fonction serveur ou base de données nécessaire.
- Le dossier `dist` peut aussi être envoyé manuellement à Netlify.
- Pour une archive ZIP portable, utiliser `python scripts/package-netlify.py` après le build. Ne pas utiliser l'archive PowerShell initiale : Netlify a interprété certains chemins avec des antislashs, ce qui a causé des 404 avant correction.
- Ne pas publier avant l'accord explicite du propriétaire.

Vérifications du 19 octobre 2026 : build et TypeScript réussis, tests Playwright du build à sept largeurs entre 360 et 1440 px, filtres et navigation, fenêtres au clavier et images locales. Les preuves complètes et captures sont conservées dans le workspace parent, dossiers docs et artifacts.

L'intégration Netlify GitHub doit être autorisée pour ce dépôt privé si celui-ci n'apparaît pas dans la liste d'import. Ne pas sélectionner un autre dépôt.
