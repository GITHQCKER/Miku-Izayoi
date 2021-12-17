pkg clean
pkg install tty-clock -y
pkg install nodejs -y
pkg install sox -y
pkg install jq -y
pkg install figlet -y
pkg install wget -y
pkg install ffmpeg libwebp -y
pkg install tesseract -y
pkg install mc -y
pkg install imagemagick -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

tty-clock -s -S -x -c -C 2 -b -B
clear
node index
