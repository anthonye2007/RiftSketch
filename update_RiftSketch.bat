echo "Removing directory"
rmdir /s /q C:\Users\Administrator\Documents\code\RiftSketch

echo "Cloning repo"
git clone https://github.com/anthonye2007/RiftSketch.git C:\Users\Administrator\Documents\code\RiftSketch
cd C:\Users\Administrator\Documents\code\RiftSketch

echo "Install back end dependencies"
call npm install
echo "Install front-end dependencies"
call bower install

echo "Running tests"
call npm test