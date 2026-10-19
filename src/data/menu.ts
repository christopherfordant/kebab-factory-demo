import { MenuItem, DaySchedule } from '../types';

import berlinerImg from '../assets/images/specialite_berliner_kebab_1792442873014.jpg';
import tacosImg from '../assets/images/specialite_french_tacos_1792442873227.jpg';
import burgerImg from '../assets/images/specialite_smash_burger_1792442874307.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // --- KEBABS ---
  {
    id: 'kebab-berliner',
    name: 'Le Berliner Authentique',
    category: 'kebabs',
    price: '9,50 €',
    badge: 'Recette Signature',
    description: 'Pain sésame artisanal tout juste sorti du four, lamelles de veau grillé croustillant, féta AOP émiettée, légumes rôtis (courgettes, poivrons), chou rouge mariné au sumac et sauce blanche aillée aux fines herbes.',
    ingredients: ['Veau français mariné 24h', 'Pain pide sésame maison', 'Féta de brebis AOP', 'Légumes grillés', 'Sauce blanche herbes & ail doux'],
    meatOptions: ['Veau mariné', 'Poulet fermier paprika', 'Duo veau & poulet'],
    spiciness: 1,
    image: berlinerImg,
  },
  {
    id: 'kebab-braise-tradition',
    name: 'Le Braise Tradition',
    category: 'kebabs',
    price: '8,90 €',
    badge: 'Classique Revisité',
    description: 'La quintessence du kebab d\'artisan. Viande rôtie lentement au charbon de bois naturel, tomates cœur de bœuf tranchées fines, oignons rouges de Tropea au persil plat et sauce samouraï fumée maison.',
    ingredients: ['Broche artisanale veau & dinde', 'Pain turc traditionnel', 'Oignons rouges au sumac', 'Tomates fraîches', 'Sauce samouraï maison'],
    spiciness: 2,
  },
  {
    id: 'kebab-lavash-roll',
    name: 'Le Roll Lavash Croustillant',
    category: 'kebabs',
    price: '9,20 €',
    badge: 'Galette Fine',
    description: 'Fine galette lavash maison roulée serrée et toastée au grill strié, viande effilochée, salade iceberg croquante, pickles de concombres et sauce blanche au yaourt égoutté.',
    ingredients: ['Galette lavash pétrie sur place', 'Viande marinée', 'Pickles maison', 'Sauce yaourt & menthe'],
    spiciness: 1,
  },
  {
    id: 'kebab-vege-halloumi',
    name: 'Le Gourmet Halloumi Grillé',
    category: 'kebabs',
    price: '9,50 €',
    badge: 'Option Végétarienne',
    description: 'Tranches épaisses de fromage Halloumi grillées à la flamme, mélasse de grenade aigre-douce, roquette poivrée, légumes confits au romarin et sauce tahini au sésame doré.',
    ingredients: ['Halloumi grillé minute', 'Pain pide maison', 'Légumes confits', 'Mélasse de grenade', 'Sauce tahini citronnée'],
    isVegetarian: true,
    spiciness: 0,
  },

  // --- TACOS ---
  {
    id: 'tacos-gratine-comte',
    name: 'French Tacos Gratiné Comté AOP',
    category: 'tacos',
    price: '10,90 €',
    badge: 'Le Préféré de l\'Atelier',
    description: 'Galette de blé dorée sur fonte, double dose de tenders de poulet croustillant et viande hachée façon bouchère, frites maison, sauce fromagère secrète au Comté 18 mois et gratiné au four.',
    ingredients: ['Poulet mariné pané panko', 'Bœuf haché assaisonné', 'Frites fraîches maison', 'Sauce fromagère Comté 18 mois', 'Gratinage four à pierre'],
    meatOptions: ['Poulet & Bœuf', 'Merguez & Poulet', 'Veau mariné & Tenders'],
    spiciness: 1,
    image: tacosImg,
  },
  {
    id: 'tacos-double-braise',
    name: 'Le Tacos Smoky Braise',
    category: 'tacos',
    price: '9,90 €',
    badge: 'Saveur Fumée',
    description: 'Viande de kebab braisée au charbon de bois, oignons caramélisés au sucre muscovado, frites au sel de Guérande, sauce barbecue fumée au bois de hêtre et sauce fromagère maison.',
    ingredients: ['Viande de kebab à la braise', 'Oignons caramélisés', 'Frites maison', 'Sauce fromagère artisanale', 'Sauce BBQ fumée'],
    spiciness: 1,
  },
  {
    id: 'tacos-le-montagnard',
    name: 'Le Montagnard Reblochon',
    category: 'tacos',
    price: '11,20 €',
    badge: 'Ultra Fondant',
    description: 'Poulet rôti aux herbes de Provence, lardons de dinde fumée croustillants, rondelles de pommes de terre rissolées, véritable Reblochon fermier au lait cru et sauce fromagère.',
    ingredients: ['Poulet rôti fermier', 'Bacon de dinde fumé', 'Pommes rissolées', 'Reblochon fermier AOP', 'Sauce fromagère maison'],
    spiciness: 0,
  },

  // --- BURGERS ---
  {
    id: 'burger-smash-double',
    name: 'Double Smash Cheddar Affiné',
    category: 'burgers',
    price: '11,50 €',
    badge: 'Smash Signature',
    description: 'Deux steaks de bœuf limousin 80g écrasés ultra-fins sur plancha chromée brûlante pour une croûte croustillante dentelée, double tranche de véritable cheddar affiné anglais, oignons doux grillés, pickles et sauce Factory.',
    ingredients: ['Bœuf français limousin 2x80g', 'Bun brioché au beurre d\'Isigny', 'Double cheddar maturé', 'Oignons caramélisés', 'Sauce smash secrète'],
    spiciness: 1,
    image: burgerImg,
  },
  {
    id: 'burger-smoky-bacon',
    name: 'Le Smokehouse Pepper',
    category: 'burgers',
    price: '12,50 €',
    badge: 'Poivre de Kampot',
    description: 'Steak de bœuf épais grillé à la flamme, poitrine fumée croustillante, sauce au poivre noir de Kampot concassé, oignons frits croustillants et mâche fraîche dans un pain brioché toasté.',
    ingredients: ['Steak de bœuf 150g façon bouchère', 'Poitrine fumée de dinde', 'Sauce au poivre de Kampot', 'Oignons frits', 'Pain brioché artisanal'],
    spiciness: 2,
  },
  {
    id: 'burger-crispy-chicken',
    name: 'Le Crispy Chicken Factory',
    category: 'burgers',
    price: '10,90 €',
    badge: 'Extra Croustillant',
    description: 'Filet de poulet fermier mariné dans un babeurre aux épices, enrobé d\'une panure aux flocons de maïs ultra-croustillante, sauce ranch aillée, coleslaw maison crémeux et cornichons géants.',
    ingredients: ['Poulet fermier panure cornflakes', 'Coleslaw maison au chou blanc', 'Sauce ranch aux herbes', 'Pickles d\'aneth', 'Bun brioché'],
    spiciness: 1,
  },

  // --- MENUS ---
  {
    id: 'menu-berliner-complet',
    name: 'Menu Découverte Berliner',
    category: 'menus',
    price: '13,50 €',
    badge: 'Formule Complète',
    description: 'Le Berliner Authentique au choix (pain ou galette) + Frites maison coupées au couteau saupoudrées de paprika doux + Boisson artisanale 33cl ou thé glacé maison à la menthe.',
    ingredients: ['Sandwich Berliner au choix', 'Portion de frites fraîches', 'Sauce maison au choix', 'Boisson au choix (33cl)'],
  },
  {
    id: 'menu-smash-gourmet',
    name: 'Menu Smash & Frites Cheddar',
    category: 'menus',
    price: '15,20 €',
    badge: 'Le Festin Gourmand',
    description: 'Le Double Smash Cheddar Affiné + Grande portion de frites maison nappées de sauce fromagère fondante et d\'oignons frits + Boisson fraîche au choix.',
    ingredients: ['Double Smash Burger', 'Frites nappées de sauce cheddar chaud', 'Oignons croustillants', 'Boisson fraîche au choix'],
  },
  {
    id: 'menu-tacos-gratine',
    name: 'Menu Tacos Gratiné Prestige',
    category: 'menus',
    price: '14,80 €',
    badge: 'Spécial Gourmands',
    description: 'Le French Tacos Gratiné au Comté AOP + Frites maison croustillantes + Sauce dip artisanale (Algérienne fumée ou Blanche aillée) + Boisson fraîche 33cl.',
    ingredients: ['Tacos Gratiné au Comté', 'Frites maison en cornet', 'Sauce au choix', 'Boisson 33cl'],
  },
];

