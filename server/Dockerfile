FROM node:10

WORKDIR /StudentDevelopers

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]


