# HRNET - FRONT-END - P14

## Description

HRnet est une application de gestion des employés permettant aux utilisateurs d'ajouter, d'afficher et de rechercher des employés au sein d'une entreprise. Ce projet est une migration d'une ancienne application développée en **jQuery** vers **React.js** afin d'améliorer les performances, la maintenabilité et l'expérience utilisateur.

L'application utilise **Firebase Firestore** comme base de données, **Redux Toolkit** pour la gestion de l'état global, et est optimisée avec **React Lazy** pour améliorer les performances.

## Installation et exécution

### Prérequis

- **Node.js** (>=16.x) : [Télécharger ici](https://nodejs.org/en/)
- Un éditeur de code comme **[VSCode](https://code.visualstudio.com/)**
- Un compte **Firebase** configuré pour la base de données Firestore

### Installation

Clonez le dépôt et installez les dépendances :

```sh
git clone https://github.com/IsmaSEO/Hrnet.git
cd hrnet
npm install
```

### Configuration Firebase

1. Créez un fichier `.env.local` à la racine du projet et ajoutez vos variables d'environnement Firebase :

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

1. Assurez-vous que Firestore est bien activé sur Firebase.

### Lancer l'application en mode dev

```sh
npm run dev
```

L'application sera accessible à l'adresse **<http://localhost:5173/>**.

### Construction de l'application pour la prod

```sh
npm run build
```

Puis servez-la avec :

```sh
npm run preview
```

## Technologies utilisées

- **React.js** - Framework JavaScript moderne
- **Redux Toolkit** - Gestion d'état globale
- **React Router** - Navigation entre les pages
- **Firebase Firestore** - Base de données NoSQL en temps réel
- **React Lazy** - Optimisation des performances
- **Vite.js** - Build ultra-rapide pour React
- **Lighthouse Audit** - Vérification et amélioration des performances

## Optimisations et gains de performance

### Migration jQuery → React.js

L'ancienne application en **jQuery** avait des problèmes. Avec **React**, nous avons réduit le **temps de rendu**, amélioré la gestion de l'état et optimisé les **performances**.

### Améliorations

- Chargement différé avec **React Lazy**
- Minification et bundling via **Vite**
- Amélioration de l'expérience utilisateur grâce à **React Hook Form**

## Licence

Ce projet est sous **licence MIT**.
