# Projet de Gestion de Configuration de Dispositif

Ce projet implémente une solution de gestion de configuration pour dispositifs, incluant un client web et un backend. Le client web est développé avec React et TypeScript tandis que le backend utilise Node.js et Express avec TypeScript.

## Prérequis

Pour exécuter ce projet, vous aurez besoin de :
- Docker
- Docker Compose

## Utilisation avec Docker Compose

Ce projet utilise Docker Compose (version moderne) pour gérer les environnements de développement et de production.

### Commandes de Base

#### Mode Développement
Démarre tous les services nécessaires pour le développement (`client-dev`, `backend-dev`, `mailpit`) avec hot reload :
```bash
docker compose --profile dev up --build
```

#### Mode Production
Démarre uniquement les services optimisés pour la production (`client-prod`, `backend-prod`) sans inclure les outils de développement :
```bash
docker compose --profile prod up --build
```

#### Arrêter et Nettoyer
Arrête tous les services, supprime les conteneurs, les réseaux, les volumes, et les conteneurs orphelins associés :
```bash
docker compose down --volumes --remove-orphans
```

### Notes Importantes
- **Mailpit** : Inclus uniquement en mode développement via le profil `dev`. Il ne sera pas démarré en production.
- **Rebuild Forcé** : Utilisez toujours `--build` après des modifications des Dockerfiles ou du code pour forcer la reconstruction des images.
- **Docker Compose Moderne** : Ces commandes nécessitent Docker Compose v2 ou plus récent.

## Accès aux Services

### Mode Développement
- **Frontend (client-dev)** : http://localhost:5173
- **Backend (backend-dev)** : http://localhost:3000
- **Mailpit** : http://localhost:8025

### Mode Production
- **Frontend (client-prod)** : http://localhost (:80)
- **Backend (backend-prod)** : http://localhost:3000 (reverse proxy mapping)

