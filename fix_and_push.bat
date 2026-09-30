@echo off
title Push Android APK Fix to GitHub
echo ========================================================
echo   Pushing Android APK Build Fix to GitHub...
echo ========================================================
echo.

git add .
git commit -m "Fix webDir to www and add build script for Android APK"
git push

echo.
echo ========================================================
echo   Fix GitHub par push ho chuki hai!
echo ========================================================
echo.
echo Ab GitHub par Actions tab me jayein,
echo Build Android APK workflow automatically successfully run hoga!
echo.
pause
