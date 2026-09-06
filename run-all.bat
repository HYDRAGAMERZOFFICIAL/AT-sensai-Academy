@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   AT SENSEI ACADEMY -- FULL STACK PLATFORM STARTUP
echo   Backend  : Spring Boot 3 (Java 17/22 on Port 8081)
echo   Frontend : React Vite (Port 3000)
echo ========================================================

echo [1/3] Freeing ports 8081 and 3000 if currently occupied...
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 8081,3000 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }" >nul 2>&1

echo [2/3] Checking Spring Boot backend artifact...
if not exist "backend\target\academy-backend-1.0.0-SNAPSHOT.jar" (
    echo Building backend JAR package...
    cd backend && call mvn package -DskipTests && cd ..
)

echo Starting Spring Boot Backend (Port 8081)...
start "AT Sensei Academy - Java Backend (Port 8081)" cmd /c "cd backend && set JAVA_HOME=C:\Program Files\Java\jdk-22&& set PATH=C:\Program Files\Java\jdk-22\bin;%%PATH%%&& java -jar target\academy-backend-1.0.0-SNAPSHOT.jar"

echo [3/3] Starting React Frontend Dev Server (Port 3000)...
start "AT Sensei Academy - React Frontend (Port 3000)" cmd /c "cd frontend && npm run dev"

echo.
echo ========================================================
echo   Services Started Successfully!
echo   * React Web App  : http://localhost:3000
echo   * REST APIs      : http://localhost:8081/api/v1/programs
echo   * H2 DB Console  : http://localhost:8081/h2-console
echo     - JDBC URL     : jdbc:h2:mem:atsenseidb
echo     - User Name    : sa
echo     - Password     : (leave empty)
echo ========================================================
