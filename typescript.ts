//variable declaration

let a = "ashok";
let b = 45;
let c = true;

//shorthand version

let [x, y, z] = ["ashok", 45, false];

//condtions

let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Children");
}

//shorhand using ternary operator

let isAdult = age >= 18 ? "Adult" : "Children"; // Adult

// Assigning default value using OR(||)

let shortHandNewData = true || "He is Not Adult"; // true

let zero = 0 || "hey ashok"; //hey ashok

let emptyString = "" || "hey ashok"; //hey ashok

let isNull = null || "hey ashok"; //hey ashok

let isUndefined = undefined || "hey ashok"; //hey ashok

// And(&&) short circuit evaluation

//before

let getAndDate = (val) => {
  if (val == 1) {
    return true;
  } else {
    return false;
  }
};

let callNewFunctionBasedOnGetAndDataResult = () => {
  console.log("yep i am there");
};

if (getAndDate(1)) {
  callNewFunctionBasedOnGetAndDataResult();
}

//shorthand

getAndDate(1) && callNewFunctionBasedOnGetAndDataResult(); //if getAndData get true,then new function triggered
