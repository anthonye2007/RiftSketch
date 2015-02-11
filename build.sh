#!/bin/bash

# start docker image with -v flag for source folder
sudo docker run -it -v /home/anthony/RiftSketch:/src riftsketch

# cd to src
cd /src

# run bower
bower --allow-root --config.interactive=false install

# check number of items in bower_components/

