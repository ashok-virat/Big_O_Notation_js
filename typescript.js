//variable declaration
var a = "ashok";
var b = 45;
var c = true;
console.log(a, b, c);
//shorthand version
var _a = ["ashok", 45, false], x = _a[0], y = _a[1], z = _a[2];
console.log(x, y, z);
//condtions
var age = 18;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Children");
}
//shorhand using ternary operator
var isAdult = age >= 18 ? "Adult" : "Children";
console.log(isAdult);
