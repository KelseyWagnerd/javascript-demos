const jokeURL = `https://icanhazdadjoke.com/`;

const getNewJoke = () => {
  fetch(jokeURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      getById("jokeText").innerText = data.joke;
    })
    .catch((err) => console.log(err));
};

getNewJoke();
