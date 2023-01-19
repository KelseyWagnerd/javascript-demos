const resetScores = () => {
  const mgReset = document.getElementById("mgReset").checked;
  const tttReset = document.getElementById("tttReset").checked;
  const wamReset = document.getElementById("wamReset").checked;

  if (mgReset) {
    // reset memory game score
    localStorage.removeItem(mgStrings.mgHighScore);
  }
  if (tttReset) {
    // reset tictactoe score
    localStorage.removeItem(tttKey);
  }
  if (wamReset) {
    // reset whack-a-mole score
    localStorage.removeItem(wamKey);
  }
  window.location.reload();
};
