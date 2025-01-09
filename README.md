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
### ├── app/                # Contient le code applicatif
### ├── bootstrap/          # Fichiers de démarrage
### ├── config/             # Fichiers de configuration
### ├── database/           # Migrations et seeds
### ├── public/             # Fichiers accessibles publiquement (assets, index.php)
### ├── resources/          # Vues, assets bruts (SASS, images)
### ### ├── css/     
### ├────── images/       
### ├────── js/  
### ├──────────── app.js
### ├──────────── backToTop.js
### ├──────────── bootstrap.js
### ├──────────── services.js
### ├──────────── toggleMenu.js
### ├────── sass/  
### ├──────────── componenents/  
### ├──────────────── _backToTop.scss
### ├──────────────── _footer.scss
### ├──────────────── _header.scss
### ├──────────────── _hero.scss
### ├──────────────── _navbar.scss
### ├──────────────── _reset.scss
### ├──────────────── _services.scss
### ├──────────────── _team.scss
### ├──────────────── _variables.scss
### ├──────────── app.scss/
### ├────── views/ 
### ├──────────── layouts/  
### ├──────────────── app.blade.php
### ├──────────── partials/ 
### ├──────────────── _footer.blade.php
### ├──────────────── _header.blade.php
### ├──────────── sections/ 
### ├──────────────── _hero.blade.php
### ├──────────────── _services.blade.php
### ├──────────────── _team.blade.php
### ├──────────── sections/home.blade.php
### ├──────────── sections/welcome.blade.php
### ├── routes/             # Définitions des routes
### ├── storage/            # Logs, cache et autres fichiers générés
### ├── tests/              # Tests unitaires et fonctionnels
### ├── .env.example        # Exemple de fichier d'environnement
### ├── artisan             # Interface en ligne de commande de Laravel
### ├── composer.json       # Dépendances PHP et informations du projet
### ├── package.json        # Dépendances JavaScript et scripts
### ├── phpunit.xml         # Configuration des tests PHPUnit
### └── README.md           # Ce fichier

# Commandes Utiles
## Lancer le serveur de développement :
```
php artisan serve
```
## Exécuter les tests :
```
php artisan test
```
## Mettre à jour les dépendances :
### Pour Composer :
```
composer update
```
### Pour NPM :
```
npm update
```