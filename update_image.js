const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const newImageHTML = `<div class="hero-image-wrap load-anim load-4" style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        
        <!-- Animated Background Elements -->
        <div style="position: absolute; width: 350px; height: 350px; background: radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%); border-radius: 50%; filter: blur(50px); animation: float-blob 10s ease-in-out infinite alternate; top: -5%; left: -5%; z-index: 0;"></div>
        
        <div style="position: absolute; width: 300px; height: 300px; background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%); border-radius: 50%; filter: blur(50px); animation: float-blob-reverse 12s ease-in-out infinite alternate; bottom: -5%; right: -5%; z-index: 0;"></div>
        
        <!-- Rotating gradient ring -->
        <div style="position: absolute; width: 380px; height: 380px; border-radius: 50%; background: conic-gradient(from 0deg, transparent, rgba(79,70,229,0.15), rgba(168,85,247,0.2), transparent 60%); animation: spin-slow 15s linear infinite; z-index: 0;"></div>
        
        <!-- Image Container (Glassmorphism Frame) -->
        <div style="position: relative; z-index: 1; padding: 12px; border-radius: 32px; background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.7); box-shadow: 0 30px 60px rgba(17,24,39,0.08), inset 0 0 20px rgba(255,255,255,0.4);">
          <img src="Photo/Photo.jpg" alt="Mohd Hammad" loading="lazy" style="display: block; width: 310px; height: 390px; object-fit: cover; object-position: top; border-radius: 22px; filter: contrast(1.05) saturate(1.05); box-shadow: 0 4px 10px rgba(0,0,0,0.1);" />
        </div>
      </div>
    </div>
  </section>`;

content = content.replace(/<div class="hero-image-wrap load-anim load-4">[\s\S]*?<\/section>/, newImageHTML);

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
  content = content.replace('</style>', keyframes);
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Hero image updated');
