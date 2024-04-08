ARG NODE_VERSION=21.7.2

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Copie du reste des fichiers
COPY . .

# Exposer le port 5173
EXPOSE 5173

# Commande pour lancer l'application
CMD ["npm", "run", "dev"]
