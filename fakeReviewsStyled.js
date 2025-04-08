// 🔥 Brazilly Philly Fake Review Generator – Rebuilt Flavorverse Edition

const fullReviewList = [
  {
    text: "You are not trash. You are not broken. You are a man... who deserves this sandwich.",
    author: "🪞 Stensland, Bathroom Wall Mantra Digest"
  },
  {
    text: "Sweet sandwich of liberty! That picanha hit harder than a Hypnotoad blast.",
    author: "👨‍🚀 Fry, 31st Century Eats"
  },
  {
    text: "Bite my flavor-enhanced shiny metal ass!",
    author: "🤖 Bender, Bending Gourmet Quarterly"
  },
  {
    text: "I calculated a 0.000001% chance something could taste this good. I was wrong.",
    author: "🧠 Hermes Conrad, Bureaucratic Flavor Times"
  },
  {
    text: "This sandwich is technically illegal in 3 star systems. I call that a win.",
    author: "👾 Zapp Brannigan, Interstellar Romance Review"
  },
  {
    text: "They put picanha in the roll... then rolled it into my heart.",
    author: "💔 Leela, One-Eyed Culinary Review"
  },
  {
    text: "The Force is strong with this one… especially the sauce.",
    author: "🧙‍♂️ Yoda, Tiny Food Critic Digest"
  },
  {
    text: "It’s giving... Michelin Star. But make it beef.",
    author: "📸 Food Influencer, #sponsoredmaybe"
  },
  {
    text: "If you’re gonna build a sandwich into a time machine, why not do it with some style?",
    author: "🔥 Doc Brown, Stainless Steel Flavor Weekly"
  }
];

let reviewPool = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateReview() {
  if (reviewPool.length === 0) {
    reviewPool = shuffle([...fullReviewList]);
  }

  const next = reviewPool.pop();

  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = `
    <div style="
      background: #001933;
      border: 2px solid #3399ff;
      border-radius: 16px;
      padding: 20px;
      max-width: 600px;
      text-align: center;
      color: #fff;
      margin: 40px auto;
      font-family: 'Arial', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
      box-shadow: 0 0 30px #3399ff80;
    ">
      <div style="font-size: 1.4rem; margin-bottom: 15px;">${next.text}</div>
      <div style="font-style: italic; font-size: 1rem;">— ${next.author}</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    body, .styled-btn, #quote-box {
      font-family: 'Arial', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif !important;
    }
  `;
  document.head.appendChild(styleTag);

  const btn = document.getElementById('generate-btn');
  if (btn) {
    btn.style.cssText = `
      padding: 12px 24px;
      font-size: 1rem;
      background-color: #3399ff;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(51,153,255,0.5);
    `;
    btn.addEventListener('click', generateReview);
  }

  generateReview();
});
