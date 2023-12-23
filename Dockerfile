FROM node:20 

LABEL name="alan"

WORKDIR D:/Projects/To-Do-App-

RUN npm install -g electron --save-dev 
RUN apt-get update && \ 
    apt-get install -y libnss3 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libgtk-3-0 libgbm1 libasound2 && \ 
    rm -rf /var/lib/apt/lists/* 

COPY package*.json ./

RUN npm install 

ENV DISPLAY=:0 

COPY . . 

EXPOSE 3000 

CMD ["npm", "start"] 
