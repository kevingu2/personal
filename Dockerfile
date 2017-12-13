FROM armv7/armhf-ubuntu

MAINTAINER "Kevin Gu" <kkevingu@gmail.com>

# Install nginx
RUN apt-get install nginx=1.10.1

# Set registry for npm
RUN npm config set registry http://registry.npmjs.org/

# Add configuration for nginx
ADD config/nginx.conf /etc/nginx/conf.d/default.conf
