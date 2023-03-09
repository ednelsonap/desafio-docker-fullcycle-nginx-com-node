FROM nginx

RUN apt-get update && apt-get install vim -y

RUN mkdir /var/www/html -p && touch /var/www/html/index.php
COPY html /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d/

