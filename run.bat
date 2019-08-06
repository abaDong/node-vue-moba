start cmd /k "cd admin && npm run serve"
start cmd /k "cd server && npm run serve"
@echo off
choice /t 10 /d y /n >nul
start cmd /k "cd web&& npm run serve"