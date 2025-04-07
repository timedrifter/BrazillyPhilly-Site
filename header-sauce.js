// ✅ header-sauce.js

document.getElementById("header-placeholder").innerHTML = `
  <header>
    <!-- [keep everything here exactly as it is, but wrap inside the backticks] -->
    <style>
      /* ...your styles... */
    </style>

    <!-- Hamburger Menu -->
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

    <a href="index.html">
      <img src="logo-placeholder.png" alt="Brazilly Philly Logo" class="logo"
        style="max-width: 300px; width: 90%; filter: drop-shadow(0 0 10px #00ffc3); animation: pulse 2s infinite; margin-top: 2rem; display: block; margin-left: auto; margin-right: auto;">
    </a>

    <p style="font-size: 1.5rem; font-weight: bold; color: #00ffcc; text-align: center; margin-top: 1rem;">
      Where Philly Meets Picanha
    </p>

    <a href="https://www.kickstarter.com/projects/brazillyphilly" target="_blank" class="kickstarter-glow"
      style="background: transparent; display: inline-block; margin-top: 1rem; border: 2px solid #00ffc3; color: #00ffc3; font-weight: bold; font-size: 1.2rem; text-align: center; border-radius: 12px; text-shadow: 0 0 10px #00ffc3; animation: pulseGlow 2s infinite; padding: 1rem 2rem;">
      🚀 KICKSTARTER PRE-LAUNCH<br>PAGE
    </a>

    <style>
      @keyframes pulseGlow {
        0% { box-shadow: 0 0 5px #00ffc3; }
        50% { box-shadow: 0 0 20px #00ffc3; }
        100% { box-shadow: 0 0 5px #00ffc3; }
      }
      @keyframes pulse {
        0% { filter: drop-shadow(0 0 5px #00ffc3); }
        50% { filter: drop-shadow(0 0 20px #00ffc3); }
        100% { filter: drop-shadow(0 0 5px #00ffc3); }
      }
    </style>
  </header>
`;

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
