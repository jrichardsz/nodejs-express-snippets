FROM node:14

COPY . /opt/
RUN cd /opt && npm install
EXPOSE 8080

ENV PORT 8080

WORKDIR /opt/

ENTRYPOINT ["npm","run","start"]
