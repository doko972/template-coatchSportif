# template2
second template with LARAVEL 11 and Vite Sass

# Luminis Digital

Luminis Digital évoque la lumière et l'illumination, symbolisant notre approche pour éclairer les projets numériques de nos clients.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **PHP** (version 8.0 ou supérieure)
- **Composer** (gestionnaire de dépendances PHP)
- **Node.js** (version 14 ou supérieure)
- **NPM** (généralement inclus avec Node.js)

## Installation

### Suivez ces étapes pour configurer le projet localement :

1. Cloner le dépôt :
```
git clone repo-name
cd repo-name
```

2. Installer les dépendances PHP avec Composer :
```
composer install
```

3. Installer les dépendances JavaScript avec NPM :
```
npm install
```

4. Configurer le fichier d'environnement :
Copiez le fichier .env.example en .env et modifiez-le selon vos besoins :
```
cp .env.example .env
```

Générez la clé de l'application Laravel :
```
php artisan key:generate
```

5. Compiler les assets :
Pour compiler les fichiers CSS et JavaScript :
```
npm run dev
```

Pour une compilation optimisée en production :
```
npm run build
```

## Structure du Projet
## Template2/

## Racine du projet
- **`app/`** : Contient le code applicatif.
- **`bootstrap/`** : Fichiers de démarrage de l'application.
- **`config/`** : Fichiers de configuration pour Laravel.
- **`database/`** : Contient les migrations et les seeds pour la base de données.
- **`public/`** : Fichiers accessibles publiquement (ex. `index.php`, images, styles).
- **`routes/`** : Définitions des routes de l'application.
- **`storage/`** : Logs, cache et autres fichiers générés par Laravel.
- **`tests/`** : Tests unitaires et fonctionnels pour l'application.
- **`artisan`** : Interface en ligne de commande de Laravel.
- **`.env.example`** : Exemple de fichier d'environnement pour configurer le projet.
- **`composer.json`** : Dépendances PHP et informations du projet.
- **`package.json`** : Dépendances JavaScript et scripts.
- **`phpunit.xml`** : Configuration des tests PHPUnit.
- **`README.md`** : Documentation du projet.

---

## Structure des dossiers spécifiques

### **`resources/`**

- **`css/`** : Feuilles de styles compilées.
- **`images/`** : Images utilisées dans le projet.
- **`js/`** : Fichiers JavaScript.
  - `app.js`
  - `backToTop.js`
  - `bootstrap.js`
  - `services.js`
  - `toggleMenu.js`
- **`sass/`** : Fichiers SASS pour les styles.
  - **`components/`** : Styles des composants.
    - `_backToTop.scss`
    - `_footer.scss`
    - `_header.scss`
    - `_hero.scss`
    - `_navbar.scss`
    - `_reset.scss`
    - `_services.scss`
    - `_team.scss`
    - `_variables.scss`
  - `app.scss` : Point d'entrée principal pour les styles SASS.
- **`views/`** : Vues Blade utilisées par Laravel.
  - **`layouts/`** : Layout principal du projet.
    - `app.blade.php`
  - **`partials/`** : Sections communes à plusieurs pages.
    - `footer.blade.php`
    - `header.blade.php`
  - **`sections/`** : Sections spécifiques aux pages.
    - `hero.blade.php`
    - `services.blade.php`
    - `team.blade.php`
    - `home.blade.php`
    - `welcome.blade.php`

---

### Autres dossiers et fichiers clés

- **`routes/`** : Définitions des routes.
  - `web.php` : Routes web accessibles via un navigateur.
  - `api.php` : Routes pour les API.
  - `console.php` : Commandes artisan personnalisées.
  - `channels.php` : Définition des canaux de broadcast.

- **`storage/`** :
  - `app/` : Fichiers uploadés.
  - `framework/` : Sessions, cache, et fichiers temporaires.
  - `logs/` : Logs générés par Laravel.

- **`tests/`** :
  - `Feature/` : Tests fonctionnels pour des fonctionnalités complètes.
  - `Unit/` : Tests unitaires pour des classes ou méthodes spécifiques.

---

### Hiérarchie

```plaintext
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── index.php
├── resources/
│   ├── css/
│   ├── images/
│   ├── js/
│   │   ├── app.js
│   │   ├── backToTop.js
│   │   ├── bootstrap.js
│   │   ├── services.js
│   │   └── toggleMenu.js
│   ├── sass/
│   │   ├── components/
│   │   │   ├── _backToTop.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _navbar.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _services.scss
│   │   │   ├── _team.scss
│   │   │   ├── _variables.scss
│   │   │   └── ...
│   │   └── app.scss
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php
│       ├── partials/
│       │   ├── footer.blade.php
│       │   └── header.blade.php
│       ├── sections/
│       │   ├── hero.blade.php
│       │   ├── services.blade.php
│       │   └── team.blade.php
│       └── welcome.blade.php
├── routes/
│   ├── api.php
│   ├── channels.php
│   ├── console.php
│   └── web.php
├── storage/
├── tests/
├── .env.example
├── artisan
├── composer.json
├── package.json
├── phpunit.xml
└── README.md

# Commandes Utiles
## Lancer le serveur de développement :
```
php artisan serve
```

```
npm run dev
```

```
npm run build
```
