FROM node:17.7.1-alpine
WORKDIR /app
COPY . ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
EXPOSE 3000
CMD ["npm", "start"]
