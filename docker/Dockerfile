FROM ubuntu

RUN apt-get update
RUN apt-get install -y npm openssh-server git libfontconfig
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN mkdir /var/app

RUN npm install -g bower http-server

EXPOSE 8080
RUN cd /var/app
RUN git clone https://github.com/anthonye2007/RiftSketch.git /var/app/RiftSketch

WORKDIR /var/app/RiftSketch

RUN npm config set production
RUN /var/app/RiftSketch/build.sh
