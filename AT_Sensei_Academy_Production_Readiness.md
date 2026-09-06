# AT Sensei Academy — Production Readiness & Deployment Guide

> **Repository:** `HYDRAGAMERZOFFICIAL/AT-sensai-Academy`
>
> **Architecture:** React + Vite frontend / Spring Boot backend / PostgreSQL database
>
> **Recommended hosting:** Vercel (frontend) + Render (backend) + PostgreSQL (Render or Neon)
>
> **Status:** Production-readiness checklist and deployment runbook

---

## 1. Executive Summary

AT Sensei Academy is structured as a monorepo containing two independently deployable applications:

```text
AT-sensai-Academy/
├── frontend/     # React 18 + Vite 5
└── backend/      # Spring Boot 3.3.3 + Java 17
```

The frontend is suitable for Vercel deployment. The backend is a long-running Spring Boot application and should be deployed as a separate service. The current H2 in-memory database configuration is intended for local development and must not be used as the production database.

### Production architecture

```text
                         INTERNET
                             |
                             v
                    +----------------+
                    |     VERCEL     |
                    | React + Vite   |
                    +-------+--------+
                            |
                         HTTPS API
                            |
                            v
                    +----------------+
                    |     RENDER     |
                    |  Spring Boot   |
                    |    Java 17     |
                    +-------+--------+
                            |
                           JDBC
                            |
                            v
                    +----------------+
                    |   PostgreSQL   |
                    | Persistent DB  |
                    +----------------+
```

---

# 2. Repository Assessment

## 2.1 Frontend

Current frontend characteristics:

- React 18
- React DOM 18
- React Router DOM 6
- Vite 5
- `npm run build` is already defined
- Frontend root directory: `frontend`

Expected production commands:

```bash
npm install
npm run build
```

Output:

```text
frontend/dist/
```

## 2.2 Backend

Current backend characteristics:

- Spring Boot 3.3.3
- Java 17 target
- Spring Web
- Spring Data JPA
- Spring Validation
- H2 runtime dependency
- PostgreSQL runtime dependency
- Maven build
- REST API architecture

## 2.3 Current deployment blockers

Before production deployment, address these items:

- Remove any machine-specific Java compiler path from `pom.xml`.
- Do not use H2 in-memory storage in production.
- Use PostgreSQL in production.
- Do not use `localhost:8081` as the frontend API target after deployment.
- Configure the frontend API URL through Vite environment variables.
- Configure backend CORS for the deployed frontend domain.
- Configure Spring Boot to listen on the platform-provided `PORT`.
- Add SPA routing rewrites for React Router.
- Keep secrets out of Git.
- Add production health checks.
- Test the production build locally before deployment.

---

# 3. Git Repository Hygiene

Before deployment, inspect the repository for:

```text
.env
.env.*
*.key
*.pem
*.p12
*.jks
credentials.json
service-account*.json
application-prod.properties
database dumps
passwords
API keys
JWT secrets
private certificates
```

Do not commit production secrets.

Recommended `.gitignore` additions:

```gitignore
# Environment files
.env
.env.*
!.env.example

# Node
node_modules/
frontend/dist/

# Java / Maven
backend/target/

# IDE
.idea/
.vscode/
*.iml

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Secrets
*.pem
*.key
*.p12
*.jks
credentials.json
service-account*.json
```

If a secret was already committed, rotating the secret is required. Simply deleting the file from the latest commit is not sufficient if the secret exists in Git history.

---

# 4. Backend Maven Configuration

## 4.1 Remove machine-specific compiler configuration

The backend must not contain a Windows-specific compiler executable such as:

```xml
<executable>C:\Program Files\Java\jdk-22\bin\javac.exe</executable>
```

Use a portable configuration:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.13.0</version>
    <configuration>
        <release>17</release>
    </configuration>
