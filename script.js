// =================== CURSOR ===================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});

function animateFollower() {
  fx += (mx - fx - 18) * 0.12;
  fy += (my - fy - 18) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top = fy + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

function addHoverCursor(els) {
  els.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      follower.style.transform = 'scale(1.5)';
      follower.style.borderColor = 'var(--yellow)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
      follower.style.borderColor = 'var(--purple-light)';
    });
  });
}
addHoverCursor(document.querySelectorAll('a, button, .project-card'));

// =================== NAVBAR ===================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// =================== SCROLL REVEAL ===================
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// =================== SMOOTH SCROLL ===================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#contact' && document.getElementById('projectModal').classList.contains('open')) return;
    e.preventDefault();
    const t = document.querySelector(href);
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// =================== SHAPES ===================
document.querySelectorAll('.shape').forEach((s, i) => { s.style.animationDelay = (-i * 0.7) + 's'; });

// =================== PROJECT DATA ===================
const projects = [
  // SOCIAL MEDIA
  {
    id: 'sm1',
    cat: 'Social Media', year: '2024', client: 'NovaBrand Co.',
    title: 'Product Launch <span>Campaign</span>',
    desc: 'A high-impact Instagram campaign designed for a product launch. The series combined bold typography, gradient backgrounds, and motion-inspired layouts to maximize engagement. Each post was crafted to stop the scroll and communicate the product\'s energy in under 2 seconds.',
    details: [
      { label: 'Platform', value: 'Instagram', accent: false },
      { label: 'Posts', value: '12 Assets', accent: true },
      { label: 'Format', value: '1080×1080', accent: false },
      { label: 'Duration', value: '5 Days', accent: false },
    ],
    tools: ['Adobe Photoshop', 'Illustrator', 'After Effects'],
    heroBg: 'linear-gradient(135deg,#1a0a2e,#0d1a2e)',
    heroContent: `<div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;justify-content:center;padding:30px;">
      <div style="width:200px;height:200px;border-radius:28px;background:linear-gradient(135deg,#F8C200,#7B2FBE);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:44px;font-weight:800;color:white;box-shadow:0 30px 60px rgba(123,47,190,0.5);animation:cardFloat 3s ease-in-out infinite alternate;">NEW</div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div style="width:160px;height:90px;border-radius:18px;background:linear-gradient(135deg,#F8C200,#ff6b35);box-shadow:0 15px 35px rgba(248,194,0,0.3);animation:cardFloat 3.5s ease-in-out infinite alternate;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#0D0D0D;">LAUNCH</div>
        <div style="width:160px;height:90px;border-radius:18px;background:linear-gradient(135deg,#7B2FBE,#9B4FDE);box-shadow:0 15px 35px rgba(123,47,190,0.3);animation:cardFloat 4s ease-in-out infinite alternate;"></div>
      </div>
    </div>`,
    galleryItems: [
      { bg: 'linear-gradient(135deg,#0d0a2e,#2a0a4e)', content: `<div style="text-align:center;padding:40px;"><div style="font-family:'Syne',sans-serif;font-size:52px;font-weight:800;background:linear-gradient(135deg,#F8C200,#7B2FBE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;">NEW<br>ARRIVAL</div><div style="font-size:14px;color:rgba(255,255,255,0.4);margin-top:12px;letter-spacing:3px;">NOVABRAND CO.</div></div>` },
      { bg: 'linear-gradient(135deg,#1a0a0a,#0a1a0a)', content: `<div style="width:120px;height:120px;border-radius:20px;background:linear-gradient(135deg,#F8C200,#ff6b35);box-shadow:0 20px 40px rgba(248,194,0,0.4);"></div>` },
      { bg: 'linear-gradient(135deg,#0a0a1a,#1a0a1a)', content: `<div style="width:100px;height:100px;border-radius:50%;border:4px solid #7B2FBE;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:#F8C200;">50%</div>` },
    ]
  },
  {
    id: 'sm2',
    cat: 'Story Design', year: '2024', client: 'Horizon Agency',
    title: 'Brand Awareness <span>Series</span>',
    desc: 'A set of 8 Instagram Story templates designed to maintain consistent brand presence across daily posts. Focused on minimal layout, strong color contrast, and easy content swapping for the marketing team.',
    details: [
      { label: 'Platform', value: 'Instagram Stories', accent: false },
      { label: 'Templates', value: '8 Designs', accent: true },
      { label: 'Format', value: '1080×1920', accent: false },
      { label: 'Style', value: 'Minimal', accent: false },
    ],
    tools: ['Adobe Photoshop', 'Figma'],
    heroBg: 'linear-gradient(135deg,#0a1a0d,#0d0a1a)',
    heroContent: `<div style="display:flex;gap:16px;justify-content:center;align-items:center;padding:30px;">
      <div style="width:100px;height:180px;border-radius:20px;background:linear-gradient(180deg,#00f5a0,#7B2FBE);box-shadow:0 20px 40px rgba(0,0,0,0.5);animation:cardFloat 3s ease-in-out infinite alternate;"></div>
      <div style="width:100px;height:180px;border-radius:20px;background:linear-gradient(180deg,#F8C200,#ff6b35);box-shadow:0 20px 40px rgba(0,0,0,0.5);animation:cardFloat 4s ease-in-out infinite alternate;"></div>
      <div style="width:100px;height:180px;border-radius:20px;background:linear-gradient(180deg,#7B2FBE,#0a0a1a);box-shadow:0 20px 40px rgba(0,0,0,0.5);animation:cardFloat 3.5s ease-in-out infinite alternate;"></div>
    </div>`,
    galleryItems: [
      { bg: 'linear-gradient(135deg,#0a0a14,#140a14)', content: `<div style="display:flex;gap:20px;align-items:center;justify-content:center;width:100%;"><div style="width:80px;height:140px;border-radius:16px;background:linear-gradient(180deg,#00f5a0,#7B2FBE);"></div><div style="width:80px;height:140px;border-radius:16px;background:linear-gradient(180deg,#F8C200,#ff6b35);"></div><div style="width:80px;height:140px;border-radius:16px;background:linear-gradient(180deg,#9B4FDE,#ff9a3c);"></div><div style="width:80px;height:140px;border-radius:16px;background:linear-gradient(180deg,#4ecdc4,#7B2FBE);"></div></div>` },
      { bg: 'linear-gradient(135deg,#0a1a0d,#0a0a14)', content: `<div style="width:100px;height:100px;border-radius:20px;background:linear-gradient(135deg,#00f5a0,#7B2FBE);box-shadow:0 20px 40px rgba(0,245,160,0.3);"></div>` },
      { bg: 'linear-gradient(135deg,#1a0a0d,#0d1a0a)', content: `<div style="padding:20px;text-align:center;"><div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#F8C200;margin-bottom:8px;">HORIZON</div><div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:3px;">AGENCY</div></div>` },
    ]
  },
  {
    id: 'sm3',
    cat: 'Promotional Post', year: '2024', client: 'Flash Sale Store',
    title: 'Sale Event <span>Visual</span>',
    desc: 'Promotional graphics for a flash sale campaign. The brief was to create urgency with countdown elements, bold percentage displays, and warm gradient palettes that trigger impulsive clicks. The design achieved a 34% higher CTR than previous campaigns.',
    details: [
      { label: 'Platform', value: 'Multi-platform', accent: false },
      { label: 'Assets', value: '20+ Files', accent: true },
      { label: 'CTR Lift', value: '+34%', accent: true },
      { label: 'Campaign', value: '3 Days', accent: false },
    ],
    tools: ['Adobe Photoshop', 'Illustrator', 'Canva Pro'],
    heroBg: 'linear-gradient(135deg,#1a0d0a,#0a0d1a)',
    heroContent: `<div style="display:flex;gap:24px;align-items:center;justify-content:center;padding:30px;flex-wrap:wrap;">
      <div style="width:180px;height:180px;border-radius:24px;background:linear-gradient(135deg,#F8C200,#ff6b35);display:flex;align-items:center;justify-content:center;flex-direction:column;box-shadow:0 30px 60px rgba(248,194,0,0.4);animation:cardFloat 3s ease-in-out infinite alternate;">
        <div style="font-family:'Syne',sans-serif;font-size:56px;font-weight:800;color:#0D0D0D;line-height:1;">50%</div>
        <div style="font-size:14px;font-weight:600;color:#0D0D0D;letter-spacing:2px;">OFF</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="width:140px;height:80px;border-radius:16px;background:linear-gradient(135deg,#ff6b35,#F8C200);animation:cardFloat 4s ease-in-out infinite alternate;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:#0D0D0D;">BUY NOW</div>
        <div style="width:140px;height:80px;border-radius:16px;background:linear-gradient(135deg,#7B2FBE,#9B4FDE);animation:cardFloat 3.5s ease-in-out infinite alternate;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:white;letter-spacing:1px;">LIMITED TIME</div>
      </div>
    </div>`,
    galleryItems: [
      { bg: 'linear-gradient(135deg,#1a0500,#0a0014)', content: `<div style="display:flex;gap:16px;align-items:center;justify-content:center;"><div style="width:120px;height:120px;border-radius:20px;background:linear-gradient(135deg,#F8C200,#ff6b35);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:36px;font-weight:800;color:#0D0D0D;">50%</div><div style="width:120px;height:120px;border-radius:20px;background:linear-gradient(135deg,#ff6b35,#F8C200);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:36px;font-weight:800;color:#0D0D0D;">30%</div><div style="width:120px;height:120px;border-radius:20px;background:linear-gradient(135deg,#7B2FBE,#ff6b35);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:36px;font-weight:800;color:white;">70%</div></div>` },
      { bg: 'linear-gradient(135deg,#0a0300,#14000a)', content: `<div style="width:110px;height:110px;border-radius:50%;border:4px solid #F8C200;display:flex;align-items:center;justify-content:center;flex-direction:column;"><div style="font-family:'Syne',sans-serif;font-size:30px;font-weight:800;color:#F8C200;">3</div><div style="font-size:9px;color:rgba(255,255,255,0.5);letter-spacing:2px;">DAYS LEFT</div></div>` },
      { bg: 'linear-gradient(135deg,#1a0a00,#00051a)', content: `<div style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#F8C200;letter-spacing:-1px;">FLASH<br><span style="color:white;">SALE</span></div>` },
    ]
  },
  // PRINT
  {
    id: 'p1',
    cat: 'Brochure', year: '2023', client: 'Prime Solutions Ltd.',
    title: 'Corporate <span>Tri-Fold</span>',
    desc: 'A professional tri-fold brochure for a B2B consulting company. The design prioritized information hierarchy with a bold cover, clean data presentation on inner panels, and strong brand consistency throughout. Delivered in print-ready CMYK with bleed marks.',
    details: [
      { label: 'Size', value: 'A4 Tri-Fold', accent: false },
      { label: 'Color Mode', value: 'CMYK', accent: false },
      { label: 'Pages', value: '6 Panels', accent: true },
      { label: 'Print Ready', value: '✓ Yes', accent: true },
    ],
    tools: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
    heroBg: 'linear-gradient(135deg,#0f0f1a,#1a0f0f)',
    heroContent: `<div style="display:flex;gap:16px;align-items:center;justify-content:center;padding:30px;">
      <div style="width:140px;height:200px;border-radius:8px;background:white;box-shadow:0 30px 60px rgba(0,0,0,0.6);overflow:hidden;animation:cardFloat 3s ease-in-out infinite alternate;transform:rotate(-4deg);">
        <div style="height:70px;background:linear-gradient(135deg,#F8C200,#7B2FBE);"></div>
        <div style="padding:14px;"><div style="height:5px;background:#e0e0e0;border-radius:3px;margin-bottom:6px;"></div><div style="height:5px;background:#F8C200;border-radius:3px;width:60%;margin-bottom:6px;"></div><div style="height:5px;background:#e0e0e0;border-radius:3px;margin-bottom:6px;width:80%;"></div><div style="height:5px;background:#e0e0e0;border-radius:3px;width:70%;"></div></div>
      </div>
      <div style="width:140px;height:200px;border-radius:8px;background:white;box-shadow:0 30px 60px rgba(0,0,0,0.6);overflow:hidden;animation:cardFloat 4s ease-in-out infinite alternate;z-index:2;">
        <div style="height:40px;background:#0D0D0D;display:flex;align-items:center;justify-content:center;"><div style="font-family:'Syne',sans-serif;font-size:13px;font-weight:800;color:#F8C200;">PRIME</div></div>
        <div style="padding:14px;"><div style="height:5px;background:#e0e0e0;border-radius:3px;margin-bottom:6px;"></div><div style="height:5px;background:#e0e0e0;border-radius:3px;margin-bottom:6px;width:70%;"></div><div style="height:30px;background:#F8C200;border-radius:8px;margin-top:16px;display:flex;align-items:center;justify-content:center;"><div style="height:3px;width:50px;background:#0D0D0D;border-radius:2px;"></div></div></div>
      </div>
      <div style="width:140px;height:200px;border-radius:8px;background:white;box-shadow:0 30px 60px rgba(0,0,0,0.6);overflow:hidden;animation:cardFloat 3.5s ease-in-out infinite alternate;transform:rotate(4deg);">
        <div style="height:70px;background:linear-gradient(135deg,#7B2FBE,#9B4FDE);"></div>
        <div style="padding:14px;"><div style="height:5px;background:#e0e0e0;border-radius:3px;margin-bottom:6px;"></div><div style="height:5px;background:#e0e0e0;border-radius:3px;width:80%;margin-bottom:6px;"></div><div style="height:5px;background:#7B2FBE;border-radius:3px;width:50%;"></div></div>
      </div>
    </div>`,
    galleryItems: [
      { bg: 'linear-gradient(135deg,#0f0814,#14080f)', content: `<div style="display:flex;gap:6px;align-items:center;justify-content:center;padding:20px;"><div style="width:90px;height:130px;border-radius:5px;background:white;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.5);"><div style="height:44px;background:linear-gradient(135deg,#F8C200,#7B2FBE);"></div><div style="padding:8px;"><div style="height:3px;background:#eee;border-radius:2px;margin-bottom:4px;"></div><div style="height:3px;background:#F8C200;border-radius:2px;width:60%;"></div></div></div><div style="width:90px;height:130px;border-radius:5px;background:white;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.5);"><div style="padding:8px;margin-top:4px;"><div style="height:3px;background:#eee;border-radius:2px;margin-bottom:4px;"></div><div style="height:3px;background:#eee;border-radius:2px;margin-bottom:4px;width:80%;"></div><div style="height:3px;background:#eee;border-radius:2px;width:60%;"></div></div></div><div style="width:90px;height:130px;border-radius:5px;background:white;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.5);"><div style="height:44px;background:#0D0D0D;display:flex;align-items:center;justify-content:center;"><div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:800;color:#F8C200;">CONTACT</div></div><div style="padding:8px;"><div style="height:3px;background:#eee;border-radius:2px;margin-bottom:4px;"></div><div style="height:3px;background:#eee;border-radius:2px;width:70%;"></div></div></div></div>` },
      { bg: '#f5f5f5', content: `<div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#F8C200,#7B2FBE);box-shadow:0 20px 40px rgba(123,47,190,0.4);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:white;">P</div>` },
      { bg: 'linear-gradient(135deg,#14080a,#08140a)', content: `<div style="font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;text-align:center;">PRINT READY<br><span style="color:#F8C200;font-size:18px;font-family:'Syne',sans-serif;font-weight:800;">CMYK</span><br>300 DPI</div>` },
    ]
  },
  // LOGOS
  {
    id: 'l1',
    cat: 'Wordmark', year: '2024', client: 'Nova Tech Inc.',
    title: 'Nova Tech <span>Brand</span>',
    desc: 'Complete brand identity for a technology startup. The wordmark uses a custom-lettered approach with a gradient treatment that flows from yellow to purple — echoing the brand\'s vision of energy meeting intelligence. Delivered with full brand guidelines, color system, and icon variants.',
    details: [
      { label: 'Type', value: 'Full Branding', accent: false },
      { label: 'Variants', value: '6 Versions', accent: true },
      { label: 'Formats', value: 'SVG / PNG / PDF', accent: false },
      { label: 'Guidelines', value: '✓ Included', accent: true },
    ],
    tools: ['Adobe Illustrator', 'Figma', 'After Effects'],
    heroBg: 'linear-gradient(135deg,#0a0a14,#140a14)',
    heroContent: `<div style="display:flex;flex-direction:column;align-items:center;gap:28px;padding:40px;">
      <div style="font-family:'Syne',sans-serif;font-size:72px;font-weight:800;background:linear-gradient(135deg,#F8C200,#9B4FDE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-3px;animation:cardFloat 3s ease-in-out infinite alternate;">NOVA</div>
      <div style="display:flex;gap:20px;align-items:center;">
        <div style="background:#0D0D0D;padding:12px 24px;border-radius:10px;font-family:'Syne',sans-serif;font-size:22px;font-weight:800;background:linear-gradient(135deg,#F8C200,#9B4FDE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">NOVA</div>
        <div style="width:1px;height:30px;background:rgba(255,255,255,0.1);"></div>
        <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:white;">NOVA</div>
        <div style="width:1px;height:30px;background:rgba(255,255,255,0.1);"></div>
        <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#F8C200;">NOVA</div>
      </div>
    </div>`,
    galleryItems: [
      { bg: '#0D0D0D', content: `<div style="font-family:'Syne',sans-serif;font-size:60px;font-weight:800;background:linear-gradient(135deg,#F8C200,#9B4FDE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-3px;">NOVA</div>` },
      { bg: 'linear-gradient(135deg,#F8C200,#ff9a3c)', content: `<div style="font-family:'Syne',sans-serif;font-size:40px;font-weight:800;color:#0D0D0D;letter-spacing:-2px;">NOVA</div>` },
      { bg: '#7B2FBE', content: `<div style="font-family:'Syne',sans-serif;font-size:40px;font-weight:800;color:white;letter-spacing:-2px;">NOVA</div>` },
    ]
  },
  // UI/UX
  {
    id: 'u1',
    cat: 'Mobile App', year: '2024', client: 'FinFlow App',
    title: 'Finance Tracker <span>App</span>',
    desc: 'Full UI/UX design for a personal finance tracking mobile application. The dark dashboard interface prioritizes data readability with color-coded categories, animated charts, and a card-based layout that surfaces key spending insights at a glance. Delivered as interactive Figma prototype.',
    details: [
      { label: 'Platform', value: 'iOS & Android', accent: false },
      { label: 'Screens', value: '24 Screens', accent: true },
      { label: 'Prototype', value: 'Figma', accent: false },
      { label: 'Style', value: 'Dark UI', accent: false },
    ],
    tools: ['Figma', 'Principle', 'Adobe XD'],
    heroBg: '#1a1a2e',
    heroContent: `<div style="display:flex;gap:20px;align-items:center;justify-content:center;padding:30px;">
      <div style="width:120px;height:220px;background:#0f0f23;border-radius:28px;border:5px solid #1a1a3e;box-shadow:0 30px 60px rgba(0,0,0,0.7);overflow:hidden;animation:cardFloat 3s ease-in-out infinite alternate;">
        <div style="height:44px;background:rgba(248,194,0,0.15);display:flex;align-items:center;padding:0 14px;gap:6px;"><div style="width:6px;height:6px;border-radius:50%;background:#F8C200;"></div><div style="width:6px;height:6px;border-radius:50%;background:#9B4FDE;"></div><div style="width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.2);"></div></div>
        <div style="padding:14px;"><div style="height:8px;background:rgba(248,194,0,0.4);border-radius:4px;width:70%;margin-bottom:8px;"></div><div style="height:8px;background:rgba(255,255,255,0.08);border-radius:4px;margin-bottom:8px;"></div><div style="height:8px;background:rgba(123,47,190,0.5);border-radius:4px;width:50%;margin-bottom:12px;"></div><div style="height:50px;background:rgba(123,47,190,0.25);border-radius:12px;border:1px solid rgba(123,47,190,0.25);margin-bottom:8px;"></div><div style="display:flex;gap:6px;"><div style="flex:1;height:30px;background:rgba(248,194,0,0.2);border-radius:8px;"></div><div style="flex:1;height:30px;background:rgba(123,47,190,0.2);border-radius:8px;"></div></div></div>
      </div>
      <div style="width:120px;height:220px;background:#0f0f23;border-radius:28px;border:5px solid #1a1a3e;box-shadow:0 30px 60px rgba(0,0,0,0.7);overflow:hidden;animation:cardFloat 4s ease-in-out infinite alternate;">
        <div style="height:80px;background:linear-gradient(135deg,#7B2FBE,#3a1060);display:flex;align-items:flex-end;padding:12px;"><div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:white;">$4,280</div></div>
        <div style="padding:12px;"><div style="height:6px;background:rgba(248,194,0,0.3);border-radius:3px;margin-bottom:6px;width:80%;"></div><div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin-bottom:6px;"></div><div style="height:6px;background:rgba(123,47,190,0.3);border-radius:3px;width:60%;"></div></div>
      </div>
    </div>`,
    galleryItems: [
      { bg: '#0f0f1f', content: `<div style="display:flex;gap:12px;justify-content:center;align-items:center;padding:20px;"><div style="width:70px;height:120px;background:#1a1a2e;border-radius:18px;border:2px solid rgba(248,194,0,0.2);overflow:hidden;"><div style="height:30px;background:rgba(248,194,0,0.15);"></div><div style="padding:8px;"><div style="height:4px;background:rgba(248,194,0,0.4);border-radius:2px;margin-bottom:4px;width:80%;"></div><div style="height:4px;background:rgba(255,255,255,0.06);border-radius:2px;"></div></div></div><div style="width:70px;height:120px;background:#1a1a2e;border-radius:18px;border:2px solid rgba(123,47,190,0.2);overflow:hidden;"><div style="height:50px;background:linear-gradient(135deg,#7B2FBE,#3a1060);"></div><div style="padding:8px;"><div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-bottom:4px;"></div><div style="height:4px;background:rgba(248,194,0,0.3);border-radius:2px;width:60%;"></div></div></div><div style="width:70px;height:120px;background:#1a1a2e;border-radius:18px;border:2px solid rgba(255,255,255,0.06);overflow:hidden;"><div style="padding:10px;"><div style="height:4px;background:rgba(255,255,255,0.08);border-radius:2px;margin-bottom:5px;"></div><div style="height:4px;background:rgba(248,194,0,0.3);border-radius:2px;width:70%;margin-bottom:5px;"></div><div style="height:30px;background:rgba(123,47,190,0.2);border-radius:8px;margin-top:8px;"></div></div></div></div>` },
      { bg: '#1a1a2e', content: `<div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#7B2FBE,#F8C200);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:24px;font-weight:800;color:white;box-shadow:0 20px 40px rgba(123,47,190,0.5);">UI</div>` },
      { bg: '#0f0f23', content: `<div style="text-align:center;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;margin-bottom:8px;">PROTOTYPE</div><div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#F8C200;">Figma</div></div>` },
    ]
  },
];

