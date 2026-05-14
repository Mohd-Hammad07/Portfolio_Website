const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/Open to roles in Saudi Arabia and EMEA\./g, 'Open to roles globally.');

fs.writeFileSync('index.html', content, 'utf8');
