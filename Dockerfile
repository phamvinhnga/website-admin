FROM node:16.15.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
EXPOSE 4200
CMD ["npm", "start"]