export const SCHEDULE: DaySchedule[] = [
  { day: 'Lundi', lunch: '11h30 – 15h00', dinner: '18h30 – 23h30' },
  { day: 'Mardi', lunch: '11h30 – 15h00', dinner: '18h30 – 23h30' },
  { day: 'Mercredi', lunch: '11h30 – 15h00', dinner: '18h30 – 23h30' },
  { day: 'Jeudi', lunch: '11h30 – 15h00', dinner: '18h30 – 23h30' },
  { day: 'Vendredi', lunch: '11h30 – 15h00', dinner: '18h30 – 00h30' },
  { day: 'Samedi', lunch: '11h30 – 16h00 (Continu)', dinner: '18h00 – 00h30' },
  { day: 'Dimanche', lunch: 'Fermé le midi', dinner: '18h00 – 23h00' },
];

export const COMMITMENTS = [
  {
    title: 'Broche 100% Artisanale',
    desc: 'Viandes fraîches de qualité sélectionnées, marinées 24 heures aux épices douces et montées à la main chaque matin.',
  },
  {
    title: 'Pain Pétrit & Cuit sur Place',
    desc: 'Pâte à fermentation lente pétrie dans notre atelier, façonnée à la main et cuite à la commande au four à haute température.',
  },
  {
    title: 'Sauces Maison Mijotées',
    desc: 'Recettes exclusives préparées sur place : sauce blanche au yaourt frais et fines herbes, sauce samouraï fumée, sauce fromagère au vrai Comté.',
  },
  {
    title: 'Frites Fraîches Coupées au Couteau',
    desc: 'Pommes de terre fraîches locales, double bain de friture traditionnel pour une texture croustillante à l\'extérieur et fondante à cœur.',
  },
];
