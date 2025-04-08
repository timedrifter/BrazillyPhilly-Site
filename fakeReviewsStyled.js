// 🔥 Brazilly Philly Fake Review Generator – Full Emoji Flavorverse Edition

const fullReviewList = [
  {
  text: "Now that’s a fire!",
  author: "🔥 Eddie Murphy, Comedy King Quarterly"
}

  {
    "text": "Eating a Brazilly Philly sandwich convinced me to choose the red pill.",
    "author": "\ud83d\udd76\ufe0f Neo, Matrix Magazine"
  },
  {
    "text": "See how far the rabbit hole goes.",
    "author": "\ud83e\udde0 Morpheus, Matrix Magazine"
  },
  {
    "text": "Vote for Brazilly Philly and all your dreams will come true.",
    "author": "\ud83e\uddd4 Pedro, Napoleon Dynamite Magazine"
  },
  {
    "text": "I wake up in the morning and piss excellence, They wake up in the morning and cook excellence.",
    "author": "\ud83c\udfce\ufe0f Ricky Bobby, Talladega Nights Digest"
  },
  {
    "text": "We'll have what they're having!",
    "author": "\ud83c\udf5d Harry & Sally, Meet Cute Circular"
  },
  {
    "text": "I'm in a glass case of emotion!",
    "author": "\ud83d\udcfa Ron Burgundy, Anchorman Weekly"
  },
  {
    "text": "I recognize a one-man wolfpack when I see one.",
    "author": "\ud83d\udc3a Alan, Hangover Magazine"
  },
  {
    "text": "I've fallen and I can't get up.",
    "author": "\ud83e\uddd3 Some old broad, Old People Magazine"
  },
  {
    "text": "Have a Brazilly Philly, It's breathtaking.",
    "author": "\ud83d\ude3c Dr. Evil, Virtucon Digest"
  },
  {
    "text": "It makes me randy, baby.",
    "author": "\ud83d\udd7a Austin Powers, Randy Magazine"
  },
  {
    "text": "Say hello to my little friend.",
    "author": "\ud83d\udca5 Tony Montana, Gangsta Review"
  },
  {
    "text": "I only have a minute, but this sells itself.",
    "author": "\ud83e\uddfd ShamWow Guy, Infomercial Network"
  },
  {
    "text": "I'll be back.",
    "author": "\ud83e\udd16 The Terminator, Time Travel Magazine"
  },
  {
    "text": "It made my day.",
    "author": "\ud83c\udfaf Clint Eastwood, Dirty Harry Digest"
  },
  {
    "text": "It was better than Cats.",
    "author": "\ud83c\udfad NYC Broadway Fans, NYC Theater Gazette"
  },
  {
    "text": "Mikey likes it.",
    "author": "\ud83e\udd63 Mikey's Big Brother, Life Cereal Digest"
  },
  {
    "text": "We have a Hulk. But we also have Brazilly Philly.",
    "author": "\ud83e\udde0 Tony Stark, Stark Industries Catering Review"
  },
  {
    "text": "I could do this all day\u2026 if the sandwich keeps coming.",
    "author": "\ud83d\udee1\ufe0f Captain America, Stars & Stripes Eats"
  },
  {
    "text": "This is the way... to flavor.",
    "author": "\ud83d\udee1\ufe0f The Mandalorian, Helmet-Off Cuisine"
  },
  {
    "text": "Set phasers to DELICIOUS.",
    "author": "\ud83d\ude80 Captain Kirk, Enterprise Eats"
  },
  {
    "text": "Resistance is futile\u2026 especially when you're hungry.",
    "author": "\ud83d\udd0c The Borg, Star Trek Digest"
  },
  {
    "text": "Great Scott! This thing\u2019s 1.21 gigaflavor!",
    "author": "\u26a1 Doc Brown, Time Traveler\u2019s Cookbook"
  },
  {
    "text": "I'd trade my last Infinity Stone for one more bite.",
    "author": "\ud83e\ude90 Thanos, Titan Eats Quarterly"
  },
  {
    "text": "The Force is strong with this one\u2026 especially the sauce.",
    "author": "\ud83e\uddd9 Yoda, Tiny Food Critic Weekly"
  },
  {
    "text": "You underestimate the power\u2026 of Brazilian steak.",
    "author": "\ud83c\udf11 Darth Vader, Dark Side Deli Digest"
  },
  {
    "text": "I came back from the future for this sandwich. Worth the flux capacitor.",
    "author": "\ud83d\udef9 Marty McFly, Hover Review"
  },
  {
    "text": "WUBBA LUBBA DELICIOUS!",
    "author": "\ud83e\uddea Rick Sanchez, Food Portal Weekly"
  },
  {
    "text": "It\u2019s so good, I stopped saying \u2018D\u2019oh!\u2019",
    "author": "\ud83c\udf69 Homer Simpson, Donut Digest"
  },
  {
    "text": "My Krabby Patty\u2019s jealous.",
    "author": "\ud83c\udf4d SpongeBob SquarePants, Undersea Eats Monthly"
  },
  {
    "text": "We want to pump... you up... with FLAVOR!",
    "author": "\ud83d\udcaa Hans & Franz, SNL Protein Pack"
  },
  {
    "text": "Well isn\u2019t that special?",
    "author": "\ud83d\ude4f Church Lady, Sinfully Good Sandwich Digest"
  },
  {
    "text": "It\u2019s party time. Excellent. Sandwich time. Double Excellent!",
    "author": "\ud83c\udfb8 Wayne & Garth, Wayne\u2019s World Weekly"
  },
  {
    "text": "We\u2019re on a mission from God. For this sandwich.",
    "author": "\ud83c\udfb7 The Blues Brothers, Holy Bites Bulletin"
  },
  {
    "text": "It\u2019s so good\u2026 I Chappelle\u2019d my pants.",
    "author": "\ud83c\udfa4 Dave Chappelle, Stand-Up Digest"
  },
  {
    "text": "This sandwich has more charisma than every Saved by the Bell character combined.",
    "author": "\ud83d\udcfa Zack M., Time Out Champion"
  },
  {
    "text": "I passed my GED right after eating it.",
    "author": "\ud83e\udd16 Johnny 5, Robot Review Weekly"
  },
  {
    "text": "This sandwich is SO hot right now.",
    "author": "\ud83d\udc85 Mugatu, Zoolander Magazine"
  },
  {
    "text": "This is the sandwich that will disrupt everything.",
    "author": "\ud83d\udc68\u200d\ud83d\udcbb Richard Hendricks, Silicon Valley Stack Report"
  },
  {
    "text": "It\u2019s giving... Michelin Star. But make it beef.",
    "author": "\ud83d\udcf8 Random Food Influencer, #sponsoredmaybe"
  },
  {
    "text": "Let's have another Brazilly Philly, SHall We?",
    "author": "\ud83d\udc68\u200d\ud83c\udf73 Joshua Weissman, YouTube Kitchen Lab"
  },
  {
    "text": "Brazilly Philly is here for a long time\u2019s and a good time.",
    "author": "\ud83d\udd25 Mr. Make It Happen, Self-Taught Gourmet Digest"
  },
  {
    "text": "You want food with soul? THIS is what I\u2019m talkin\u2019 about!",
    "author": "\ud83c\udf57 Smokin' & Grillin' with AB, Backyard Boss Magazine"
  },
  {
    "text": "Feed Yourself....Brazilly Philly.",
    "author": "\ud83c\udfa5 Not Another Cooking Show, Grandma-Approved Gazette"
  },
  {
    "text": "If this sandwich were a bassline, it'd groove nonstop.",
    "author": "\ud83c\udfb8 Davie504, Slap It Sandwich Weekly"
  },
  {
    "text": "The balance is golden. So is the sandwich.",
    "author": "\u2696\ufe0f The Golden Balance, Halal Flavor Journal"
  },
  {
    "text": "I\u2019d break bread with this flavor any day.",
    "author": "\ud83c\udf7d\ufe0f Chef James Makinson, Culinary Chronicles"
  },
  {
    "text": "You can taste the technique in every bite.",
    "author": "\ud83d\udd2a Chef Billy Parisi, Knife Skills Monthly"
  },
  {
    "text": "Yan can cook... but Brazilly Philly can SING!",
    "author": "\ud83d\udc68\u200d\ud83c\udf73 Chef Martin Yan, East Meets Feast Review"
  },
  {
    "text": " This is a made sandwich, Family Boss.",
    "author": "\ud83d\udd74\ufe0f Michael Franzese, Made Man Menu Report"
  },
  {
    "text": "It's Brazilian, Enough Said. Cheers Everybody!",
    "author": "\ud83e\udd69 Guga Foods, Meat Science Monthly"
  },
  {
    "text": "This food has... PASSION! EMOTION! DRAMA!",
    "author": "\ud83c\uddeb\ud83c\uddf7 Chef Jean-Pierre, French American Finesse"
  },
  {
    "text": "MSG!!!!!!",
    "author": "\ud83c\udf73 Uncle Roger, Rice Not Included Weekly"
  },
  {
    "text": "Flavor so loud it woke my ancestors.",
    "author": "\ud83c\udf36\ufe0f Cooking Con Claudia, Latino Food Legends"
  },
  {
    "text": "This is the kind of thing that would make a grandma cry. In a good way.",
    "author": "\ud83e\uddc1 Emma\u2019s Goodies, Dessert Divine Weekly"
  },
  {
    "text": "Great Scott! One bite of this Brazilly Philly and I hit 88mph with flavor. The flux capacitor\u2019s got competition!",
    "author": "\ud83e\uddd1\u200d\ud83d\udd2c Doc Brown, Back to the Future Magazine"
  },
  {
    "text": "I came back in time\u2026 for this sandwich. I\u2019ll be back. With guaran\u00e1.",
    "author": "\ud83e\udd16 T-800, The Terminator Review"
  },
  {
    "text": "We stole gold from Napoleon, but THIS? This sandwich is the real treasure of the multiverse.",
    "author": "\ud83e\udddd\u200d\u2642\ufe0f Randall, Time Bandits Digest"
  },
  {
    "text": "I traversed epochs in search of enlightenment. Then I tasted this sandwich. My journey is complete.",
    "author": "\ud83c\udfa9 H.G. Wells\u2019 Time Traveler, Epoch Explorer Quarterly"
  },
  {
    "text": "I built a box to cheat time\u2026 turns out I just needed to cheat lunch. Brazilly Philly rewires your taste timeline.",
    "author": "\ud83e\udde0 Abe, Primer Magazine"
  },
  {
    "text": "It\u2019s me, serving myself, the same sandwich, at every moment in time. I\u2019m all the customers. And it\u2019s always worth it.",
    "author": "\ud83c\udf00 Agent, Predestination Weekly"
  },
  {
    "text": "28 days\u2026 6 hours\u2026 42 minutes\u2026 12 seconds\u2026 until you taste true destiny: the Brazilly Philly.",
    "author": "\ud83d\udc07 Frank the Rabbit, Donnie Darko Digest"
  },
  {
    "text": "In every version of reality, the sandwich slaps. The universe converged to make this one thing consistent.",
    "author": "\ud83d\udeaa Everyone in that house, Coherence Magazine"
  },
  {
    "text": "I ate it forwards, then inverted and tasted it backwards. Still incredible. Sandwich entropy is real.",
    "author": "\ud83d\udd04 The Protagonist, Tenet Circular"
  },
  {
    "text": "Love isn\u2019t the only thing that transcends dimensions\u2026 apparently provolone does too.",
    "author": "\ud83c\udf0c Cooper, Interstellar Review"
  },
  { text: "Great Scott! One bite of this Brazilly Philly and I hit 88mph with flavor. The flux capacitor’s got competition!",
    author: "🧑‍🔬 Doc Brown, Back to the Future Magazine" },
  { text: "I came back in time… for this sandwich. I’ll be back. With guaraná.",
    author: "🤖 T-800, The Terminator Magazine" },
  { text: "We stole gold from Napoleon, but THIS? This sandwich is the real treasure of the multiverse.",
    author: "🧝‍♂️ Randall, Time Bandits Quarterly" },
  { text: "I traversed epochs in search of enlightenment. Then I tasted this sandwich. My journey is complete.",
    author: "🎩 H.G. Wells’ Time Traveler, The Time Machine Digest" },
  { text: "I built a box to cheat time… turns out I just needed to cheat lunch. Brazilly Philly rewires your taste timeline.",
    author: "🧠 Abe, Primer Circular" },
  { text: "It’s me, serving myself, the same sandwich, at every moment in time. I’m all the customers. And it’s always worth it.",
    author: "🌀 Agent, Predestination Monthly" },
  { text: "28 days… 6 hours… 42 minutes… 12 seconds… until you taste true destiny: the Brazilly Philly.",
    author: "🐇 Frank the Rabbit, Donnie Darko Magazine" },
  { text: "In every version of reality, the sandwich slaps. The universe converged to make this one thing consistent.",
    author: "🚪 Everyone in that house, Coherence Journal" },
  { text: "I ate it forwards, then inverted and tasted it backwards. Still incredible. Sandwich entropy is real.",
    author: "🔄 The Protagonist, Tenet Review Weekly" },
  { text: "Love isn’t the only thing that transcends dimensions… apparently provolone does too.",
    author: "🌌 Cooper, Interstellar Culinary Digest" },
  { text: "I made some bad choices. But eating this sandwich wasn’t one of them.",
    author: "👨‍🦲 Héctor, Timecrimes Review" },
  { text: "BRAZILLY PHILLY IS MOST EXCELLENT, DUDE!",
    author: "🎸 Bill & Ted, Wyld Stallyns Magazine" },
  { text: "I went back to the '80s and tried everything. This sandwich still wins. It’s got the meats and the moves.",
    author: "🧖 Lou, Hot Tub Time Machine Monthly" },
  { text: "Day 6,434. Still not tired of the Brazilly Philly. I dream of provolone.",
    author: "⏰ Phil, Groundhog Day Digest" },
  { text: "Time loop? More like taste loop. I eat this every day. I’m not even mad.",
    author: "🌴 Nyles, Palm Springs Weekly" },
  { text: "This sandwich might be a fixed point in time. You literally can't screw it up. Unless you forget the vinagrete.",
    author: "🍻 Ray, FAQ About Time Travel Magazine" },
  { text: "Yeah baby, this sandwich is shagadelic! Spicy, cheesy, and oh behave!",
    author: "🕶️ Austin, Shagadelic Eats Quarterly" },
  { text: "I fell through time and landed mouth-first into this Brazilly Philly. That’s divine intervention, playa.",
    author: "🛡️ Jamal Walker, Black Knight Bites" },
  { text: "Live. Die. Eat Brazilly Philly. Repeat.",
    author: "💥 Cage, Edge of Tomorrow Chronicle" },
  { text: "I tried to shoot my future self… but he had this sandwich. We made peace. It’s that good.",
    author: "🪞 Joe, Looper Digest" },
  { text: "I’ve been through wars, time jumps, and heartbreak. This sandwich healed my soul faster than my skin.",
    author: "🧬 Wolverine, Mutant Flavor Times" },
  { text: "Part of the sandwich stays with you. Like a flavor stone. I love you 3000 calories.",
    author: "🛡️ Tony Stark, Endgame Culinary Report" },
  { text: "I keep tasting this for the first time… again. Some flavors ripple through time.",
    author: "🕵️ Doug Carlin, Déjà Vu Digest" },
  { text: "If you see a red door and smell grilled picanha, go in. That’s your sign from the future.",
    author: "🐒 James Cole, 12 Monkeys Weekly" },
  { text: "We went back to change the past. But even there, Brazilly Philly was king. Time-proof.",
    author: "📹 David, Project Almanac Times" },
  { text: "We’re stuck in a time loop, but with sandwiches like this? Who cares.",
    author: "🔁 Ren, ARQ Circular" },
  { text: "Eight minutes to save the world? Fine. But first, let me finish this Brazilly Philly.",
    author: "🚆 Colter Stevens, Source Code Review" },
  { text: "I saw this sandwich coming two minutes early. And I STILL wasn’t ready.",
    author: "🧠 Cris Johnson, Next Digest" },
  { text: "I may vanish at any moment… but please save me a bite. The love I have for this sandwich is timeless.",
    author: "💔 Henry, The Time Traveler’s Wife Weekly" },
  { text: "I could relive any moment. I keep choosing the one where I first taste Brazilly Philly.",
    author: "🎀 Tim, About Time Digest" },
  { text: "The past called. It wants the sandwich too.",
    author: "⌛ Richard Collier, Somewhere in Time Magazine" },
  { text: "In my era, cuisine was honorable. But this? This sandwich is a revelation of modern flavor.",
    author: "🎩 Leopold, Kate & Leopold Review" },
  { text: "Even across time, bodies, and space… our souls are linked by one craving: Brazilly Philly.",
    author: "🌠 Taki, Your Name Journal" },
  { text: "I tried to fix the past. But the only constant was this sandwich changing my fate.",
    author: "🦋 Evan, Butterfly Effect Digest" },
  { text: "Reality warps. Time folds. But this sandwich… it centers me.",
    author: "🧥 Jack Starks, The Jacket Quarterly" },
  { text: "I keep making the same mistake… not ordering two.",
    author: "⛴️ Jess, Triangle Magazine" },
  { text: "This is not a joke. I tasted the Brazilly Philly before anyone else. I built the machine for another bite.",
    author: "📨 Kenneth, Safety Not Guaranteed Circular" },
  { text: "Infinite versions of me all agree: this sandwich defines the perfect timeline.",
    author: "∞ Dean, The Infinite Man Journal" },
  { text: "I tried to rewrite the past. But once I had a Brazilly Philly, the future finally made sense.",
    author: "🇧🇷 João “Zero”, The Man from the Future Quarterly" },
  { text: "First I saved the world, then I discovered the Brazilly Philly. Honestly, the sandwich is harder to beat.",
    author: "🕹️ Josh Futturman, Future Man Magazine" },
  { text: "The beginning is the end. The end is the beginning. But the sandwich? The sandwich is perfect.",
    author: "🌌 Jonas, Dark (Netflix) Magazine" },
  { text: "We came from the future to save humanity… and then stayed for lunch.",
    author: "🕶️ Marcy, Travelers Journal" },
  { text: "Every chapter of history improved after introducing this sandwich. Even 18th century France.",
    author: "⏳ Lucy Preston, Timeless Review" },
  { text: "All of time and space… anywhere and everywhere. I choose the Brazilly Philly.",
    author: "🚀 The Doctor, Doctor Who Magazine" },
  { text: "Jamie can have the whiskey. I’ll take this sandwich. It transcends centuries.",
    author: "🏴‍☠️ Claire Fraser, Outlander Times" },
  { text: "Oh boy… this sandwich is leaps ahead of its time.",
    author: "🔮 Sam Beckett, Quantum Leap Weekly" },

  // OLD SCHOOL
  {
    character: "Frank the Tank (Old School) 🍺",
    quote: "Once it hits your lips… it’s sooo good! Brazilly Philly, baby! I’m back!"
  },
  {
    character: "Mitch (Old School) 😐",
    quote: "I wasn’t trying to start a new life... I was just trying to finish this sandwich."
  },
  {
    character: "Beanie (Old School) 😎",
    quote: "You're crazy for this one, Renato. But I respect it. Bring me three."
  },
  {
    character: "Blue (Old School) 👴",
    quote: "You're my boy, Brazilly Philly!"
  },

  // LEGO MOVIE / LEGO BATMAN
  {
    character: "Emmet (The LEGO Movie) 🧱😀",
    quote: "Everything is delicious! Especially Brazilly Philly!"
  },
  {
    character: "LEGO Batman 🦇🧱",
    quote: "I only eat darkness... and Brazilly Philly."
  },
  {
    character: "LEGO Batman (Alt) 🦇🧀",
    quote: "I'm not wearing hockey pads — but I am wearing sauce."
  },
  {
    character: "President Business 🧱👔",
    quote: "This sandwich is so good... it should be illegal in all 12 universes!"
  },

  // IP MAN
  {
    character: "Ip Man 🥋🇨🇳",
    quote: "I do not fight for pride. I fight for flavor. This sandwich... is balance."
  },
  {
    character: "Ip Man Opponent 😵🥊",
    quote: "What style is that? Grilled picanha with... provolone?!"
  },
  {
    character: "Master Hung 🍵",
    quote: "This is the taste of Wing Chun… crispy, elegant, unstoppable."
  },

  // SQUID GAME
  {
    character: "Front Man (Squid Game) 🟥😶",
    quote: "456 survived everything... but couldn’t resist Brazilly Philly."
  },
  {
    character: "Player 456 (Gi-hun) 🟢💰",
    quote: "I risked my life for a cash prize. But I’d trade it all for another bite of that sandwich."
  },
  {
    character: "Player 001 (Il-nam) 👴🧠",
    quote: "It tastes like childhood… and victory."
  },

  // THE FIFTH ELEMENT
  {
    character: "Leeloo 🔵💫",
    quote: "Moooolti... flavor!"
  },
  {
    character: "Leeloo (Alt) 🧡🔥",
    quote: "Brazilly Philly… SUPREME."
  },
  {
    character: "Korben Dallas 🔫🚖",
    quote: "Big bada sandwich."
  },
  {
    character: "Ruby Rhod 🎤💅",
    quote: "This thing is ZEEE-FLAVOORR! Green? Super green!"
  },

  // BRUCE LEE
  {
    character: "Bruce Lee 🐉🥋",
    quote: "Be formless, shapeless... like a sandwich. You put picanha in a roll, it becomes the roll. You put cheese on it, it becomes the cheese. Now taste... and become like Brazilly Philly, my friend."
  },

  // MUHAMMAD ALI
  {
    character: "Muhammad Ali 🥊🦋",
    quote: "I float like a butterfly, sting like a bee — But nothing hits like Brazilly Philly on me."
  },
  {
    character: "Muhammad Ali (Alt) 🎤🌍",
    quote: "I shook up the world! Then I took a bite... and the world shook back."
  },

  // MIKE TYSON
  {
    character: "Mike Tyson 🥊🐅",
    quote: "I’m not just knocking people out anymore… I’m knocking out this sandwich. It’s got bite."
  },
  {
    character: "Mike Tyson (Alt) 🧃👅",
    quote: "Custom sauce. Picanha. Provowone. Ith called the Baddest Sandwich on the Planet."
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
