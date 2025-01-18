# Projet de Gestion de Configuration de Dispositif

Ce projet implémente une solution de gestion de configuration pour dispositifs, incluant un client web et un backend. Le client web est développé avec React et TypeScript tandis que le backend utilise Node.js et Express avec TypeScript.

## Prérequis

Pour exécuter ce projet, vous aurez besoin de :
- Docker
- Docker Compose

## Démarrage rapide

Suivez ces étapes pour cloner le dépôt et démarrer les services avec Docker Compose :

```bash
# Construire les images
docker compose build

# Démarrer les services en mode détaché
docker compose up -d
```

## Accès aux Services

- **Frontend** : http://localhost:3001
- **Backend** : http://localhost:3002

## Nettoyage

Pour arrêter les services et retirer les conteneurs associés, utilisez la commande suivante :

```bash
docker compose down
```
