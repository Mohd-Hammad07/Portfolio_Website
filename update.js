const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Cursor
content = content.replace(/\/\* CUSTOM CURSOR \*\/[\s\S]*?\/\* NAVBAR \*\//, '/* NAVBAR */');
content = content.replace(/<div id="cursor"><\/div>\s*<div id="cursor-trail"><\/div>/, '');
content = content.replace(/cursor:\s*none;/g, '');
content = content.replace(/body\.mobile-cursor\s*\{\s*cursor:\s*auto;\s*\}/, '');
content = content.replace(/\/\/ Custom cursor[\s\S]*?\/\/ Navbar scroll/, '// Navbar scroll');

// Education hover
content = content.replace('.edu-item {', '.edu-item { transition: transform 0.2s, box-shadow 0.2s; ');
content = content.replace('.cert-card:hover {', '.edu-item:hover, .cert-card:hover {');

// 2. Name & titles
content = content.replace(/strings:\s*\['Data Analyst',\s*'BI Analyst',\s*'Business Analyst',\s*'Power BI Expert',\s*'Insight Storyteller'\]/, "strings: ['Business Analyst']");
content = content.replace(/<div class="floating-badge fb-1">.*?<\/div>/, '');
content = content.replace(/<div class="floating-badge fb-2">.*?<\/div>/, '');
content = content.replace(/<div class="floating-badge fb-3">.*?<\/div>/, '');

// 3. About
content = content.replace(/<div class="stat-card">\s*<div class="stat-num counter" data-target="2" data-suffix="\+">0<\/div>\s*<div class="stat-label">Years Analytics Experience<\/div>\s*<\/div>/g, '');
content = content.replace(/open to opportunities in Saudi Arabia(\s+)and EMEA\./g, 'open to opportunities globally.');
content = content.replace(/open to opportunities in Saudi Arabia and EMEA\./g, 'open to opportunities globally.');
content = content.replace(/Open to Relocation: Riyadh, KSA &amp; EMEA/g, 'Open to Relocation Globally');
content = content.replace(/Open to Business Analyst, Data Analyst &amp; BI Analyst roles in Saudi Arabia \(Riyadh, Jeddah\) and EMEA\./g, 'Open to Business Analyst, Data Analyst, and BI Analyst roles globally.');
content = content.replace(/New Delhi, India \(Open to Riyadh KSA &amp;(\s+)EMEA\)/g, 'New Delhi, India (Open to Relocation Globally)');
content = content.replace(/New Delhi, India \(Open to Riyadh KSA &amp; EMEA\)/g, 'New Delhi, India (Open to Relocation Globally)');

// 4. Cleanups
content = content.replace(/\?/g, '');
content = content.replace(/\uFFFD/g, '-'); // Unicode replacement character

// 5. Technical skills
content = content.replace(/<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Tableau \(Basic\)<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
content = content.replace(/<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Looker<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
content = content.replace(/<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Streamlit &amp; LangChain<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
content = content.replace(/<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Azure Data Services<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');

// 6. Contact
let contactMatch = content.match(/<div class="contact-grid">([\s\S]*?)<\/section>/);
if (contactMatch) {
  let gridContent = contactMatch[1];
  let infoMatch = gridContent.match(/<div class="contact-info-cards" data-aos="fade-right">([\s\S]*?)<\/div>\s*<div class="contact-form" data-aos="fade-left">/);
  let formMatch = gridContent.match(/<div class="contact-form" data-aos="fade-left">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
  
  if (infoMatch && formMatch) {
    let infoHTML = `<div class="contact-info-cards" data-aos="fade-left" style="display:flex; flex-direction:row; gap:16px; flex-wrap:wrap; align-content:flex-start;">${infoMatch[1]}</div>`;
    let formHTML = `<div class="contact-form" data-aos="fade-right">${formMatch[1]}</div>`;
    
    // Remove phone
    infoHTML = infoHTML.replace(/<a href="tel:\+918126875262" class="contact-card">[\s\S]*?<\/a>/, '');
    
    // Remove text labels
    infoHTML = infoHTML.replace(/<div class="contact-card-text">[\s\S]*?<\/div>/g, '');
    
    // Change cards style to be square icons
    infoHTML = infoHTML.replace(/class="contact-card"/g, 'class="contact-card icon-only" style="padding: 14px; justify-content: center;"');
    
    // Make location icon clickable instead of default cursor div
    infoHTML = infoHTML.replace(/<div class="contact-card icon-only" style="padding: 14px; justify-content: center;" style="cursor:default;">/g, '<a href="#" class="contact-card icon-only" style="padding: 14px; justify-content: center;">');
    infoHTML = infoHTML.replace(/<\/div>\s*<\/div>$/g, '</a></div>'); // Roughly fixes the unclosed div from changing to <a>
    
    let newGridContent = `\n      ${formHTML}\n      ${infoHTML}\n    </div>\n  </div>`;
    content = content.replace(contactMatch[0], `<div class="contact-grid">${newGridContent}</section>`);
  }
}

fs.writeFileSync('index.html', content, 'utf8');
console.log("Done");
