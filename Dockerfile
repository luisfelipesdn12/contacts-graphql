FROM node:16

WORKDIR /contacts-graphql
COPY . .

ARG PORT=6060
ENV PORT=$PORT
EXPOSE $PORT

RUN npm install
RUN npm run build
ENTRYPOINT npm run start
