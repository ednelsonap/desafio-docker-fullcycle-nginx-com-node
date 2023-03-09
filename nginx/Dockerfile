FROM nginx

RUN apt-get update && apt-get install vim -y

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d/