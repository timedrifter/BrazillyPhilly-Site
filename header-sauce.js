// ✅ header-sauce.js

// Glowing Logo + Nav Menu + Particles
const header = `
  <canvas id="particles"></canvas>
  <nav id="nav-menu">
    <div id="nav-toggle" onclick="toggleMenu()">☰</div>
    <ul id="nav-links">
      <li><a href="index.html">🏠 Home</a></li>
      <li><a href="menu.html">🥩 Food Menu</a></li>
      <li><a href="free-energy.html">⚡ Free Energy</a></li>
      <li><a href="comicbook.html">📚 Comic Book</a></li>
      <li><a href="https://www.kickstarter.com/projects/brazillyphilly/brazilly-philly-where-philly-meets-picanha" target="_blank">🚀 Kickstarter</a></li>
    </ul>
  </nav>
  <header>
    <a href="index.html">
      <img src="logo-placeholder.png" alt="Brazilly Philly Logo" class="logo">
    </a>
    <p style="font-size: 1.5rem; font-weight: bold; color: #00ffcc;">Where Philly Meets Picanha</p>
  </header>
`;

document.body.insertAdjacentHTML('afterbegin', header);

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

// Particle Background Setup
const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  const colors = ["#00ffc3", "#00ffee", "#00ff88"];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedY = Math.random() * 0.5 + 0.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.y += this.speedY;
      if (this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function initParticles(count = 60) {
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}
