FROM node:4.5.0

WORKDIR /var/app
VOLUME /var/app
COPY package.json /var/app/
RUN npm install
COPY / /var/app/
EXPOSE 3000 8080
CMD [ "npm" , "start" ]
