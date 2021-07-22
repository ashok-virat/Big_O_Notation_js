//elements available check

const arr = new Array();

for (i = 0; i <= 10000000; i++) {
  arr.push(`element${i}`);
}

const getValUsingForLoop = (val) => {
  var i = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
};

const getValUsingWhileLoop = (val) => {
  var i = 0;
  while (i <= arr.length) {
    if (arr[i] === val) {
      return true;
    }
    i++;
  }

  return false;
};

const getValUsingFind = (val) => {
  //find return to the value
  if (arr.find((x) => x === val)) {
    return true;
  } else {
    return false;
  }
};

const getValUsingSome = (val) => {
  //some return to the boolean value
  return arr.some((x) => x === val);
};

console.time("isElementAvailableUsingForLoop");
console.log(getValUsingForLoop("element10000000")); // almost simler to the while loop 55.664ms
console.timeEnd("isElementAvailableUsingForLoop");

console.time("isElementAvailableUsingWhileLoop");
console.log(getValUsingWhileLoop("element10000000")); // 53.227mms
console.timeEnd("isElementAvailableUsingWhileLoop");

console.time("isElementAvailableUsingFind");
console.log(getValUsingFind("element10000000")); //192.485ms
console.timeEnd("isElementAvailableUsingFind");

console.time("isElementAvailableUsingSome");
console.log(getValUsingSome("element10000000")); //almost simler to the find 180.720ms
console.timeEnd("isElementAvailableUsingSome");

//elements value change
const arr1 = [];
for (i = 0; i <= 10000000; i++) {
  arr1.push(i);
}

const multiplyValueUsingForLoop = (val) => {
  for (i = 0; i <= arr1.length; i++) {
    if (arr1[i]) {
      arr1[i] = arr1[i] * val;
    }
  }
  return arr1;
};

const multiplyValueUsingMap = (val) => {
  return arr1.map((x) => x * val);
};

const multiplyValueUsingForEach = (val) => {
  arr1.forEach((x, y) => {
    arr1[y] = x * 2;
  });
  return arr1;
};

console.time("multiplyValueUsingForLoop");
console.log(multiplyValueUsingForLoop(2)); //116ms
console.timeEnd("multiplyValueUsingForLoop");

console.time("multiplyValueUsingMap");
console.log(multiplyValueUsingMap(2)); //275.77ms
console.timeEnd("multiplyValueUsingMap");

console.time("multiplyValueUsingForEach");
console.log(multiplyValueUsingForEach(2)); // 289.160ms
console.timeEnd("multiplyValueUsingForEach");
