@echo off
echo ===================================================
echo Starting AT Sensei Academy Full-Stack Production System
echo Backend: Spring Boot 3 (Java 17/22 on port 8081)
echo Frontend: React + Vite (Port 3000)
echo ===================================================

start "AT Sensei Backend (Spring Boot)" cmd /k "set JAVA_HOME=C:\Program Files\Java\jdk-22&& java -jar backend\target\academy-backend-1.0.0-SNAPSHOT.jar"
start "AT Sensei Frontend (React Vite)" cmd /k "cd frontend && npm run dev"

echo System started! Open http://localhost:3000 in your browser.
