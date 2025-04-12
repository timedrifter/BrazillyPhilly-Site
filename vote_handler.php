<?php
// vote_handler.php

$filename = 'votes.json';

// Create file if it doesn't exist
if (!file_exists($filename)) {
  file_put_contents($filename, json_encode(["yes" => 0, "no" => 0]));
}

// Read existing vote counts
$votes = json_decode(file_get_contents($filename), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $input = json_decode(file_get_contents('php://input'), true);

  if (isset($input['vote'])) {
    $choice = $input['vote'];

    if ($choice === 'yes' || $choice === 'no') {
      $votes[$choice]++;
      file_put_contents($filename, json_encode($votes));
    }
  }
}

// Always return current votes
header('Content-Type: application/json');
echo json_encode($votes);

