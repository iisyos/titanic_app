FROM node:17.4

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

COPY ./ /app/

WORKDIR /app

RUN npm install
