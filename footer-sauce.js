// ✅ footer-sauce.js

document.getElementById("footer-placeholder").innerHTML = `
  <footer style="text-align: center; margin-top: 4rem;">
    <!-- Sauce Generator -->
    <div style="margin-bottom: 3rem;">
      <h2 style="color: #00ffc3; text-shadow: 0 0 10px #00ffc3;">🌶️ Random Sauce Name Generator</h2>
      <button onclick="generateSauce()" style="background: #00ffc3; color: #0a0a0a; border: none; padding: 0.75rem 1.5rem; font-size: 1rem; cursor: pointer; border-radius: 8px; margin-top: 1rem;">
        Generate Sauce
      </button>
      <div id="sauce-output" style="margin-top: 1rem; font-weight: bold; color: #ffcc00; font-size: 1.2rem;"></div>
    </div>

    <!-- Social + Legal -->
    <p style="color: #00ffc3; font-weight: bold;">
      Stay saucy. Stay sharp. 
      <a href="brolumination/?chip=unlocked" class="emoji-link" title="Unlock the Brolumination" style="text-decoration: none;">
        <span id="emoji">🖐️</span>
      </a> ♾️
    </p>

    <p style="color: #00ffc3; font-weight: bold; font-size: 1.1rem;">HIGH FIVE FOREVER</p>

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
      &copy; ${new Date().getFullYear()} Brazilly Philly™ — All Rights Reserved.
    </p>
  </footer>
`;

function generateSauce() {
  const output = document.getElementById("sauce-output");
  const sauceNames = [/* your list here */];
  const random = sauceNames[Math.floor(Math.random() * sauceNames.length)];
  if (output) output.innerText = random;
}

document.addEventListener("DOMContentLoaded", () => {
  const emoji = document.getElementById('emoji');
  const emojiLink = document.querySelector('.emoji-link');
  if (emoji && emojiLink) {
    emojiLink.addEventListener('mouseover', () => emoji.textContent = '✨');
    emojiLink.addEventListener('mouseout', () => emoji.textContent = '🖐️');
  }
});
