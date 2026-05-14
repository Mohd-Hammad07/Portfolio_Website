const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const newHeroHTML = `<!-- HERO -->
<section id="home" style="position: relative; overflow: hidden; background: #FAFAFB;">
  
  <!-- Premium Animated Background Elements -->
  <!-- Subtle Noise Texture overlay -->
  <div style="position: absolute; inset: 0; background: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E'); opacity: 0.8; z-index: 0; pointer-events: none;"></div>
  
  <!-- Abstract Animated Grid -->
  <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px); background-size: 50px 50px; z-index: 0; animation: bg-pan 30s linear infinite;"></div>

  <!-- Animated Glowing Orbs -->
  <div style="position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 60%); border-radius: 50%; filter: blur(60px); animation: float-glow 15s ease-in-out infinite alternate; top: -10%; left: -5%; z-index: 0; pointer-events: none;"></div>
  <div style="position: absolute; width: 500px; height: 500px; background: radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 60%); border-radius: 50%; filter: blur(60px); animation: float-glow-reverse 18s ease-in-out infinite alternate; bottom: -10%; right: 10%; z-index: 0; pointer-events: none;"></div>

  <!-- Hero Content Wrap -->
  <div class="hero-inner-v3" style="position: relative; z-index: 1; display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: 40px; max-width: 1300px; margin: 0 auto; padding: 150px 5% 80px 5%; min-height: 100vh;">
    
    <div class="hero-left" style="padding-right: 20px;">
      <div style="font-family: 'Inter', sans-serif; font-weight: 600; color: var(--blue); margin-bottom: 12px; font-size: 1.15rem; letter-spacing: 1px; animation: fade-up 0.8s ease-out forwards;">Hello, I'm</div>
      <h1 class="hero-name" style="font-size: clamp(3.2rem, 6vw, 5rem); color: #111827; letter-spacing: -1.5px; animation: fade-up 1s ease-out forwards; animation-delay: 0.1s; opacity: 0; line-height: 1.1; margin-bottom: 8px;">Mohd Hammad</h1>
      <div style="font-family: 'Inter', sans-serif; font-size: 1.35rem; font-weight: 500; color: #4B5563; margin-bottom: 24px; animation: fade-up 1s ease-out forwards; animation-delay: 0.2s; opacity: 0;">Business Analyst | Data Analyst | BI Analyst</div>
      <p class="hero-bio" style="font-size: 1.15rem; max-width: 580px; color: #4B5563; line-height: 1.8; animation: fade-up 1s ease-out forwards; animation-delay: 0.3s; opacity: 0;">Business Intelligence &amp; Data Analytics professional skilled in Power BI, SQL, Python, and dashboard development. Passionate about transforming raw data into actionable business insights and impactful decisions.</p>
      
      <div class="hero-btns" style="animation: fade-up 1s ease-out forwards; animation-delay: 0.4s; opacity: 0; display: flex; gap: 16px; margin-top: 36px;">
        <a href="https://github.com/Mohd-Hammad07/Resume/raw/main/Mohd_Hammad_Resume.pdf" download target="_blank" rel="noopener noreferrer" style="background: linear-gradient(135deg, #111827, #1f2937); color: #fff; box-shadow: 0 4px 14px rgba(17,24,39,0.25); padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; font-family: 'Inter', sans-serif; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(17,24,39,0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(17,24,39,0.25)';">Download Resume</a>
        <a href="#projects" style="border: 1px solid #E5E7EB; color: #111827; background: rgba(255,255,255,0.8); backdrop-filter: blur(8px); padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; font-family: 'Inter', sans-serif; transition: all 0.3s; display: flex; align-items: center;" onmouseover="this.style.background='#fff'; this.style.borderColor='#D1D5DB'; this.style.transform='translateY(-3px)'; this.querySelector('i').style.transform='translateX(4px)';" onmouseout="this.style.background='rgba(255,255,255,0.8)'; this.style.borderColor='#E5E7EB'; this.style.transform='translateY(0)'; this.querySelector('i').style.transform='translateX(0)';">View My Work <i class="fas fa-arrow-right" style="transition: transform 0.3s; margin-left: 8px;"></i></a>
      </div>
      
      <div class="hero-socials" style="margin-top: 40px; animation: fade-up 1s ease-out forwards; animation-delay: 0.5s; opacity: 0; display: flex; gap: 24px;">
        <a href="https://www.linkedin.com/in/mohdhammad-business-analytics" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="color: #4B5563; font-size: 1.5rem; transition: color 0.3s, transform 0.3s;" onmouseover="this.style.color='var(--blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.color='#4B5563'; this.style.transform='translateY(0)';"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Mohd-Hammad07" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style="color: #4B5563; font-size: 1.5rem; transition: color 0.3s, transform 0.3s;" onmouseover="this.style.color='#111827'; this.style.transform='translateY(-3px)';" onmouseout="this.style.color='#4B5563'; this.style.transform='translateY(0)';"><i class="fab fa-github"></i></a>
        <a href="mailto:mohdhammad616@gmail.com" aria-label="Email" style="color: #4B5563; font-size: 1.5rem; transition: color 0.3s, transform 0.3s;" onmouseover="this.style.color='var(--blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.color='#4B5563'; this.style.transform='translateY(0)';"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
    
    <div class="hero-image-wrap" style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; perspective: 1000px; animation: fade-in 1.2s ease-out forwards; animation-delay: 0.3s; opacity: 0;">
      
      <!-- Interactive Parallax Wrapper -->
      <div id="parallax-img-wrap" style="position: relative; transform-style: preserve-3d; transition: transform 0.15s ease-out; width: 360px; height: 440px; display: flex; justify-content: center; align-items: center;">
      
        <!-- Premium Animated Glow Layers -->
        <div style="position: absolute; inset: -15px; border-radius: 38px; background: linear-gradient(45deg, rgba(79,70,229,0.6), rgba(168,85,247,0.6), rgba(59,130,246,0.6), rgba(79,70,229,0.6)); background-size: 300% 300%; filter: blur(25px); animation: gradient-flow 4s ease infinite; z-index: -2; opacity: 0.85; transform: translateZ(-20px);"></div>
        
        <!-- Rotating gradient rings (faster & smoother) -->
        <div style="position: absolute; width: 480px; height: 480px; border-radius: 50%; background: conic-gradient(from 0deg, transparent, rgba(79,70,229,0.4), rgba(168,85,247,0.4), transparent 60%); animation: spin-fast 6s linear infinite; filter: blur(15px); z-index: -1; transform: translateZ(-10px);"></div>
        <div style="position: absolute; width: 440px; height: 440px; border-radius: 50%; background: conic-gradient(from 180deg, transparent, rgba(59,130,246,0.3), rgba(79,70,229,0.5), transparent 60%); animation: spin-fast-reverse 8s linear infinite; filter: blur(20px); z-index: -1; transform: translateZ(-15px);"></div>

        <!-- Glassmorphism Frame Container -->
        <div style="position: relative; z-index: 1; padding: 12px; border-radius: 32px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 30px 60px rgba(17,24,39,0.12), inset 0 0 20px rgba(255,255,255,0.6); transform: translateZ(15px); transition: box-shadow 0.3s ease;">
          <img src="Photo/Photo.jpg" alt="Mohd Hammad" loading="lazy" style="display: block; width: 340px; height: 420px; object-fit: cover; object-position: top; border-radius: 22px; filter: contrast(1.08) saturate(1.1); box-shadow: 0 8px 24px rgba(0,0,0,0.15);" />
          
          <!-- Subtle inner animated gradient border -->
          <div style="position: absolute; inset: 0; border-radius: 32px; border: 2px solid transparent; background: linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.1), rgba(255,255,255,0.9)) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude; animation: shimmer-border 2.5s linear infinite; z-index: 2; pointer-events: none;"></div>
        </div>
        
      </div>
    </div>
  </div>
</section>`;

