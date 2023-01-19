const getQuote = () => {
  const { author, quote } = getRandomIndex(quotes);
  getById("quoteText").innerText = quote;
  getById("gagaQuoteAuthor").innerText = author;
};
getQuote();
