/*This is where we store any variables or functions we might want to use in multiple projects*/
/*Because it's the first script listed in the HTML, it will be accessible by all the other scripts below it. */
/* Refactoring: Re-doing your code to make it more efficient and general and less repetitive */
// D.R.Y. code = DONT REPEAT YASELF //

const offscreen = "offscreen";

const toggleAttribute = (ele, attr, value = "") => {
  const hasAttr = ele.hasAttribute(attr);
  if (hasAttr) {
    // remove attribute
    ele.removeAttribute(attr);
  } else {
    // add attribute
    // set attributes must have name and value, this time set value to null
    ele.setAttribute(attr, value);
  }
};

const getById = (id) => {
  const ele = document.getElementById(id);
  return ele;
};

const getRandomCharacter = (string) => {
  const index = Math.floor(Math.random() * string.length);
  return string[index];
};

const getRandomIndex = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const setAttr = (ele, attr, value = "") => {
  ele.setAttribute(attr, value);
};

const removeAttr = (ele, attr) => {
  ele.removeAttribute(attr);
};

const addClass = (ele, className) => {
  ele.classList.add(className);
};

const removeClass = (ele, className) => {
  ele.classList.remove(className);
};
