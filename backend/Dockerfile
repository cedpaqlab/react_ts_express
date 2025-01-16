# Utilise une image Node.js
FROM node:18

# Définir le dossier de travail
WORKDIR /app

# Copier uniquement les fichiers essentiels
COPY package*.json ./

# Installer les dépendances (inclut devDependencies)
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port utilisé par le backend
EXPOSE 3000

# Lancer l'application en mode développement avec nodemon
CMD ["npx", "nodemon", "--exec", "ts-node", "./src/index.ts", "--watch", "./src", "--ext", ".ts"]
