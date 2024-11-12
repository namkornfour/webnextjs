# ใช้ Windows Server Core 2019 เป็นฐาน
#FROM node:18

FROM mcr.microsoft.com/windows/servercore:ltsc2019

# ติดตั้ง Node.js
# ติดตั้ง Node.js เวอร์ชัน 18 (หรือเวอร์ชันใหม่กว่า)
RUN powershell -Command \
    Invoke-WebRequest -Uri https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi -OutFile nodejs.msi; \
    Start-Process msiexec.exe -ArgumentList '/i', 'nodejs.msi', '/quiet', '/norestart' -NoNewWindow -Wait; \
    Remove-Item -Force nodejs.msi
RUN node -v
RUN npm -v

# กำหนด working directory
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies

RUN npm install

#RUN npm install -g nodemon

RUN npm install sharp

# คัดลอกไฟล์ทั้งหมด
COPY . .
#install prisma
RUN npx prisma generate

# สร้างโปรเจค
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# เริ่มต้นการทำงาน
CMD ["cmd", "/c", "npm start"]
#CMD ["npm", "start"]