</plugin>
```

The cloud build environment should provide Java 17.

## 4.2 Verify Maven build locally

From the backend directory:

```bash
cd backend
mvn clean package
```

If Maven Wrapper is committed:

```bash
./mvnw clean package
```

On Windows:

```cmd
mvnw.cmd clean package
```

Expected result:

```text
BUILD SUCCESS
```

The generated JAR should appear under:

```text
backend/target/
```

---

# 5. Production Database

## 5.1 Do not use H2 in production

Current development database:

```text
jdbc:h2:mem:atsenseidb
```

This is an in-memory database.

Characteristics:

- Data exists only while the JVM is running.
- Restarting the backend can destroy the database.
- It is unsuitable for persistent production application data.
- It is useful for local development and testing.

Production should use PostgreSQL.

## 5.2 PostgreSQL environment variables

Recommended backend variables:

```text
DB_URL=jdbc:postgresql://HOST:5432/DATABASE
DB_USERNAME=DATABASE_USERNAME
DB_PASSWORD=DATABASE_PASSWORD
```

Never commit these values to Git.

---

# 6. Production `application.properties`

Use environment variables for production configuration.

Recommended structure:

```properties
# ================================================================
# AT SENSEI ACADEMY — PRODUCTION
# ================================================================

spring.application.name=AT Sensei Academy Backend

# Platform-provided port
server.port=${PORT:8081}
server.address=0.0.0.0

# ================================================================
# DATABASE
# ================================================================

spring.datasource.url=${DB_URL}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

# ================================================================
# JPA / HIBERNATE
# ================================================================

spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=false

spring.jpa.properties.hibernate.format_sql=false

spring.jpa.open-in-view=false

# ================================================================
# H2 CONSOLE
# ================================================================

spring.h2.console.enabled=false

# ================================================================
# LOGGING
# ================================================================

logging.level.root=INFO
logging.level.com.atsensei.academy=INFO
logging.level.org.springframework.web=INFO
logging.level.org.hibernate.SQL=WARN
```

### Important

For a mature production system, replace:

```properties
spring.jpa.hibernate.ddl-auto=update
```

with a controlled migration strategy such as Flyway or Liquibase.

For the first deployment, `update` can be used if the project is still in active development, but it should be treated as a transitional configuration.

---

# 7. Spring Boot Port Configuration

Cloud platforms commonly provide the HTTP port through an environment variable.

Use:

```properties
server.port=${PORT:8081}
```

Meaning:

```text
Local:
PORT is absent
    |
    v
8081

Cloud:
PORT is supplied by platform
    |
    v
