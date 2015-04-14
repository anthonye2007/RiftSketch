#! /bin/bash
# Pass in port number as argument
if !$1
  exit 1
hs -p $1 &
exit 0 # success code
