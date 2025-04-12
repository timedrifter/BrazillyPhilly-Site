// vote_counter.js

const voteURL = 'vote_handler.php';

function castVote(choice) {
  if (sessionStorage.getItem('hasVoted')) {
    document.getElementById('vote-message').textContent = "You've already voted!";
    return;
  }

  fetch(voteURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ vote: choice })
  })
  .then(res => res.json())
  .then(data => {
    sessionStorage.setItem('hasVoted', 'true');
    document.getElementById('vote-message').textContent = "Thank you for voting!";
    showVotes(data);
  })
  .catch(err => {
    console.error('Vote failed:', err);
    document.getElementById('vote-message').textContent = "Vote failed. Try again!";
  });
}

function showVotes(votes = null) {
  const updateUI = (v) => {
    document.getElementById('vote-results').innerHTML = `
      <p>👍 Yes: ${v.yes}</p>
      <p>👎 No: ${v.no}</p>
    `;
  };

  if (votes) {
    updateUI(votes);
  } else {
    fetch(voteURL)
      .then(res => res.json())
      .then(data => updateUI(data));
  }
}

window.onload = showVotes;

