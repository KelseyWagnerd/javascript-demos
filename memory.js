const mg_nodisplay = "nodisplay";
const mgStrings = {
  mgDirections: "mgDirections",
  mgHomeScreen: "mgHomeScreen",
  mgBoard: "mgBoard",
  memoryHighlight: "memoryHighlight",
  cpuClick: "cpuClick",
  mgHighScore: "mgHighScore",
};

const mgCPUOptions = [
  "mgTopLeft",
  "mgTopRight",
  "mgBottomLeft",
  "mgBottomRight",
];

let clickIndex = 0;

let cpuMoves = [];

let isCPUMove = true;

const setHighScore = (score) => {
  const highScore = localStorage.getItem(mgStrings.mgHighScore);
  if (score) {
    localStorage.setItem(mgStrings.mgHighScore, score);
  } else if (!highScore) {
    localStorage.setItem(mgStrings.mgHighScore, 0);
  }
  getById(mgStrings.mgHighScore).innerText = localStorage.getItem(
    mgStrings.mgHighScore
  );
};

setHighScore();

const showMGDirections = () => {
  removeAttr(getById(mgStrings.mgDirections), mg_nodisplay);
  setAttr(getById(mgStrings.mgHomeScreen), mg_nodisplay);
};

const highlightCPUMove = (move) => {
  addClass(getById(move), mgStrings.cpuClick);
  setTimeout(() => {
    removeClass(getById(move), mgStrings.cpuClick);
  }, 750);
};

const cpuMove = () => {
  isCPUMove = true;
  const move = getRandomIndex(mgCPUOptions);
  cpuMoves.push(move);
  let delay = 0;
  cpuMoves.forEach((box) => {
    setTimeout(() => {
      highlightCPUMove(box);
    }, delay);
    delay += 1000;
  });
  setTimeout(() => {
    isCPUMove = false;
  }, delay - 1000);
};

const memoryGameStart = () => {
  setAttr(mgDirections, mg_nodisplay);
  removeAttr(getById(mgStrings.mgBoard), mg_nodisplay);
  setTimeout(() => {
    cpuMove();
  }, 1000);
};

const addHighlight = (id) => {
  addClass(getById(id), mgStrings.memoryHighlight);
};

const removeHighlight = (id) => {
  removeClass(getById(id), mgStrings.memoryHighlight);
};

const gameOver = () => {
  removeAttr(getById(mgStrings.mgHomeScreen), mg_nodisplay);
  setAttr(getById(mgStrings.mgBoard), mg_nodisplay);
  clickIndex = 0;
  cpuMoves = [];
  isCPUMove = true;
  getById("mgCount").innerText = 0;
};

const incrementScore = () => {
  const mgCount = getById("mgCount");
  const currentScore = parseInt(mgCount.innerText);
  mgCount.innerText = currentScore + 1;
  const highScore = localStorage.getItem(mgStrings.mgHighScore);
  if (highScore < currentScore + 1) {
    setHighScore(currentScore + 1);
  }
};

const makeMemoryGuess = (id) => {
  if (isCPUMove) return;

  if (id === cpuMoves[clickIndex]) {
    clickIndex++;
    if (clickIndex === cpuMoves.length) {
      clickIndex = 0;
      setTimeout(() => {
        cpuMove();
      }, 1000);
      incrementScore();
    }
  } else {
    gameOver();
  }
};
