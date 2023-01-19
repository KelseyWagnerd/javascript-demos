// https://type.fit/api/quotes
// GET

const getInspirationalQuote = () => {
  fetch(`https://type.fit/api/quotes`)
    .then((data) => {
      data.json().then((data) => {
        const randomQuote = getRandomIndex(data);
        getById("dailyInspirationalQuote").innerText = randomQuote.text;
      });
    })
    .catch((err) => console.log(err));
};

getInspirationalQuote();

const setQuoteDate = () => {
  // get elements from html
  const dailyMemoDay = getById("dailyMemoDay");
  const dailyMemoDateNumber = getById("dailyMemoDateNumber");

  // get the date
  const date = new Date();
  // date to string
  const dateString = date.toDateString();
  // string to array
  const dateArray = dateString.split(" ");

  // Set innertext of weekday to index 0 and 1
  dailyMemoDay.innerText = `${dateArray[0]} ${dateArray[1]}`;
  // set innertext of datenumber to index 2
  dailyMemoDateNumber.innerText = `${dateArray[2]}`;
};

setQuoteDate();

/*

const data = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

*/
