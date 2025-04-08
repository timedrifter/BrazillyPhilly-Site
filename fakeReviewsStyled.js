
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
  { text: "Tastes like freedom… and the tears of my haters.", author: "Eddie Murphy, Comedy King Quarterly" },
  {"text": "It\u2019s over, Anakin \u2014 I have the high flavor.", "author": "Obi-Wan Kenobi, Star Wars"},
  {"text": "I find your lack of Brazilly Philly... disturbing.", "author": "Darth Vader, Star Wars"},
  {"text": "Mmm. Brazilly Philly, you must try. Strong with the spice, it is.", "author": "Yoda, Star Wars"},
  {"text": "I was just a farm boy... now I\u2019m a sandwich Jedi.", "author": "Luke Skywalker, Star Wars"},
  {"text": "Illogical... yet delicious.", "author": "Spock, Star Trek"},
  {"text": "I\u2019ve kissed green aliens, but I\u2019ve never had anything this hot.", "author": "Captain Kirk, Star Trek"},
  {"text": "Make it chew.", "author": "Picard, Star Trek"},
  {"text": "I cannot taste. But I can confirm \u2014 this sandwich achieves optimal structure.", "author": "Data, Star Trek"},
  {"text": "This isn\u2019t just lunch. It\u2019s a mission.", "author": "Adama, Battlestar Galactica"},
  {"text": "We evolved... to taste this.", "author": "Cylon, Battlestar Galactica"},
  {"text": "You can\u2019t take the sky from me\u2026 but you can take this sandwich \u2014 over my dead body.", "author": "Malcolm Reynolds, Firefly"},
  {"text": "I tasted time. It was Brazilly Philly.", "author": "River Tam, Firefly"},
  {"text": "I fight for freedom... and a bite of that grilled picanha glory.", "author": "Harlock, Captain Harlock"},
  {"text": "Whatever happens, happens\u2026 but if I die, bury me with one of these.", "author": "Spike Spiegel, Cowboy Bebop"},
  {"text": "I\u2019ve conned princes, but this sandwich conned me into love.", "author": "Faye Valentine, Cowboy Bebop"},
  {"text": "He who can taste this sandwich and remain still \u2014 he is truly the Kwisatz Haderach.", "author": "Paul Atreides, Dune"},
  {"text": "Your chefs come from noble blood... yet your kitchen smells of SPICE. The Brazilly Philly... is the test. Put your mouth in the bun.", "author": "Reverend Mother Mohiam, Dune"},
  {"text": "They have a wonderful kitchen, cousin... So rich. So tender. I could float forever.", "author": "Baron Harkonnen, Dune"},
  {"text": "Why wasn\u2019t I told of this sandwich before?!", "author": "Beast Rabban, Dune"},
  {"text": "I grew potatoes on Mars. But Earth has Brazilly Philly. Game over.", "author": "Mark Watney, The Martian"},
  {"text": "Best thing I\u2019ve tasted since dancing with an alien to \u201970s hits.", "author": "Star-Lord, Guardians of the Galaxy"},
  {"text": "I\u2026 am\u2026 HUNGRY.", "author": "Groot, Guardians of the Galaxy"},
  {"text": "The only thing scarier than xenomorphs\u2026 is running out of Brazilly Philly.", "author": "Ripley, Alien"},
  {"text": "Hisss\u2026 crunch.", "author": "Xenomorph, Alien"},
  {"text": "We fought over water on Ceres. But for Brazilly Philly? We\u2019d start a new war.", "author": "James Holden, The Expanse"},
  {"text": "I traveled to Neptune. Found nothing. Came back. Brazilly Philly was here all along.", "author": "Roy McBride, Ad Astra"},
  {"text": "Eeeee-va... BRA-ZI-LYYYYYY.", "author": "WALL-E, WALL-E"},
  {"text": "Directives updated: Retrieve sandwich.", "author": "EVE, WALL-E"},
  {"text": "If I die today, bury me inside a Brazilly Philly roll.", "author": "Gary Goodspeed, Final Space"},
  {"text": "I\u2019m doing my part \u2014 to devour every last bite.", "author": "Johnny Rico, Starship Troopers"},
  {"text": "Never give up. Never surrender. And never skip the vinagrete.", "author": "Jason Nesmith, Galaxy Quest"},
  {"text": "Treasure? Nah. This sandwich is the map.", "author": "Jim Hawkins, Treasure Planet"},
  {"text": "Good news, everyone! I discovered a sandwich that bends space\u2026 and time.", "author": "Professor Farnsworth, Futurama"},
  {"text": "Bite my shiny picanha!", "author": "Bender, Futurama"},
  {"text": "Morty, you don\u2019t understand \u2014 the Brazilly Philly is the sandwich nexus of all realities.", "author": "Rick Sanchez, Rick and Morty"},
  {"text": "Aw geez, Rick... it's so good I think I blacked out.", "author": "Morty Smith, Rick and Morty"},
  {"text": "Danger, flavor overload!", "author": "Will Robinson, Lost in Space"},
  {"text": "Alone at the end of the world. At least I\u2019ve got this Brazilly Philly.", "author": "Augustine Lofthouse, The Midnight Sky"},
  {"text": "They should have sent... more sandwiches.", "author": "Dr. Ellie Arroway, Contact"},
  {"text": "LUDICROUS FLAVOR!", "author": "Dark Helmet, Spaceballs"},
  {"text": "I\u2019m a Mog \u2014 half man, half dog \u2014 and ALL in on this sandwich.", "author": "Barf, Spaceballs"},
  {"text": "Houston, we have no problem. We have Brazilly Philly.", "author": "Jim Lovell, Apollo 13"}
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
