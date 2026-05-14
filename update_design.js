const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. UPDATE FONTS
content = content.replace(/<link[\s\n]*href="https:\/\/fonts.googleapis.com\/css2family=Playfair\+Display.*?rel="stylesheet" \/>/s, `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet" />`);

// If it wasn't caught due to formatting:
if (!content.includes('family=Sora')) {
  // Let's just find the playfair link and replace it
  let match = content.match(/<link[^>]*Playfair[^>]*>/i);
  if (match) {
    content = content.replace(match[0], `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet" />`);
  }
}

// 2. CSS VARIABLES
content = content.replace(
  /:root \{[\s\S]*?--radius: 16px;\n    \}/,
  `:root {
      --bg: #FAFAFB;
      --bg2: #FFFFFF;
      --bg3: #F3F4F6;
      --navy: #111827;
      --blue: #4F46E5;
      --text: #4B5563;
      --card: rgba(255, 255, 255, 0.7);
      --shadow: 0 10px 40px rgba(17, 24, 39, 0.05);
      --radius: 20px;
    }`
);

// Fonts
content = content.replace(/font-family:\s*'DM Sans',\s*sans-serif;/g, "font-family: 'Inter', sans-serif;");
content = content.replace(/font-family:\s*'Playfair Display',\s*serif;/g, "font-family: 'Sora', sans-serif;");
content = content.replace(/font-family:\s*'IBM Plex Mono',\s*monospace;/g, "font-family: 'Inter', sans-serif; font-weight: 500; letter-spacing: 1px;");

// Button hover styles (general)
content = content.replace(/\.btn-primary:hover \{[\s\S]*?\}/, '.btn-primary:hover { background: var(--blue); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3); }');
content = content.replace(/\.btn-outline:hover \{[\s\S]*?\}/, '.btn-outline:hover { background: var(--navy); border-color: var(--navy); color: #fff; transform: translateY(-3px); }');

// Glassmorphism cards and navbar
content = content.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.88\);/, 'background: rgba(255, 255, 255, 0.65); border-bottom: 1px solid rgba(255,255,255,0.3);');
content = content.replace(/background:\s*var\(--card\);/g, 'background: var(--card); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5);');

// 3. HERO SECTION
const heroHTML = `  <!-- HERO -->
  <section id="home">
    <div class="hero-inner">
      <div class="hero-left">
        <div style="font-family: 'Inter', sans-serif; font-weight: 600; color: var(--blue); margin-bottom: 12px; font-size: 1.1rem; letter-spacing: 1px;" class="load-anim load-1">Hello, I'm</div>
        <h1 class="hero-name load-anim load-2" style="font-size: clamp(3rem, 6vw, 4.5rem); color: #111827; letter-spacing: -1.5px;">Mohd Hammad</h1>
        <div class="load-anim load-3" style="font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 500; color: #4B5563; margin-bottom: 24px;">Business Analyst | Data Analyst | BI Analyst</div>
        <p class="hero-bio load-anim load-3" style="font-size: 1.1rem; max-width: 540px; color: #4B5563; line-height: 1.7;">Business Intelligence &amp; Data Analytics professional skilled in Power BI, SQL, Python, and dashboard development. Passionate about transforming raw data into actionable business insights and impactful decisions.</p>
        <div class="hero-btns load-anim load-4">
          <a href="https://github.com/Mohd-Hammad07/Resume/raw/main/Mohd_Hammad_Resume.pdf" class="btn-primary" download target="_blank" rel="noopener noreferrer" style="background: #111827; color: #fff; box-shadow: 0 4px 14px rgba(17,24,39,0.25);">Download Resume</a>
          <a href="#projects" class="btn-outline" style="border-color: #E5E7EB; color: #111827; background: #fff;" onmouseover="this.querySelector('i').style.transform='translateX(4px)'" onmouseout="this.querySelector('i').style.transform='translateX(0)'">View My Work <i class="fas fa-arrow-right" style="transition: transform 0.2s; margin-left: 6px;"></i></a>
        </div>
        <div class="hero-socials load-anim load-4" style="margin-top: 32px;">
          <a href="https://www.linkedin.com/in/mohdhammad-business-analytics" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Mohd-Hammad07" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="mailto:mohdhammad616@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div class="hero-image-wrap load-anim load-4">
        <div class="hero-blob" style="background: radial-gradient(circle, rgba(79,70,229,0.15) 0%, rgba(255,255,255,0) 70%); border-radius: 50%; animation: none; filter: blur(40px);"></div>
        <img src="Photo/Photo.jpg" alt="Mohd Hammad - Data &amp; BI Analyst" class="hero-photo" loading="lazy" style="border: none; box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-radius: 24px; filter: contrast(1.05);" />
        <div class="floating-badge" style="position:absolute; bottom: 30px; left: -20px; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); padding: 14px 22px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); color: #111827; font-weight: 600; font-family: 'Inter', sans-serif; font-size: 0.95rem; border: 1px solid rgba(255,255,255,0.5); z-index: 2;">
          <i class="fas fa-chart-line" style="color: var(--blue); margin-right: 8px;"></i> Data-Driven Problem Solver
        </div>
      </div>
    </div>
  </section>`;

