FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
