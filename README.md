# PROJET 12 - SportSee

Bienvenue dans le ReadMe du projet de développement de la nouvelle page profil utilisateur pour SportSee. Ce document contient toutes les informations nécessaires pour démarrer et comprendre le projet.

# Description du Projet
SportSee est une startup dédiée au coaching sportif, en pleine croissance. Ce projet vise à mettre à jour la page profil utilisateur pour inclure des fonctionnalités de suivi des sessions et des calories brûlées.
# Initialisation du projet : 
git clone https://github.com/Daganx/SportSee.git
cd SportSee
# Installation des dépendances : 
npm install
# Backend et Mock de Données : 
Un backend NodeJS est fourni pour la gestion des appels HTTP et la récupération de données.
Un mock des données d'API est prévu pour le développement initial. Les services dédiés dans apiMock.js simuleront les appels et les données avant l'intégration complète de l'API réelle.
# Organisation du Code : 
Structure des Fichiers :

/src
├── /components          # Composants réutilisables
├── /pages               # Pages principales de l'application
├── /services            # Services pour les appels API et les données mock
├── /assets              # Fichiers statiques (images, icônes, etc.)
└── App.js               # Point d'entrée de l'application

Pour lancer l'application en mode développement :

npm start
Ouvrez votre navigateur et allez sur http://localhost:3000 pour voir l'application.

# Documentation Additionnelle :
PropTypes pour documenter les types de données attendus par vos composants React.