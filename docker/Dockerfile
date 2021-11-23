FROM node:14

WORKDIR /opt/
COPY . /opt/

RUN npm install
RUN npm run build

EXPOSE 8080
ENV PORT 8080
ENTRYPOINT ["npm","run","start"]
