@echo off
setlocal enabledelayedexpansion
echo ===================================================
echo   AT SENSEI ACADEMY — FULL STACK STARTUP
echo   Backend: Spring Boot 3 (Java on Port 8081)
echo   Frontend: React Vite (Port 3000)
echo ===================================================

echo [1/3] Checking and freeing ports 8081 and 3000 if occupied...
powershell -Command "Get-NetTCPConnection -LocalPort 8081,3000 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }" >nul 2>&1

echo [2/3] Starting Spring Boot Backend...
start "AT Sensei Backend (Spring Boot :8081)" cmd /k "set JAVA_HOME=C:\Program Files\Java\jdk-22&& java -jar backend\target\academy-backend-1.0.0-SNAPSHOT.jar"

echo [3/3] Starting React Frontend...
start "AT Sensei Frontend (React Vite :3000)" cmd /k "cd frontend && npm run dev"

echo.
echo ===================================================
echo System started successfully!
echo Web App: http://localhost:3000
echo API:     http://localhost:8081/api/v1/programs
echo H2 DB:   http://localhost:8081/h2-console
echo ===================================================
