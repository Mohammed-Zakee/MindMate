@echo off
TITLE MindMate AI - Control Center
COLOR 0B

echo ===================================================
echo           🧠 MINDMATE AI - STARTUP SYSTEM
echo ===================================================
echo.

:: Check for node_modules
if not exist "server\node_modules" (
    echo 📦 Installing Backend Dependencies...
    cd server && npm install && cd ..
)

if not exist "frontend\node_modules" (
    echo 📦 Installing Frontend Dependencies...
    cd frontend && npm install && cd ..
)

echo 🚀 Starting Backend Server...
start "MindMate Backend" cmd /k "cd server && npm run dev"

echo ⏳ Waiting for Backend to initialize...
timeout /t 5 /nobreak > nul

echo 🧪 Seeding Database for testing...
powershell -Command "try { $res = Invoke-RestMethod -Uri 'http://localhost:5000/api/seed/seed'; Write-Host '✅ Seed Success: User alex@example.com is ready.' -ForegroundColor Green } catch { Write-Host '⚠️ Seed failed. Make sure MongoDB is running.' -ForegroundColor Yellow }"

echo 🎨 Starting Frontend UI...
start "MindMate Frontend" cmd /k "cd frontend && npm run dev"

echo 🌐 Launching MindMate AI in your browser...
timeout /t 5 /nobreak > nul
start http://localhost:5173/

echo.
echo ===================================================
echo ✨ SYSTEM IS LIVE!
echo.
echo Dashboard: http://localhost:5173/
echo Backend:   http://localhost:5000/
echo ===================================================
echo.
pause