let currentProjectIndex = 0;

// =================== MODAL LOGIC ===================
const modal = document.getElementById('projectModal');
const modalBox = document.getElementById('modalBox');

function openModal(projectId) {
  const idx = projects.findIndex(p => p.id === projectId);
  if (idx === -1) return;
  currentProjectIndex = idx;
  renderModal(projects[idx]);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalBox.scrollTop = 0;
  setTimeout(() => addHoverCursor(document.querySelectorAll('.modal-box a, .modal-box button')), 100);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateModal(dir) {
  currentProjectIndex = (currentProjectIndex + dir + projects.length) % projects.length;
  const p = projects[currentProjectIndex];
  renderModal(p);
  modalBox.scrollTop = 0;
}

function renderModal(p) {
  // Hero
  document.getElementById('modalHero').style.background = p.heroBg;
  document.getElementById('modalHeroVisual').innerHTML = p.heroContent;
  document.getElementById('modalHeroLabel').textContent = p.cat;
  // Meta
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalYear').textContent = p.year;
  document.getElementById('modalClient').textContent = 'Client: ' + p.client;
  // Title & desc
  document.getElementById('modalTitle').innerHTML = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  // Details
  document.getElementById('modalDetails').innerHTML = p.details.map(d =>
    `<div class="detail-item">
      <div class="detail-label">${d.label}</div>
      <div class="detail-value${d.accent ? ' accent' : ''}">${d.value}</div>
    </div>`).join('');
  // Tools
  document.getElementById('modalTools').innerHTML = p.tools.map(t =>
    `<span class="tool-tag">${t}</span>`).join('');
  // Gallery
  const galleryEl = document.getElementById('modalGallery');
  galleryEl.innerHTML = p.galleryItems.map((g, i) =>
    `<div class="gallery-item" style="background:${g.bg};${i === 0 ? 'grid-column:1/-1;aspect-ratio:16/7;' : ''}display:flex;align-items:center;justify-content:center;">${g.content}</div>`
  ).join('');
  // Nav counter
  document.getElementById('modalNext').title = `Next (${((currentProjectIndex+1)%projects.length)+1}/${projects.length})`;
  document.getElementById('modalPrev').title = `Prev`;
}

// Attach open to all project cards
document.querySelectorAll('.project-card').forEach((card, i) => {
  const pid = projects[i % projects.length].id;
  card.style.cursor = 'none';
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay-btn') || card.contains(e.target) ) {
      openModal(pid);
    }
  });
  // Also wire overlay buttons
  const btn = card.querySelector('.overlay-btn');
  if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); openModal(pid); });
});

// Close triggers
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.getElementById('modalNext').addEventListener('click', () => navigateModal(1));
document.getElementById('modalPrev').addEventListener('click', () => navigateModal(-1));

// Keyboard
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') navigateModal(1);
  if (e.key === 'ArrowLeft') navigateModal(-1);
});

// CTA in modal — close modal then scroll to contact
document.getElementById('modalCTA').addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
  setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 400);
});