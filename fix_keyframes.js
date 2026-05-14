const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const keyframes = `
@keyframes float-blob {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -40px) scale(1.1); }
  100% { transform: translate(-20px, 20px) scale(0.9); }
}
@keyframes float-blob-reverse {
  0% { transform: translate(0, 0) scale(0.9); }
  50% { transform: translate(-40px, 30px) scale(1.1); }
  100% { transform: translate(20px, -20px) scale(1); }
}
@keyframes spin-slow {
  100% { transform: rotate(360deg); }
}
</style>`;

if (!content.includes('@keyframes float-blob')) {
  // Try case-insensitive replace of </style>
  content = content.replace(/<\/style>/i, keyframes);
  fs.writeFileSync('index.html', content, 'utf8');
  console.log('Appended keyframes');
} else {
  console.log('Keyframes already exist');
}
