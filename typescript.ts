//variable declaration

let a = "ashok";
let b = 45;
let c = true;

console.log(a, b, c);

//shorthand version

let [x, y, z] = ["ashok", 45, false];

console.log(x, y, z);

//condtions

let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Children");
}

//shorhand using ternary operator

let isAdult = age >= 18 ? "Adult" : "Children";

console.log(isAdult);
