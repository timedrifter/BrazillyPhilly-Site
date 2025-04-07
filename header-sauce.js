// ✅ header-sauce.js – Injects Header with Hamburger Nav and Logo

document.getElementById("header-placeholder").innerHTML = `
  <header>
    <style>
      /* Nav Menu */
      #nav-menu {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 999;
      }

      #nav-toggle {
        font-size: 2rem;
        cursor: pointer;
        background-color: #00ffc3;
        color: #0a0a0a;
        padding: 0.3rem 0.6rem;
        border-radius: 6px;
        box-shadow: 0 0 8px #00ffc3;
        transition: transform 0.2s ease;
      }

      #nav-toggle:hover {
        transform: scale(1.15);
      }

      #nav-links {
        list-style: none;
        padding: 0.5rem;
        margin-top: 0.5rem;
        background-color: #111;
        border: 1px solid #00ffc3;
        border-radius: 8px;
        box-shadow: 0 0 12px #00ffc3;
        display: none;
      }

      #nav-links.show {
        display: block;
      }

      #nav-links li {
        margin: 0.5rem 0;
      }

      #nav-links a {
        text-decoration: none;
        color: #00ffc3;
        font-weight: bold;
        font-size: 1rem;
        text-align: left;
        display: block;
        padding-left: 10px;
        text-align: left;
      }

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
      .kickstarter-glow {
  margin: 2rem auto;
  padding: 1rem 2rem;
  border: 2px solid #00ffc3;
  color: #00ffc3;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 12px;
  width: 300px;
  text-shadow: 0 0 10px #00ffc3;
  animation: pulseGlow 2s infinite;
}

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

    <!-- Glowing Logo -->
    <a href="index.html">
      <img src="logo-placeholder.png" alt="Brazilly Philly Logo" class="logo"
        style="max-width: 300px; width: 90%; filter: drop-shadow(0 0 10px #00ffc3); animation: pulse 2s infinite; margin-top: 2rem; display: block; margin-left: auto; margin-right: auto;">
    </a>

    <!-- Tagline -->
    <p style="font-size: 1.5rem; font-weight: bold; color: #00ffcc; text-align: center; margin-top: 1rem;">
      Where Philly Meets Picanha
    </p>

  <!-- Kickstarter Glow Box -->
<section class="kickstarter-glow">
  <a href="https://www.kickstarter.com/projects/brazillyphilly/brazilly-philly-where-philly-meets-picanha" target="_blank">
    🚀 KICKSTARTER PRE-LAUNCH PAGE
  </a>
</section>

  </header>
`;

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