Spring Boot uses supplied port
```

Do not hard-code only:

```properties
server.port=8081
```

for a platform deployment that requires the provided port.

---

# 8. Backend Dockerfile

Create:

```text
backend/Dockerfile
```

Recommended Dockerfile:

```dockerfile
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
```

The platform should still provide the actual runtime `PORT`.

If the Maven Wrapper is preferred and committed, the build stage can use the wrapper instead.

---

# 9. Backend Local Production Test

Before deploying:

```bash
cd backend
mvn clean package -DskipTests
```

Then run:

```bash
java -jar target/*.jar
```

Set production-like variables locally.

Example on PowerShell:

```powershell
$env:DB_URL="jdbc:postgresql://HOST:5432/DATABASE"
$env:DB_USERNAME="USERNAME"
$env:DB_PASSWORD="PASSWORD"
$env:PORT="8081"

java -jar target/*.jar
```

Check:

```text
http://localhost:8081
```

Test at least:

- health endpoint
- authentication endpoint
- public API
- protected API
- database read
- database write
- invalid request
- unauthorized request
- CORS behavior

---

# 10. Backend Health Endpoint

Production monitoring is easier when the application has a simple health endpoint.

Preferred endpoint:

```text
GET /actuator/health
```

If Spring Boot Actuator is added, configure it appropriately.

Dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Recommended exposure:

```properties
management.endpoints.web.exposure.include=health,info
management.endpoint.health.show-details=never
```

The deployment platform can use the health endpoint to determine whether the application is responding.

If Actuator is not added, implement a simple application health controller instead.

---

# 11. CORS Configuration

The production frontend and backend will have different origins.

Example:

```text
Frontend:
https://at-sensei-academy.vercel.app

Backend:
https://atsensei-backend.onrender.com
```

The backend must allow the actual frontend origin.

Example Spring configuration:

```java
@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {

        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOrigins(
            List.of(
                "https://YOUR-FRONTEND-DOMAIN.vercel.app"
            )
        );

        config.setAllowedMethods(
            List.of(
                "GET",
                "POST",
                "PUT",
                "PATCH",
                "DELETE",
                "OPTIONS"
            )
        );

        config.setAllowedHeaders(List.of("*"));

        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}
```

Replace:

```text
YOUR-FRONTEND-DOMAIN.vercel.app
```

with the actual Vercel production domain.

Do not use unrestricted credentials with:

```text
Access-Control-Allow-Origin: *
```

---

# 12. Frontend API Configuration

The existing development Vite proxy points API requests to:

```text
http://localhost:8081
```

That is valid only during local development.

Production must use the deployed backend URL.

## 12.1 Environment variable

Create:

```text
frontend/.env.example
```

```env
VITE_API_URL=http://localhost:8081
```

Do not commit the real production value in `.env`.

## 12.2 Production value

In Vercel:

```text
VITE_API_URL=https://YOUR-BACKEND-DOMAIN
```

Example:

```text
VITE_API_URL=https://atsensei-backend.onrender.com
```

## 12.3 API helper

Create a centralized API configuration:

```javascript
const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8081";

export default API_URL;
```

Then use:

```javascript
fetch(`${API_URL}/api/...`)
```

Do not scatter hard-coded production URLs throughout React components.

---

# 13. Vite Development Proxy

The Vite proxy should remain development-only.

Example:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    server: {
        port: 3000,

        proxy: {
            "/api": {
                target: "http://localhost:8081",
                changeOrigin: true
            }
        }
    }
});
```

The proxy is not the production API connection.

Production requests should use:

```text
VITE_API_URL
```

---

# 14. React Router and Vercel

Because the application uses React Router, direct navigation to routes such as:

```text
/login
/dashboard
/courses
/admin
```

can return a Vercel 404 without a rewrite.

Create:

```text
frontend/vercel.json
```

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

Test:

1. Open homepage.
2. Navigate to a React route.
3. Refresh the page.
4. Open the route directly in a new browser tab.
5. Confirm it does not return 404.

---

# 15. Frontend Build Configuration

The Vercel project should use:

```text
Framework Preset:
Vite

Root Directory:
frontend

Install Command:
npm install

Build Command:
npm run build

Output Directory:
dist
```

The repository already defines:

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
}
```

---

# 16. Vercel Deployment

## Step 1 — Open Vercel

Sign in to Vercel using the GitHub account that has access to the repository.

## Step 2 — Import repository

Import:

```text
HYDRAGAMERZOFFICIAL/AT-sensai-Academy
```

## Step 3 — Configure root

Set:

```text
Root Directory:
frontend
```

## Step 4 — Build

Use:

```text
Build Command:
npm run build

Output Directory:
dist
```

## Step 5 — Environment variable

Add:

```text
VITE_API_URL
```

Production value:

```text
https://YOUR-BACKEND-DOMAIN
```

## Step 6 — Deploy

Click:

```text
Deploy
```

---

# 17. Render Backend Deployment

## Step 1 — Create PostgreSQL

Create a PostgreSQL database on Render or use a managed PostgreSQL provider.

Record:

```text
Host
Port
Database
Username
Password
```

Construct:

```text
jdbc:postgresql://HOST:5432/DATABASE
```

## Step 2 — Create Web Service

Create:

```text
New Web Service
```

Connect:

```text
HYDRAGAMERZOFFICIAL/AT-sensai-Academy
```

## Step 3 — Configure

Recommended:

```text
Service name:
atsensei-backend

Branch:
main

Root directory:
backend

Runtime:
Docker

Dockerfile:
Dockerfile
```

## Step 4 — Environment variables

Add:

```text
DB_URL
DB_USERNAME
DB_PASSWORD
```

Also add any application-specific secrets required by the source code.

## Step 5 — Deploy

Start the deployment.

Wait for:

```text
Build successful
Deploy successful
Service live
```

---

# 18. Connect Vercel to Render

After Render provides the backend URL:

```text
https://YOUR-BACKEND-DOMAIN
```

Set in Vercel:

```text
VITE_API_URL=https://YOUR-BACKEND-DOMAIN
```

Redeploy the frontend.

The final request path should be:

```text
Browser
   |
   v
Vercel React Application
   |
   | HTTPS
   v
Spring Boot API
   |
   | JDBC
   v
PostgreSQL
```

---

# 19. Production Environment Variables

## Backend

Required:

```text
PORT
DB_URL
DB_USERNAME
DB_PASSWORD
```

Potential application-specific variables:

```text
JWT_SECRET
JWT_EXPIRATION
CORS_ALLOWED_ORIGINS
MAIL_HOST
MAIL_PORT
MAIL_USERNAME
MAIL_PASSWORD
MAIL_FROM
```

Only add variables actually used by the application.

## Frontend

Required:

```text
VITE_API_URL
```

Potential variables:

```text
VITE_APP_NAME
VITE_PUBLIC_SITE_URL
```

Only variables prefixed with `VITE_` should be considered public frontend configuration.

Never put private credentials in:

```text
VITE_*
```

because Vite embeds these values into the browser bundle.

---

# 20. Authentication Security

Before production, verify:

- Passwords are never stored in plain text.
- Password hashing is enabled.
- Authentication failures do not reveal sensitive information.
- JWT/session secrets are stored as environment variables.
- Tokens have appropriate expiration.
- Protected endpoints enforce authorization server-side.
- Admin endpoints cannot be accessed by ordinary users.
- IDs and ownership are validated server-side.
- CORS is restricted.
- Sensitive information is not logged.
- Error responses do not expose stack traces.

Never rely on frontend route protection alone.

---

# 21. Authorization

For every privileged endpoint, verify authorization on the backend.

Example:

```text
Frontend:
"Hide admin button"

is NOT security.

Backend:
"Reject request unless authenticated user has ADMIN role"

IS security.
```

Test:

```text
Anonymous user
Authenticated normal user
Authenticated admin
Invalid token
Expired token
Modified token
```

---

# 22. API Security Checklist

Test every API category for:

```text
Authentication
Authorization
Input validation
SQL injection resistance
Mass assignment
IDOR / object ownership
Rate abuse
CORS
HTTP methods
Error handling
Sensitive data exposure
```

Never trust:

```text
user ID
role
institution ID
student ID
course ID
admin flag
```

when these are supplied directly by the client.

Derive sensitive identity information from the authenticated server-side context where appropriate.

---

# 23. Database Production Checklist

Before using the production database:

- Create backups.
- Confirm database timezone expectations.
- Confirm connection limits.
- Confirm indexes.
- Confirm foreign keys.
- Confirm unique constraints.
- Confirm nullable columns.
- Confirm cascading behavior.
- Confirm transaction boundaries.
- Confirm seed data strategy.
- Confirm migration strategy.

Do not use production as a testing database.

---

# 24. Database Migration Strategy

Initial development can use:

```properties
spring.jpa.hibernate.ddl-auto=update
```

For long-term production:

```text
Application
    |
    v
Migration Tool
    |
    v
PostgreSQL Schema
```

Recommended migration tools:

```text
Flyway
or
Liquibase
```

Migration files should be versioned in Git.

Never manually modify production schema without documenting the change.

---

# 25. Logging

Production logs should be useful without exposing secrets.

Never log:

```text
Passwords
JWT tokens
Session tokens
Database passwords
API keys
Full payment information
Sensitive personal information
```

Use:

```text
INFO
WARN
ERROR
```

Avoid permanently enabling verbose SQL/debug logging in production.

---

# 26. Error Handling

Production API responses should not expose Java stack traces.

Bad:

```json
{
    "error": "NullPointerException",
    "stackTrace": "..."
}
```

Preferred:

```json
{
    "success": false,
    "message": "An unexpected error occurred."
}
```

For validation errors:

```json
{
    "success": false,
    "message": "Validation failed",
    "errors": {
        "email": "Invalid email address"
    }
}
```

Implement centralized exception handling with:

```java
@RestControllerAdvice
```

---

# 27. HTTPS

Production traffic should use HTTPS.

Expected:

```text
https://frontend-domain
https://backend-domain
```

Avoid:

```text
http://
```

for public production API communication.

Never send authentication credentials over unencrypted HTTP.

---

# 28. Custom Domain

After the Vercel deployment works:

```text
Vercel
    |
    v
Add Domain
```

Example:

```text
www.atsenseiacademy.com
```

Then update backend CORS:

```text
https://www.atsenseiacademy.com
```

Update:

```text
VITE_API_URL
```

only if the backend URL changes.

---

# 29. Recommended Domain Architecture

A clean production setup:

```text
www.atsenseiacademy.com
        |
        v
      Vercel
        |
        | HTTPS API
        v
api.atsenseiacademy.com
        |
        v
     Render
        |
        v
   PostgreSQL
```

This is preferable to exposing internal implementation details to users.

---

# 30. Frontend Production Test

After Vercel deployment, test:

### Navigation

```text
/
 /login
 /register
 /dashboard
 /courses
 /profile
 /admin
```

### Browser refresh

Refresh every important route.

### API

Open browser DevTools:

```text
Network
```

Verify requests go to:

```text
https://api.yourdomain.com/api/...
```

and not:

```text
localhost:8081
```

### Console

Confirm there are no:

```text
CORS errors
404 errors
Mixed-content errors
JavaScript runtime errors
Failed fetch errors
```

---

# 31. Backend Production Test

Verify:

```text
GET health endpoint
GET public API
POST login
POST protected operation
GET authenticated resource
PUT/PATCH operation
DELETE operation
Invalid request
Unauthorized request
Forbidden request
Database read
Database write
```

---

# 32. End-to-End Test

Perform a complete user journey.

Example:

```text
Open website
    ↓
Register
    ↓
Login
    ↓
Dashboard
    ↓
Load user data
    ↓
Create/update record
    ↓
Refresh page
    ↓
Confirm data persisted
    ↓
Logout
    ↓
Attempt protected page
    ↓
Confirm access denied
```

Do the same for administrator functionality.

---

# 33. Cold Start Considerations

If using a free or low-resource backend host, the backend may sleep or take time to wake.

Symptoms can include:

```text
First request slow
Timeout during first API call
Frontend appears stuck
```

Handle this gracefully in the frontend with:

```text
Loading...
Retry
Server unavailable
```

Do not assume every request completes instantly.

---

# 34. Production Deployment Checklist

## Repository

- [ ] No passwords in Git
- [ ] No API keys in Git
- [ ] No private certificates in Git
- [ ] `.gitignore` configured
- [ ] README updated
- [ ] Production branch identified

## Backend

- [ ] Java 17 build works
- [ ] Windows compiler path removed
- [ ] Maven build succeeds
- [ ] Docker build succeeds
- [ ] `PORT` supported
- [ ] PostgreSQL configured
- [ ] H2 disabled
- [ ] Health endpoint available
- [ ] CORS configured
- [ ] Error handling configured
- [ ] Authentication tested
- [ ] Authorization tested
- [ ] Logs reviewed

## Database

- [ ] PostgreSQL created
- [ ] Credentials stored as secrets
- [ ] Schema created
- [ ] Foreign keys verified
- [ ] Indexes reviewed
- [ ] Backup strategy defined
- [ ] Migration strategy defined

## Frontend

- [ ] `npm install` succeeds
- [ ] `npm run build` succeeds
- [ ] Vercel root directory = `frontend`
- [ ] Output = `dist`
- [ ] `VITE_API_URL` configured
- [ ] `vercel.json` added
- [ ] React routes tested
- [ ] API requests tested
- [ ] CORS tested
- [ ] Browser console clean

## Production

- [ ] HTTPS works
- [ ] Custom domain configured
- [ ] Backend URL works
- [ ] Database persists data
- [ ] Authentication works
- [ ] Logout works
- [ ] Admin authorization works
- [ ] Error pages work
- [ ] Mobile layout tested
- [ ] Production monitoring enabled
- [ ] Backup plan documented

---

# 35. Troubleshooting

## Error: Vercel build fails

Check:

```bash
cd frontend
npm install
npm run build
```

Fix local build errors before redeploying.

---

## Error: `Cannot find module`

Run:

```bash
npm install
```

Check:

```text
frontend/package.json
frontend/package-lock.json
```

Commit both files when dependency changes are intentional.

---

## Error: Frontend calls localhost

Search the frontend:

```text
localhost:8081
```

Replace production API references with:

```javascript
import.meta.env.VITE_API_URL
```

---

## Error: CORS policy blocked

Verify:

```text
Frontend origin
        |
        v
Spring Boot CORS allowed origins
```

Do not solve production CORS by blindly allowing every origin.

---

## Error: Database connection refused

Check:

```text
DB_URL
DB_USERNAME
DB_PASSWORD
PostgreSQL status
network access
SSL requirements
```

Also inspect backend logs.

---

## Error: Spring Boot exits immediately

Check:

```text
Java version
database configuration
environment variables
Docker logs
application startup logs
```

The service must remain running after startup.

---

## Error: React route gives 404 after refresh

Verify:

```text
frontend/vercel.json
```

contains:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

---

## Error: Data disappears after restart

This indicates the application is still using H2 in-memory storage or another non-persistent data source.

Verify:

```text
DB_URL
spring.datasource.driver-class-name
spring.jpa.database-platform
```

Production should point to PostgreSQL.

---

# 36. Recommended Deployment Order

Do not deploy everything simultaneously.

Use this sequence:

```text
1. Fix backend pom.xml
        ↓
2. Verify backend build
        ↓
3. Create PostgreSQL
        ↓
4. Configure backend environment
        ↓
5. Deploy backend
        ↓
6. Test backend APIs
        ↓
7. Fix frontend API configuration
        ↓
8. Add Vercel SPA rewrite
        ↓
9. Deploy frontend
        ↓
10. Configure VITE_API_URL
        ↓
11. Test frontend + backend
        ↓
12. Configure CORS
        ↓
13. Test authentication
        ↓
14. Test database persistence
        ↓
15. Add custom domain
        ↓
16. Run production checklist
```

---

# 37. Rollback Strategy

Every production deployment should be reversible.

Before a significant release:

```text
Current working deployment
        |
        v
Create Git commit/tag
        |
        v
Deploy new version
        |
        v
Run smoke tests
```

If the deployment fails:

```text
Rollback
    ↓
Previous known-good version
```

Do not make emergency production changes without committing the final state back to Git.

---

# 38. Recommended Git Workflow

Use:

```text
main
```

for production-ready code.

For development:

```text
feature/*
fix/*
```

Example:

```bash
git checkout -b fix/production-deployment
```

After testing:

```bash
git add .
git commit -m "Prepare application for production deployment"
git push origin fix/production-deployment
```

Merge only after validation.

---

# 39. Final Production Architecture

The target system should be:

```text
                         USERS
                           |
                           v
                +----------------------+
                |        VERCEL        |
                |                      |
                | React 18             |
                | Vite 5               |
                | React Router         |
                +----------+-----------+
                           |
                           | HTTPS
                           |
                           v
                +----------------------+
                |        RENDER        |
                |                      |
                | Spring Boot 3.3.3    |
                | Java 17              |
                | REST API             |
                | JPA / Hibernate      |
                +----------+-----------+
                           |
                           | JDBC
                           |
                           v
                +----------------------+
                |      POSTGRESQL      |
                |                      |
                | Persistent Data      |
                | Backups              |
                +----------------------+
```

---

# 40. Definition of Production Ready

AT Sensei Academy should only be considered production-ready when all of the following are true:

```text
[ ] Frontend builds successfully
[ ] Backend builds successfully
[ ] Backend starts in a clean cloud environment
[ ] Backend uses PostgreSQL
[ ] No H2 production dependency/configuration is active
[ ] No localhost API URL exists in production code paths
[ ] VITE_API_URL is configured
[ ] CORS is configured
[ ] React Router works after refresh
[ ] HTTPS is active
[ ] Authentication works
[ ] Authorization works
[ ] Passwords are hashed
[ ] Secrets are not committed
[ ] Database data persists after backend restart
[ ] Error responses do not expose stack traces
[ ] Production logs do not expose secrets
[ ] Database backup strategy exists
[ ] Migration strategy exists
[ ] Health monitoring exists
[ ] Mobile UI tested
[ ] Desktop UI tested
[ ] End-to-end user flow tested
[ ] Admin flow tested
[ ] Rollback path exists
```

---

# 41. Quick Reference

## Frontend

```text
Directory:
frontend

Build:
npm run build

Output:
dist

Hosting:
Vercel
```

## Backend

```text
Directory:
backend

Build:
mvn clean package

Runtime:
Java 17

Hosting:
Render

Database:
PostgreSQL
```

## Environment

### Vercel

```text
VITE_API_URL=https://YOUR-BACKEND-DOMAIN
```

### Render

```text
PORT=<platform-provided>
DB_URL=jdbc:postgresql://HOST:5432/DATABASE
DB_USERNAME=<database-user>
DB_PASSWORD=<database-password>
```

---

# 42. Important Project-Specific Warnings

### Warning 1 — H2

Do not deploy the local:

```text
jdbc:h2:mem:atsenseidb
```

configuration as the production database.

### Warning 2 — Windows Java path

Do not deploy a Maven configuration containing:

```text
C:\Program Files\Java\jdk-22\bin\javac.exe
```

### Warning 3 — localhost

Do not use:

```text
http://localhost:8081
```

as the production frontend API endpoint.

### Warning 4 — secrets

Do not put:

```text
DB_PASSWORD
JWT_SECRET
API_KEY
```

inside committed source code.

### Warning 5 — Vite public variables

Anything exposed through:

```text
VITE_*
```

can become part of the browser application. Never store private secrets there.

---

# 43. Final Deployment Target

```text
GitHub
   |
   +------------------------+
   |                        |
   v                        v
Vercel                   Render
   |                        |
React/Vite              Spring Boot
   |                        |
   |                        v
   |                   PostgreSQL
   |                        |
   +------ HTTPS API -------+
```

This is the recommended production structure for the current AT Sensei Academy repository.

---

## Deployment completion criteria

Deployment is complete only after:

1. Vercel serves the React application.
2. Render serves the Spring Boot API.
3. PostgreSQL stores persistent application data.
4. Vercel communicates with Render through HTTPS.
5. CORS allows only the intended frontend origin.
6. React Router routes work on direct navigation and refresh.
7. Authentication and authorization work end-to-end.
8. Data remains available after backend restart.
9. No production secret is committed to Git.
10. Health checks and logs confirm the services are operating correctly.
