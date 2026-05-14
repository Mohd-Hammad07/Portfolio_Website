import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# 1. Cursor & hover
# Remove custom cursor CSS
content = re.sub(r'/\* CUSTOM CURSOR \*/.*?/\* NAVBAR \*/', '/* NAVBAR */', content, flags=re.DOTALL)
content = re.sub(r'<div id="cursor"></div>\s*<div id="cursor-trail"></div>', '', content)
content = re.sub(r'cursor:\s*none;', '', content)
content = re.sub(r'body\.mobile-cursor\s*\{\s*cursor:\s*auto;\s*\}', '', content)
content = re.sub(r'// Custom cursor.*?// Navbar scroll', '// Navbar scroll', content, flags=re.DOTALL)

# Education hover
content = content.replace('.edu-item {', '.edu-item { transition: transform 0.2s, box-shadow 0.2s; ')
content = content.replace('.cert-card:hover {', '.edu-item:hover, .cert-card:hover {')

# 2. Name & titles
content = re.sub(r"strings:\s*\['Data Analyst',\s*'BI Analyst',\s*'Business Analyst',\s*'Power BI Expert',\s*'Insight Storyteller'\]", "strings: ['Business Analyst']", content)
# Remove floating badges if they say "Available Now", "Power BI Expert", etc.
content = re.sub(r'<div class="floating-badge fb-1">.*?</div>', '', content)
content = re.sub(r'<div class="floating-badge fb-2">.*?</div>', '', content)
content = re.sub(r'<div class="floating-badge fb-3">.*?</div>', '', content)

# 3. About / experience
content = re.sub(r'<div class="stat-card">\s*<div class="stat-num counter" data-target="2" data-suffix="\+">0</div>\s*<div class="stat-label">Years Analytics Experience</div>\s*</div>', '', content, flags=re.DOTALL)
content = content.replace('open to opportunities in Saudi Arabia\n            and EMEA.', 'open to opportunities globally.')
content = content.replace('open to opportunities in Saudi Arabia and EMEA.', 'open to opportunities globally.')
content = content.replace('Open to Relocation: Riyadh, KSA &amp; EMEA', 'Open to Relocation Globally')
content = re.sub(r'Open to Business Analyst, Data Analyst &amp; BI Analyst roles in Saudi Arabia \(Riyadh, Jeddah\) and EMEA.', 'Open to Business Analyst, Data Analyst &amp; BI Analyst roles globally.', content)
content = content.replace('New Delhi, India (Open to Riyadh KSA &amp;\n                EMEA)', 'New Delhi, India (Open to Relocation Globally)')
content = content.replace('New Delhi, India (Open to Riyadh KSA &amp; EMEA)', 'New Delhi, India (Open to Relocation Globally)')

# 4. Small cleanups - ? and 
content = content.replace('?', '')
content = content.replace('', '-')
# Make Turning Data Into Decisions without question mark (already done by removing ?)

# 5. Technical skills - remove specific tools
content = re.sub(r'<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Tableau \(Basic\)</span>.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Looker</span>.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Streamlit &amp; LangChain</span>.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<div class="skill-item">\s*<div class="skill-meta"><span class="skill-name">Azure Data Services</span>.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)

# Write back
with open('index2.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Pass 1 done")
