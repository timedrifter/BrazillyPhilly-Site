document.addEventListener("DOMContentLoaded", () => {
  const headerSection = document.createElement("div");
  headerSection.innerHTML = `
    <header>
      <a href="index.html">
        <img src="logo-placeholder.png" alt="Brazilly Philly Logo" class="logo" style="max-width: 300px; width: 90%; filter: drop-shadow(0 0 10px #00ffc3); animation: pulse 2s infinite; margin-top: 2rem;">
      </a>
      <p style="font-size: 1.5rem; font-weight: bold; color: #00ffcc;">Where Philly Meets Picanha</p>
    </header>

    <section>
      <h1 style="color:#00ffc3;">🔥 Welcome to Brazilly Philly</h1>
      <p>The Flavor Revelation – and you found the gateway!</p>
      <p><a href="form.html" style="color:#00ffc3; font-weight:bold;">Join the Watchlist</a></p>
    </section>

    <section class="kickstarter-glow" style="margin:2rem auto; padding:1rem 2rem; border:2px solid #00ffc3; color:#00ffc3; font-weight:bold; font-size:1.2rem; text-align:center; border-radius:12px; width:300px; text-shadow:0 0 10px #00ffc3; animation:pulseGlow 2s infinite;">
      <a href="https://www.kickstarter.com/projects/brazillyphilly/brazilly-philly-where-philly-meets-picanha" target="_blank" style="text-decoration:none; color:#00ffc3;">
        🚀 KICKSTARTER PRE-LAUNCH PAGE
      </a>
    </section>

    <div style="text-align: center; margin: 2rem 0;">
      <a href="menu.html">
        <img src="menu_link.png" alt="View Our Menu" style="width: 125px; max-width: 90%; filter: drop-shadow(0 0 10px #00ffa3); transition: transform 0.3s ease;"
          onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
      </a>
      <p style="color: #00ffa3;">The Food Menu of Life</p>
    </div>
  `;

  const main = document.querySelector("body");
  const firstVideo = document.querySelector("iframe, video, .video-placeholder");
  if (firstVideo && main) {
    main.insertBefore(headerSection, firstVideo);
  }
});

