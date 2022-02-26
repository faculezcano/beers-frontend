FROM node:16

RUN npm install -g @angular/cli

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ng serve --host 0.0.0.0
