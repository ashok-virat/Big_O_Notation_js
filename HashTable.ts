class HashTable {
  list: any[];
  constructor() {
    this.list = [];
  }

  get(x) {
    let result;
    this.list.forEach((pair) => {
      if (pair[0] === x) {
        result = pair[1];
      }
    });
    return result;
  }

  set(x, y) {
    this.list.push([x, y]);
  }
}

var table = new HashTable();

console.time("with lots of records in the map");

table.set(1, 1);
table.set(2, 2);

console.timeEnd("with lots of records in the map");

table.get("i am not exsist");

for (var x = 0; x < 100000; x++) {
  table.set(x, x);
}

console.time("with lots of records in the map");

console.log(table.get(1));

console.timeEnd("with lots of records in the map");
