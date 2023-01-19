// SETTING MULTIPLE VARIABLES IN AN OBJECT //
// Destructuring: a brief way to set several variables

/*
const obj = {
  mood: "Excited",
  course: "JavaScript",
  instructor: "Isaiah",
};

/* We can assign the vars like this: 
 const mood = obj.mood;
 const course = obj.course;
 const instructor = obj.instructor; 

 Or another way to write this w destructuring
/* const { key1, key2, ... keyn} = object

const { mood, course, instructor } = obj;
console.log(mood, course, instructor); 
*/

// Also good for arrays
const arr = ["Excited", "JavaScript", "Isaiah"];
// Old  array style takes up 3 lines
/* const mood = arr[0];
// const course = arr[1];
 const instructor = arr[2];
 */
// Use destructuring for 1 line
// Note: name doesn't matter, just order.
const [mood, course, instructor] = arr;
console.log(mood, course, instructor);
// Remember: Curly brackets for objects, square brackets for arrays

/////////////////////////////////////////////////
// IF-ELSE STATEMENTS //

// If-else statements are usually long

/*
let mySnack = "";
const has1dollar = false;
if (has1dollar) {
  mySnack = "Cheetohs";
} else {
  mySnack = "leftovers";
}
console.log(mySnack);
*/

// Ternary Operators are efficient ways to write if-else statements

const has1dollar = true;
// Has1dollar will set to Cheetohs if true and Leftovers if false.
// const ifelsename = condition ? valueIfTrue : valueIfFalse;
const mySnack = has1dollar ? "Cheetohs" : "leftovers";

console.log(mySnack);

// You can skip the curly brackets if there is only 1 line of code inside them

const hasMoney = false;
if (hasMoney) console.log("new shoes new shooooooz");
else console.log("no new shooz :( ");

///////////////////////////////////////////////
// STRING BACKTICKS //
// Instead of single or double quotes, you can also put backticks around a string.

const myName = `Kelsey`;

// Backticks allow you to include multiple lines and blank space in your string, unlike quotes.

const multiLineString = `This
  string
      takes
          up
            multiple


                                              LINES!!!`;
console.log(multiLineString);

// You can even use variables inside backtick strings with ${}
const varString = `My name is... ${myName}`;
console.log(varString);

// You can put all sorts of Javascript inside the curly brackets, such as math.
const mathString = `The solution of 23 * 4 / 2 is... ${(23 * 4) / 2}`;
console.log(mathString);
