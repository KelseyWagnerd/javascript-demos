const colorPsychology = getById("colorPsychology");

const setColorToWord = () => {
  for (let text in colorMap) {
    const colorClass = colorMap[text];
    const div = document.createElement("div");
    div.classList.add("btn");
    div.classList.add(colorClass);
    div.innerText = text;
    colorPsychology.appendChild(div);
  }
};

setColorToWord();
