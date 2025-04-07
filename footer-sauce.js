// footer-sauce.js

document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <section>
      <h2>🌶️ Random Sauce Name Generator</h2>
      <button onclick="generateSauce()">Generate Sauce</button>
      <div id="sauce-output"></div>
    </section>

    <footer style="text-align: center; margin-top: 4rem;">
      <p style="color: #00ffc3; font-weight: bold;">
        Stay saucy. Stay sharp. 
        <a href="brolumination/?chip=unlocked" class="emoji-link" title="Unlock the Brolumination" style="text-decoration: none;">
          <span id="emoji">🖐️</span>
        </a> ♾️
      </p>

      <p style="color: #00ffc3; font-weight: bold; font-size: 1.1rem;">HIGH FIVE FOREVER</p>

      <p style="margin: 1rem 0;">
        <a href="index.html" style="color: #00ffc3; font-weight: bold; text-decoration: none;">← Return to Homepage</a>
      </p>

      <div style="text-align: center; margin: 1rem 0;">
        <a href="https://youtube.com/@BrazillyPhilly" target="_blank" style="margin: 10px;">
          <img src="youtube.png" alt="YouTube" width="40" height="40" style="filter: drop-shadow(0 0 4px #00ffff); transition: 0.3s;">
        </a>
        <a href="https://www.instagram.com/BrazillyPhilly" target="_blank" style="margin: 10px;">
          <img src="instagram.png" alt="Instagram" width="40" height="40" style="filter: drop-shadow(0 0 4px #00ffff); transition: 0.3s;">
        </a>
        <a href="https://www.tiktok.com/@brazillyphilly" target="_blank" style="margin: 10px;">
          <img src="tiktok.png" alt="TikTok" width="40" height="40" style="filter: drop-shadow(0 0 4px #00ffff); transition: 0.3s;">
        </a>
        <a href="https://www.facebook.com/profile.php?id=61574591594643" target="_blank" style="margin: 10px;">
          <img src="Facebook.png" alt="Facebook" width="40" height="40" style="filter: drop-shadow(0 0 4px #00ffff); transition: 0.3s;">
        </a>
      </div>

      <p style="font-style: italic; color: #00ffc3; font-size: 0.9rem;">
        Designed with alchemy, electricity, and extra sauce — 
        <a href="https://BrazillyPhilly.com" style="color: #00ffc3; text-decoration: none;">BrazillyPhilly.com</a> ✨
      </p>

      <p style="color: #888; font-size: 0.8rem;">
        &copy; <script>document.write(new Date().getFullYear());</script> Brazilly Philly™ — All Rights Reserved.
      </p>
    </footer>
  `;

  const div = document.createElement("div");
  div.innerHTML = footerHTML;
  document.body.appendChild(div);

  window.generateSauce = () => {
    const sauceNames = [
      "Dawn's Destiny Sauce", "Raquel's Family Heat", "Raquel's Garden Fire",
      "Midnight Mango Blaze", "Cyber Cilantro Crunch", "Valter's Hard Work Sauce",
      "Anthony's Philly Sauce", "Giovanni's Cali Sauce", "Christopher's Simple Sauce",
      "Neon Pepper Jolt", "Yakuza Garlic Heat", "Quantum Lime Burst",
      "Cleane's Curiousity Sauce", "Chelsea's Bell Sauce", "Sadie's Carzy Sauce",
      "Electric Açai Drizzle", "Philly Flame Zing", "Brazilliance Heatwave",
      "Time Drip Tango", "Slippery Samurai Drip", "Tokyo Teriyaki Thunder",
      "Roman Basil Heatwave", "Munich Mustard Smash", "Spicy Sichuan Slipstream",
      "El Diablo Verde", "Slippery Garlic Avalanche", "Sweet Basil Napoli",
      "Parisian Pepper Kiss", "Spicy Soy Mirage", "Bombay Heat Harmony",
      "Berlin BBQ Bolt", "Rio Rocket Sauce", "Midnight Mole Madness",
      "Seoul Fire Glaze", "French Firecrack Dijon", "Slippery Chipotle Vortex",
      "Chi-Town Chimichurri Rush", "Dragonfire Sesame Zing", "Slippery Jalapeño Groove",
      "Mediterranean Mango Fizz", "Random Fire Bloom", "Wasabi Whiplash",
      "Crimson Curry Flicker", "Neon Tandoori Tango", "Slippery Sweet Heat Samba",
      "Bavarian Blaze Cream", "Bangkok Burner Sauce", "Slippery Tomato Typhoon",
      "Broblivion Burn", "Funkmaster Fire Dip", "Mint Condition Meltdown",
      "Brotiger BBQ Tamer", "Caipirinha Glacier Drizzle", "Cosmic Cilantro Meteor"
    ];
    const output = document.getElementById("sauce-output");
    if (output) {
      const random = sauceNames[Math.floor(Math.random() * sauceNames.length)];
      output.textContent = random;
    }
  };

  // Optional emoji hover effect
  const emoji = document.getElementById("emoji");
  if (emoji) {
    document.querySelector(".emoji-link").addEventListener("mouseover", () => {
      emoji.textContent = "✨";
    });
    document.querySelector(".emoji-link").addEventListener("mouseout", () => {
      emoji.textContent = "🖐️";
    });
  }
});

