FROM node:20 as builder

WORKDIR /app
COPY package*.json ./
COPY compile.js ./
COPY cheatsheet.md ./
RUN npm install
RUN npm run compile

FROM nginx:alpine
COPY --from=builder /app/out/cheatsheet.html /usr/share/nginx/html/index.html
COPY img/ /usr/share/nginx/html/img/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
