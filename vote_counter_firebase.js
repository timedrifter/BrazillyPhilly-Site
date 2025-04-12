// vote_counter_firebase.js

// Your config (from screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyAH_qKem_DB84oJvdJu0V9SUtt5mw4Gna8",
  authDomain: "brazillyphilly.firebaseapp.com",
  databaseURL: "https://brazillyphilly-default-rtdb.firebaseio.com",
  projectId: "brazillyphilly",
  storageBucket: "brazillyphilly.appspot.com",
  messagingSenderId: "159894651125",
  appId: "1:159894651125:web:ec9e3ac10246592b1585bc",
  measurementId: "G-3V1HGQ78YE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function castVote(choice) {
  if (sessionStorage.getItem('hasVoted')) {
    document.getElementById('vote-message').textContent = "You've already voted!";
    return;
  }

  const voteRef = db.ref(`votes/${choice}`);

  voteRef.transaction(current => (current || 0) + 1)
    .then(() => {
      sessionStorage.setItem('hasVoted', 'true');
      document.getElementById('vote-message').textContent = "Thank you for voting!";
      showVotes();
    })
    .catch(err => {
      console.error("Vote failed:", err);
      document.getElementById('vote-message').textContent = "Vote failed. Try again!";
    });
}

function showVotes() {
  db.ref('votes').once('value').then(snapshot => {
    const votes = snapshot.val() || { yes: 0, no: 0 };
    document.getElementById('vote-results').innerHTML = `
      <p>👍 Yes: ${votes.yes ?? 0}</p>
      <p>👎 No: ${votes.no ?? 0}</p>
    `;
  });
}

window.onload = showVotes;

