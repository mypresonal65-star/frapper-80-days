const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');

// Ensure www folder exists
if (!fs.existsSync(wwwDir)) {
  fs.mkdirSync(wwwDir, { recursive: true });
}

// Files to copy to www for Android app
const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'sw.js',
  'icon-192.svg',
  'icon-512.svg'
];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(wwwDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> www/${file}`);
  }
});

console.log('✅ Web assets successfully built into www/ directory!');
