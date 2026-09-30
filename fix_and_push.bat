@echo off
title Push Android APK Fix to GitHub
echo ========================================================
echo   Pushing Android APK Build Fix to GitHub...
echo ========================================================
echo.

git add .
git commit -m "Fix Android SDK setup to use native GitHub runner"
git push

echo.
echo ========================================================
echo   Fix GitHub par push ho chuki hai!
echo ========================================================
echo.
echo Ab GitHub Actions tab me check karein, build pass ho jayega!
echo.
pause
