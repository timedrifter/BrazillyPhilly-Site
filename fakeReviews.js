
// Styling & logic for Brazilly Philly Fake Review Generator

const fullReviewList = [
  { text: "Listening to them convinced me to choose the red pill.", author: "Neo, Matrix Magazine" },
  { text: "See how far the rabbit hole goes.", author: "Morpheus, Matrix Magazine" },
  { text: "Vote for them and all your dreams will come true.", author: "Pedro, Napoleon Dynamite Magazine" },
  { text: "They wake up in the morning and piss excellence.", author: "Ricky Bobby, Talladega Magazine" },
  { text: "We'll have what they're having!", author: "Harry & Sally, Meet Movie Magazine" },
  { text: "I'm in a glass case of emotion!", author: "Ron Burgundy, Anchorman Magazine" },
  { text: "I recognize a one-man wolfpack when I see one.", author: "Alan, Hangover Magazine" },
  { text: "I've fallen and I can't get up.", author: "Some old broad, Old People Magazine" },
  { text: "It's breathtaking.", author: "Dr. Evil, Virtucon Magazine" },
  { text: "It makes me randy, baby.", author: "Austin Powers, Randy Magazine" },
  { text: "Say hello to my little friend.", author: "Tony Montana, Gangsta Magazine" },
  { text: "I only have a minute, but this sells itself.", author: "ShamWow Guy, Infomercial Network" },
  { text: "I'll be back.", author: "The Terminator, Time Travel Magazine" },
  { text: "It made my day.", author: "Clint Eastwood, Dirty Harry Magazine" },
  { text: "It was better than Cats.", author: "NYC Broadway Fans, NYC Magazine" },
  { text: "Mikey likes it.", author: "Mikey's Big Brother, Life Cereal Magazine" },
  { text: "We have a Hulk. But we also have picanha.", author: "Tony Stark, Stark Industries Catering Review" },
  { text: "I could do this all day… if the sandwich keeps coming.", author: "Captain America, Stars & Stripes Eats" },
  { text: "BURRAZZZZZILLYYYYY PHILLYYYYY!", author: "Thor, Sandwich Summoner" },
  { text: "This is the way... to flavor.", author: "The Mandalorian, Helmet-Off Cuisine" },
  { text: "Set phasers to DELICIOUS.", author: "Captain Kirk, Enterprise Eats" },
  { text: "Resistance is futile… especially when you're hungry.", author: "The Borg, Star Trek Digest" },
  { text: "Great Scott! This thing’s 1.21 gigaflavor!", author: "Doc Brown, Time Traveler’s Cookbook" },
  { text: "I'd trade my last Infinity Stone for one more bite.", author: "Thanos, Titan Eats Quarterly" },
  { text: "The Force is strong with this one… especially the sauce.", author: "Yoda, Tiny Food Critic Weekly" },
  { text: "You underestimate the power… of Brazilian steak.", author: "Darth Vader, Dark Side Deli Digest" },
  { text: "I came back from the future for this sandwich. Worth the flux capacitor.", author: "Marty McFly, Hover Review" },
  { text: "WUBBA LUBBA DELICIOUS!", author: "Rick Sanchez, Food Portal Weekly" },
  { text: "It’s so good, I stopped saying ‘D’oh!’", author: "Homer Simpson, Donut Digest" },
  { text: "My Krabby Patty’s jealous.", author: "SpongeBob SquarePants, Undersea Eats Monthly" },
  { text: "We want to pump... you up... with FLAVOR!", author: "Hans & Franz, SNL Protein Pack" },
  { text: "Well isn’t that special?", author: "Church Lady, Sinfully Good Sandwich Digest" },
  { text: "It’s party time. Excellent. Sandwich time. Double Excellent!", author: "Wayne & Garth, Wayne’s World Weekly" },
  { text: "We’re on a mission from God. For this sandwich.", author: "The Blues Brothers, Holy Bites Bulletin" },
  { text: "It’s so good… I Chappelle’d my pants.", author: "Dave Chappelle, Stand-Up Digest" },
  { text: "Tastes like freedom… and the tears of my haters.", author: "Eddie Murphy, Comedy King Quarterly" },
  { text: "This sandwich has more charisma than every Saved by the Bell character combined.", author: "Zack M., Time Out Champion" },
  { text: "I passed my GED right after eating it.", author: "Johnny 5, Robot Review Weekly" },
  { text: "This sandwich is SO hot right now.", author: "Mugatu, Zoolander Magazine" },
  { text: "This is the sandwich that will disrupt everything.", author: "Richard Hendricks, Silicon Valley Stack Report" },
  { text: "It’s giving... Michelin Star. But make it beef.", author: "Random Food Influencer, #sponsoredmaybe" },
  { text: "This sandwich slaps harder than my steak with a cast iron.", author: "Joshua Weissman, YouTube Kitchen Lab" },
  { text: "I tasted it, and then I said... BRUH. That’s flavor.", author: "Mr. Make It Happen, Self-Taught Gourmet Digest" },
  { text: "You want food with soul? THIS is what I’m talkin’ about!", author: "Smokin' & Grillin' with AB, Backyard Boss Magazine" },
  { text: "It's not just another cooking show. It's another universe of taste.", author: "Not Another Cooking Show, Grandma-Approved Gazette" },
  { text: "If this sandwich were a bassline, it'd groove nonstop.", author: "Davie504, Slap It Sandwich Weekly" },
  { text: "The balance is golden. So is the sandwich.", author: "The Golden Balance, Halal Flavor Journal" },
  { text: "I’d break bread with this flavor any day.", author: "Chef James Makinson, Culinary Chronicles" },
  { text: "You can taste the technique in every bite.", author: "Chef Billy Parisi, Knife Skills Monthly" },
  { text: "Yan can cook... but Brazilly Philly can SING!", author: "Chef Martin Yan, East Meets Feast Review" },
  { text: "Flavor so bold, it should be locked up.", author: "Michael Franzese, Made Man Menu Report" },
  { text: "If I don’t yell ‘LET'S GET IT’ after eating, something’s wrong.", author: "Guga Foods, Meat Science Monthly" },
  { text: "This food has... PASSION! EMOTION! DRAMA!", author: "Chef Jean-Pierre, French American Finesse" },
  { text: "Even Uncle Roger would not be mad. Maybe.", author: "Uncle Roger, Rice Not Included Weekly" },
  { text: "Flavor so loud it woke my ancestors.", author: "Cooking Con Claudia, Latino Food Legends" },
  { text: "This is the kind of thing that would make a grandma cry. In a good way.", author: "Emma’s Goodies, Dessert Divine Weekly" }
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
      font-family: 'Arial', sans-serif;
      box-shadow: 0 0 30px #3399ff80;
    ">
      <div style="font-size: 1.4rem; margin-bottom: 15px;">${next.text}</div>
      <div style="font-style: italic; font-size: 1rem;">— ${next.author}</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
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
