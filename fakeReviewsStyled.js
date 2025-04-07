
// Brazilly Philly Fake Review Generator — True Non-Repeating + Styled

const fullReviewList = [
  { text: "Listening to them convinced me to choose the red pill.", author: "Neo, Matrix Magazine" },
  { text: "This sandwich slaps harder than my steak with a cast iron.", author: "Joshua Weissman, YouTube Kitchen Lab" },
  { text: "Vote for them and all your dreams will come true.", author: "Pedro, Napoleon Dynamite Magazine" },
  { text: "We'll have what they're having!", author: "Harry & Sally, Meet Movie Magazine" },
  { text: "BURRAZZZZZILLYYYYY PHILLYYYYY!", author: "Thor, Sandwich Summoner" },
  { text: "It’s giving... Michelin Star. But make it beef.", author: "Random Food Influencer, #sponsoredmaybe" },
  { text: "I could do this all day… if the sandwich keeps coming.", author: "Captain America, Stars & Stripes Eats" },
  { text: "Flavor so bold, it should be locked up.", author: "Michael Franzese, Made Man Menu Report" },
  { text: "My Krabby Patty’s jealous.", author: "SpongeBob SquarePants, Undersea Eats Monthly" },
  { text: "Tastes like freedom… and the tears of my haters.", author: "Eddie Murphy, Comedy King Quarterly" }
];

let shuffledIndex = shuffleIndexArray(fullReviewList.length);
let currentIndex = 0;

function shuffleIndexArray(length) {
  const array = Array.from({ length }, (_, i) => i);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateReview() {
  if (currentIndex >= shuffledIndex.length) {
    // Only reshuffle AFTER the list is fully used
    shuffledIndex = shuffleIndexArray(fullReviewList.length);
    currentIndex = 0;
  }

  const index = shuffledIndex[currentIndex++];
  const next = fullReviewList[index];

  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = `
    <div style="
      background: #001933;
      border: 2px solid #00aeef;
      border-radius: 16px;
      padding: 20px;
      max-width: 600px;
      text-align: center;
      color: #fff;
      margin: 20px auto 10px;
      font-family: 'Arial', sans-serif;
      box-shadow: 0 0 25px #00aeef66;
    ">
      <div style="font-size: 1.4rem; margin-bottom: 15px;">${next.text}</div>
      <div style="font-style: italic; font-size: 1rem;">— ${next.author}</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generate-btn');
  if (btn) {
    btn.classList.add('styled-btn');
    btn.addEventListener('click', generateReview);
  }

  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .styled-btn {
      padding: 12px 24px;
      font-size: 1rem;
      background-color: #00aeef;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 174, 239, 0.4);
      transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
    }
    .styled-btn:hover {
      background-color: #008ec2;
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 174, 239, 0.6);
    }
  `;
  document.head.appendChild(styleTag);

  generateReview();
});
