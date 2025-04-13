<script>
  // Firebase configuration (insert YOUR config below)
  const firebaseConfig = {
    apiKey: "AIzaSyAH_qKem_DB84oVdJwOu9SVUtt5mw4Gna8",
    authDomain: "brazillyphilly.firebaseapp.com",
    databaseURL: "https://brazillyphilly-default-rtdb.firebaseio.com",
    projectId: "brazillyphilly",
    storageBucket: "brazillyphilly.appspot.com",
    messagingSenderId: "159894651125",
    appId: "1:159894651125:web:ec9e3ac10246592b1585bc"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const voteRef = db.ref("votes");

  // Display vote totals on page load
  voteRef.on("value", (snapshot) => {
    const data = snapshot.val() || { yes: 0, no: 0 };
    document.getElementById("vote-results").innerHTML = `
      <p>👍 Yes: ${data.yes || 0}</p>
      <p>👎 No: ${data.no || 0}</p>
    `;
  });

  // Cast vote with error handling
  function castVote(choice) {
    if (localStorage.getItem("hasVoted")) {
      document.getElementById("vote-message").textContent = "You've already voted!";
      return;
    }

    const countRef = db.ref("votes/" + choice);
    countRef.transaction((current) => {
      return (current || 0) + 1;
    }, (error, committed, snapshot) => {
      if (error) {
        console.error("Transaction failed: ", error);
        document.getElementById("vote-message").textContent = "Vote failed. Please try again.";
      } else if (!committed) {
        console.log("Transaction not committed.");
        document.getElementById("vote-message").textContent = "Vote not committed.";
      } else {
        localStorage.setItem("hasVoted", "true");
        document.getElementById("vote-message").textContent = "Thank you for voting!";
      }
    });
  }
</script>
