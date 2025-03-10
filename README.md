# 🐾 Galerie d'Animaux 

## 📌 Description
Cette application React permet d'afficher des images aléatoires d'animaux (chiens, chats, renards, canards) via des API publiques.
L'interface est épurée avec un **dashboard interactif** qui affiche l'image actuelle ainsi qu'une galerie des images générées.

## 🎯 Fonctionnalités
✔️ **Affichage d'images d'animaux aléatoires** 🐶🐱🦊🦆  
✔️ **Requête API via Redux Toolkit & Axios** 🔄  
✔️ **Stockage global avec Redux Toolkit** 🗂️  
✔️ **Animation de chargement pendant la requête** ⏳  
✔️ **Galerie d'images générées** 🖼️  
✔️ **Design minimaliste et adaptatif** 🎨  

## 🏗️ Installation et Lancement

### 1️⃣ Cloner le projet
```sh
git clone https://github.com/layayance/animal_gallery.git
cd animal-gallery
```

### 2️⃣ Installer les dépendances
```sh
npm install
```

### 3️⃣ Lancer l'application
```sh
npm run dev
```
L'application est maintenant accessible à l'adresse indiquée dans le terminal.

## 🔌 Technologies utilisées
- **React** ⚛️ (Framework JavaScript)
- **Redux Toolkit** 🗂️ (Gestion d'état globale)
- **Axios** 🔄 (Requêtes API)
- **Vite** ⚡ (Build & développement rapide)
- **CSS personnalisé** 🎨 (Stylisation propre et adaptative)

## 🌍 API Utilisées (Sans clé API)
| Animal | API |
|--------|-----|
| 🐶 Chien | [random.dog](https://random.dog/woof.json) |
| 🐱 Chat | [random.cat](https://aws.random.cat/meow) |
| 🦊 Renard | [randomfox.ca](https://randomfox.ca/floof/) |
| 🦆 Canard | [random-d.uk](https://random-d.uk/api/v2/random) |
| 🐦 Oiseau | [random-d.uk](https://random-d.uk/api/v2/random) | 


✅ Vérification des critères demandés :

Critère	Status	Détails
Intégration d’une interface avec React	✅	Utilisation de React avec Redux Toolkit pour un état global
Dashboard interactif	✅	Un dashboard moderne et dynamique avec un design propre
Gestion d’état (Redux/Vuex)	✅	Utilisation de Redux Toolkit pour stocker et gérer les données
Connexion à une API externe	✅	Connexion aux API publiques sans clé API (random.dog, random.cat, etc.)
Tests et optimisation des performances	⚠️	Tests non implémentés mais Vite + Redux optimisent déjà les perfs
