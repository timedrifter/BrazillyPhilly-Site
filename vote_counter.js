
// vote_counter.js

// Initialize vote counts if not already stored
if (!localStorage.getItem('votes')) {
  const initialVotes = { yes: 0, no: 0 };
  localStorage.setItem('votes', JSON.stringify(initialVotes));
}

// Cast vote function
function castVote(choice) {
  if (localStorage.getItem('hasVoted')) {
    document.getElementById('vote-message').textContent = "You've already voted!";
    return;
  }

  const votes = JSON.parse(localStorage.getItem('votes'));

  if (choice === 'yes') votes.yes++;
  if (choice === 'no') votes.no++;

  localStorage.setItem('votes', JSON.stringify(votes));
  localStorage.setItem('hasVoted', 'true');

  document.getElementById('vote-message').textContent = "Thank you for voting!";
  showVotes();
}

// Display current vote totals
function showVotes() {
  const votes = JSON.parse(localStorage.getItem('votes'));
  document.getElementById('vote-results').innerHTML = `
    <p>👍 Yes: ${votes.yes}</p>
    <p>👎 No: ${votes.no}</p>
  `;
}

// Run on page load
window.onload = showVotes;
