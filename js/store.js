// Get ready to learn about API calls!!!
// CRUD store: Create, Read, Update, Delete!
// Access the apiKey and make it into a variable we can use

let apiKey;

// Time for a Get request.
// Crudcrud chart says GET is /<resource>/<id>
// the resource is store, the id depends on the object

// We defaulted the id to an empty string because there is sometimes an id but not always
const getUrl = (id = "") => {
  return `https://crudcrud.com/api/${apiKey}/store/${id}`;
};

const populateShelf = (items) => {
  console.log("populating shelf...");
};

const hideElementById = (id) => {
  // add class displayNone
  getById(id).classList.add("displayNone");
};

const showElementById = (id) => {
  // remove class displayNone
  getById(id).classList.remove("displayNone");
};

const setHelpText = (text) => {
  getById("productHelpText").innerText = text;
};

const showPriceContainer = (item) => {
  hideElementById("itemSelection");
  setHelpText("Set Product Price");
  showElementById("setPriceContainer");
  console.log(``);
  getById(
    "selectedProduct"
  ).style.backgroundImage = `url(./assets/${item}.png)`;
};

const choiceProduct = (item) => {
  // onclick an item...
  // If numproductsonshelf is 4, show "Shelf is full"
  if (numProductsOnShelf === 4) {
    return setHelpText("Shelf is Full");
  }
  // Else show the item's Set Price screen
  showPriceContainer(item);

  // Set background image of selectedProduct to item you clicked
};

const fetchItems = () => {
  // get the url
  fetch(getUrl())
    // pass in data
    .then((data) => {
      data
        .json()
        .then((items) => {
          // check length of items array
          numProductsOnShelf = items.length;
          populateShelf(items);
          // createItemBtn: display none
          hideElementById("createItemBtn");
          // show itemSelection
          showElementById("itemSelection");
          // productHelpText
          setHelpText("Select a Product");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const createStoreItem = () => {
  apiKey = document.getElementById("crudKey").value;
  // If the length is not 0, run fetchitems
  if (apiKey.length) {
    fetchItems();
  }
};
