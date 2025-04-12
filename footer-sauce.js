const footerHTML = `
  <style>
    footer img {
      display: inline-block !important;
      vertical-align: middle;
      margin: 0 10px;
      width: 40px;
      height: 40px;
      border-radius: 12px !important;
      filter: drop-shadow(0 0 4px #00ffff);
      transition: 0.3s;
    }
  </style>

  <footer style="text-align: center; margin-top: 4rem;">
    <div style="margin-bottom: 3rem;">
      <h2 style="color: #00ffc3; text-shadow: 0 0 10px #00ffc3;">🌶️ Random Sauce Name Generator</h2>
      <button onclick="generateSauce()" style="background: #00ffc3; color: #0a0a0a; border: none; padding: 0.75rem 1.5rem; font-size: 1rem; cursor: pointer; border-radius: 8px; margin-top: 1rem;">
        Generate Sauce
      </button>
      <div id="sauce-output" style="margin-top: 1rem; font-weight: bold; color: #ffcc00; font-size: 1.2rem;"></div>
    </div>

    <p style="color: #00ffc3; font-weight: bold;">
      Stay saucy. Stay sharp. 
      <a href="brolumination/?chip=unlocked" class="emoji-link" title="Unlock the Brolumination" style="text-decoration: none;">
        <span id="emoji">🖐️</span>
      </a> ♾️
    </p>

    <p style="color: #00ffc3; font-weight: bold; font-size: 1.1rem;">HIGH FIVE FOREVER</p>

    <div style="text-align: center; margin: 1rem 0;">
      <a href="https://youtube.com/@BrazillyPhilly" target="_blank">
        <img src="youtube.png" alt="YouTube">
      </a>
      <a href="https://www.instagram.com/BrazillyPhilly" target="_blank">
        <img src="instagram.png" alt="Instagram">
      </a>
      <a href="https://www.tiktok.com/@brazillyphilly" target="_blank">
        <img src="tiktok.png" alt="TikTok">
      </a>
      <a href="https://www.facebook.com/profile.php?id=61574591594643" target="_blank">
        <img src="Facebook.png" alt="Facebook">
      </a>
    </div>

    <p style="font-style: italic; color: #00ffc3; font-size: 0.9rem;">
      Designed with alchemy, electricity, and extra sauce — 
      <a href="https://BrazillyPhilly.com" style="color: #00ffc3; text-decoration: none;">BrazillyPhilly.com</a> ✨
    </p>

    <p style="color: #888; font-size: 0.8rem;">
      &copy; <span id="year"></span> Brazilly Philly™ — All Rights Reserved.
    </p>
  </footer>
`;

document.body.insertAdjacentHTML("beforeend", footerHTML);

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Sauce Generator
const sauceNames = [
  "Dawn's Destiny Sauce", "Raquel's Family Heat", "Raquel's Garden Fire",
  "Midnight Mango Blaze", "Cyber Cilantro Crunch", "Corey's Lotus Heat",
  "Valter's Hard Work Sauce", "Anthony's Philly Sauce", "Giovanni's Cali Sauce",
  "Christopher's Simple Sauce", "Neon Pepper Jolt", "Yakuza Garlic Heat",
  "Quantum Lime Burst", "Cleane's Curiousity Sauce", "Chelsea's Bell Sauce",
  "Sadie's Carzy Sauce", "Electric Açai Drizzle", "Philly Flame Zing",
  "Brazilliance Heatwave", "Time Drip Tango", "Slippery Samurai Drip",
  "Tokyo Teriyaki Thunder", "Roman Basil Heatwave", "Munich Mustard Smash",
  "Spicy Sichuan Slipstream", "El Diablo Verde", "Slippery Garlic Avalanche",
  "Sweet Basil Napoli", "Parisian Pepper Kiss", "Spicy Soy Mirage",
  "Bombay Heat Harmony", "Berlin BBQ Bolt", "Rio Rocket Sauce",
  "Midnight Mole Madness", "Seoul Fire Glaze", "French Firecrack Dijon",
  "Slippery Chipotle Vortex", "Chi-Town Chimichurri Rush",
  "Dragonfire Sesame Zing", "Slippery Jalapeño Groove",
  "Mediterranean Mango Fizz", "Random Fire Bloom", "Wasabi Whiplash",
  "Crimson Curry Flicker", "Neon Tandoori Tango", "Slippery Sweet Heat Samba",
  "Bavarian Blaze Cream", "Bangkok Burner Sauce", "Slippery Tomato Typhoon",
  "Broblivion Burn", "Funkmaster Fire Dip", "Mint Condition Meltdown",
  "Brotiger BBQ Tamer", "Caipirinha Glacier Drizzle", "Cosmic Cilantro Meteor"
];

function generateSauce() {
  const output = document.getElementById("sauce-output");
  const random = sauceNames[Math.floor(Math.random() * sauceNames.length)];
  if (output) output.innerText = random;
}

// Emoji hover animation
const emoji = document.getElementById('emoji');
if (emoji) {
  document.querySelector('.emoji-link').addEventListener('mouseover', () => emoji.textContent = '✨');
  document.querySelector('.emoji-link').addEventListener('mouseout', () => emoji.textContent = '🖐️');
}