content = content.replace(/<!-- HERO -->[\s\S]*?<\/section>/, heroHTML);

// 4. CONTACT SECTION
const contactHTML = `  <!-- CONTACT -->
  <section id="contact">
    <div class="section-inner">
      <div data-aos="fade-up" style="text-align: center; margin-bottom: 60px;">
        <h2 class="section-title" style="font-size: 2.5rem; margin-bottom: 16px;">Let's <span>Connect</span></h2>
        <p style="color:#4b5563; max-width:600px; margin: 0 auto; line-height:1.8; font-size: 1.05rem;">Open to Business Analyst, Data Analyst, and BI Analyst opportunities. Let's connect and build impactful solutions together.</p>
      </div>
      <div class="contact-grid" style="grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: start;">
        <div class="contact-form" data-aos="fade-right" style="background: var(--card); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.5); border-radius: var(--radius); padding: 40px; box-shadow: var(--shadow);">
          <form id="contactForm">
            <div class="form-group" style="margin-bottom: 20px;">
              <input type="text" id="fname" placeholder="Full Name" required style="width: 100%; padding: 16px 20px; border-radius: 12px; border: 1px solid #E5E7EB; background: #fff; font-family: 'Inter', sans-serif; transition: all 0.2s;" />
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
              <input type="email" id="femail" placeholder="Email Address" required style="width: 100%; padding: 16px 20px; border-radius: 12px; border: 1px solid #E5E7EB; background: #fff; font-family: 'Inter', sans-serif; transition: all 0.2s;" />
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
              <input type="text" id="fsubject" placeholder="Subject" required style="width: 100%; padding: 16px 20px; border-radius: 12px; border: 1px solid #E5E7EB; background: #fff; font-family: 'Inter', sans-serif; transition: all 0.2s;" />
            </div>
            <div class="form-group" style="margin-bottom: 24px;">
              <textarea id="fmessage" placeholder="Message" required style="width: 100%; padding: 16px 20px; border-radius: 12px; border: 1px solid #E5E7EB; background: #fff; font-family: 'Inter', sans-serif; min-height: 140px; resize: none; transition: all 0.2s;"></textarea>
            </div>
            <button type="submit" class="form-submit" style="width: 100%; padding: 16px; border-radius: 12px; background: linear-gradient(135deg, #111827, #1f2937); color: #fff; font-weight: 600; font-size: 1rem; border: none; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 14px rgba(17,24,39,0.2);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 24px rgba(17,24,39,0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(17,24,39,0.2)';">Send Message <i class="fas fa-paper-plane" style="margin-left: 8px;"></i></button>
          </form>
        </div>
        
        <div class="contact-info-cards" data-aos="fade-left" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <a href="mailto:mohdhammad616@gmail.com" class="contact-card" style="background: var(--card); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.6); border-radius: 16px; padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; box-shadow: var(--shadow);" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #EEF2FF; color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;"><i class="fas fa-envelope"></i></div>
            <span style="color: #111827; font-weight: 500; font-size: 0.95rem;">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/mohdhammad-business-analytics" target="_blank" rel="noopener noreferrer" class="contact-card" style="background: var(--card); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.6); border-radius: 16px; padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; box-shadow: var(--shadow);" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #EEF2FF; color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;"><i class="fab fa-linkedin-in"></i></div>
            <span style="color: #111827; font-weight: 500; font-size: 0.95rem;">LinkedIn</span>
          </a>
          <a href="https://github.com/Mohd-Hammad07" target="_blank" rel="noopener noreferrer" class="contact-card" style="background: var(--card); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.6); border-radius: 16px; padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; box-shadow: var(--shadow);" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #EEF2FF; color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;"><i class="fab fa-github"></i></div>
            <span style="color: #111827; font-weight: 500; font-size: 0.95rem;">GitHub</span>
          </a>
          <div class="contact-card" style="background: var(--card); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.6); border-radius: 16px; padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; box-shadow: var(--shadow);" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #EEF2FF; color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;"><i class="fas fa-map-marker-alt"></i></div>
            <span style="color: #111827; font-weight: 500; font-size: 0.95rem;">New Delhi, India</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;

content = content.replace(/<!-- CONTACT -->[\s\S]*?<\/section>/, contactHTML);

// Fix typed.js (remove init)
content = content.replace(/new Typed\('#typed', \{[\s\S]*?\}\);/, '');

// Make sure contact-card and form CSS rules in <style> are overridden appropriately or let inline take over
// Ensure we didn't leave any weird artifacts
fs.writeFileSync('index.html', content, 'utf8');
console.log('Update finished.');
