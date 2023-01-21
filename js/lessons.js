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


// Also good for arrays
const arr = ["Excited", "JavaScript", "Isaiah"];
// Old  array style takes up 3 lines
/* const mood = arr[0];
// const course = arr[1];
 const instructor = arr[2];
 
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
/*
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
*/
////////////////////////////////////////////////
////////// THE "SPREAD" OPERATOR //////////////

// Allows us to use objects/arrays inside different objects/arrays
/*
const obj = {
  name: "Kelsey Wagner",
  learning: "JavaScript",
};

const myArray = ["Kelsey Wagner", "JavaScript"];

// To use spread, type 3 dots and the name of the variable you wish to include in the new object.
let newObj = { ...obj };
console.log(newObj);

// You can also update some of the objects inside the spread
newObj = { ...obj, name: "Billiken Strumbo" };
console.log(newObj);

// Also works w arrays
const newArray = [...myArray, "HTML", "CSS"];
console.log(newArray);

// You can also append new objects to the beginning of the array
const reorderedArray = ["CSS", "HTML", ...myArray];
console.log(reorderedArray);

// Adding more properties to an object:
newObj = { ...obj, name: "Dronny Drisco", alsoLearning: "HTML" };
console.log(newObj);

// Spread allows us to create a new "instance" of an object without copying the reference to the object (so you can make changes without changing the original!)

// Dot notation changes both the new obj and the original
const a = obj;
a.name = "Siren Allertor";
// The name is changed to Siren in a
console.log(a);
// The name is also permanately changed in obj!
console.log(obj);
// This makes your code unpredictable and leads to bugs!! D:

// Spread just changes the new obj
const b = { ...obj };
b.name = "Francesca Frumplebottom";
// b logs the name as Franny
console.log(b);
// Obj will still log Siren from the last update
console.log(obj);
*/
