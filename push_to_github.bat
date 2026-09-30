@echo off
title Push Frappe Tracker to GitHub
echo ========================================================
echo   Push Frappe 80-Days Tracker to Your GitHub Repo
echo ========================================================
echo.
echo Step 1: Apne GitHub account par ek naya repository banayein.
echo Step 2: Niche apne GitHub repository ka link paste karein.
echo Example: https://github.com/yourusername/frappe-80days-tracker.git
echo.
set /p REPO_URL="Enter your GitHub Repository URL: "

if "%REPO_URL%"=="" (
    echo Repo URL khali hai. Exit kar rahe hain...
    pause
    exit /b
)

echo.
echo Git initialize aur code push kar rahe hain...
git init
git add .
git commit -m "Initial commit: Frappe 80-Days Tracker with Phone Notifications & PWA"
git branch -M main
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo   Mubarak ho! Code GitHub par push ho chuka hai!
echo ========================================================
echo.
echo Ab GitHub par:
echo 1. Settings me jayein -^> Pages me jayein.
echo 2. Source me 'GitHub Actions' select karein.
echo 3. Phone me GitHub Pages ka link open karein aur 'Install' dabayein!
echo.
pause
