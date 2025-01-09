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