// Replace home section
content = content.replace(/<!-- HERO -->[\s\S]*?<\/section>/, newHeroHTML);

const newStyles = `
@keyframes bg-pan {
  from { background-position: 0 0; }
  to { background-position: -50px -50px; }
}
@keyframes float-glow {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, -50px) scale(1.1); }
  100% { transform: translate(-30px, 30px) scale(0.9); }
}
@keyframes float-glow-reverse {
  0% { transform: translate(0, 0) scale(0.9); }
  50% { transform: translate(-50px, 50px) scale(1.1); }
  100% { transform: translate(30px, -30px) scale(1); }
}
@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes spin-fast {
  100% { transform: translateZ(-10px) rotate(360deg); }
}
@keyframes spin-fast-reverse {
  100% { transform: translateZ(-15px) rotate(-360deg); }
}
@keyframes shimmer-border {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>`;

// Replace old float-blob styles with new ones if they exist
content = content.replace(/@keyframes float-blob \{[\s\S]*?<\/style>/, newStyles);
if (!content.includes('@keyframes float-glow')) {
    content = content.replace('</style>', newStyles);
}

// Add parallax script
const parallaxScript = `
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const wrap = document.getElementById('parallax-img-wrap');
      if(wrap) {
        document.addEventListener('mousemove', (e) => {
          const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
          const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
          wrap.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
        });
        document.addEventListener('mouseleave', () => {
          wrap.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
        });
      }
    });
  </script>
</body>`;

content = content.replace('</body>', parallaxScript);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Hero v3 updated');
