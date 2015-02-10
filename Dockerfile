FROM ubuntu

RUN apt-get update
RUN apt-get install -y npm git
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g bower
#RUN bower --allow-root --config.interactive=false install

# add check for all items in bower_components/
# maybe just the number of items is enough?
