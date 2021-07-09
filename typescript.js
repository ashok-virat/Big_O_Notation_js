//variable declaration
var a = "ashok";
var b = 45;
var c = true;
//shorthand version
var _a = ["ashok", 45, false], x = _a[0], y = _a[1], z = _a[2];
//condtions
var age = 18;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Children");
}
//shorhand using ternary operator
var isAdult = age >= 18 ? "Adult" : "Children"; // Adult
// Assigning default value using OR(||)
var shortHandNewData = true || "He is Not Adult"; // true
var zero = 0 || "hey ashok"; //hey ashok
var emptyString = "" || "hey ashok"; //hey ashok
var isNull = null || "hey ashok"; //hey ashok
var isUndefined = undefined || "hey ashok"; //hey ashok
// And(&&) short circuit evaluation
//before
var getAndDate = function (val) {
    if (val == 1) {
        return true;
    }
    else {
        return false;
    }
};
var callNewFunctionBasedOnGetAndDataResult = function () {
    console.log("yep i am there");
};
//shorthand
getAndDate(1) && callNewFunctionBasedOnGetAndDataResult();
